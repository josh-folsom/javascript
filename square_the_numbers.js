// Write a function which takes an array of numbers as input and 
// returns a new array containing result of squaring each of the
// numbers in the given array by two. Example: squareTheNumbers
// ([1, 2, 3]) should give [1, 4, 9].

var cheese = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squared(n){
  return n * n;
}

console.log(cheese.map(squared));
