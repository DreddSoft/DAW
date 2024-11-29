<?php 
// session_set_cookie_params(60);
// Mantenmos sesion abierta
session_start();

// Borramos la cookie
setcookie("nombre_usu", "", time() - 3600, "/");
setcookie("PHPSESSID", "", time() - 3600, "/");

// Borramos la info
session_unset();

// Destruimos la sesion
session_destroy();

// Redireccionamos al login
header("Location: ej28_form_inicial.html");
exit();
