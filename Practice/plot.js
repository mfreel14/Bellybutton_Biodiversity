//  Sorted Cities By Population Growth  
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//  View Sorted Cities
console.log(sortedCities);

// Select Top Five Cities by Pop growth
var topFiveCities = sortedCities.slice(0,5);

// View Sorted Cities
console.log(topFiveCities);

//  Array of City Names nad Corresponding Pop Growths 
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  d3.json("samples.json").then(function(data){
    console.log("hello");
});