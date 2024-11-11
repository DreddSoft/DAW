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
            padding: 1rem;

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
    <title>Ejercicio 20</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 20</h1><br>";

    function func_text($texto, $palabra, $palbrasProhibidas)
    {

        // Texto
        echo "<p>$texto</p>";

        // Calcular y mostrar la longitud del texto.
        echo "<p>Longitud del texto: " . strlen($texto) . ".</p>";

        // Calcular y mostrar el número de palabras que tiene el texto.
        $numPalabras = str_word_count($texto);

        // De forma manual
        // Convertirlo en array separado por espacios
        $arrPalabras = explode(" ", $texto);
        $numPalabras2 = count($arrPalabras);

        echo "<p>Número de palabras: $numPalabras2 (manual), $numPalabras (funcion propia php).</p>";

        // Contar el número de veces que aparece una palabra en concreto
        $numVecesPalabra = contarPalabra($palabra, $arrPalabras);
        echo "<p>Número de veces que aparece la palabra $palabra: $numVecesPalabra.</p>";

        // Cifrar palabras prohibidas
        $arrPalabras = reemplazarPalabras($arrPalabras, $palbrasProhibidas);

        // Mostramos
        echo "<p>Texto con las palabras prohibidas reemplazadas por astericos: " . implode(" ", $arrPalabras) ."</p>";

    }

    function contarPalabra($palabra, $arrBase)
    {
        $cnt = 0;

        foreach ($arrBase as $palabraArray) {

            if (strtolower($palabraArray) === strtolower($palabra)) {
                $cnt++;
            }
        }

        return $cnt;
    }

    function reemplazarPalabras ($arrPalabras, $arrPalabrasProh) {

        foreach ($arrPalabras as &$palabra) {

            foreach ($arrPalabrasProh as $prohibida) {
                if (strtolower($palabra) === strtolower($prohibida)) {
                    $cifrado = "";
                    for ($i = 0; $i < strlen($palabra); $i++) {
                        $cifrado .= "*";
                    }

                    $palabra = $cifrado;
                }
            }

        }

        return $arrPalabras;

    }

    //! Ojo: salen 21 palabras por la tilde de "Guillén", si quitamos la tilde coinciden el manual con la función propia
    $texto = "Todos los dias de la semana voy al IES Jorge Guillen porque estoy en segundo curso del ciclo formativo DAW";
    $palabra = "DAW";
    $palprohibidas = ["segundo", "DAW"];

    func_text($texto, $palabra, $palprohibidas);


    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>