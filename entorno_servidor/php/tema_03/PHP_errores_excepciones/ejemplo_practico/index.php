<?php
// Clase personalizada para la excepción
class DivisionPorCeroException extends Exception
{
    public function __construct($message = "No se puede dividir por cero", $code = 0, Exception $previous = null)
    {
        // Constructor de la clase
        parent::__construct($message, $code, $previous);
    }
}

// Creamos una función específica para gestionar el error
function gestorDeError($errno, $errstr, $errfile, $errline)
{

    echo "Estoy manejando un error...<br>";
    echo "Numero de error: $errno<br>";
    echo "Tipo de error: $errstr<br>";
    echo "Archivo de error: $errfile<br>";
    echo "Linea de error: $errline<br>";
    echo "Estoy manejando un error...";
}

// Asignamos la función propia para el control de errores
set_error_handler("gestorDeError");

// Variable para mostrar el resultado
$show = false;
$showError = false;

// Verificar si se han enviado los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'] ?? null;
    $num2 = $_POST['num2'] ?? null;
    $operacion = $_POST['operacion'] ?? '';


    // Validar entradas y realizar la operación
    try {

        // Realizamos una comprobación de que ambos son números
        if (!is_numeric($num1) || !is_numeric($num2)) {

            // Provocamos un error
            trigger_error("Entrada no válida: se esperaban números", E_USER_ERROR);
        } else {
            // Realizamos la operación y guardamos el resultado
            $resultado = realizarOperacion($num1, $num2, $operacion);
            $show = true;
        }
    } catch (DivisionPorCeroException $e) {
        $showError = true;
        $error = "Error: " . $e->getMessage();
    } catch (Exception $e) {
        $showError = true;
        $error = "Error: " . $e->getMessage();
    } finally {
        $mensaje = "Operación finalizada.";
    }
}

// Función que dados dos números, me devuelve la suma de ambos números
function sumar($num1, $num2)
{
    return $num1 + $num2;
}

// Función que dados dos números, me devuelve la resta de ambos números
function restar($num1, $num2)
{
    return $num1 - $num2;
}

// Función que dado los dos números, devuelve la multiplicación de ambos números
function multiplicacion($num1, $num2)
{
    return $num1 * $num2;
}

// Función que dado los dos números, devuelve la división de ambos números
function division($num1, $num2)
{
    if ($num2 == 0) {
        throw new DivisionPorCeroException();
    }

    return $num1 / $num2;
}

// Función para realizar la operación
function realizarOperacion($num1, $num2, $operacion)
{
    switch ($operacion) {
        case '0':
            return sumar($num1, $num2);
        case '1':
            return restar($num1, $num2);
        case '2':
            return multiplicacion($num1, $num2);
        case '3':
            return division($num1, $num2);
        default:
            trigger_error("Operación no válida", E_USER_ERROR);
    }
}


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>

<body>

    <header>

        <img src="new-php-logo.png" alt="Logo de PHP">
        <h1>Calculadora</h1>

    </header>

    <main>

        <form method="post" action="index.php">

            <div class="data-vertical">
                <label for="num1">Primer número</label>
                <input type="text" id="num1" name="num1">
                <label for="num2">Segundo número</label>
                <input type="text" id="num2" name="num2">


            </div>
            <div class="centrado">
                <label for="operacion">Operación</label>
                <select name="operacion" id="operacion">
                    <option value="0">Sumar</option>
                    <option value="1">Restar</option>
                    <option value="2">Multiplicar</option>
                    <option value="3">Dividir</option>
                </select>
            </div>

            <div class="btns">
                <button type="submit" class="myButton3">Calcular</button>
            </div>

            <?php if ($showError) :
                global $error; ?>

                <h3 class="error"><?= $error ?></h3>

            <?php endif; ?>


            <?php if ($show) :
                global $mensaje; ?>
                <h3><?= $mensaje ?></h3>
                <div class="resultado">
                    <?= $resultado ?>
                </div>

            <?php endif; ?>



        </form>

    </main>

    <footer>
        <div class="footer_content">
            <a href="#"><i class="fa fa-at"></i>Equipaso</a>

            <h3>Entorno Cliente | JavaScript</h3>

            <h2><i class="fa fa-star-o"></i> DAW</h2>
        </div>
    </footer>

</body>

</html>