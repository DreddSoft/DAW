<?php 

// Mantenmos sesion abierta
session_start();

// Borramos la info
session_unset();

// Destruimos la sesion
session_destroy();

// Redireccionamos al login
header("Location: ej26_login.php");
exit();
