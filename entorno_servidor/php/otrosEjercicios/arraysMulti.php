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

        }
    </style>
    <title>Arrays Multi</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'>";


    echo "<h1 style='text-align: center;'>Arrays Multi</h1>";

    $datosPers = [
        [
            "nombre" => "Maria",
            "apellido" => "Hernandez",
            "edad" => 23,
            "direccion" => [
                "localidad" => "nerja",
                "provincia" => "malaga"
            ]
        ],
        [
            "nombre" => "Elena",
            "apellido" => "Gamez",
            "edad" => 17,
            "direccion" => [
                "localidad" => "motril",
                "provincia" => "granada"
            ]
        ],
        [
            "nombre" => "Pedro",
            "apellido" => "Ruiz",
            "edad" => 17,
            "direccion" => [
                "localidad" => "torrox",
                "provincia" => "malaga"
            ]
        ]
    ];


    // var_export($datosPers);



    echo "<h3>Apartado 1: <br></h3>";
    echo "<br>Nombre: " . $datosPers[1]['nombre'] . ", edad: " . $datosPers[1]['edad'];

    echo "<br><br>";

    echo "<h3>Todos los datos: </h3><br>";
    foreach ($datosPers as $dato) {
        echo "Nombre: " . $dato['nombre'] . " " . $dato['apellido'] . "<br>";
        echo "Edad: " . $dato['edad'] . "<br>";
        echo "Localidad: " . $dato['direccion']['localidad'] . "<br>";
        echo "Provincia: " . $dato['direccion']['provincia'] . "<br>";
        echo "<hr>";
    }


    echo "<br><br>";

    echo "<h3>Menores de edad: </h3><br>";

    foreach ($datosPers as $dato) {

        if ($dato['edad'] < 18) {
            echo "Nombre: " . $dato['nombre'] . " " . $dato['apellido'] . "<br>";
            echo "Edad: " . $dato['edad'] . "<br>";
            echo "Localidad: " . $dato['direccion']['localidad'] . "<br>";
            echo "Provincia: " . $dato['direccion']['provincia'] . "<br>";
            echo "<hr>";
        }
    }


    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>