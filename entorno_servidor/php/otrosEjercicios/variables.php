<?php

$titulo = "Forma corta de mostrar echo";

// Camel case
// $letraGrande;

// Snake case
// $letra_grande;

$age = 31;

$newAge = $age + '1';
$age3 = $age . '1';

// vardump , te dice el tipo de dato que es la variable
var_dump($age);
var_dump($newAge);
var_dump($age3);

// gettype() te dice el tipo de dato - util para mostrar los tipos
echo gettype($age);
echo gettype($newAge);
echo gettype($age3);

// Se puede hacer el casting de tipos
$age = (bool) 44;

$name = "Pedro";

//* CONTSTANTES EN PHP
// globlales con define
define('NOMBRE', "Andres");


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>

        :root {
            color-scheme: light dark;
        }

        body {
            display: grid;
            place-content: center;
        }
    </style>
    <title>Funciones</title>
</head>

<body>

    <h1>
        <!-- Forma corta de mostrar echo -->
        <?= $titulo ?>
    </h1>

    <?php 
    // Un gran problema de PHP es que no sanityze el codigo, entonces podemos mandar html y script por echo
    // "<script>alert('Te he pillado cabron')</script>"
    ?> 

    <h2>
        <?= "Hola $name, con una edad de $age" ?>
    </h2>

    <p><?= $age ?></p>
    <p><?= $newAge ?></p>
    <p><?= $age3 ?></p>

    <?=

    $var1 = "<p>Hola Dani</p>",
    $var2 = "<p>Como estas</p>";

    ?>

</body>

</html>