const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every(word => word.length > 5 ));


// The documentation is the best place to go to make sure to properly impliment iterators. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/
