<?php 
require("CrudUsuarios.php");

 $dataBase = new Usuarios();
 $usuarios = $dataBase->showUsuario();
 $condition = true;
if(isset($_POST["enviar"])){
$usuario = $_POST["usuario"];
$contraseña = $_POST["password"];
foreach ($usuarios as $usuarioBdd) {
    # code...
  
 if($usuario == $usuarioBdd["usuario"] && $contraseña == $usuarioBdd["password"] ){
     session_start();
     $_SESSION['usuario'] = $usuario;
     $_SESSION['rol'] = $usuarioBdd["nombre_roles"];
    header("location: menu.php");

 } $condition=false;
}
if($condition==false){
    echo "<h2>Credenciales incorrectas, intentalo de nuevo<h2>";  
}

}

if(isset($_GET["cerrarSesion"])){
    session_start();
    session_destroy();
    unset($_SESSION['usuario']);
    unset($_SESSION['rol']);
?>
<h2>Hasta pronto!</h2>
<?php }
if(isset($_GET["sinPermisos"])){
?>
<h2>No tienes permisos para acceder a este sitio</h2>
<?php }?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
<h1>Inicio de sesión</h1>
<input type="text" name="usuario" placeholder="Usuario">
<br><br>
<input type="password" name="password" placeholder="Contraseña">
<br><br>

<input type="submit" value="Enviar" name="enviar">
</form>

</body>
</html>