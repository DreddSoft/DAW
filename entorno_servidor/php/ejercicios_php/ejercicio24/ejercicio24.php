<?php

// Guardamos en variables algunos de los parámetos
$nombre = htmlspecialchars($_POST['nombre']);
$numss = htmlspecialchars($_POST['numss']);
$error = false;

// Comprobamos si el parámetros numss es un dígito
// if (!preg_match("/^[0-9]+$/", $numss)) {
//     $numss = "ERROR";
// }

// Operador ternario para el texto que corresponde a la consulta 
$consulta = $_POST['consulta'] == 2 ? "Pediatría" : "Medicina General";

// Guardamos en variables.
if (empty($_POST['fecha'])) {
    $error = true;
}
$fecha = $_POST['fecha'];

// Condicional para el turno.
if (empty($_POST['turno'])) {
    $error = true;
    $turno = "";
} else if ($_POST['turno'] == 0) {
    $turno = "mañana";
}else if ($_POST['turno'] == 1) {
    $turno = "tarde";
} else {
    $turno = "noche";
}

// Construcción del mensaje
$mensaje = "<p>La cita para <b>$nombre.</b></p><p>Numero de la seguridad social $numss.</p><p>Consulta del tipo: $consulta.</p><p>Para el dia " . date('d-M-y', strtotime($fecha)) ." en el turno $turno.</p>";

if (strtotime($fecha) < strtotime("-1 day")) {
    $mensaje = "<p><b>ERROR!!!!</b>, no se ha podido realizar la cita porque la fecha es anterior a la de hoy.</p>";
} else if (strtotime($fecha) > strtotime("+1 month")) {
    $mensaje = "<p><b>ERROR!!!!</b>, el calendario de citas permite reservar hasta un mes de antelación pero no más.</p>";
}

if ($error) {
    $mensaje = "<p><b>ERROR!!!!</b> no se han completado todos los campos del formulario.</p>";
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

        .btn {
            padding: 10px;
            max-width: 200px;
            display: grid;
            place-self: center;
        }
        .mensaje {
            border: solid 2px grey;
            border-radius: 10px;
            padding: 25px;
            margin: 2rem;
            box-shadow: #aca5a57c 8px 8px 8px;
            background-color: #242424;
        }
        /* Modo claro */
        @media (prefers-color-scheme: light) {
            .mensaje {
                border: solid 2px #535353;
            border-radius: 10px;
            padding: 25px;
            margin: 2rem;
            box-shadow: grey 8px 8px 8px;
            background-color: #d1d1d1;
        }
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

    
    <div class="mensaje ">
        <h2>Resumen de la cita médica</h2>
        <?= $mensaje ?>
        <input type="button" value="Volver" class="btn" onclick="window.location.href='/formulario24.html'">
    </div>



    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>