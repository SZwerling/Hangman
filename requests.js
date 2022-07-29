const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
   const request = new XMLHttpRequest();
   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
   request.send();
   request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
         const data = JSON.parse(e.target.responseText);
         resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
         reject(
            `an error has taken place: ${e.target.responseText}`,
         );
      }
   });
})

// Making an http request

const getCountry = (code) => new Promise((resolve, reject) => {
   const request2 = new XMLHttpRequest();
   request2.open("GET", "https://restcountries.com/v3.1/all");
   request2.send();
   request2.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
         const data = JSON.parse(e.target.responseText);
         const specCountry = data.find((country) => country.altSpellings[0] === code);
         resolve(specCountry);
      } else if (e.target.readyState === 4) {
         reject(`an error has taken place:  ${e.target.responseText}`);
      }
   });
})

const getSuggestion = () => new Promise((resolve, reject) => {
   const request = new XMLHttpRequest();
   request.open("GET", "http://www.boredapi.com/api/activity");
   request.send();
   request.addEventListener("readystatechange", (e) => {
      if(e.target.readyState === 4 && e.target.status === 200){
         const data = JSON.parse(e.target.responseText);
         resolve(data)
      } else if(e.target.readyState === 4){
         reject(`an error has taken place: ${e.target.responseText}`)
      }
   }) 
})




// getPuzzle() as a callback function
// const getPuzzle = function (wordCount, callback) {
//    // this function takes one arg, that arg is a function

//    const request = new XMLHttpRequest();
//    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//    request.send();
//    request.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//          const data = JSON.parse(e.target.responseText);
//          callback(undefined, data.puzzle);
//       } else if (e.target.readyState === 4) {
//          callback(
//             `an error has taken place: ${e.target.responseText}`,
//             undefined
//          );
//       }
//    });
// };
