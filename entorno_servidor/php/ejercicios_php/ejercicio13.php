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
    </style>
    <title>Ejercicio13</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 13</h1><br>";

    // Creamos y rellenamos un array con 15 numeros entre 1 y 20, que no se repitan
    $numColor = [];
    for ($i = 0; $i < 15; $i++) {

        while (true) {
            $num = rand(1, 20);

            if (!in_array($num, $numColor)) {
                $numColor[$i] = $num;
                break;
            } 
        }

    }

    // Impresion

    echo "<h4>Impresión del array de numeros por colores</h4>";

    $tabla = "<table>";

    $tabla .= "<tr>";

    // bucle para imprimir los indices
    foreach ($numColor as $key => $num) {
        $tabla .= "<td>$key</td>";
    }

    $tabla .= "</tr>";

    $tabla .= "<tr>";

    // bucle para imprimir los numeros
    foreach ($numColor as $key => $num) {
        if ($num % 2 == 0)
            $tabla .= "<td class='verde'>$num</td>";
        else
            $tabla .= "<td class='rojo'>$num</td>";
    }

    $tabla .= "</tr>";


    $tabla .= "</table>";

    echo $tabla;


    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>