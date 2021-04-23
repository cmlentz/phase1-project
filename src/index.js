/* basic fetch function */
function fetchFunc() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://website/api')
  //  .then(resp => resp.json())
  .then(function(resp) {
    return resp.json();
  })
}