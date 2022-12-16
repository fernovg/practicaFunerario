<?php 
$server = "localhost";
$user = "root";
$pass = "";
$bd = "funeraria";
//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

$correo=$_POST['correo'];
$contra=$_POST['contra'];

//generamos la consulta
$sql = "INSERT INTO usuario (correo, contra, tipo) VALUES('$correo', '$contra', 1)" ;
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)){
    echo '{"response":"0"}';
    die();
}
else
    echo '{"response":"1"}';
?>