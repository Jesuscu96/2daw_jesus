<?php 
session_start();
if($_SESSION["rol"] != "admin"){
    header("location: index.php?sinPermisos");
}

?>