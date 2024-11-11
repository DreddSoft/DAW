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
    <title>Ejercicio 06</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='". LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'>";


    echo "<h1>Ejercicio 06 - Bucles y tablas</h1>";

    echo "<h2>Enunciado</h2>";
    echo "<p>Calcular el factorial de un número, teniendo en cuenta que el factorial de un número solo está definido para números enteros mayor o igual a 1. En otro caso debe salir un mensaje de error.</p>";

    //* Introduce aquí un número:
    $num = 6;

    if ($num > 0 && is_int($num)) {

        $multi = $num - 1;
        $resultado = $num * $multi;

        while ($multi > 1) {

            // Decrementamos el multiplicador.
            $multi--;

            // Guardamos en la variable resultado la multiplicacion
            // del numero por su multiplicador.
            $resultado = $resultado * $multi;
        }

        echo "<p>El factorial de $num es: $resultado</p>";
    } else {
        echo "<p>Error. No existe el factorial.</p>";
    }


    echo "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>"

    ?>


</body>

</html>