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

        p {
            text-align: left;
        }
    </style>
    <title>Ejercicios de Clase - Arrays Multidimensionales</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px; margin: 20px;'>";


    echo "<h1 style='text-align: center;'>Ejercicios de Clase - Arrays Multidimensionales</h1><br>";

    $arrAnimales = [
        "aves" => [
            "paloma",
            "aguila",
            "periquito"
        ],
        "reptiles" => [
            "boa",
            "culebra",
            "lagarto",
            "camaleon"
        ]
    ];

    $arrAnimales2 = [
        "aves" => [
            "paloma",
            "aguila",
            "periquito"
        ],
        "reptiles" => [
            "boa",
            "culebra",
            "lagarto",
            "camaleon"
        ],
        "acuaticos" => [
            "mamiferos" => [
                "delfin",
                "ballena"
            ],
            "peces" => [
                "boqueron",
                "tiburon",
                "atun"
            ]
        ]
    ];


    echo "<p>Animales con count(COUNT_RECURSIVE): " . count($arrAnimales, COUNT_RECURSIVE) . "</p>";
    echo "<p>Animales2 con count(COUNT_RECURSIVE): " . count($arrAnimales2, COUNT_RECURSIVE) . "</p>";
    echo "<p>Animales con sizeof(COUNT_RECURSIVE): " . sizeof($arrAnimales, COUNT_RECURSIVE) . "</p>";
    echo "<p>Animales2 con sizeof(COUNT_RECURSIVE): " . sizeof($arrAnimales2, COUNT_RECURSIVE) . "</p>";

    echo "<h4>Contar los elementos del array multidimensional con foreach:</h4>";

    $cnt = 0;
    foreach ($arrAnimales as $animales) {
        $cnt++;
        foreach ($animales as $animal) {
            $cnt++;
        }
    }

    echo "<p>El numero de elementos del ArrayAnimales es: $cnt</p>";

    // Contar arrAnimales2 recorriendo con foreach para imitar la función count(COUNT_RECURSIVE)
    $cnt = 0;
    foreach ($arrAnimales2 as $animales) {
        $cnt++;
        foreach ($animales as $animal) {
            $cnt++;
            if (is_array($animal)) {
                foreach ($animal as $especie) {
                    $cnt++;

                }
            }
        }
    }

    echo "<p>El numero de elementos del ArrayAnimales2 es: $cnt</p>";















    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>