// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build Table

function buildTable(data) {
    //clears any existing data
    tbody.html("");
    
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // tells JS to find the tbody tag and add a table row ie. "tr"
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        //telling our code put each sighting onto its own row of data. 
        //The val argument represents each item in the object, such as the location, shape, or duration.
        Object.values(dataRow).forEach((val) => {
            // appending data into a table data tag <td>
            let cell = row.append("td");
            //Add the values to the cell
            cell.text(val);
        });

    });
};

function handleClick() {
    //tells D3 to look for  #datetime id in the HTML tags and to select the first value that matches the tag.
    let date = d3.select("#datetime").property("value");

    //default filter is entire table
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};
  

// listens for click
d3.selectAll("#filter-btn").on("click", handleClick);
    
//Builds the table when the page loads
buildTable(tableData);