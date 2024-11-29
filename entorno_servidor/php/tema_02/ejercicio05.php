<?php

echo "<h1>Ejercicio 05 - Estructuras de control de flujo (03/10/2024)</h1>";
// Se trata de comprobar 2 datos: un  nombre y una contraseña.

// Permitidos
$usuariosPermitidos = array("Julia", "Laura", "Pedro", "Carlos");
$passPermitidas = array("aa11", "aa12", "aa13", "aa14");

// Aquí se introducen las variables
$usuario = "Julia";
$pass = "aa11";

echo "<h2>Comprobación con elseif</h2>";

if ($usuario == $usuariosPermitidos[0] && $pass == $passPermitidas[0]) {
    echo "<p>Usuario " . $usuariosPermitidos[0] . " correcto, contraseña correcta.</p>";
} elseif ($usuario == $usuariosPermitidos[1] && $pass == $passPermitidas[1]) {
    echo "<p>Usuario " . $usuariosPermitidos[1] . " correcto, contraseña correcta.</p>";
} elseif ($usuario == $usuariosPermitidos[2] && $pass == $passPermitidas[2]) {
    echo "<p>Usuario " . $usuariosPermitidos[2] . " correcto, contraseña correcta.</p>";
} elseif ($usuario == $usuariosPermitidos[3] && $pass == $passPermitidas[3]) {
    echo "<p>Usuario " . $usuariosPermitidos[3] . " correcto, contraseña correcta.</p>";
} else {
    echo "<p>Usuario o contraseña incorrectos.</p>";
}


echo "<h2>Comprobación con switch</h2>";

switch (true) {
    case ($usuario == $usuariosPermitidos[0] && $pass == $passPermitidas[0]):
        echo "<p>Usuario " . $usuariosPermitidos[0] . " correcto, contraseña correcta.</p>";
        break;
    case ($usuario == $usuariosPermitidos[1] && $pass == $passPermitidas[1]):
        echo "<p>Usuario " . $usuariosPermitidos[1] . " correcto, contraseña correcta.</p>";
        break;
    case ($usuario == $usuariosPermitidos[2] && $pass == $passPermitidas[2]):
        echo "<p>Usuario " . $usuariosPermitidos[2] . " correcto, contraseña correcta.</p>";
        break;
    case ($usuario == $usuariosPermitidos[3] && $pass == $passPermitidas[3]):
        echo "<p>Usuario " . $usuariosPermitidos[3] . " correcto, contraseña correcta.</p>";
        break;

    default:
        echo "<p>Usuario o contraseña incorrectos.</p>";

        break;
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        table {
            text-align: center;
        }
    </style>
    <title>Ejercicio 05</title>
</head>

<body>

    <table border="1">
        <tr>
            <th>Tabla</th>
            <th>Resultado</th>
        </tr>

        <?php

        for ($i = 0; $i <= 10; $i++) {

            $res = 7 * $i;
            echo "<tr>
                <td>7 x $i</td>
                <td>$res</td>
            </tr>";
        }
        ?>
    </table>

    <table border="1">
        <tr>
            <th>Operación</th>
            <th>Resultado</th>
        </tr>

        <?php

        for ($i = 10; $i >= -10; $i--) {

            if ($i == 0) {

                echo "<tr>
                    <td>7 / $i</td>
                    <td>No se puede dividir por cero</td>
                </tr>";
                continue;
            }

            echo "<tr>
            <td>7 / $i</td>
            <td>" . 7 / $i . "</td>
            </tr>";
        }

        ?>
    </table>


</body>

</html>