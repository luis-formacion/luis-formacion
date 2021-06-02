/*b1.addEventListener("click", () => {
    let aver = fetch("opcion1.txt")
    .then(response =>{
        if(response.ok)
        return response.text
                
    })
    alert("ya")
    console.log(aver)
  });
/*
      fetch("opcion1.txt")
    .then(response =>{
        if(response.ok)
        return response.text()
    })*/
//const nolose = document.getElementById("contenido");

/*let misterio =fetch("opcion1.txt")
.then(misterio => misterio.text())
//document.write(misterio)
console.log(misterio)
/*
    .then(response => response.text())
    .then(data => console.log(data))
    
    nolose.innerText=JSON.parse(misterio)*/
let misterio = function boton1() {
    fetch("opcion1.txt")
    .then(response =>{
        if(response.ok)
        return response.text()
    })
}
b1.addEventListener("click", () => {
    let yanose= boton1()
})
console.log(misterio)