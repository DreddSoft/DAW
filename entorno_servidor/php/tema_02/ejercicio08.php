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
    <title>Ejercicio 08</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'>";


    echo "<h1>Ejercicio 08 - Arrays</h1>";

    // Crear un array indexado, llamado array_numerico, con el siguiente contenido
    // $array_numerico = array(11, 20, 7, 2, 35, 12, 51, 1);   // Esta es una forma
    $array_numerico = [11, 20, 7, 2, 35, 12, 51, 1];

    // Crear un array asociativo, llamado array_provincias
    // $array_provincias = array(
    //     "pr1" => "Almeria",
    //     "pr2" => "Cadiz",
    // );  // Esto es una forma

    $array_provincias = [
        "pr1" => "Almeria",
        "pr2" => "Cadiz",
        "pr3" => "Cordoba",
        "pr4" => "Granada",
        "pr5" => "Huelva",
        "pr6" => "Jaen",
        "pr7" => "Malaga",
        "pr8" => "Sevilla"

    ];


    // Utilizando FOREACH mostrar el cotnenido de ambos
    //* Mostramos el númerico
    echo "<label>Los números: </label>";
    foreach ($array_numerico as $numero) {

        echo "$numero<br>";

    }

    //* Mostramos las provincias, con índice
    echo "<label>Las Provincias: </label>";

    foreach ($array_provincias as $key => $provincia) {
        echo "$provincia<br>";
    }


    //* Mostramos contenido cercando al par
    echo "<label>Los números pares: </label>";

    foreach ($array_numerico as &$numero) {

        if ($numero % 2 != 0)
            $numero++;
        
        echo "$numero<br>";

    }


    //* Mostrar contenido de provincias, con el Provincia de 
    echo "<label>Las Provincias con el texto extra: </label>";

    foreach ($array_provincias as &$provincia) {
        $provincia = "Provincia de $provincia";

        echo "$provincia<br>";
    }


    // Para mostrar el contenido de una variable (especialmente Arrays)
    var_export($array_numerico);
    echo "<br>";
    print_r($array_numerico);

    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>


</body>

</html>