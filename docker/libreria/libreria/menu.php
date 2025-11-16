<?php 
include("checkSession.php");


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<h2>Bienvenido <?php echo $_SESSION['usuario'];?>!</h2>
<h1 class="tablas">TABLAS</h1><br>
<div id="menu">
    <?php if($_SESSION['rol']=="admin"){?>
<a href="Usuarios.php">Usuarios</a>
<?php }?>
    <a href="Libros.php">Libros</a>
    <a href="Categorias.php">Categorias</a>
    <a href="index.php?cerrarSesion">Cerrar Sesión</a>
</div>
</body>
</html>
