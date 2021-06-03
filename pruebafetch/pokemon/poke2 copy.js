/* ----- BoToNeS -------------*/
var contador = 1;
var url;
var mas = document.getElementById("mas");

mas.addEventListener("click", function () {
  contador++;
   url = "https://pokeapi.co/api/v2/pokemon/" + contador + "/";

  /* Fetch y demás ----------------------------------*/

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let nombre = document.getElementById("nombre");
      nombre.innerHTML = `
    ${data.name}`;

      let frente = document.getElementById("frente");
      frente.innerHTML = `
    <img src='${data.sprites.front_default}'/>`;

      let trasero = document.getElementById("trasero");
      trasero.innerHTML = `
    <img src='${data.sprites.back_default}'/>`;

      let identificador = document.getElementById("identificador");
      identificador.innerHTML = `
    ${data.id}`;

      //console.log(data);
    })
    .catch((err) => console.log(err));
});
