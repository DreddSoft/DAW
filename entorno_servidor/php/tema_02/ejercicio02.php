<?php 


echo "<h1>Ejercicio 02 - Estructuras de control de flujo (01/10/2024)</h1>";

$productPrice = 820;

echo "<p>Precio del articulo: <b><i>$productPrice euros.</i></b></p>";

echo "<p>El precio pagando con tarjeta es de <b><i>" . number_format($productPrice * 0.85, 2, ",", "") . " euros</i></b></p>";

echo "<p>El precio pagando en efectivo es de <b><i>" . number_format($productPrice * 0.75, 2, ",", "") ." euros</i></b></p>";


?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 02</title>
</head>
<body>
    
</body>
</html>