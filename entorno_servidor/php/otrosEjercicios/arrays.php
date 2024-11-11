<?php

define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

// Arrays usando corchetes
$bestLanguages = ["PHP", "JavaScript", "Java", "Python", 1, 2];

// Son arrays dinamicos, podemos anadir el tipo de dato que queramos
$bestLanguages[2] = "TypeScript";   // Anade en esa posicion  y elimina
$bestLanguages[] = "Java";  // Esto lo anade al final

// Arrays con clave (tipo map) Arrays asociativos
$person = [
    "name" => "Andres",
    "age" => 31,
    "isDev" => true,
    "languages" => ["PHP", "Java", "JavaScript", "Python"]

];

// Anadir en el array dentro del array
$person['languages'][] = "Otro";


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
    <title>ArraysenPHP</title>
</head>

<body>

    <img src="<?= LOGO_PHP ?>" alt="PHP logo" srcset="" width="200">

    <?php for ($i = 0; $i < sizeof($bestLanguages); $i++) :  ?>
        <p><?= $bestLanguages[$i] ?></p>

    <?php endfor; ?>

    <!-- For each -->
    <?php foreach ($bestLanguages as $languages) : ?>
        <ul>
            <li><?= $languages ?></li>
        </ul>
    <?php endforeach; ?>

    <!-- For each para sacar el indice -->
     <?php foreach ($bestLanguages as $key => $languages) : ?>
        <li><?= $key . " " . $languages ?></li>
    <?php endforeach; ?>

</body>

</html>