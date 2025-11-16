<?php 
require("CrudLibros.php");
require("CrudCategorias.php");

$dataBase = new Libros();
$dataBase2 = new Categorias();
$categorias = $dataBase2->showCategoria();

if(isset($_POST["enviar"])){
    $titulo = $_POST["tituloLibro"];
    $autor = $_POST["autorLibro"];
    $id_categoria = $_POST["categoriaLibro"];
    $precio = $_POST["precioLibro"];

    $fileName = $_FILES["File"]["name"];
    move_uploaded_file($_FILES["File"]["tmp_name"],
    "img/". $fileName);

    $data = [$titulo,$autor,$id_categoria,$precio,$fileName];
    $dataBase->addLibro($data);
    header("location:Libros.php");

}

if(isset($_POST["enviarEditar"])){
    $id_libro = $_POST["id_libro"];
    $titulo = $_POST["tituloLibro"];
    $autor = $_POST["autorLibro"];
    $id_categoria = $_POST["categoriaLibro"];
    $precio = $_POST["precioLibro"];
    $nombreImagen = $_POST["nombreImagen"];
    $nombreAntiguo = $_POST["nombreAntiguo"];
    $fileName = $_FILES["File"]["name"];
    $data = [];

    if ($fileName !=null){
        unlink("img/$nombreAntiguo");
 move_uploaded_file($_FILES["File"]["tmp_name"],
    "img/". $fileName);

    $data = [$id_libro,$titulo,$autor,$id_categoria,$precio,$fileName];

    } else{
        $data = [$id_libro,$titulo,$autor,$id_categoria,$precio,$nombreImagen];
        rename("img/$nombreAntiguo","img/$nombreImagen");
    }
   
     $dataBase->editLibro($data);
     header("location:Libros.php");

}

    if(isset($_GET["eliminar"])){
        if($_SESSION['rol'] == "admin"){

        $id_libro = $_GET["id_libro"];
            $data = [$id_libro];
        $dataBase->deleteLibro($data);
        $imagen = $_GET["nombreImagen"];
        unlink("img/$imagen");
        header("location:Libros.php");
        } else{
            header("location:Libros.php");
        }
    }




$libros = $dataBase->showLibros();


   




?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Libros</title>
    <link rel="stylesheet" href="style.css">
    <script src="funciones.js"></script>

</head>
<body>
<?php include("menu.php")?>

<table>
        <?php if (isset($_GET["editar"])){
           $id_libro = $_GET["id_libro"];
           $data = [$id_libro];
           $showLibroById = $dataBase->showOneLibro($data);

          $titulo = $showLibroById[1];
           $autor = $showLibroById[2];
           $id_categoria = $showLibroById[3];
           $precio = $showLibroById[4];
           $nombreImagen = $showLibroById[5];
            ?>

        <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>" enctype="multipart/form-data">
            Titulo: <br><input type="text" name="tituloLibro" value="<?php echo $titulo;?>"><br><br>
            Autor: <br><input type="text" name="autorLibro" value="<?php echo $autor;?>"><br><br>
            Categoria:<br>
            <select name="categoriaLibro">
                    <?php foreach ($categorias as $categoria) {
                        
                    ?>
                    <?php if ($id_categoria == $categoria[0]){?>
                    <option selected value="<?php echo $categoria[0];?>"><?php echo $categoria[1];?></option>
                    <?php }else{?>
                        <option  value="<?php echo $categoria[0];?>"><?php echo $categoria[1];?></option>

                    <?php }}?>
                </select>
                <br><br>

                      Precio: <br><input type="number" name="precioLibro" value="<?php echo $precio;?>"><br><br>
                      Imagen: <br><input type="text" value="<?php echo $nombreImagen;?>" name="nombreImagen">&nbsp;<input type="file" name="File"><br><br>

            <input type="hidden" name="id_libro" value="<?php echo $id_libro;?>">
            <input type="hidden" name="nombreAntiguo" value="<?php echo $nombreImagen;?>">
            <input type="submit" value="Aceptar" name="enviarEditar">
        </form>

            <?php }else if($_SESSION['rol'] == "admin"){?>

            <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>" enctype="multipart/form-data">
                Titulo: <br><input type="text" name="tituloLibro" ><br><br>
            Autor: <br><input type="text" name="autorLibro" ><br><br>
            Categoria:<br>
            <select name="categoriaLibro">
                    <?php foreach ($categorias as $categoria) {
                        
                    ?>
                    <option value="<?php echo $categoria[0];?>"><?php echo $categoria[1];?></option>
                    <?php }?>
                </select>
                <br><br>
            Precio: <br><input type="number" name="precioLibro" ><br><br>
            Imagen: <br><input type="text" name="nombreImagen" >&nbsp;<input type="file" name="File"><br><br>


            <input type="submit" value="Aceptar" name="enviar">
        </form>
                <?php }?>
    <h1>Tabla Libros</h1>
    <br>
        <tr>
            <td>id_libro</td>
            <td>titulo</td>
            <td>autor</td>
            <td>Categoria</td>
            <td>precio</td>
            <td>imagen</td>

        </tr>
        <?php
foreach ($libros as $libro) { ?>
        <tr>    
            <td><?php echo $libro[0];?></td>
            <td><?php echo $libro["titulo"];?></td>
            <td><?php echo $libro["autor"];?></td>
            <td><?php echo $libro[6];?></td>
            <td><?php echo $libro["precio"];?></td>
            <td><img width="100px" height="150px" src="img/<?php echo $libro[5];?>" ></td>
            <?php if($_SESSION['rol'] == "admin"){?>

            <td class="edit-button"><a href="Libros.php?id_libro=<?php echo $libro[0];?>&editar">Editar</a></td>
            <td class="delete-button" ><a href="#" onclick="eliminarLibro('<?php echo $libro[0];?>','<?php echo $libro[1];?>','<?php echo $libro[5];?>')">Eliminar</a></td>
                <?php }?>
            </tr>
        <?php }?>
    </table>
</body>
</html>