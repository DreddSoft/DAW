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
    </style>
    <title>Ejercicio 10</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'>";


    echo "<h1 style='text-align: center;'>Ejercicio 09 - Arrays</h1>";

    // Crear un array llamado num, que contenga 15 números aleatorios entre 1 y 50
    for ($i = 0; $i < 15; $i++) {
        $num[] = rand(1, 50);
    }

    // Generar dos arrays llamados num_cuadrado y num_cubo que almacene el cuadrado y el cubo de los valores del num
    foreach ($num as $idx => $n) {
        $num_cuadrado[$idx] = $n * $n;
        $num_cubo[$idx] = $n * $n * $n;

    }

    // Mostrar el contenido en una tabla
    echo "<table><tr><th>Base</th><th>Cuadrado</th><th>Cubo</th></tr>";

    // Dibujamos las celdas
    foreach ($num as $idx => $n) {
        echo "<tr><td>$n</td><td>$num_cuadrado[$idx]</td><td>$num_cubo[$idx]</td></tr>";

    }

    // Cerramos tabla
    echo "</table>";


    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>


</body>

</html>