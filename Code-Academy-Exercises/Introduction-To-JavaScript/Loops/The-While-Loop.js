const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



// While loops execute their code blocks while the test condition is true.  Infinate loops are bad.  While loops are ideal for situation when the exact number of iterations needed is unknown.
