/* ----- IDs -------------*/
let mas = document.getElementById("mas");
let menos = document.getElementById("menos");
let identificador2 = document.getElementById("identificador2");

// Inicio ----------------------------
identificador2.innerHTML = 1;
actualiza();

// FUNCION INC --------------------
function inc() {
  identificador2.innerHTML++;
  actualiza();
}
// FUNCION DEC ---------------------
function dec() {
  if (identificador2.innerHTML > 1) {
    identificador2.innerHTML--;
    actualiza();
  }
}
/* FUNCION ACTUALIZA() -------------------*/

function actualiza() {
  contador = identificador2.innerHTML;
  url = "https://pokeapi.co/api/v2/pokemon/" + contador + "/";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let nombre = document.getElementById("nombre");
      nombre.innerHTML = `${data.name}`;

      let frente = document.getElementById("frente");
      let trasero = document.getElementById("trasero");

      frente.innerHTML = `
      <a href="${data.sprites.front_default}" 
      onMouseOver="document.MyImage.src='${data.sprites.front_shiny}';" 
      onMouseOut="document.MyImage.src='${data.sprites.front_default}';">
      <img src="${data.sprites.front_default}" name="MyImage"></a>`

      trasero.innerHTML = `
      <a href="${data.sprites.back_default}" 
      onMouseOver="document.MyImage2.src='${data.sprites.back_shiny}';" 
      onMouseOut="document.MyImage2.src='${data.sprites.back_default}';">
      <img src='${data.sprites.back_default}'name="MyImage2"/></a>`;

    })
    .catch((err) => console.log(err));
}
