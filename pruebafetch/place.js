const url ='https://jsonplaceholder.typicode.com/albums'
fetch(url)
.then(response => response.json())
.then(data => {
    
    let elemento = document.getElementById('destino')
    elemento.innerHTML = `<p>${data[1].title}</p>`;
   console.log(data)
})
.catch(err => console.log(err))