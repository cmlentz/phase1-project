function fetchChar() {
  return fetch("https://xivapi.com/character/28677935")
    .then(resp => resp.json())
}

function createCharDiv(char) {
  const charContainer = document.createElement('div')
  const charName = document.createElement('h2')
  const charPic = document.createElement('img')
  const charLevel = document.createElement('level-display')
  const classDropdown = document.getElementById("class-dropdown")

  charName.innerText = char.Character.Name
  charPic.src = char.Character.Portrait
  
  charContainer.append(charName, charPic)

  for (let i = 0; i < char.Character.ClassJobs.length; i++) {
    const option = document.createElement("option")
    option.text = char.Character.ClassJobs[i].Name
    option.value = `Level ` + char.Character.ClassJobs[i].Level
    classDropdown.add(option)
  }
  
  return charContainer
}

function appendJob(charDiv) {
  const charContainer = document.getElementById('character-container')
  charContainer.append(charDiv)
}

function generateCharData () {
fetchChar().then((char) => {
  const charDiv = createCharDiv(char)
  appendJob(charDiv)
})
}

generateCharData()