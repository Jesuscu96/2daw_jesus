function eliminarUsuario(idUsuario,usuario){
    if(confirm("Deseas eliminar el usuario "+usuario+"?")==true){
            location.href="Usuarios.php?id_usuario="+idUsuario+"&eliminar";
    }
}

function eliminarCategoria(idCategoria,categoria){
    if(confirm("Deseas eliminar la categoria "+categoria+"?")==true){
            location.href="Categorias.php?id_categoria="+idCategoria+"&eliminar";
    }
}

function eliminarLibro(idLibro,libro,nombreImagen){
    if(confirm("Deseas eliminar el libro "+libro+"?")==true){
            location.href="Libros.php?id_libro="+idLibro+"&nombreImagen="+nombreImagen+"&eliminar";
    }
}