# Belly Button Biodivesity Project 
This project focuses on developing an interactive data visualization dashboard using JavaScript, D3.js, and Plotly.js. The dashboard features a variety of visualizations, such as bar charts and bubble charts. Users can select different bacteria samples from a dropdown menu, which dynamically updates the visualizations to reflect the corresponding data. This interactivity allows users to explore and analyze the data more effectively. 

## Introduction
We first begin by extracting the metadata from the json file provided with the information on the belly button biodiversity samples. We then filter this data to just include the sample number we want. Next, we use the D3 library to display the sample's metadata(individual's demographic information), by appending html tag with that text to the #sample-metadata panel.

## Chart Creations 

With our data extracted and organized, we can now build a function called buildCharts to create bar and bubble chart visualizations for each sample. We start by defining traces based on the "samples" field, which includes labels, IDs, and values. Once the traces are set up, we customize the layout of the charts. Finally, we use the Plotly library to render both charts. Plotly allows us to customize our plots in many creative and visually engaging ways.

![Dashboard Screenshot](https://github.com/mariemsdiaz/belly-button-challenge/blob/main/dashboard.png)


## Dropdown and Option Selection

We complete our dashboard setup with the init function, which initializes the state of the dashboard. In this function, we:

Create Dropdown Menu: Use d3.select to target the dropdown menu element with the id #selDataset.

Populate Dropdown: Populate the dropdown menu with options based on the names field from our data. Each option represents a sample name and allows users to select different samples.

Handle Sample Selection: Add an optionChanged() function that updates the charts and metadata whenever a new sample is selected from the dropdown menu.

This setup enables users to interact with the dashboard by selecting different sample names, which will trigger updates to the visualizations and metadata displayed.


### Notes 

This assigment was completed with the help of tutors, chatGPT, and referencing past class activities. I also, used chatGPT to edit my HTML and customize color and headers. 

For a complete review of this dashboad please visit GitHub Pages ![Here] https://mariemsdiaz.github.io/belly-button-challenge/



