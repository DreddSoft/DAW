<?php
session_start();

// Variables definitivas 
$usuario_correcto = "Andres13";
$passw_correcto = "12345";
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

    }


} else {
    // die("HA MUERTO PORQUE NO ES POST.");
}


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
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        :root {
            color-scheme: light dark;
        }

        body {
            display: grid;
            place-content: center;
            place-items: center;

        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        header {
            justify-content: center;
            text-align: center;
            margin: 20px;

            & h2 {
                padding: 5px 0;
                border-bottom: 1px solid;
            }

        }

        form {
            display: flex;
            width: 75%;
            flex-direction: column;
            padding: 20px;
            border: 2px solid;
            border-radius: 18px;
            background-color: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(16px);
            box-shadow: 5px 5px 5px grey;
            align-self: center;
            margin: 20px 0;
        }

        legend {
            font-size: 30px;
            font-weight: 600;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .data {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            & label {
                width: 25%;
            }


            & input {
                width: 75%;
            }

        }

        .btns-wrapper {
            display: flex;
            flex-direction: row;
            gap: 2rem;

            & button {
                width: 50%;
            }
        }

        .rojo {
            color: red;
        }
    </style>
    <title>Ejercicio 26 - Bienvenida</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 26 - subida de imágenes</h1><br>";

    ?>

    <main>
        <header>
            <h1>Ejercicio 26</h1>
        </header>

        <form action="ej26_login.php" method="post" enctype="application/x-www-form-urlencoded">
            <header>
                <h2>Bienvenida</h2>
            </header>

            <fieldset>
                <legend>Datos de acceso</legend>
                <div class="data">
                    <label for="usuario">Usuario: </label>
                    <input type="text" name="usuario" id="usuario" required>
                </div>
                <div class="data">
                    <label for="passw">Contraseña: </label>
                    <input type="password" name="passw" id="passw" required>
                </div>
            </fieldset>

            <div class="btns-wrapper">
                <button type="submit">Acceder</button>
                <button type="reset" >Limpiar</button>
            </div>

            <?php if (!$acceso) : ?>
                <p class="rojo">Usuario o contraseña erróneos.</p>

            <?php endif; ?>
        </form>
    </main>




    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>