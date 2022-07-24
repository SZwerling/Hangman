const getPuzzle = function(callback){ // this function takes one arg, that arg is a function


    const request = new XMLHttpRequest()
    request.open('GET', 'http://puzzle.mead.io/puzzle')
    request.send()
    request.addEventListener('readystatechange', (e) => {
      
       if(e.target.readyState === 4 && e.target.status === 200){
          const data = JSON.parse(e.target.responseText)
          callback(undefined, data.puzzle)
         
       } else if(e.target.readyState === 4){
        callback(`an error has taken place: ${e.target.responseText}`, undefined)
       }
    })
}