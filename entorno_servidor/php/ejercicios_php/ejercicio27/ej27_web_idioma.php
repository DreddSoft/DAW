<?php


$idioma = "";

if (isset($_COOKIE['idioma'])) {

    $idioma = $_COOKIE['idioma'];
}


define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

/**
 * Ejercicio 27: Procesar idioma
 * author: @dreddsoft
 * date: 22/11/2024
 * version: 1.0
 */

?>
<!DOCTYPE html>
<html lang="<?= $idioma ?>">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Página para elegir idioma">
    <meta name="author" content="@dreddsoft">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ej27_estilos.css">
    <title>Muestra de Idioma</title>
</head>

<body>
    <?php if ($idioma == "en"): ?>
        <header>
            <img src="<?= LOGO_PHP ?>" alt="logo de PHP">
            <h1>Language website</h1>
        </header>


        <main>

            <div class="">
                <h3>Hello</h3>
                <p>Welcome to our website Page</p>
                <p>Page in English</p>
            </div>

            <button><a href="ej27_idioma.html">Back</a></button>



        </main>


        <footer>
            <h3>PHP Exercises - Server side</h3>
            <span>@AndresBonilla</span>
        </footer>

    <?php else: ?>
        <header>
            <img src="<?= LOGO_PHP ?>" alt="logo de PHP">
            <h1>Web del Idioma</h1>
        </header>


        <main>

            <div class="mensaje">
                <h3>Hola</h3>
                <p>Bienvenido a nuestra página web</p>
                <p>Página en español</p>
            </div>

            <button><a href="ej27_idioma.html">Volver</a></button>



        </main>


        <footer>
            <h3>Ejercicios de PHP - Entorno Servidor</h3>
            <span>@AndresBonilla</span>
        </footer>


    <?php endif; ?>

</body>

</html>