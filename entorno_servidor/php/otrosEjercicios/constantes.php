<?php

//* CONSTANTES
// globales siempre con define
define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

$name = "Andres";
$age = 31;
$output = "Hola $name, con una edad de $age.";

// constantes locales
const NOMBRE = "Miguel";

// Ojo, las constantes no funcionan en tiempo de ejecucion (son como estaticas).

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root {
            color-scheme: light dark;
        }

        body {
            display: grid;
            place-content: center;
        }
    </style>
    <title>Constantes</title>
</head>

<body>
    <img src="<?= LOGO_PHP ?>" alt="PHP logo" srcset="" width="200">

    <h1>
        <?= $output ?>
    </h1>

    <h2>
        <?= NOMBRE ?>

    </h2>

</body>

</html>