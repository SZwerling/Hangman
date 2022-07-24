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

getPuzzle((error, puzzle) => {
   // we are calling this function with the first and only arg being a callback function
   if (error) {
      console.log(`Error: ${error}`)
   } else {
      console.log(puzzle);
   }
});

// Making an http request

// // Country code and whatnot
// const request2 = new XMLHttpRequest()
// request2.open('GET', 'https://restcountries.com/v3.1/all')
// request2.send()
// request2.addEventListener('readystatechange', (e) => {
//    if(e.target.readyState === 4 && e.target.status === 200){
//       const data = JSON.parse(e.target.responseText)
//       const mex = data.find((country) => country.altSpellings[0] === 'MX')
//       console.log(mex.name.official)
//    } else if(e.target.readyState === 4){
//       console.log(`An error has taken place`)
//    }
// })
