<?php

$usuario = "";
$passw = "";

// Condicional que accede al modo subida de documentos
if (!empty($_FILES)) {
    $modoSubida = true;
} else {
    $modoSubida = false;
    $usuario = htmlspecialchars($_POST['user']);
    $passw = htmlspecialchars($_POST['passw']);
}


$usuarioCorrecto = "user1";
$passwCorrecta = "1234";

// Condicional que verifica el acceso
if ($usuario == $usuarioCorrecto && $passw == $passwCorrecta) {
    $acceso = true;
} else {
    $acceso = false;
}

/**
 * Ejercicio 25: Envío de ficheros desde un formulario
 * author: @dreddsoft
 * date: 16/11/2024
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
    </style>
    <title>Ejercicio 25</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 25 - subida de imágenes</h1><br>";

    ?>

    <?php if ($modoSubida):

        $nombreImg = $_FILES['imagen']['name'];
        $tamanoImg = $_FILES['imagen']['size'];
        $tipoImg = $_FILES['imagen']['type'];
        $tempImg = $_FILES['imagen']['tmp_name'];

        $ruta = "img_up/";

        $show = true;

        $mensaje = "La imagen se ha subido con exito.";

        $tamanoLimite = 1024 * 1024;

        if ($tamanoImg > $tamanoLimite) {
            $mensaje = "Error, el archivo subido es demasiado grande.";
            $show = false;
        } elseif ($tipoImg != "image/jpg" && $tipoImg != "image/png" && $tipoImg != "image/jpeg") {
            $mensaje = "La imagen es de un tipo no admitido, recuerda: JPG o PNG.";
            $show = false;
        }

        $rutaCompleta = $ruta . basename($nombreImg);

        //* Si es modo subida (ya ha enviado el file) se muestra el siguiente codigo html

    ?>

        <h3>Imagen subida</h3>
        <p><?= $usuario, $mensaje ?></p>

        <?php if ($show && move_uploaded_file($tempImg, $rutaCompleta)): ?>

            <img src="<?= $rutaCompleta ?>" width="600px" height="600px">

        <?php endif; ?>

        <br><br>


        <a href="formulario25.html"><button>Volver Formulario</button></a>




    <?php elseif (!$modoSubida && $acceso):
        //* Si no es modo subida (no ha pasado por el input file) pero el acceso es correcto se muestra el siguiente codigo html
    ?>

        <!-- Si no hay documento, accede al Formulario para subir la imagen -->
        <form action="ejercicio25.php" method="post" enctype="multipart/form-data">

            <h2>Subida de imágenes</h2>

            <fieldset style="display: flex; justify-content: center;">
                <label for="imagen" class="drop-file-box">
                    <img src="img_up/upload-icon.svg" alt="Subir documento" style="width: 75px; cursor: pointer; float:inline-start">
                    <input type="file" name="imagen" id="imagen" hidden>
                </label>
                
                

            </fieldset>

            <fieldset class="horizontal">
                <button type="submit">Subir</button>
                <button type="reset">Limpiar</button>

            </fieldset>

        </form>


    <?php else:
        //* Si no ha subido archivo ni ha accedido corrrectamente, se muestra el siguiente código HTML
    ?>

        <div class="error">

            <h3>Error</h3>
            <span>las credenciales de acceso no corresponden.</span>
            <br>
            <a href="formulario25.html"><button>Volver</button></a>

        </div>

    <?php endif; ?>

    <br>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>