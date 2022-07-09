const game1 = new Hangman("motorcycle", 3);
const puzzleEl = this.document.querySelector("#word");
puzzleEl.textContent = game1.getPuzzle();
const messageEl = this.document.querySelector("#message");
messageEl.textContent = game1.statusMessage();



window.addEventListener("keydown", function (e) {
   if (e.key.match(/^[a-z0-9 ]$/i)) {
      const guess = e.key;
      game1.makeGuess(guess);
      puzzleEl.textContent = game1.getPuzzle();
      messageEl.textContent = game1.statusMessage();
   }
});
