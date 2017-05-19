var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

// Given an array of people's names, Print out 'Good Job, {{name}}!' for each // person's name, one on a line.
// this way uses a loop, which is forbidden today 
// for (var attribute in people) {
//   var value = people[attribute];
//   console.log(`Good Job, ${value}!`);
// }

// console.log(people.join());
console.log("Good Job, " + people.join( '!\nGood Job, '));