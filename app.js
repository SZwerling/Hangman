const game1 = new Hangman("Cat", 2);
const puzzleEl = this.document.querySelector("#word");
puzzleEl.textContent = game1.getPuzzle();
const guessesEl = this.document.querySelector("#remaining");
guessesEl.textContent = game1.numGuesses;
const statusEl = this.document.createElement("div");
statusEl.textContent = game1.status;
puzzleEl.appendChild(statusEl);

window.addEventListener("keydown", function (e) {
   if (e.key.match(/^[a-z0-9 ]$/i)) {
      const guess = e.key;
      game1.makeGuess(guess);

      const puzzleEl = this.document.querySelector("#word");
      puzzleEl.textContent = game1.getPuzzle();
      const guessesEl = this.document.querySelector("#remaining");
      guessesEl.textContent = game1.numGuesses;
      const statusEl = this.document.createElement("div");
      statusEl.textContent = game1.status;
      puzzleEl.appendChild(statusEl);
   }
});
