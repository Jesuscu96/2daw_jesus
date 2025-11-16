<?php 
require_once("Connection.php");

class Usuarios{
    public function showUsuario(){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "SELECT usuarios.*, roles.nombre_roles from usuarios JOIN roles on roles.id_rol=usuarios.rol";
        $result = $mySQL->query($sql);

        return $result->fetch_all(MYSQLI_BOTH);
        //print_r($result->fetch_array());

    }

    public function addUsuario($data){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "INSERT INTO usuarios (usuario, password, rol) VALUES ('$data[0]', '$data[1]', '$data[2]')";
        $mySQL->query($sql);
        $sqlConnection->closeConnection($mySQL);
    }

    public function editUsuario($data){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "UPDATE usuarios SET usuario = '$data[1]', password = '$data[2]', rol = '$data[3]' WHERE id_usuario = '$data[0]'";
        $mySQL->query($sql) or die($mySQL->error);
        $sqlConnection->closeConnection($mySQL);
    }

    public function deleteUsuario($data){
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "DELETE FROM usuarios WHERE id_usuario = $data[0]";
        $mySQL->query($sql);
        $sqlConnection->closeConnection($mySQL);
    }

    public function showOneUsuario($data)
    {
        $sqlConnection = new Connection();
        $mySQL = $sqlConnection->getConnection();
        $sql = "SELECT * FROM usuarios WHERE usuarios.id_usuario = $data[0]";
        $result = $mySQL->query($sql);
        $sqlConnection->closeConnection($mySQL);
        return $result->fetch_array(MYSQLI_BOTH);
    }
}




?>