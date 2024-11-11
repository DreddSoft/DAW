<?php

$vector1 = array("Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla");

$vector2 = array(
    "art1" => "Impresora 3D",
    "art2" => "Monitor INVEs",
    "art3" => "Teclado Logitech G",
    "art4" => "Impresora HP",
    "iva" => 0.28,
    "fra" => FALSE
);

// $dumpText = var_dump($vector1);
$impuesto = number_format($vector2['iva'] * 100, 2, ",", "");



?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 - Tema 2</title>
</head>

<body style="box-sizing:border-box; margin: 0;">

    <?php include("./include/header.php"); ?>

    <?php 
    echo "<h1 style='display: flex; flex-direction: row; justify-content: center; text-align:center;'>EJERCICIO 1 TEMA 2. Andres Bonilla Tardío</h1>";

    echo var_dump($vector1);

    echo "<h2>La capital de Andalucía es $vector1[7]</h2>";

    echo "<p>Articulo 4: " . $vector2['art4'] . "</p>";

    echo "<p>El articulo " . $vector2['art1'] . " tiene asociado un impuesto del $impuesto  %</p>";

    echo "<b>Factura: " . json_encode($vector2['fra']) . "</b>";

    ?>

</body>

</html>