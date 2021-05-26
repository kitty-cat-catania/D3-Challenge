// @TODO: YOUR CODE HERE!
d3.csv("./assets/data/data.csv").then(function(data) {
    console.log(data);

    /*define svg area dimensions
    var svgWidth = 1000;
    var svgHeight = 600;

    var margin = {
        top: 20,
        right: 40,
        bottom: 80,
        left:50
    };

    var width = svgWidth-margin.left -margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3
        .select("scatter")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);


    //append svg group
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var chosenXAxis = "poverty";

    var xLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.poverty)])
        .range([0,width]);
    
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.obesity)])
        .range([0, height]);

    //create axis funcitons
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    //add x-axis 
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    */

    //try appending an svg 
    var svg = d3.select("#scatter").append("svg");
    svg.attr("width", "50px").attr("height", "50px");
    
    
    svg.append("circle")
        .attr("cx", 10)
        .attr("cy", 25)
        .attr("r", 3)
        .attr("stroke", "black")
        .attr("stroke-width", "5")
        .attr("fill", "purple");



});