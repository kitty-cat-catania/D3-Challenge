// @TODO: YOUR CODE HERE!
d3.csv("./assets/data/data.csv").then(function(data) {
    console.log(data);

    
    var svgWidth = 1000;
    var svgHeight = 600;

    var margin = {
        top: 20,
        right: 40,
        bottom: 80,
        left: 70
    };

    var width = svgWidth-margin.left -margin.right;
    var height = svgHeight - margin.top - margin.bottom;
    console.log(width);
    var svg = d3
        .select("#scatter")
        .append("svg");
    svg.attr("width", svgWidth)
        .attr("height", svgHeight);

    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    //parse data/cast as numbers
    data.forEach(function(thing) {
        thing.obesity = parseFloat(thing.obesity);
        thing.poverty = parseFloat(thing.poverty);
    });
    console.log(data.poverty);
    var xLinearScale = d3.scaleLinear()
        .domain([7, d3.max(data, d => d.poverty)])
        .range([0,width]);
    console.log(d3.max(data, d => d.poverty));
    var yLinearScale = d3.scaleLinear()
        .domain([14, d3.max(data, d => d.obesity)])
        .range([height, 0]);

    //create axis funcitons
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    //add x-axis 
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);


    var circlesGroup = chartGroup.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d =>yLinearScale(d.obesity))
        .attr("r", "15")
        .attr("fill", "purple")
        .attr("opacity", "0.3");


    //add axis labels
    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "black")
        .text("In Poverty (%)");

    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0-margin.left + 40)
        .attr("x", 0 - (height / 2))
        //.attr("dy", "1em")
        .attr("font-size", "16px")
        .text("Obese (%)");

});