//Set up Axes
var x2 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2);

var y2 = d3.scale.linear()
    .rangeRound([height, 0]);

var color2 = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888"]);

var xAxis2 = d3.svg.axis()
    .scale(x2)
    .orient("bottom");

var yAxis2 = d3.svg.axis()
    .scale(y2)
    .orient("left")
    .ticks(4)
    .tickFormat(d3.format(".2s"));

// Initialize tooltip
var tip2 = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Age " + d.name 
    + ":  </strong><span style='color:orange'> " 
    + d.value + "%</span>";
  });

// Build container from div
var svg2 = d3.select("#hage").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Call tooltip
svg2.call(tip2);

d3.csv("data/hage.csv", function(error, data) {
  color2.domain(d3.keys(data[0]).filter(function(key) { return key !== "Year"; }));

  data.forEach(function(d) {
    var y0 = 0;
    d.ages = color2.domain().map(function(name) { 
      return {
        name: name, 
        y0: y0, 
        y1: y0 += +d[name],
        value: d[name]
      }; 
    });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  x2.domain(data.map(function(d) { return d.Year; }));
  y2.domain([0, d3.max(data, function(d) { return d.total; })]);

  svg2.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis2);

  svg2.append("g")
      .attr("class", "y axis")
      .call(yAxis2)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percent Distribution");

  var year2 = svg2.selectAll(".year")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x2(d.Year) + ",0)"; });

  year2.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("class", function(d, i) { return "age-" + (2-i); })
      .attr("width", x2.rangeBand())
      .attr("y", function(d) { return y2(d.y1); })
      .attr("height", function(d) { return y2(d.y0) - y2(d.y1); })
      .style("fill", function(d) { return color2(d.name); })
      //Tooltip 
      .on('mouseover', tip2.show)
      .on('mouseout', tip2.hide);

  // Legend
  var legend2 = svg2.selectAll(".legend")
      .data(color2.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(80," + i * 20 + ")"; });

  legend2.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", function(d, i) { return "age-" + i; })
      .style("fill", color2);

  legend2.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

  // Mouseover listeners
  legend2.on("mouseover", function(d, i) {
    d3.selectAll(".age-" + i)
      .transition()
      .style("fill", "#FF9933");
  });

  legend2.on("mouseout", function(d, i) {
    d3.selectAll(".age-" + i)
      .transition()
      .style("fill", color2(d));
  });

});
