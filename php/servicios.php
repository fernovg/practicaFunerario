<?php 

include("conexion.php");

//generamos la consulta
$sql = "SELECT * FROM paquete";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die("ocurrio un error al momento de realizar la consulta");

$comments = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 
{ 
	//id,nombre,appate,apmate,telefono
    $idpaquete=$row['idpaquete'];
    $descripcion=$row['descripcion'];
    $precio=$row['precio'];

    //creamos la estructura de como va a quedar nuestro objeto json
    $comments[] = array('idpaquete'=> $idpaquete, 'descripcion'=> $descripcion, 'precio'=> $precio);

}
    
//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

//Creamos el JSON
$respuesta = json_encode($comments);
echo $respuesta;

//Si queremos crear un archivo json, sería de esta forma:
/*
$file = 'clientes.json';
file_put_contents($file, $json_string);
*/
    

?>