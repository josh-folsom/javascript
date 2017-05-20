// Given an array of array of numbers like:

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
// Sort the array by the sum of each inner array.
// For the above example, the respective sums for
// each inner array is 8, 20, and 9. Therefore,
// the solution should be:

// [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ]

// arr.sort(function (x, y, c) {
//   if (x + y + c ) { return 1; }
//   else if (x < y) { return -1; }
//   return 0;
// });

// a.reduce(function (x, y) {
//   return a + b;
// });

var ham = arr.sort(function (x, y) {
  if (x > y) { return 1; }
  else if (x < y) { return -1; }
  return 0;
});

console.log(ham);

