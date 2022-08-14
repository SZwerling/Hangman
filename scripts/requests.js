// USING FETCH
// fetch has promises built in. Can use .then or asyn/await.
const getPuzzle = async (wordCount) => {
   const response = await fetch(
      `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
   );
   if (response.status === 200) {
      const data = await response.json();
      return data.puzzle;
   } else {
      throw new Error("Unable to get puzzle.");
   }
};

// const getCountry = async (code) => {
//    const response = await fetch("https://restcountries.com/v3.1/all");
//    if (response.status === 200) {
//       const data = await response.json();
//       const country = data.filter(
//          (country) => country.altSpellings[0] === code
//       );
//       return country[0].altSpellings[2];
//    } else {
//       throw new Error("an error has taken place");
//    }
// };

// const getCurrentCountry = async () => {
//    const location = await getLocation()
//    const country = await getCountry(location.country) // could just return here without await keyword
//    return country;
// }

// const getLocation = async () => {
//    const response = await fetch("https://ipinfo.io/json/?token=4014b33fc82808");
//    if (response.status === 200) {
//       return response.json(); //Do not need await when returning
//    } else {
//       throw new Error("Something wrong went right.");
//    }
// };

// USING FETCH and .then on returned promise
// const getPuzzle = (wordCount) => {  //fetch has Promises built into it. Automatically returns a promise. So just use .then and .catch
//    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => { //using return here returns a promise
//       if(response.status === 200){
//          return response.json()
//       } else {
//          throw new Error('Unable to fetch puzzle')
//       }
//    }).then((data) => {
//       return data.puzzle  // this is the final promise that gets returned to function call in app.js
//    })
// }

//GET COUNTRY USING .THEN
// const getCountry = (code) => {
//    return fetch("https://restcountries.com/v3.1/all").then((response) => {
//       if(response.status === 200){
//          return response.json()
//       } else {
//          throw new Error('an error has taken place')
//       }
//    }).then((data) => {
//       let country =  data.filter((country) => country.altSpellings[0] === code)
//       return country[0].altSpellings[2]
//    })
// }

// MAKING HTTP REQ USING XMLHttpRequest and new Promise instance
// const getSuggestion = () => new Promise((resolve, reject) => {
//    const request = new XMLHttpRequest();
//    request.open("GET", "http://www.boredapi.com/api/activity");
//    request.send();
//    request.addEventListener("readystatechange", (e) => {
//       if(e.target.readyState === 4 && e.target.status === 200){
//          const data = JSON.parse(e.target.responseText);
//          resolve(data)
//       } else if(e.target.readyState === 4){
//          reject(`an error has taken place: ${e.target.responseText}`)
//       }
//    })
// })

//GET PUZZLE AS XMLHttpRequest, notice we must create a new Promise and resolve and reject
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//    const request = new XMLHttpRequest();
//    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//    request.send();
//    request.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//          const data = JSON.parse(e.target.responseText);
//          resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//          reject(
//             `an error has taken place: ${e.target.responseText}`,
//          );
//       }
//    });
// })

// GET PUZZLE as a callback function
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
