function fetchChar() {
  return fetch("https://xivapi.com/character/18533527")
    .then(resp => resp.json())
}

const createCharDiv = (char) => {
  const charContainer = document.createElement('div')
  const charName = document.createElement('h2')
  const charPic = document.createElement('img')
  const charClassLevel = document.createElement('p')
  // const charLevel = document.createElement('p')

  charName.innerText = char.Character.Name;
  charPic.src = char.Character.Portrait;
  charClassLevel.innerText = char.Character.ClassJobs[1].Name + ` = level ` + char.Character.ClassJobs[1].Level;
  // charLevel.innerText = char.Character.ClassJobs[0].Level;

  charContainer.append(charName, charPic, charClassLevel)

  const dropdown = document.getElementById("dropdown");
  for (let i = 0; i < char.Character.ClassJobs.length; i++) {
    const option = document.createElement("option");
    option.text = char.Character.ClassJobs[i].Name;
    option.value = char.Character.ClassJobs[i].Name;
    dropdown.add(option);
  }

  return charContainer
}

const appendJob = (charDiv) => {
  const charContainer = document.getElementById('character-container')
  charContainer.innerHTML = ""
  charContainer.append(charDiv)
}

const generateCharData =() => {
fetchChar().then((char) => {
  const charDiv = createCharDiv(char)
  appendJob(charDiv)
})
}

generateCharData();