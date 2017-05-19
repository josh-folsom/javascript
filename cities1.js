// Write a function which takes an array of city objects like such:

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

// i used the filter feature in JS to pull out objects that had a temp
// lower than 70.  And I decided to have it show the details two ways.


// I assigned the output to a new list for clarity sake since it was
// cumbersome to see the console.log wrapped around that long statment

var coolCities = cities.filter(function (item) {
  return item.temperature < 70; 
});
console.log(coolCities);


// this is console.log wrapped around the long statment and it will
// also work, but in my opinion it isn't as clean.

console.log(cities.filter(function (item) {
  return item.temperature < 70; 
}));

// as input and returns a new array containing the cities whose
// temperature is cooler than 70 degrees.

