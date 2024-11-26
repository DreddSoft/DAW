<?php 

session_set_cookie_params(10);
session_start();

// Verificamos que el método de envío sea POST
if (!$_SERVER["REQUEST_METHOD"] == "POST") {
    // Si no es, redireccionamos al Login
    header("Location: ej_28_form_inicial.html");
    exit();

}

if (empty($_POST['usuario'])) {

}

// Capturamos las variables del post
$nombre = htmlspecialchars($_POST['nombre']);
$email = htmlspecialchars($_POST['email']);
$color = htmlspecialchars($_POST['color']);

// Creamos una cookie donde guardamos el nombre por 1 día
if (!isset($_POST['nombre'])) {
    setcookie("nombre_usu", "", time() + 100, "/");
}

setcookie("nombre_usu", $nombre, time() + 3600 * 24, "/");

// Verificamos si ya esta autentificado
if (isset($_SESSION['usuario'])) {
    header("Location: ej28_bienvenida.php");
    exit();
}

// Si no guardamos la info en sesiones
$_SESSION['nombre'] = $nombre;
$_SESSION['email'] = $email;
$_SESSION['color'] = $color;

header("Location: ej28_bienvenida.php");
exit();