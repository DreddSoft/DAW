<?php

$nombre = $_POST['nombre'];
$numss = $_POST['numss'];

if (!preg_match("/^[0-9]+$/", $numss)) {
    $numss = "ERROR";
}

$consulta = $_POST['consulta'] == 1 ? "Medicina General" : "Pediatria";
$fecha = $_POST['fecha'];
if ($_POST['turno'] == 0) {
    $turno = "mañana";
} else if ($_POST['turno'] == 1) {
    $turno = "tarde";
    
} else {
    $turno = "noche";
}

$mensaje = "La cita para $nombre con numero de la seguridad social $numss, para la consulta $consulta el dia $fecha en el turno $turno";

if (strtotime($fecha) < strtotime("-1 day")) {
    $mensaje = "Error, no se ha podido realizar la cita porque la fecha es anterior a la de hoy.";

} else if (strtotime($fecha) > strtotime("+1 month")) {
    $mensaje = "Error, el calendario de citas permite reservar hasta un mes de antelación pero no más.";
}

?>
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
    <title>Ejercicio 24</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 24</h1><br>";

    ?>

    <h2>Resumen de la cita médica</h2>
    <p><?= $mensaje ?></p>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>