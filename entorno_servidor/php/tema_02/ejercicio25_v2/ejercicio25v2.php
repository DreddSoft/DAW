<?php
// Esto es para las sesiones
session_start();



if ($_SERVER['REQUEST_METHOD'] == "POST") {

    // Condicional que accede al modo subida de documentos
    if (!empty($_FILES)) {
        $modoSubida = true;
        $usuario = $_SESSION['usuario'];
    } else {
        $modoSubida = false;
        $_SESSION['usuario'] = htmlspecialchars($_POST['user']);
        $usuario = htmlspecialchars($_SESSION['usuario']);
        $passw = htmlspecialchars($_POST['passw']);

        $usuarioCorrecto = "user1";
        $passwCorrecta = "1234";

        // Condicional que verifica el acceso
        if ($usuario == $usuarioCorrecto && $passw == $passwCorrecta) {
            header("Location: form_bienve25.php?usuario=$usuario");
        }
    }
} else {
    header("Location: formulario25v2.html");
}


/**
 * Ejercicio 25: Envío de ficheros desde un formulario
 * author: @dreddsoft
 * date: 18/11/2024
 * version: 2.0
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
        :root {
            color-scheme: light dark;
        }

        body {
            display: grid;
            place-content: center;
            place-items: center;

        }

        .rojo {
            color: red;
        }

        .verde {
            color: green;
        }

        h4 {
            text-align: start;
            width: 100%;
        }

        .btn {
            padding: 10px;
            max-width: 200px;
            display: grid;
            place-self: center;
        }

        .mensaje {
            border: solid 2px grey;
            border-radius: 10px;
            padding: 25px;
            margin: 2rem;
            box-shadow: #aca5a57c 8px 8px 8px;
            background-color: #242424;
        }

        /* Modo claro */
        @media (prefers-color-scheme: light) {
            .mensaje {
                border: solid 2px #535353;
                border-radius: 10px;
                padding: 25px;
                margin: 2rem;
                box-shadow: grey 8px 8px 8px;
                background-color: #d1d1d1;
            }
        }

        .horizontal {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
        }

        .error {
            display: flex;
            flex-direction: column;
            align-items: center;
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(87, 0, 0, 0.50);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.125);
            padding: 2rem;
        }

        .drop-file-box {

            width: 250px;
            height: 250px;
            border: 1px dotted #242424;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px) saturate(100%);
            cursor: pointer;

        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
    <title>Ejercicio 25 v2</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 25 v2 - subida de imágenes</h1><br>";


    if ($modoSubida) :

        $nombreImg = $_FILES['imagen']['name'];
        $tamanoImg = $_FILES['imagen']['size'];
        $tipoImg = $_FILES['imagen']['type'];
        $tempImg = $_FILES['imagen']['tmp_name'];

        $ruta = "image_up/";

        $show = true;

        $mensaje = "La imagen se ha subido con exito.";

        $tamanoLimite = 2 * (1024 * 1024);

        $rutaTemp = $tempImg . basename($nombreImg);

        if ($tamanoImg > $tamanoLimite) {
            $mensaje = "Error, el archivo subido es demasiado grande.";
            $show = false;
        } elseif (exif_imagetype($tempImg)) {
            $mensaje = "La imagen se ha subido correctamente..";
            $show = true;
        } else {
            $mensaje = "Error, no se ha subido una imagen.";
            $show = false;
        }




        $rutaCompleta = $ruta . basename($nombreImg);



    ?>

        <?php if ($show && move_uploaded_file($tempImg, $rutaCompleta)):
            global $usuario;
        ?>
            <main>
                <h2>Subida de Imagen</h2>
                <p><?= $_SESSION['usuario'] . " - " . $mensaje ?></p>

                <img src="<?= $rutaCompleta ?>" alt="Imagen subida" style="width: 300px;">


            </main>

        <?php else: ?>

            <main>
                <h2>Subida de Imagen</h2>
                <p><?= $_SESSION['usuario'] . " - " . $mensaje ?></p>

            </main>
        <?php endif; ?>


    <?php else :
        exit("Error grande, algo no ha salido bien.");


    endif;

    ?>


    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>