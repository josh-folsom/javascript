//Write a function printNumbers which is given a start 
// number and an end number. It will print the numbers 
// from one to the other, one per line: Write two 
// versions, One using a while loop and the other using 
// a for loop

// for loop

function printNumber (starter, ender){
  for (var num = starter; num <= ender; num++){
  console.log(num)
  }
}
printNumber(1, 10);


 //while loop

// function printNumber (starter, ender){
//   while(starter <= ender) {
//     console.log(starter);
//     starter+=1;
//   }
// }
// printNumber(1, 10);