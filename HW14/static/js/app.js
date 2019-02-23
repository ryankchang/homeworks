// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select('tbody');

tableWrite(tableData);

// Read in data into the html table
function tableWrite(inputData) {
    inputData.forEach(row => {
     var newrow = tbody.append('tr');
        Object.values(row).forEach(x => newrow.append('td').text(x));
    });
};
  
function buttonClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    d3.select('#ufo-table tbody').html("");
    // Select the input element and get the raw HTML node and Get the value property of the input element
    var inputValue = d3.select("#datetime").property('value');
    console.log(inputValue);
    
    tableWrite(tableData.filter(x => x.datetime === inputValue));

    };
    
d3.select('#filter-btn').on('click', buttonClick);




