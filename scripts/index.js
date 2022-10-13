import Hangman from './hangman';
import getPuzzle from './requests';
import hanging from '../audio/hanging.mp3';
import cheerAudio from '../audio/cheer.mp3'
import '../styles/styles.css'




let game1;
const puzzleEl = document.querySelector("#word");
const messageEl = document.querySelector("#message");
const input = document.querySelector("#input");




window.addEventListener("keydown", function handler(e) {
   if (e.key.match(/^[a-z0-9 ]$/i)) {
      const guess = e.key;
      game1.makeGuess(guess);
      render();
   }
});

input.addEventListener("input", function (e) {
   const letter = e.target.value;
   if (letter.match(/^[a-z0-9 ]$/i)) {
      const guess = letter;
      game1.makeGuess(guess);
      render();
   }
   input.value = "";
});

//watching window size and rendering for line break
let isWide = window.matchMedia("(min-width: 769px)");
window.addEventListener("resize", (e) => {
   render();
});

const hangAudio = new Audio(hanging)
const cheer = new Audio(cheerAudio);

const render = () => {
   hangAudio.pause()
   cheer.pause()
   puzzleEl.innerHTML = ""; //clearing html content so we can add the spans
   messageEl.textContent = game1.statusMessage; //using getter in Hangman class
   if(game1.statusMessage.includes("Nice")) {
      hangAudio.play()
   }
   if(game1.statusMessage.includes("Great")){
      cheer.play()
   }
   //create new span element for each character
   //each span text content is individual letter
   game1.puzzle.split("").forEach((char) => {
      const span = document.createElement("span");
      const linebreak = document.createElement("br");
      span.textContent = char;
      if (!isWide.matches && char === " ") {
         puzzleEl.appendChild(linebreak);
      } else {
         puzzleEl.appendChild(span);
      }
   });
};

const startGame = async () => {
   const puzzle = await getPuzzle("2"); // getPuzzle exists in requests.js
   game1 = new Hangman(puzzle, 5);
   // console.log(puzzle);
   render();
};

document.querySelector("#reset").addEventListener("click", () => {
   startGame();
});

startGame();

// getPuzzle('2').then((puzzle) => {
//    console.log(puzzle)
// }).catch((err) => {
//    console.log(err)
// })

// getCurrentCountry().then((country) => {
//    console.log(country)
// }).catch((err) => {
//    console.log(err)
// })

// getLocation().then((data) => {
//    console.log(data.city)
//   return getCountry(data.country)
// }).then((response) => {
//    console.log(response)
// }).catch((err) => {
//    console.log(err)
// })

//in this fetch call we're not breaking it up into req and funtionc call like the others
// fetch('http://www.boredapi.com/api/activity', {}).then((response) => {
//    if(response.status === 200){
//       return response.json()
//    } else {
//       throw new Error('Unable to fetch the puzzle')
//    }
// }).then((data) => {
//    console.log(data.activity)
// }).catch((err) => {
//    console.log(err)
// })

// getSuggestion().then((suggestion) => {
//    console.log(`Suggestion: ${suggestion.activity}.`)
// }, (err) => {
//    console.log(err)
// })

// getCountry('FR').then((country) => {
//    console.log(country)
// }).catch((err) => {
//    console.log(err)
// })

// getLocation().then((data) => {
//    console.log(`You are in ${data.city}, ${data.country}, in the region of ${data.region}.`)
// }).catch((err) => {
//    console.log(err)
// })
