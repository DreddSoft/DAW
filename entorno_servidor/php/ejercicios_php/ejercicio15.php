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
    </style>
    <title>Ejercicio 15</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 15</h1><br>";

    //* Crear un array que contiene la información sobre productos y precios:

    $articulos = [
        "teclado" => 58,
        "raton" => 32,
        "impresora" => 185,
        "altavoz" => 62,
        "auriculares" => 36,
        "monitor" => 102,
        "webcam" => 47
    ];

    //* Crear una función que devuelva el contenido de uno de los elementos del array \$articulos.
    function muestraArticulo ($posicion, $array) {

        if ($posicion < 0 || $posicion > count($array)) {
            echo "Se ha introducido una posición que no contiene ningún valor.";

        } else {
            $cnt = 0;
            foreach ($array as $idx => $valor) {
                if ($cnt == $posicion) {
                    echo $idx . " - " . $valor;
                }
                $cnt++;
            }
        }

    }

    // Hacemos uso de la función
    $pos = 4;
    echo "<h4>Se muestra el articulo de la posición: $pos</h4>";
    muestraArticulo($pos, $articulos);



    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>