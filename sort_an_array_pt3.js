// Given an array of array of numbers like:

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];


function mySum (myArray) 
{
  return myArray.reduce(function (x, y) {
  return x + y;
});
}

function compareSum(a, b)
{
  if (mySum(a)<mySum(b)) 
  {
    return -1;
  }
  if (mySum(a)>mySum(b)) 
  {
    return 1;
  }
  
  return 0;
}

console.log(arr.sort(compareSum));


