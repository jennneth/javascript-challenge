// from data.js
var tableData = data;

// select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#city");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValueCity = inputCity.property("value");
  
    console.log(inputValue);
    console.log(inputValueCity);
    console.log(tableData);
  
    var filteredData = tableData.filter(i => i.datetime === inputValue);
    var filteredData2 = filteredData.filter(i => i.city.toLowerCase() === inputValueCity.toLowerCase());
  
    console.log(filteredData);
    console.log(filteredData2);
  
    //start to build the results table
    var tbody = d3.select("tbody");

    //if there is already a table displayed, remove those rows
    tbody.html("");
        
    filteredData2.forEach((ufoSighting) => {
        console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
     
  };