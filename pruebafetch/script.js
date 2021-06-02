const url ='kk.txt'
fetch(url)
.then(response =>response.text())
.then(data => {
    let element=document.getElementById('objetivo')
    element.innerHTML=`<p>${data}</p>`
    //console.log(data)
})
.catch(err=>console.log(err))

const url2 ='imagen.jpg'
fetch(url2)
.then(response =>response.blob())
.then(data2 => {
    let element=document.getElementById('objetivo2')
    element.innerHTML=`<img src="${data2}"/>`;
    console.log(data2)
})
.catch(err=>console.log(err))

