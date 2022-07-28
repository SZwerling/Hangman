const game1 = new Hangman("small minded", 3);
const puzzleEl = this.document.querySelector("#word");
const messageEl = this.document.querySelector("#message");

messageEl.textContent = game1.statusMessage; //using getter in Hangman class
puzzleEl.textContent = game1.puzzle; //using getter in Hangman class

window.addEventListener("keydown", function (e) {
   if (e.key.match(/^[a-z0-9 ]$/i)) {
      const guess = e.key;
      game1.makeGuess(guess);
      puzzleEl.textContent = game1.puzzle; //using getter in Hangman class
      messageEl.textContent = game1.statusMessage; //using getter in Hangman class
   }
});

getPuzzle('2').then((puzzle) => {
   console.log(puzzle)
}, (err) => {
   console.log(`Erro: ${err}`)
}) 

getCountry('MX', (error, country) => {
   if(error){
      console.log(`error: ${error}`)
   } else {
      console.log(country.altSpellings[2])
   }
})