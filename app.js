// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);



// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

//var tableData = data;
// Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(date => date.datetime == inputValue);
  console.log(filteredData);


filteredData.forEach(function(data) {
   console.log(data);
   var row = tbody.append("tr");

   Object.entries(data).forEach(function([key, value]) {
     console.log(key, value);
   
   var cell = row.append("td");
   cell.text(value);

 	});

 
 });

});

