// from data.js
var tableData = data;

// table body variable should be global
var tbody = d3.select("tbody");

//build a table based on the filtered data
function buildTable(data) {
    //clear any existing data from the table
    tbody.html("");
    
    //loop through objects and append rows and cells for each value
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
};

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    //get the list of filters

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
};

// Event handler
d3. SelectAll(".filter").on("change", runEnter);

