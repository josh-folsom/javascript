// Write a function printBanner which is given some text 
// and prints a banner with a border surrounding the text. 
// The border has to stretch to the length of the text.

function printBanner(string) {
  // print the top row
  var rowOfStars = "*".repeat(string.length + 4);
  var middleRow = "* " + string + " *\n";
  var theWholeBox = rowOfStars + '\n' + middleRow + rowOfStars;

  console.log(theWholeBox);
}

printBanner('Welcome to DigitalCrafts!');