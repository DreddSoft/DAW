<?php

$name = "Andres";
$isDev = true;
$age = 31;

$output = "Hola $name, con una edad de $age.";

// La condicion se puede declarar en una variable
$isOld = $age > 40;

// Sintaxis original
if ($isOld) {
    echo "<h2>Eres viejo, lo siento</h2>";
} elseif ($isDev) {
    echo "<h2>No eres viejo o eres viejo, pero eres dev, estas jodido.</h2>'";
} else {
    echo "<h2>Eres joven, felicidades</h2>";
}

// Ternarias
$outputAge = $isOld 
    ? 'Eres viejo, lo siento'
    : 'Eres joven, felcidades.';

// Match (un switch mejorado)
// Al poner el true como parametro, lo que hacemos es evaluar expresiones
$outputAge = match (true) {
    $age > 90 => "En las puertas con San Pedro",
    $age > 70 => "Eres un jubileta.",
    $age > 50 => "Te estas acercando a la edad de jubilacion.",
    $age > 30 => "Oficialmente adulto.",
    $age > 20 => "Joven, saliendo de adolescencia.",
    $age > 18 => "Legalmente adulto.",
    $age > 12 => "Adolescencia.",
    $age > 3 => "Eres un ninio.",
    $age > 0 => "Eres un bebe",
    default => "Tas jdoido igualmente"
};

// Switch evaluando expresiones tambien
switch (true) {
    case $age < 2:
        echo "<p>Eres un bebe.</p>";
        break;

    case $age < 12:
        echo "<p>Eres un ninio.</p>";
        break;

    case $age < 18:
        echo "<p>Eres un adolescente.</p>";
        break;
        
    default:
        echo "<p>Eres un adulto.</p>";
        break;
}

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
    <title>Condicionales</title>
</head>

<body>

    <h1>
        <?= $output ?>
    </h1>

    <!--  Sintaxis alterantivva -->
    <?php if ($isOld) : ?>
        <h2>Eres viejo, estas jodido.</h2>
    <?php elseif ($isDev) : ?>
        <h2>Da igual que seas viejo o joven, pero eres dev, estas jdoido.</h2>

    <?php else : ?>
        <h2>Eres joven, enhorabuena.</h2>

    <?php endif; ?>


    <p><?=  $outputAge ?></p>

</body>

</html>