// @TODO: YOUR CODE HERE!
d3.csv("./assets/data/data.csv").then(function(data) {
    console.log(data);

    
    var svgWidth = 1000;
    var svgHeight = 600;

    var margin = {
        top: 20,
        right: 40,
        bottom: 80,
        left:10
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
        .domain([0, d3.max(data, d => d.poverty)])
        .range([0,width]);
    console.log(d3.max(data, d => d.poverty));
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.obesity)])
        .range([height, 0]);

    //create axis funcitons
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    //add x-axis 
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);
    /*
    var circle = svg.append("circle")
        .attr("cx", 100)
        .attr("cy", 50)
        .attr("r", 30)
        .attr("stroke", "black")
        .attr("stroke-width", "5")
        .attr("fill", "pink");
    */

    /*
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

    /*
    var svg = d3.select("#scatter").append("svg");
    svg.attr("width", "300px").attr("height", "300px");
    
    
    var circle = svg.append("circle")
        .attr("cx", 100)
        .attr("cy", 50)
        .attr("r", 30)
        .attr("stroke", "black")
        .attr("stroke-width", "5")
        .attr("fill", "pink");
    circle.append("text")
        .attr("x", 100)
        .attr("y", 50)
        .attr("stroke", "black")
        .attr("font-size", "5px")
        .attr("font-family", "sans")
        .text("b");
    */
    var povertyMeasures = data.map(d => d.poverty);
    console.log(povertyMeasures);
    var obesityMeasures = data.map(d => d.obesity);
    console.log(obesityMeasures);

    var circles = svg.selectAll("circle");

    circles.data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d){
            return
        })


});