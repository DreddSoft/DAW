<?php
session_start();

// Verificamos si ya esta autentificado
if (isset($_SESSION['usuario'])) {
    header("Location: ej26_bienvenido.php");
    exit();
}

// Variables definitivas 
$usuario_correcto = "Andres13";
$passw_correcto = "12345";
$show = false;
// Que tenemos que hacer??
// Primero comprobar que el método de envío se POST, si es así continua, si no die

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Capturamos los post en variables
    $usuario = htmlspecialchars($_POST['usuario']);
    $passw = htmlspecialchars($_POST['passw']);

    // Booleano acceso
    $acceso = ($usuario == $usuario_correcto && $passw == $passw_correcto)
        ? true
        : false;

    // Comprobamos que usuario y contraseña son correctos
    if ($acceso) {

        // Guardamos los datos en session
        $_SESSION['usuario'] = $usuario;
        $_SESSION['passw'] = $passw;

        // Redirigimos
        header("Location: ej26_bienvenida.php");
        exit();
    } else {
        $show = true;
    }
}


define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

/**
 * Ejercicio 26: Formulario de acceso
 * author: @dreddsoft
 * date: 19/11/2024
 * version: 1.0
 */

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Formulario de acceso">
    <meta name="author" content="@dreddsoft">
    <link rel="stylesheet" href="estilos.css">
    <title>Ejercicio 26 - Login</title>
</head>

<body>

    <main>

        <img src="<?= LOGO_PHP ?>" alt="Logo de PHP">

        <h1>Ejercicio 26</h1>

        <h2>Formulario de Acceso</h2>
        <form action="ej26_login.php" method="post" enctype="application/x-www-form-urlencoded">
            <header>
                <h3>Login</h3>
            </header>

            <fieldset>
                <legend>Datos de acceso</legend>
                <input type="text" name="usuario" id="usuario" required placeholder="Usuario">
                <input type="password" name="passw" id="passw" required placeholder="Contraseña">
            </fieldset>

            <div class="btns-wrapper">
                <button type="submit">Acceder</button>
                <button type="reset">Limpiar</button>
            </div>

            <?php if ($show) : ?>
                <div class="error-show">
                    <p>Usuario o contraseña erróneos.</p>
                </div>
            <?php endif; ?>
        </form>
    </main>




    <?= "<h4 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h4>" ?>

</body>

</html>