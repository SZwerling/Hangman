const Hangman = function(word, numGuesses, guessed = []){
    this.word = word.toLowerCase().split('');
    this.numGuesses = numGuesses;
    this.guessed = guessed;
} 

Hangman.prototype.getPuzzle = function(){
    let puzzle = '';
    this.word.forEach((letter) => {
        if(this.guessed.includes(letter) || letter === ' '){
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle;
}

const game1 = new Hangman("Cat", 3, ['c', 't'])
const game2 = new Hangman("foot apparel", 200, ['f', 'o', 'p'])

// 1. Set word instance property as an array of lower case letters.
// 2. Set up another instance property to store guessed letters.
// 3. Create a method that gives you the word puzzle back. // getPuzzle()

console.log(game2.getPuzzle())