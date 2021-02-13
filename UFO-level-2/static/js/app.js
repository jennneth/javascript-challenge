// grab data from data.js source file
var tableData = data;

// table body variable should be global
var tbody = d3.select("tbody");

//create and initialize an array of the filters that will be customized
filters = {};


///////////////////////////////////////////
//build a table the size of the filtered dataset
////////////////////////////////////////////
function buildTable(data) {
    //clear any existing data from the table
    tbody.html("");
    
    //loop through objects and append rows and cells for each value
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
};
/////////////////////////////////////////////
//end building table
/////////////////////////////////////////////

//////////////////////////////////////////////
// Identify which filters to apply and add them to the array of filters
//////////////////////////////////////////////
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    //build a list of filters because some may be left empty
    //get the element, value and id of the filter
    var inputElement = d3.select(this).select("input");
    var inputElementValue = inputElement.property("value");
    var inputElementId = inputElement.attr("id");
  
    // if a filter was selected, add it to the array.  Otherwise delete that filter from the array
    if (inputElementValue) {
        filters[inputElementId] = inputElementValue;
    }
    else {
        delete filters[inputElementId];
    };
    // rebuild the data table
    console.log(filters);
    filteredData();

}
//////////////////////////////////////
//filters array built
/////////////////////////////////////

////////////////////////////////////
// filter the dataset based on the filters array
/////////////////////////////////////
function filteredData() {
    let filteredTable = tableData;
    //loop through the filtered array and apply the filters one at a time
    Object.entries(filters).forEach(([key, value]) => {
        filteredTable = filteredTable.filter(row => row[key] === value);
    });
    //build the table function
    console.log(filteredTable);
    buildTable(filteredTable);
}

// Event handler
d3.selectAll(".filter").on("change", runEnter);


