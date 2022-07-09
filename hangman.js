// 1. Disable new guesses unless "playing."
// 2. Set up a new method to return a status message.

// Playing -- gusses left: x
// Failed -- Nice try! the word was 'cat'.
// Finished -- Great work! You guessed the word.

const Hangman = function (word, numGuesses) {
   this.word = word.toLowerCase().split("");
   this.numGuesses = numGuesses;
   this.guessed = [];
   this.status = "playing"
};

Hangman.prototype.makeGuess = function (letter) {
   if(this.status !== 'playing') return;
   letter = letter.toLowerCase();
   if (!this.guessed.includes(letter)) { // if unique guess, add to guessed array
      this.guessed.push(letter);
      if (!this.word.includes(letter)) { // nested if statement
         this.numGuesses--;              // if unique guess AND if incorrect guess
      }
   }
   this.calculateStatus()
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

Hangman.prototype.calculateStatus = function() {
   let correct = this.word.every((letter) => {
      return this.guessed.includes(letter)
   })

   if(this.numGuesses <= 0){
      return this.status = "failed!"
      } 

   if(correct){
      return this.status = "finished!"
   }
}

Hangman.prototype.statusMessage = function() {
   if(this.status === 'playing'){
      return `Guesses left: ${this.numGuesses}`
   } else if(this.status === 'failed!'){
      return `Nice try! The word was "${this.word.join('')}."`
   } else if(this.status === 'finished!') {
      return `Great work! You guessed the word!`
   }
}

