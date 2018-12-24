const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');
const startsWithS = animals.findIndex(animal => animal[0] === 's');


// .findIndex() returns the index of the first item that caused the callback function to return true.  If no items meet the criteria, this iteraror will return -1.
