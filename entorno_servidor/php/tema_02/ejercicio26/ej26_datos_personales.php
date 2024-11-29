<?php
session_start();


// Si no esta verificado volvemos al formulario de acceso
if (!isset($_SESSION['usuario'])) {
    header("Location: ej26_login.php");
    exit();
}

$usuario = strtoupper($_SESSION['usuario']);

// Comprobamos que el metodo sea POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Guardamos los datos en la sesion
    $_SESSION['nombre'] = htmlspecialchars($_POST['nombre']);
    $_SESSION['apellidos'] = htmlspecialchars($_POST['apes']);
    $_SESSION['edad'] = htmlspecialchars($_POST['edad']);
    $_SESSION['email'] = htmlspecialchars($_POST['mail']);
    $_SESSION['provincia'] = htmlspecialchars($_POST['provincia']);

    // Redirigmos a la pagina adiciona
    header("Location: ej26_pag_adicional.php");
    exit();
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

    <title>Ejercicio 26 - Datos Personales</title>
</head>

<body>
    <header>
        <div class="upper-header">
            <img src="<?= LOGO_PHP ?>" alt="Logo de PHP">
        </div>

        <?php require 'menu_nav.php' ?>

    </header>

    <main>
        <div class="centrado">
            <h1>Ejercicio 26</h1>
            <h2>Datos Personales</h2>
        </div>

        <form action="ej26_datos_personales.php" method="post" enctype="application/x-www-form-urlencoded" autocomplete="off">
            <header>
                <h3>Login</h3>
            </header>

            <fieldset>
                <legend>Datos del usuario <?= $usuario ?></legend>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
                <input type="text" name="apes" id="apes" placeholder="Apellidos">
                <input type="number" name="edad" id="edad" placeholder="Edad" required>
                <input type="email" name="mail" id="mail" placeholder="Email" required>
                <input type="text" name="provincia" id="provincia" placeholder="Provincia">
            </fieldset>

            <div class="btns-wrapper">
                <button type="submit">Guardar</button>
                <button type="reset">Borrar</button>
            </div>
        </form>


    </main>

    <footer>
        <a href="ej26_cerrar_sesion.php"><img src="loguot_icon.svg" alt="Desconectar"></a>
        <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>
    </footer>

</body>

</html>