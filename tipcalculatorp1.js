function tipAmount(amount, service) {
  if (service == 'good'){
    console.log("Tip amount is: $" + amount * 1.2);
  } else if (service == 'fair') {
    console.log("Tip amount is: $" + amount * 1.15);
  } else {
    console.log("Tip amount is: $" + amount * 1.1);
  }

}
tipAmount(80, 'poor')