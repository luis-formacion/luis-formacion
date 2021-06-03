const url='https://pokeapi.co/api/v2/pokemon/200/';
fetch(url)
.then(response => response.json())
.then(data => {

    let nombre = document.getElementById('nombre')
    nombre.innerHTML=`
    ${data.name}`;
    
let elemento = document.getElementById('destino')
elemento.innerHTML=`
<p>${data.name}</p>
<p>${data.id}</p>
<img src='${data.sprites.front_default}'/>
<br>
<img src='${data.sprites.back_default}'/>
<br>
<img src='${data.sprites.front_shiny}'/>
<br>
<img src='${data.sprites.back_shiny}'/>
<br>



`;
console.log(data)
})
.catch(err => console.log(err))