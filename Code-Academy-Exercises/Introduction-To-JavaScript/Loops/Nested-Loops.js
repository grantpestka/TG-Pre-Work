// Write your code below
let bobsFollowers = ['Kat','Tom','Omri','Fari'];
let tinasFollowers = ['Bill','Kat','Fari'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

// Nested loops can be used to compare two arrays.
