// Write a function which takes an array of numbers as input and 
// returns a new array containing only the even numbers in the given array.

var cheese = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEvens(n){
  return n %2 == 0;
}

console.log(cheese.filter(isEvens));


