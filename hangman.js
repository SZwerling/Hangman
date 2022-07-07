


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

