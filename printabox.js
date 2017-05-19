// Write function printBox which is given a width and height 
// and prints a hollow box of those given dimensions.


function printBox(width, height) {
  // print the top row
  var rowOfStars = "*".repeat(width);
  var middleRow = "*" + " ".repeat(width - 2) + "*\n";
  var allTheMiddle = middleRow.repeat(height - 2);
  var theWholeBox = rowOfStars + '\n' + allTheMiddle + rowOfStars;

  console.log(theWholeBox);
}

printBox(5, 5);



function printBox(width, height) {
  // print the top row
  var rowOfStars = "*".repeat(width);
  console.log(rowOfStars);
  // print the middle
  var middleRow = "*" + " ".repeat(width - 2) + "*";
  for (var i = 0; i < height - 2; i++) {
    console.log(middleRow);
  }

  // print the bottom row
  console.log(rowOfStars);
}

printBox(6, 4);