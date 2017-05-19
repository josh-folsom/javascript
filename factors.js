function factors(number){
  num2 = [];  
  for (var num = 0; num <= number; num++){
    if (number % num == 0){
      num2 == num2.push(num); 
    }
  }
console.log(num2);  
}
factors(120);

