<?php 
require_once("Connection.php");

class Libros{
    public function showLibros(){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "SELECT libros.*,categorias.categoria FROM libros JOIN categorias ON libros.id_categoria=categorias.id_categoria";
        $result = $mySQL->query($sql);

        return $result->fetch_all(MYSQLI_BOTH);
        //print_r($result->fetch_array());

    }

    public function addLibro($data){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "INSERT INTO libros (titulo, autor, id_categoria,precio,img) VALUES ('$data[0]', '$data[1]', '$data[2]','$data[3]','$data[4]')";
        $mySQL->query($sql) or die($mySQL->error);
        $sqlConnection->closeConnection($mySQL);
    }

    public function editLibro($data){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "UPDATE libros SET titulo = '$data[1]', autor = '$data[2]', id_categoria = '$data[3]', precio = '$data[4]', img = '$data[5]' WHERE id_libro = '$data[0]'";
        $mySQL->query($sql);
        $sqlConnection->closeConnection($mySQL);
    }

    public function deleteLibro($data){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "DELETE FROM libros WHERE id_libro = $data[0]";
        $mySQL->query($sql);
        $sqlConnection->closeConnection($mySQL);
    }
    public function showOneLibro($data)
    {
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "SELECT * FROM libros WHERE libros.id_libro = $data[0]";
        $result = $mySQL->query($sql);
        $sqlConnection->closeConnection($mySQL);
        return $result->fetch_array(MYSQLI_BOTH);
    }
}




?>