// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
    console.log("Metadata", metadata);
    // Filter the metadata for the object with the desired sample number

    let result = metadata.filter(sampleObj => sampleObj.id == sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata

    panel.html("")
    // Inside a loop, you will need to use d3 to append new
   
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;
    console.log("Selected Values:", samples);
    // Filter the samples for the object with the desired sample number

    let result = samples.filter(sampleObj => sampleObj.id == sample)[0];
    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Build a Bubble Chart
    let trace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Viridis'
      }
    };
    let dataBubble = [trace];

    let layoutBubble = {
      title: 'Bacteria Culture Per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' }
    };
    // Render the Bubble Chart
    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`); // Top 10 OTUs
    let topValues = sample_values.slice(0, 10);
    let topLabels = otu_labels.slice(0, 10);

    
    // Build a Bar Chart
    let traceBar = {
      x: topValues.reverse(), // Plotly requires x values in ascending order
      y: yticks.reverse(), // Reverse yticks to match x values
      text: topLabels.reverse(),
      type: 'bar',
      marker: {
        color: topValues, // Color based on values
        colorscale: 'Viridis', // Color scale (you can choose other scales like 'Cividis', 'Jet', etc.)
        colorbar: {
          title: 'Values', // Color bar title
        }
      },
      orientation: 'h' // Horizontal bar chart
    };
    // Don't forget to slice and reverse the input data appropriately
    let layoutBar = {
      title: 'Top 10 Bacteria Culture Found',
      xasix: { title: 'Number of Bacteria'}
    }

    let dataBar=[traceBar]
    // Render the Bar Chart
    Plotly.newPlot('bar', dataBar, layoutBar);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names=data.names;
    console.log("Sample Names:", names);
    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");
    console.log("Dropdown", dropdown);

    // Use the list of sample names to populate the select options
    names.forEach((name) => {
      dropdown.append("option").text(name).property("value", name);
    });

    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list

    let firstSample = names[0];
    console.log("First Sample:", firstSample);
    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
    console.log("New Sample:", newSample);
    buildCharts(newSample);
    buildMetadata(newSample);
}


// Initialize the dashboard
init();
