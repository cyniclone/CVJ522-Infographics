// Set up axes and color scale
var ux = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);

var uy = d3.scale.linear()
    .rangeRound([height, 0]);

var ucolor = d3.scale.ordinal()
    .range(['#144134', '#4B6A52']);

var uxAxis = d3.svg.axis()
    .scale(ux)
    .orient("bottom");

var uyAxis = d3.svg.axis()
    .scale(uy)
    .orient("left")
    .ticks(4)
    .tickFormat(d3.format(".2s"));

// Initialize tooltip
var utip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
  	return "<strong>" + d.name + " users: </strong>" + 
    "<span style='color:#434348'>"
  	+ d.value + " </span>"
  	


    // return "<strong>" + d.name 
    // + ":  </strong><span style='color:orange'> " 
    // + d.value + "%</span>";
  });

// Build container from div
var usvg = d3.select("#huser").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Call tooltip
usvg.call(utip);

// Main function
d3.csv("data/huser.csv", function(error, data) {
  ucolor.domain(d3.keys(data[0]).filter(function(key) { return key !== "Year"; }));

  data.forEach(function(d) {
    var y0 = 0;
    d.cat = ucolor.domain().map(function(name) { 
    	return {
    		name: name, 
    		y0: y0,
    		y1: y0 += +d[name],
    		value: d[name]
    	}; 
    });
    d.total = d.cat[d.cat.length - 1].y1;
  });

  ux.domain(data.map(function(d) { return d.Year; }));
  uy.domain([0, d3.max(data, function(d) { return d.total; })]);

  usvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(uxAxis);

  usvg.append("g")
      .attr("class", "y axis")
      .call(uyAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em");
      // .style("text-anchor", "end")
      // .text("Number of Users");

  var uyear = usvg.selectAll(".year")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + ux(d.Year) + ",0)"; });

  uyear.selectAll("rect")
      .data(function(d) { return d.cat; })
    .enter().append("rect")
      .attr("class", function(d) { return d.name; })
      .attr("width", ux.rangeBand())
      .attr("y", function(d) { return uy(d.y1); })
      .attr("height", function(d) { return uy(d.y0) - uy(d.y1); })
      .style("fill", function(d) { return ucolor(d.name); })
	  //Tooltip 
	  .on('mouseover', utip.show)
      .on('mouseout', utip.hide);

  // Legend
  var ulegend = usvg.selectAll(".legend")
      .data(ucolor.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(80," + i * 20 + ")"; });

  ulegend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", function(d, i) { return d; })
      .style("fill", ucolor);

  ulegend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });


  // Mouseover listeners
  ulegend.on("mouseover", function(d) {
  	d3.selectAll("." + d)
  		.transition()
  		.style("fill", "#FF9933");
  });

  ulegend.on("mouseout", function(d) {
  	d3.selectAll("." + d)
  		.transition()
  		.style("fill", ucolor(d));
  });
});