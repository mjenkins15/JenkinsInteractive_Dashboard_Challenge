
   // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual 
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
        var otuSamples = samples.filter(sample => sample.id==sampleid)[0];
        console.log(otuSamples.otu_ids,"This is working");
        // Use the map method with the arrow function to return all the filtered OTU's
        var otu_ids = otuSamples.otu_ids.slice(0,10).reverse();
        var sample_values = otuSamples.sample_values.slice(0,10).reverse();
        //Hover text
        var otuLabels = otuSamples.otu_labels.slice(0,10).reverse()
        var otuAxisLabel = `OTU:${otu_ids}`
        // Check your filtered metascores
        console.log(otuSamples);
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otuLabels);
        console.log(otuAxisLabel);
        
        //Create a trace
        var trace1 = {
            x: sample_values,
            y: otuAxisLabel,
            text: otuLabels,
            type: "bar",
            orientation: "h",
        };
        //Create the data array for the plot
        var data = [trace1];
        //Define the plot layout
        var layout = {
            title: "Top 10  Operational Taxonomic Units (OTUs)",
            
            barmode: "group",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs"}
        };
        //Plot the chart to a div tag with id "bar"
        Plotly.newPlot("bar", data, layout);

        //Create the bubble chart
        var trace2 = {
            x:otuSamples.otu_ids,
            y: otuSamples.sample_values,
            text: otuSamples.otu_labels,
            mode: 'markers',
            marker: {
              size: otuSamples.sample_values,
              color: otuSamples.otu_ids,
              colorscale:"Earth"
            }
          };
        console.log(trace2)
          
          var data = [trace2];
          
          var layout = {
            title: 'Samples',
            showlegend: false,
            height: 600,
            width: 600, 
            margin: 200
            
          };
          
          Plotly.newPlot('bubble', data, layout);

        //BONUS: Gauge Chart
        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: 270,
                title: { text: "Speed" },
                type: "indicator",
                mode: "gauge+number"
            }
        ];
        
        var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('myDiv', data, layout);
        
        
    });
}

// get demographic info for the id and append
function buildMetadata(sampleid) {
    d3.json("samples.json").then((incomingData) => {
        //console.log(incomingData);
        //console.log(sampleid)
    
        //get the metadata info
        var metaData = incomingData.metadata; 
        console.log(metaData);

        //filter metadata information by sampleid
        var metaInfo =metaData.filter(metaData => metaData.id==sampleid)[0]; 
        console.log(metaInfo);

        //place demographic info in <div id = "sample-metadata"....</div>
        var demoInfo =d3.select(".panel-body")
        
        //clear the input value prior to new user input 
        demoInfo.html("");
    
        
      demoInfo.append('ul').html(`<li>${metaInfo.id}</li><li>${metaInfo.ethnicity}</li><li>${metaInfo.gender}</li><li>${metaInfo.age}</li><li>${metaInfo.location}</li><li>${metaInfo.bbtype}</li><li>${metaInfo.wfreq}</li>`)
  }) 
};

function init() {
    var selector = d3.select("#selDataset");
    d3.json("samples.json").then((incomingData) => {
        var sampleNames = incomingData.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    var firstSample= sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
    });
}
function optionChanged(sampleid) {
    buildCharts(sampleid);
    buildMetadata(sampleid)
}
init()