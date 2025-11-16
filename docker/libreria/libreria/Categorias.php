<?php 
require("CrudCategorias.php");

$dataBase = new Categorias();

if(isset($_POST["enviar"])){

    $categoria = $_POST["nombreCategoria"];

    $data =[$categoria];
    $dataBase->addCategoria($data);
    header("location:Categorias.php");

}

if(isset($_POST["enviarEditar"])){
    $id_categoria = $_POST["id_categoria"];
    $categoria = $_POST["nombreCategoria"];

    $data = [$id_categoria,$categoria];
     $dataBase->editCategoria($data);
     header("location:Categorias.php");

}

if(isset($_GET["eliminar"])){
$id_categoria = $_GET["id_categoria"];
$data = [$id_categoria];
$dataBase->deleteCategoria($data);
header("location:Categorias.php");
}


$categorias = $dataBase->showCategoria();


   




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categorias</title>
    <link rel="stylesheet" href="style.css">
    <script src="funciones.js"></script>

</head>
<body>
    <?php include("menu.php")?>
<table>
        <?php if (isset($_GET["editar"])){
            $id_categoria = $_GET["id_categoria"];
            $data = [$id_categoria];
            $categoriaById = $dataBase->showOneCategoria($data);
            $categoria = $categoriaById[1];
            ?>

        <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
            Categoria: <br><input type="text" name="nombreCategoria" value="<?php echo $categoria;?>"><br><br>
            
            <input type="hidden" name="id_categoria" value="<?php echo $id_categoria;?>">

            <input type="submit" value="Aceptar" name="enviarEditar">
        </form>

            <?php }else if($_SESSION['rol'] == "admin"){?>
                <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
            Categoria: <br><input type="text" name="nombreCategoria"><br><br>
           
            <input type="submit" value="Aceptar" name="enviar">
        </form>
                <?php }?>
    <h1>Tabla Categorias</h1>
    <br>
        <tr>
            <td>id_categoria</td>
            <td>categoria</td>
           
        </tr>
        <?php
foreach ($categorias as $cat) { ?>
        <tr>    
            <td><?php echo $cat[0];?></td>
            <td><?php echo $cat[1];?></td>
            <?php if($_SESSION['rol'] == "admin"){?>
            <td class="edit-button"><a href="Categorias.php?id_categoria=<?php echo $cat[0];?>&editar">Editar</a></td>
            <td class="delete-button" ><a href="#" onclick="eliminarCategoria('<?php echo $cat[0];?>','<?php echo $cat[1];?>')">Eliminar</a></td>
                <?php }?>
        </tr>
        <?php }?>
    </table>
</body>
</html>