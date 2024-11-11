<?php

// Calificaciones
$calificaciones = array("Aprobado", "Notable", "Sobresaliente", "Suspenso");

$notas = array(7, 9, -1, 7.8, 10.5, 4.9, 9.5);

echo "<h1>Ejercicio 04 - Estructuras de control de flujo (03/10/2024)</h1>";
echo "<h2>Calificación con elseif</h2>";

for ($i = 0; $i < sizeof($notas); $i++) {

    if ($notas[$i] < 0 || $notas[$i] > 10) {
        echo "<p>El alumno $i, con nota: " . $notas[$i] . " es errónea, porque es menor de 0 o mayor que 10</p>";
    } elseif ($notas[$i] >= 9) {
        echo "<p>El alumno $i, con nota: " . $notas[$i] . " esta " . $calificaciones[2] . "</p>";
    } elseif ($notas[$i] >= 7) {
        echo "<p>El alumno $i, con nota: " . $notas[$i] . " esta " . $calificaciones[1] . "</p>";
    } elseif ($notas[$i] >= 5) {
        echo "<p>El alumno $i, con nota: " . $notas[$i] . " esta " . $calificaciones[0] . "</p>";
    } else {
        echo "<p>El alumno $i, con nota: " . $notas[$i] . " esta " . $calificaciones[3] . "</p>";
    }
}

echo "<h2>Calificación con switch</h2>";

for ($i = 0; $i < sizeof($notas); $i++) {

    switch ($notas[$i]) {
        case $notas[$i] < 0 || $notas[$i] > 10:
            echo "<p>El alumno $i, con nota: " . $notas[$i] . " tiene una nota errónea, porque es menor que 0 o mayor que 10.</p>";
            break;

        case $notas[$i] >= 9:
            echo "<p>El alumno $i, con nota: " . $notas[$i] . " tiene un " . $calificaciones[2] . "</p>";
            break;

        case $notas[$i] >= 7:
            echo "<p>El alumno $i, con nota: " . $notas[$i] . " tiene un " . $calificaciones[1] . "</p>";
            break;

        case $notas[$i] >= 5:
            echo "<p>El alumno $i, con nota: " . $notas[$i] . " tiene un " . $calificaciones[0] . "</p>";
            break;

        default:
            echo "<p>El alumno $i, con nota: " . $notas[$i] . " tiene un " . $calificaciones[3] . "</p>";
            break;
    }
}
