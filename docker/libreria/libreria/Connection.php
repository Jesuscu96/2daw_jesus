<?php 
ini_set("display_errors", 0);
ini_set("display_startup_errors", 0);
error_reporting(E_ALL);

class Connection{
    private $server = "mysql1";
    private $user = "root";
    private $password = "bbdd";
    private $db = "mibbdd";

    public function getConnection(){
          $conexion = new mysqli(
        $this->server,
        $this->user,
        $this->password,
        $this->db
    );

    // Verificar errores de conexión
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
    }

    public function closeConnection($conexion){
        $conexion->close();
    }
}
$con = new Connection();
$connection = $con->getConnection();
?>
