function totalAmount(amount, service) {
  if (service == 'good'){
    console.log("Total amount is: $" + amount * 1.2);
  } else if (service == 'fair') {
    console.log("Total amount is: $" + amount * 1.15);
  } else {
    console.log("Total amount is: $" + amount * 1.1);
  }

}
totalAmount(80, 'poor')