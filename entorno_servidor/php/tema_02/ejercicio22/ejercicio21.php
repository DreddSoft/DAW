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

        .btn {
            padding: 10px;
            max-width: 200px;
        }
    </style>
    <title>Ejercicio 21</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 21</h1><br>";

    $mensaje = "";
    
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    if (empty($num1) || empty($num2)) {
        $mensaje = "Error, faltan parámetros.";
    } else if (!is_numeric($num1) || !is_numeric($num2)) {
        $mensaje = "Error, los parámetros deben ser numéricos.";
    } else {
        $mensaje = "El resultado de la suma es: " . $num1 + $num2 . "<br>";
        $mensaje .= "\nEl resultado de la resta es: " . $num1 - $num2 . "<br>";
        $mensaje .= "\nEl resultado de la multiplicación es: " . $num1 * $num2 . "<br>";
        if ($num2 == 0) {
            $mensaje .= "\nNo se puede realizar la división por que el divisor es $num2.";

        }
        $mensaje .= "\nEl resultado de la división es: " . $num1 / $num2;

    }

    echo "<p>$mensaje</p>";

    ?>

    <!-- Botón para volver -->
     <input type="button" value="Volver" onclick="window.location.href = '../formularios/formulario22.html'" class="btn">

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>