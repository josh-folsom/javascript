function printSquare(amount) {
  let square = Array(amount + 1).join('*');
 

  for (let i = 0; i < square.length; i++){
    console.log(square)
  }

}
printSquare(5);