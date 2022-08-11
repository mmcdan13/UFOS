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