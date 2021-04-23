/* basic fetch function 
https://xivapi.com/character/18533527 */
function fetchChar() {
  return fetch("https://xivapi.com/character/18533527")
    .then(resp => resp.json())
    .then(json => renderChar(json));
}

/*
fetch("https://xivapi.com/character/18533527", { mode: 'cors' })
	.then(response => response.json())
	.then(data => console.info(data.Name_en))
*/