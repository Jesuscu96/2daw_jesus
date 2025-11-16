<?php 
require("CheckAdmin.php");
require("CrudUsuarios.php");
require("CrudRoles.php");
$dataBase = new Usuarios();
$dataBaseroles = new Roles();
$roles = $dataBaseroles->showRoles();


if(isset($_POST["enviar"])){
    $nombreUsuario = $_POST["nombreUsuario"];
    $contraseña = $_POST["contraseña"];
    $rol = $_POST["rol"];

    $data =[$nombreUsuario,$contraseña,$rol];
    $dataBase->addUsuario($data);
    header("location:Usuarios.php");

}

if(isset($_POST["enviarEditar"])){
    $id_usuario = $_POST["id_usuario"];
    $usuario = $_POST["nombreUsuario"];
    $contraseña = $_POST["contraseña"];
    $contraseñaEncriptada = md5($contraseña);

    $rol = $_POST["rol"];
    $data = [$id_usuario,$usuario,$contraseña,$rol];
     $dataBase->editUsuario($data);
     header("location:Usuarios.php");

}

if(isset($_GET["eliminar"])){
$id_usuario = $_GET["id_usuario"];
$data = [$id_usuario];
$dataBase->deleteUsuario($data);
header("location:Usuarios.php");
}


$users = $dataBase->showUsuario();


   




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios</title>
    <link rel="stylesheet" href="style.css">
    <script src="funciones.js"></script>
</head>
<body>
<?php include("menu.php")?>

<table>
        <?php if (isset($_GET["editar"])){
            $id_usuario = $_GET["id_usuario"];
            $data = [$id_usuario];
            $usuariosById = $dataBase->showOneUsuario($data);
            $usuario =  $usuariosById[1];
            $password = $usuariosById[2];
            $contraseñaEncriptada = md5($password);

            $rol = $usuariosById[3];
            ?>

        <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
            Nombre de usuario: <br><input type="text" name="nombreUsuario" value="<?php echo $usuario;?>"><br><br>
            Contraseña: <br><input type="password" name="contraseña" value="<?php echo $password;?>"><br><br>
            Rol: <br>
            <select name="rol">
                <?php 
                foreach ($roles as $userRol) {

                    ?>
                    <?php if ($rol == $userRol["id_rol"]){?>
                    <option selected value="<?php echo $userRol["id_rol"];?>"><?php echo $userRol["nombre_roles"];?></option>
                    <?php }else{?>
                        <option value="<?php echo $userRol["id_rol"];?>"><?php echo $userRol["nombre_roles"];?></option>

                    <?php }}?>
            </select>
            <br><br>
            <input type="hidden" name="id_usuario" value="<?php echo $id_usuario;?>">

            <input type="submit" value="Aceptar" name="enviarEditar">
        </form>

            <?php }else{?>
                <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
            Nombre de usuario: <br><input type="text" name="nombreUsuario"><br><br>
            Contraseña: <br><input type="password" name="contraseña"><br><br>
            Rol: <br>
            <select name="rol">
                <?php 
                foreach ($roles as $userRol) {

                    ?>
                    <option value="<?php echo $userRol["id_rol"];?>"><?php echo $userRol["nombre_roles"];?></option>
                    <?php }?>
            </select>
            <br><br>
            <input type="submit" value="Aceptar" name="enviar">
        </form>
                <?php }?>
    <h1>Tabla Usuarios</h1>
    <br>
        <tr>
            <td>id_usuario</td>
            <td>usuario</td>
            <td>password</td>
            <td>rol</td>

        </tr>
        <?php
foreach ($users as $user) { 
    $password = $user["password"];
    $passwordEncrypt = md5($password);
    ?>
        <tr>    
            <td><?php echo $user[0];?></td>
            <td><?php echo $user[1];?></td>
            <td><?php echo $passwordEncrypt;?></td>
            <td><?php echo $user["nombre_roles"];?></td>
            <td class="edit-button"><a href="Usuarios.php?id_usuario=<?php echo $user[0];?>&editar">Editar</a></td>
            <td class="delete-button" ><a href="#" onclick="eliminarUsuario('<?php echo $user[0];?>','<?php echo $user[1];?>')">Eliminar</a></td>
        </tr>
        <?php }?>
    </table>
</body>
</html>