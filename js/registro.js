function registrar(){
    const datos = new FormData(document.getElementById('formulario'));
    fetch("http://localhost/funeraria/php/registro.php",{method:'POST',body:datos})
    .then(respuesta=>respuesta.json())
    .then(registros=>{
        if(registros.response=='1'){
            console.log("Registro agregado correctamente")
            window.location = "./index.html";
        } 
        else
            alert("Datos incorrectos")
    }) 
}