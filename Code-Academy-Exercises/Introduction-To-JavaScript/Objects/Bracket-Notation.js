let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);

// Properties of an object can also be accessed by bracket notation (object_name[property_name]).  Bracket notation much be used if the property name contains numbers, spaces, or special characters.  Bracket notation can also accept a variable for the propery name.
