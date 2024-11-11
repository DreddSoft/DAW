<?php

// Titulo de ejercicio
echo "<h1>Ejercicio 03 - Estructuras de control de flujo (01/10/2024)</h1>";

$hourRate = 8.6;
$weeklylimit = 37;
$extraIncrease = 0.30;

// numero de horas trabajadas
$numHoras = 20;

// Salario semanal base
echo "<p>Número de horas trabajadas <b><i>$numHoras</i></b></p>";

if ($numHoras <= 40 && $numHoras >= 0) {
    if ($numHoras <= 37) {

        echo "<p>Salario semanal: <b><i>" . number_format($numHoras * $hourRate, 2, ",", "") . "</i></b></p>";
        echo "<p>Numero de horas extras: <b><i>0</i></b></p>";
        echo "<p>Salario total: <b><i>" . number_format($numHoras * $hourRate, 2, ",", "") . "</i></b></p>";
    } else {

        $numExtras = $numHoras - 37;

        echo "<p>Salario semanal: <b><i>" . number_format(37 * $hourRate, 2, ",", "") . "</i></b></p>";
        echo "<p>Numero de horas extras: <b><i>$numExtras</i></b></p>";

        $baseSalary = 37 * $hourRate;
        $extraRate = $hourRate + ($hourRate * $extraIncrease);
        $extraSalary = $numExtras * $extraRate;

        echo "<p>Salario total: <b><i>" . number_format($baseSalary + $extraSalary, 2, ",", "") . "</i></b></p>";
    }
} else if ($numHoras < 0) {
    echo "<h3>NUMERO DE HORAS ERRÓNEO.</h3>";
} else {
    echo "<h3>SE HAN SUPERADO EL LÍMITE DE HORAS SEMANALES: 40 HORAS</h3>";

}
