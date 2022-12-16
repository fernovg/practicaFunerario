window.addEventListener('load',()=>{
    const url = "http://localhost/funeraria/php/paquete.php";
    fetch(url)
        .then(Response=>{return Response.json()})
        .then(data=>{
            //console.log(data)
            console.log(data);
            nombre0.textContent = data[0].descripcion;
            precio0.textContent = "$ "+data[0].precio;
            nombre1.textContent = data[1].descripcion;
            precio1.textContent = "$ "+data[1].precio;
            
        }).catch(error=>{
            console.log(error)
        })
})