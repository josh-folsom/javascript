function splitAmount(amount, service, people) {
  if (service == 'good'){
    console.log("Total amount per person is: $" + ((amount * 1.2) / people));
  } else if (service == 'fair') {
    console.log("Total amount per person is: $" + ((amount * 1.15) / people));
  } else {
    console.log("Total amount per person is: $" + ((amount * 1.1) / people));
  }

}
splitAmount(80, 'poor', 4);