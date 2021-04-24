// basic fetch function 

function fetchChar() {
  return fetch("https://xivapi.com/character/18533527")
    .then(resp => resp.json())
    // .then(json => renderChar(json))
    
}

fetchChar().then(console.log);
