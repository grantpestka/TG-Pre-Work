const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let rapperArrayIndex = 0; rapperArrayIndex < rapperArray.length; rapperArrayIndex++){
  console.log(rapperArray[rapperArrayIndex]);
  if (rapperArray[rapperArrayIndex] ===  "Notorious B.I.G."){
    break;
  }
}
console.log("And if you don't know, now you know.");





//  The break keyword allows a program to end when a desired condition is met before the loop is complete.  Breaks help decrease cpu usage.  Breaks are also useful for debugging.
