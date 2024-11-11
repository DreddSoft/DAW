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
    <title>Ejercicio 16</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 16</h1><br>";

    //* Crear una función llamada array_aleatorio(); que reciba 3 parámetros para obtener un array con números aleatorios. Los tres parámetros son: tamaño del array y el rango de los números aleatorios.
    function array_aleatorio($longitud, $minimo, $maximo) {

        for ($i = 0; $i < $longitud; $i++) {

            $arrResult[] = rand($minimo, $maximo);

        }

        return $arrResult;
    }

    //* Crear una función llamada array_ej16, que reciba un parámetro que será el array generado en la función array_aleatorio() creada anteriormente, realizando las siguientes operaciones sobre los valores del array:
    //* ◦ Multiplicar por 2 los valores pares.
    //* ◦ Sumar 1 a los valores impares.
    function array_ej16 ($arrBase) {

        $arrTemp = $arrBase;
        // Multiplica por 2 y muestra
        foreach ($arrTemp as &$valor) {

            $valor *= 2;

        }
        impresion($arrTemp);

        $arrTemp = $arrBase;
        // Sumar 1 a los valores impares
        foreach ($arrTemp as &$valor) {

            if ($valor % 2 !== 0) {
                $valor++;
            }

        }

        impresion($arrTemp);

    }

    function impresion ($arrBase) {

        $tabla = "<table>";

        $tabla .= "<tr>";

        // Valores
        foreach ($arrBase as $idx => $value) {
            $tabla .= "<td>$value</td>";
        }

        $tabla .= "</tr>";

        $tabla .= "</table>";

        echo $tabla;

    }


    // Creamos array aleatorio
    $arrAleatorio = array_aleatorio(5, 1, 10);
    impresion($arrAleatorio);

    array_ej16($arrAleatorio);


    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>