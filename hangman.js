// CREATE A METHOD FOR MAKING A GUESS.
// Should accept a character for guessing.
// Should add unique guesses to list of guesses.
// Should decrement the guesses left if a unique guess is not a match.

const Hangman = function (word, numGuesses) {
   this.word = word.toLowerCase().split("");
   this.numGuesses = numGuesses;
   this.guessed = [];
};

Hangman.prototype.makeGuess = function (letter) {
   letter = letter.toLowerCase();
   if (!this.guessed.includes(letter)) { // if unique guess, add to guessed array
      this.guessed.push(letter);
      if (!this.word.includes(letter)) { // nested if statement
         this.numGuesses--;              // if unique guess AND if incorrect guess
      }
   }
};

Hangman.prototype.getPuzzle = function () {
   let puzzle = "";
   this.word.forEach((letter) => {
      if (this.guessed.includes(letter) || letter === " ") {
         puzzle += letter;
      } else {
         puzzle += "*";
      }
   });
   return puzzle;
};

const game1 = new Hangman("Cat", 2);
game1.makeGuess("c");
game1.makeGuess("c");

game1.makeGuess("a");
game1.makeGuess("z");
game1.makeGuess("p");
console.log(game1.getPuzzle());
const game2 = new Hangman("foot apparel", 200);
game2.makeGuess('z')
console.log(game2.numGuesses)
