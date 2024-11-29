<?php
session_start();


// Si no esta verificado volvemos al formulario de acceso
if (!isset($_SESSION['usuario'])) {
    header("Location: ej26_login.php");
    exit();
}

$usuario = strtoupper($_SESSION['usuario']);


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

    <title>Ejercicio 26 - Bienvenida</title>
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
            <h2>Bienvenida</h2>
        </div>


        <section class="mensaje">
            <h3>Hola <?= $usuario ?></h3>
            <p>La fecha de hoy es: <?= date('d/m/Y', strtotime('now')) ?></p>
            <p>Has podido acceder correctamente a esta pagina de bienvenida</p>
        </section>
    </main>


    <footer>
        <a href="ej26_cerrar_sesion.php"><img src="loguot_icon.svg" alt="Desconectar"></a>
        <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>
    </footer>

</body>

</html>