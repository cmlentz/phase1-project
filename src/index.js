// basic fetch function 

function fetchChar() {
  return fetch("https://xivapi.com/character/18533527")
    .then(resp => resp.json())
    // .then(json => renderChar(json))
    
}

const createCharDiv = (char) => {
  const charContainer = document.createElement('div')
  const charClass = document.createElement('p')
  const charLevel = document.createElement('p')

  charClass.innerText = char.Character.ClassJobs[0].Name;
  charLevel.innerText = char.Character.ClassJobs[0].Level;

  charContainer.append(charClass, charLevel)

  return charContainer
}

const appendJob = (charDiv) => {
  const charContainer = document.getElementById('character-container')
  charContainer.append(charDiv)
}

fetchChar().then((char) => {
  const charDiv = createCharDiv(char)
  appendJob(charDiv)
})

