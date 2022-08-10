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
}).catch((err) => {
   console.log(err)
}) 

getCountry('US').then((country) => {
   console.log(country.altSpellings[2])
}, (err) => {
   console.log(`Error; ${err}`)
})

// getSuggestion().then((suggestion) => {
//    console.log(`Suggestion: ${suggestion.activity}.`)
// }, (err) => {
//    console.log(err)
// })

fetch('http://www.boredapi.com/api/activity', {}).then((response) => {
   if(response.status === 200){
      return response.json()
   } else {
      throw new Error('Unable to fetch the puzzle')
   }
}).then((data) => {
   console.log(data.activity)
}).catch((err) => {
   console.log(err)
})