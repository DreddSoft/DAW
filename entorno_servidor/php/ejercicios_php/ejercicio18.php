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
        p {
            text-align: start;
        }
    </style>
    <title>Ejercicio 18</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 18</h1><br>";

    //* Crear una función que reciba un array que contiene 5 palabras.
    $palabras = ["Radar", "Animal", "Periquito", "Reconocer", "Aula"];
    // [“Radar”, “Animal”, “Periquito”, “Reconocer”, “Aula”];

    function palindromo ($arrBase) {
        //* Usando la función predefinida de PHP strrev();

        foreach ($arrBase as $value) {
            $inversa = strrev($value);

            if (strtolower($inversa) == strtolower($value)) {
                echo "<p>¿Es $value una palabra palíndromo? SI, $inversa.</p>";
            } else {
                echo "<p>¿Es $value una palabra palíndromo? NO, $inversa.</p>";
            }
        }

    }

    function palindromo2 ($arrBase) {
        //* Sin usar la función

        // Hay que darle la vuelta a cada palabra
        foreach ($arrBase as $palabra) {
            $inversa = "";
            // Primero invertir la palabra y guardarla
            for ($i = strlen($palabra) - 1; $i >= 0 ; $i--) {
                $inversa .= $palabra[$i];

            }

            // Comprobamos
            if (strtolower($inversa) == strtolower($palabra)) {
                echo "<p>¿Es la palabra $palabra palíndromo? SI, $inversa.</p>";
            } else {
                echo "<p>¿Es la palabra $palabra palíndromo? NO, $inversa.</p>";
            }
        }

    }

    // Probamos las funciones
    echo "<h4>Probamos la primera función: </h4>";
    palindromo($palabras);

    echo "<h4>Probamos la segunda función: </h4>";
    palindromo2($palabras);

    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>