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
    <title>Ejercicio 09</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'>";


    echo "<h1 style='text-align: center;'>Ejercicio 09 - Arrays</h1>";

        // Quiero que creeis un array de numeros aleatorios (tamaño array = 20) 
        // Números aleatorios = bound 1 - limit 40

        // Rellenar Array
        for ($i = 0; $i < 20; $i++) {

            $arr[] = rand(1, 40);

        }

        // Mostrar los números que sean divisibles entre 4
        echo "<label>Números del array que son divisibles entre 4: </label>";
        foreach ($arr as $key => $num) {

            if ($num % 4 == 0) {
                print_r($num);
                echo "<br>";
            }

            
        }
        echo "<br><br>";

        // Mostrar los números que sean divisibles entre * 2
        echo "<label>Todos los números del array y los divisibles por 4, se multiplican por 2:</label>";
        foreach ($arr as $key => &$num) {

            if ($num % 4 == 0) 
                print_r($num * 2);
            else 
                print_r($num);

            echo "<br>";
            

        }


    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>


</body>

</html>