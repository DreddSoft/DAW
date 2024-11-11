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
    </style>
    <title>Ejercicio12</title>
</head>

<body>


    <?php

    //! TE AVISO NOEMÍ: raro de cojones, en clase lo explicaré

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 12 - Andrés Bonilla Tardío</h1><br>";

    // Declaramos array
    $enteros = [];

    // Bucle for para recorrer 20 posiciones y rellenar el array
    for ($i = 0; $i < 20; $i++) {

        // Rellenar array
        $enteros[] = rand(1, 50);

    }

    // Primera impresión
    echo "<h4>Impresión del array de números original</h4>";

    $tabla = "<table><tr>";

    foreach ($enteros as $idx => $entero) {
        $tabla .= "<td>$idx<br>$entero</td>";
    }

    $tabla .= "</tr></table>";

    echo $tabla;



    // Poner las primeras posiciones los pares, y después los impares
    echo "<h4>Crear y mostrar el array de pares primero</h4>";

    for ($i = 0, $j = 0; $i < count($enteros); $i++) {

        // Si el valor de $i es par
        if ($enteros[$i] % 2 == 0) {

            // El valor de las posiciones iniciales se guarda en temp
            $temp = $enteros[$j];

            // En las posiciones iniciales se guarda el valor par
            $enteros[$j] = $enteros[$i];

            // En la posición del entero, se guarda el valor de las iniciales.
            $enteros[$i] = $temp;

            // incrementa la posicion inicial a cambiar
            $j++;

        }   
        // no es par, sigue el bucle

    }


    $tabla = "<table><tr>";

    foreach ($enteros as $idx => $par) {
        $tabla .= "<td>$idx<br>$par</td>";

    }

    $tabla .= "</tr></table>";

    echo $tabla;


    










    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>