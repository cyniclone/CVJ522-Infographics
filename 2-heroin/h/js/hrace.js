// Set up margins
var margin = {top: 20, right: 200, bottom: 30, left: 40},
    width = 800 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// Set up axes and color scale
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(4)
    .tickFormat(d3.format(".2s"));

// Initialize tooltip
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>" + d.name 
    + ":  </strong><span style='color:orange'> " 
    + d.value + "%</span>";
  });


// Build container from div
var svg = d3.select("#hrace").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Call tooltip
svg.call(tip);

d3.csv("data/hrace.csv", function(error, data) {
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Year"; }));

  data.forEach(function(d) {
    var y0 = 0;
    d.races = color.domain().map(function(name) { 
    	return {
    		name: name, 
    		y0: y0,
    		y1: y0 += +d[name],
    		value: d[name]
    	}; 
    });
    d.total = d.races[d.races.length - 1].y1;
  });

  x.domain(data.map(function(d) { return d.Year; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percent Distribution");

  var year = svg.selectAll(".year")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x(d.Year) + ",0)"; });

  year.selectAll("rect")
      .data(function(d) { return d.races; })
    .enter().append("rect")
      .attr("class", function(d) { return d.name; })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) { return color(d.name); })
	  //Tooltip 
	  .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  /* For comparison bar
	1. Make a <g>, append it to svg and move it to the right
	2. Make a <rects> for data and append them to the <g>
	3. Add mouseovers and colors to rects

	var compData = {
    		name: name, 

    		y1: y0 += +d[name],
    		value: d[name]
    	}; 

	var comp = svg.select(".comp")
		.data my data
	  .enter().append("g")
	    .attr("class", "g")
	    .attr("transform" translate right)

	comp.selectAll("rect")
		.data ( my data)
	  .enter().append("rect")
	    .attr("class" class name)
	    .attr("width", x.rangeBand())
	    .attr("y" )
	    .attr("height", )
	    .style("fill", color thing)



  */

  // Legend
  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(80," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", function(d, i) { return d; })
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });


  // Mouseover listeners
  legend.on("mouseover", function(d) {
  	d3.selectAll("." + d)
  		.transition()
  		.style("fill", "#FF9933");
  });

  legend.on("mouseout", function(d) {
  	d3.selectAll("." + d)
  		.transition()
  		.style("fill", color(d));
  });
});