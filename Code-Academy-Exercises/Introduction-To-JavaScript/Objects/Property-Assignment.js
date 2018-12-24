let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 8;
delete spaceship['Secret Mission'];

// Objects are mutable.  Properties can be added or overwritten with either dot notation or bracket notation and the assignment operator.  Properties can be removed with the delete operator and either notation.
