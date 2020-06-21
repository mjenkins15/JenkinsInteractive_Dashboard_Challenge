// Fetch the JSON data and console log it.
// Must create a server in Bash and use Incognito Window
// in browser or Shft + Ctrl + R to refresh browser and ignore cache. 
//( Day 2 Activity 3) 

d3.json("samples.json").then(data=> {
    console.log(data)


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
    var sample_values = data.samples.sample_values;
    // Use 'otu_ids' as the labels for the bar chart
    var otu_ids = data.samples.otu_ids; 
    //Use 'otu_labels' as the hovertext for the chart
    var otu_labels = data.samples.otu_labels;

    //Create a trace
    var trace1 = {
        x: sample_values,
        y: otu_ids,
        type:'bar'
    };

    var data= [trace1];
    var layout = { 
        title:"Operational Taxonomic Units (OTUs)"
    }
    Plotly.newPlot("bar", data, layout);
});