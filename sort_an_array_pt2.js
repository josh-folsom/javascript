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

// Sort the same array, but not by alphabetically order,
// but by how long each name is, shortest name first.

console.log(people.sort(function (x, y) {
  if (x.length > y.length) { return 1; }
  else if (x.length < y.length) { return -1; }
  return 0;
}));