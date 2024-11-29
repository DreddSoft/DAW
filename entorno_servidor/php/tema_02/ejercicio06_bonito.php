<?php

function calcularFactorial($num)
{

    $multi = $num - 1;
    $resultado = $num * $multi;

    while ($multi > 1) {

        // Decrementamos el multiplicador.
        $multi--;

        // Guardamos en la variable resultado la multiplicacion
        // del numero por su multiplicador.
        $resultado = $resultado * $multi;
    }

    return $resultado;
}

function isValidNumber($num)
{

    if ($num >= 1)
        return true;

    return false;
}

?>

<!DOCTYPE html>
<html lang="en">

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

    echo "<h1>Ejercicio 06 - Bucles y tablas</h1>";

    echo "<h2>Enunciado</h2>";
    echo "<p>Calcular el factorial de un número, teniendo en cuenta que el factorial de un número solo está definido para números enteros mayor o igual a 1. En otro caso debe salir un mensaje de error.</p>";



    ?>

    <form method="POST" action="ejercicio06_bonito.php">
        <label for="numero">Introduce un número: </label>
        <input type="number" name="numero" id="numero" style="width: 200px;">
        <input type="submit" value="Calcular Factorial" style="width: 200px;">
    </form>

    <?php
    $num = $_REQUEST['numero'];

    if (isValidNumber($num)) {

        $res = calcularFactorial($num);

        echo "<p>El factorial de $num es: $res.</p>";
    } else {
        echo "<script>alert('El numero no es valido!!!!');</script>";
    }

    ?>

</body>

</html>