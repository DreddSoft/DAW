<?php

define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

// Constantes de la API
const API_URL = "https://whenisthenextmcufilm.com/api";

// Llamadas a API en PHP
// Inicializamos una nueva sesion cURL; ch = cURL handle
$ch = curl_init(API_URL);
# Indicar que queremos recibir el resultao de la peticion y no mostrarla en pantalla
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
/*
Ejecuta la peticion
y guarda el resultado
*/

// $result = curl_exec($ch);

// una alternativa seria utilizar file_get_contents
$result = file_get_contents(API_URL); // si solo quieres hacer un GET de una API

$data = json_decode($result, true); // El true nos lo pone en un array asociativo

// // Cerrar la conexion
// curl_close($ch);


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
        }

        section {
            place-content: center;
            justify-content: center;
            align-items: center;
            justify-items: center;
            
        }

        img {
            border-radius: 16px;
            margin-bottom: 1rem;
        } 
    </style>
    <title>La proxima pelicula de MARVEL</title>
</head>

<body>

    <?php

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";

    ?>

    <main>
        <section>
            <img src="<?= $data["poster_url"] ?>" alt="Poster de <?= $data["title"] ?>" width="200">
            <h2>La proxima pelicula de MARVEL</h2>
        </section>

        <hgroup>
            <h3><?= $data["title"]?> se estrena en <?= $data["days_until"] ?> dias.</h3>
            <p>Fecha de estreno: <?= date("dd/MM/yyyy", strtotime($data["release_date"])) ?></p>
            <p>La siguiente es: <b><?= $data["following_production"]["title"] ?></b></p>
        </hgroup>
    </main>





</body>

</html>