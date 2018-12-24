const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();

console.log(is2p2.name);

// Functions can be assigned to variables. These variables hold a reference to the function.  Functions are objects and therefore share the methods and properties of objects.
