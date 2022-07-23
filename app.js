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

// Making an http request
const request = new XMLHttpRequest()
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()
request.addEventListener('readystatechange', (e) => {
  
   if(e.target.readyState === 4 && e.target.status === 200){
      const data = JSON.parse(e.target.responseText)
      console.log(data)
   } else if(e.target.readyState === 4){
      console.log(`An error has taken place.`)
   }
})

// Country code and whatnot
const request2 = new XMLHttpRequest()
request2.open('GET', 'https://restcountries.com/v3.1/all')
request2.send()
request2.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4 && e.target.status === 200){
      const data = JSON.parse(e.target.responseText)
      const mex = data.find((country) => country.altSpellings[0] === 'MX')
      console.log(mex.name.official)
   } else if(e.target.readyState === 4){
      console.log(`An error has taken place`)
   }
})
