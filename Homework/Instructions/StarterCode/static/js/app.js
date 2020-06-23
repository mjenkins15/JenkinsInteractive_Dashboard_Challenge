 // Fetch the JSON data and console log it.
// Must create a server in Bash and use Incognito Window
// in browser or Shft + Ctrl + R to refresh browser and ignore cache. 

//d3.json("../samples.json").then((incomingData) => {
    //    function otuPlot(id) {
        //console.log(incomingData)
        //function otuPlot(id) {
       //}
    
    // Use filter() to pass the function as its argument
    //var samples = incomingData.samples;
    //console.log(samples);

    //Filter through the samples
    
    //var otuSamples = samples.filter(otuPlot);

    //Filters through the samples
    
    // Use the map method with the arrow function to return all the filtered OTU's
    //var  = otuSamples.map(samples => samples.name);
    
    // Use the map method with the arrow function to return all the filtered OTU metascores.
   // var otu_ids = otuSamples.map(samples => samples.metascore);
    
    // Check your filtered metascores
   //console.log(otuSamples);

   // Create a function
   function buildCharts(sampleid) {
    // Fetch the JSON data and console log it.
    // Must create a server in Bash and use Incognito Window
    // in browser or Shft + Ctrl + R to refresh browser and ignore cache. 
    d3.json("samples.json").then((incomingData) => {
        //    function otuPlot(id) {
        console.log(incomingData);
        // Use filter() to pass the function as its argument
        var samples = incomingData.samples;
        console.log(samples);
        //Filters through samples 
        var otuSamples = samples.filter(sample => sample.id==sampleid);
        console.log(otuSamples);
        // Use the map method with the arrow function to return all the filtered OTU's
        var sample_values = otuSamples.map(samples => samples.name);
        // Use the map method with the arrow function to return all the filtered OTU metascores.
        var otu_ids = otuSamples.map(samples => samples.metascore);
        // Check your filtered metascores
        console.log(otuSamples);
        //Create a trace
        var trace1 = {
            x: sample_values,
            y: otu_ids,
            //text: otu_labels,
            type: "bar"
        };
        //Create the data array for the plot
        var data = [trace1];
        //Define the plot layout
        var layout = {
            title: "Top 10  Operational Taxonomic Units (OTUs)",
          //barmode: "group",
            xaxis: { title: "Title" },
            yaxis: { title: "Metascore OTU's"
         }
        };
        //Plot the chart to a div tag with id "bar"
        Plotly.newPlot("bar", data, layout);
    });
}
function buildMetadata(sampleid) {
    console.log(sampleid)
}
function init() {
    var selector = d3.select("#selDataset");
    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        })
    var firstSample= sampleNames[0];
    buildCharts(firstSample)
    buildMetadata(firstSample)
    })
}
function optionChanged(sampleid) {
    buildCharts(sampleid)
    buildMetadata(sampleid)
}
init()








    //Create a trace
    //var trace1 = {
    //    x: sample_values,
    //    y: otu_ids,
        //text: otu_labels,
    //    type:"bar"
    //};
    
    //Create the data array for the plot
    //var data= [trace1];
    
    //Define the plot layout
    //var layout = { 
    //   title:"Top 10  Operational Taxonomic Units (OTUs)",
    //  xaxis: { title: "Title"},
    //    yaxis: { title: "Metascore OTU's"}
    //};
    //Plot the chart to a div tag with id "bar-plot"
    //Plotly.newPlot("bar", data, layout);
    
    
    
    //Promise Pending
    //const dataPromise = d3.json("../../samples.json");
    //    console.log("Data Promise:", dataPromise);
    
    //(Day 2 Activity 3)
    //function unpack(rows, index) {
    //    return rows.map(function(row) {
    //      return row[index];
    //    });
    //  }
    
    
    // Fetch data to build the plots
    //function buildPlot() {
    //    d3.json("../../samples.json").then(samples=>{ 
    //        console.log(samples);
    //        const 
    
    
        // Get values from JSON response object to build the plots
        // Use 'sample_values' as the values for the bar chart
        //var sample_values = data.samples.filter(getPlot);
            //console.log(getPlot);
        // Use 'otu_ids' as the labels for the bar chart
        //var otu_ids = data.samples.otu_ids; 
        //Use 'otu_labels' as the hovertext for the chart
        //var otu_labels = data.samples.otu_labels;
    
        //Create a trace
        //var trace1 = {
            //x: sample_values,
            //y: otu_ids,
           // text: otu_labels,
            //type:"bar"
        //};
    
        //var data= [trace1];
        //var layout = { 
            //title:"Top 10  Operational Taxonomic Units (OTUs)"
        //}
        //Plotly.newPlot("bar", data, layout);
    //});



//Promise Pending
//const dataPromise = d3.json("../../samples.json");
//    console.log("Data Promise:", dataPromise);

//(Day 2 Activity 3)
//function unpack(rows, index) {
//    return rows.map(function(row) {
//      return row[index];
//    });
//  }


// Fetch data to build the plots
//function buildPlot() {
//    d3.json("../../samples.json").then(samples=>{ 
//        console.log(samples);
//        const 


    // Get values from JSON response object to build the plots
    // Use 'sample_values' as the values for the bar chart
    //var sample_values = data.samples.filter(getPlot);
        //console.log(getPlot);
    // Use 'otu_ids' as the labels for the bar chart
    //var otu_ids = data.samples.otu_ids; 
    //Use 'otu_labels' as the hovertext for the chart
    //var otu_labels = data.samples.otu_labels;

    //Create a trace
    //var trace1 = {
        //x: sample_values,
        //y: otu_ids,
       // text: otu_labels,
        //type:"bar"
    //};

    //var data= [trace1];
    //var layout = { 
        //title:"Top 10  Operational Taxonomic Units (OTUs)"
    //}
    //Plotly.newPlot("bar", data, layout);
