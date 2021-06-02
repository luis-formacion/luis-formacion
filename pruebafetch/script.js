/*let response = await fetch("kk.txt"); // resuelve con los encabezados de respuesta
let result = await response.json(); // accede al cuerpo de respuesta como json
document.write(result);*/
async function fetchText() {
    let response = await fetch('kk.txt');
    let data = await response.text();
    //console.log(data);
    document.write(data);
}
let kk2a = fetchText()
