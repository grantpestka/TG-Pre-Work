let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// OR statements (\\) can be used to "short-circuit" a variable declaration by using a other variable that can be falsy and a default.  If the variable turns out to be truthy, the new variable will be that variable.  If it is falsy, the default will be set.
