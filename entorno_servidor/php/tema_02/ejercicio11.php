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
    <title>Ejercicio11</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'>";


    echo "<h1 style='text-align: center;'>Ejercicio 11</h1>";

    $ordenadores = [
        [
            [
                "marca" => "HP",
                "procesador" => "intel i5",
                "precio" => 623
            ],
            [
                "marca" => "LENOVO",
                "procesador" => "intel i7",
                "precio" => 924
            ]

        ],
        [
            [
                "marca" => "HP",
                "procesador" => "AMD Ryzen 5",
                "monitor" => "LG 23.8p",
                "precio" => 710
            ],
            [
                "marca" => "ACER",
                "procesador" => "intel i5",
                "monitor" => "MSI 27p",
                "precio" => 685
            ]
        ]
    ];



    echo "<h4>Mostrar el contenido del array con su tamaño, tipos y datos:</h4>";
    echo "<br>";
    var_export($ordenadores);
    echo "<br>";


    echo "<h4>Mostrar un listado del contenido del array</h4>";

    for ($i = 0; $i < sizeof($ordenadores); $i++) {

        if ($i == 0) {
            echo "<h5>Portatiles: </h5><br>";
        } else {
            echo "<h5>Sobremesas: </h5><br>";
        }

        foreach ($ordenadores[$i] as $equipo) {

            echo "Marca: " . $equipo['marca'] . "<br>";
            echo "Procesador: " . $equipo['procesador'] . "<br>";
            if (!empty($equipo['monitor'])) {
                echo "Monitor: " . $equipo['monitor'] . "<br>";

            }
            echo "Precio: " . $equipo['precio'] . "<br>";
            echo "<hr>";
        }
    }


    // Añadir un portaltil
    $ordenadores[0][] = [
        "marca" => "LENOVO",
        "procesador" => "intel i5",
        "precio" => 503
    ];

    // Añadir un sobremesa
    $ordenadores[1][] = [
        "marca" => "LENOVO",
        "procesador" => "intel i5",
        "monitor" => "ASUS 23.8p",
        "precio" => 740
    ];


    echo "<h4>Mostrar de nuevo</h4>";
    echo "<br>";

    for ($i = 0; $i < sizeof($ordenadores); $i++) {

        if ($i == 0) {
            echo "<h5>Portatiles: </h5><br>";
        } else {
            echo "<h5>Sobremesas: </h5><br>";
        }

        foreach ($ordenadores[$i] as $equipo) {

            echo "Marca: " . $equipo['marca'] . "<br>";
            echo "Procesador: " . $equipo['procesador'] . "<br>";
            if (!empty($equipo['monitor'])) {
                echo "Monitor: " . $equipo['monitor'] . "<br>";

            }
            echo "Precio: " . $equipo['precio'] . "<br>";
            echo "<hr>";
        }
    }




    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>