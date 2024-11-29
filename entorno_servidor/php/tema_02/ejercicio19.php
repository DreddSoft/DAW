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
    <title>Ejercicio 19</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 19</h1><br>";

    // Crear una función, llamada array_limite, que reciba un array de 20 números aleatorios
    // entre 1 y 100 y un número límite.
    // La función debe sustituir el array inicial con el contenido de los números menores al
    // número límite.

    //* Función para crear un array con numeros aleatorios
    function crearArrayAleatorio ($longitud, $min, $max) {

        for ($i = 0; $i < $longitud; $i++) {
            $arrFinal[$i] = rand($min, $max); 
        }

        return $arrFinal;

    }

    //* Función array_limite
    function array_limite ($limite, $arrBase) {

        foreach ($arrBase as $idx => $numero) {
            if ($numero > $limite) {
                unset($arrBase[$idx]);
            }
        }

        return $arrBase;

    }

    //* Función para imprimir array
    function mostrarArray ($arrBase) {

        $tabla = "<table>";

        foreach ($arrBase as $idx => $numero) {
            $tabla .= "<tr><td>$idx</td><td>$numero</td></tr>";
        }


        $tabla .= "</table>";

        echo $tabla;

    }

    echo "<h4>Crear array y mostrarlo: </h4>";
    $arrNumeros = crearArrayAleatorio(10, 1, 100);
    mostrarArray($arrNumeros);

    echo "<h4>Aplicar la función límite y mostrarlo: </h4>";
    $arrNumeros = array_limite(50, $arrNumeros);
    mostrarArray($arrNumeros);
    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>