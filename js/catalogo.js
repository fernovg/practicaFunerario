window.addEventListener('load',()=>{
    const url = "http://localhost/funeraria/php/productos.php";
    fetch(url)
        .then(Response=>{return Response.json()})
        .then(data=>{
            //console.log(data)
            console.log(data);
            nombre0.textContent = data[0].nombre;
            precio0.textContent = "$ "+data[0].precio;
            nombre1.textContent = data[1].nombre;
            precio1.textContent = "$ "+data[1].precio;
            nombre2.textContent = data[2].nombre;
            precio2.textContent = "$ "+data[2].precio;
            nombre3.textContent = data[3].nombre;
            precio3.textContent = "$ "+data[3].precio;
            nombre4.textContent = data[4].nombre;
            precio4.textContent = "$ "+data[4].precio;
            nombre5.textContent = data[5].nombre;
            precio5.textContent = "$ "+data[5].precio;
            nombre6.textContent = data[6].nombre;
            precio6.textContent = "$ "+data[6].precio;
            nombre7.textContent = data[7].nombre;
            precio7.textContent = "$ "+data[7].precio;
            nombre8.textContent = data[8].nombre;
            precio8.textContent = "$ "+data[8].precio;
            nombre9.textContent = data[9].nombre;
            precio9.textContent = "$ "+data[9].precio;
            nombre10.textContent = data[10].nombre;
            precio10.textContent = "$ "+data[10].precio;
            nombre11.textContent = data[11].nombre;
            precio11.textContent = "$ "+data[11].precio;
            nombre12.textContent = data[12].nombre;
            precio12.textContent = "$ "+data[12].precio;
            nombre13.textContent = data[13].nombre;
            precio13.textContent = "$ "+data[13].precio;
            nombre14.textContent = data[14].nombre;
            precio14.textContent = "$ "+data[14].precio;
            nombre15.textContent = data[15].nombre;
            precio15.textContent = "$ "+data[15].precio;
            nombre16.textContent = data[16].nombre;
            precio16.textContent = "$ "+data[16].precio;
            
        }).catch(error=>{
            console.log(error)
        })
})