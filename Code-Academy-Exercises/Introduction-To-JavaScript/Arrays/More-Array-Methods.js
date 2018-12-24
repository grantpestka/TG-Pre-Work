const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()


groceryList.unshift('popcorn');


console.log(groceryList.slice(1,4));


const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// There are many array methods.  Some (like .pop() and .push()) change the array they are called on.  Others do not.
// .shift() removes the first item of the array and returns it.
// .unshift() adds an item to the beginning of the array and returns the length.
// .slice() removes items after an index and before an index (one greater than the last desired element).
//.indexOf() returns the index of an item of the arrey.
