<?php

//! ESTO ES OTRA FORMA DE HACER

$usuario = htmlspecialchars($_GET['user']);


?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css">
    <style>
        :root {
            color-scheme: light dark;
        }

        body {
            display: grid;
            place-content: center;
            place-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .btn-field {
            margin: 25px;
            place-content: center;
        }

        .btn {
            padding: 10px;
            max-width: 200px;
            display: grid;
            place-self: center;
        }

        img {
            display: grid;
            place-self: center;
            margin-bottom: 2rem;
        }

        form {
            border: solid 2px grey;
            border-radius: 10px;
            padding: 50px;
            margin: 2rem;
            box-shadow: #aca5a57c 8px 8px 8px;
            background-color: #242424;
        }

        /* Modo claro */
        @media (prefers-color-scheme: light) {
            form {
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
    <title>Formulario acceso Ejercicio 25 v2</title>
</head>

<body>



    <form action="ejercicio25_v3.php" method="post" enctype="multipart/form-data">

        <img src="https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n"
            alt="" style="place-self: center; width: 200px;">

        <br>

        <h2>Subida de imágenes</h2>
        <!-- Esta es otra opción para guardar la variable del usuario -->
         <input type="text" name="user" id="user" value="<?= $usuario; ?>" hidden>

        <fieldset>
            
        </fieldset>

        <fieldset style="display: flex; justify-content: center;">
            <label for="imagen" class="drop-file-box">
                <img src="image_up/upload-icon.svg" alt="Subir documento"
                    style="width: 75px; cursor: pointer; float:inline-start">
                <input type="file" name="imagen" id="imagen" hidden>
            </label>



        </fieldset>

        <fieldset class="horizontal">
            <button type="submit">Subir</button>
            <button type="reset">Limpiar</button>

        </fieldset>

    </form>

</body>

</html>