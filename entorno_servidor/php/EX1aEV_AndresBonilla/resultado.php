<?php

// Sesion
session_start();

$presentacion = "Andrés Bonilla Tardío";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Nos cargamos el carrito
    unset($_SESSION['carrito']);

    // Borramos la info
    session_unset();

    // Destruimos la sesion
    session_destroy();
}

// Pasamos el carrito a una variable
if (isset($_SESSION['carrito'])) {
    $productos = $_SESSION['carrito'];
} else {
    exit("El carrito esta vacío.");
}

// Función para calcular el total con impuestos 
function totalConImpuestos($total, $impuesto) {

    return $total + ($total * $impuesto);

}



// var_dump($productos);


// Variables
$total = 0;
$subTotal = 0;

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito</title>
</head>

<body>
    <header>
        <h1>Carrito de la compra</h1>
        <h3><?= $presentacion ?></h3>
    </header>

    <main>
        <form action="resultado.php" method="post">
            <h2>Productos en el carrito:</h2>
            <table border="solid">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio unitario (€)</th>
                        <th>Cantidad</th>
                        <th>Subtotal (€)</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($productos as $idx => $producto) :
                        $subTotal = $producto['cantidad'] * $producto['precio'];
                        $total += $subTotal;
                    ?>

                        <tr>
                            <td><?= $producto["nombre"] ?></td>
                            <td><?= number_format($producto["precio"], 2, ",", "") ?></td>
                            <td><?= $producto["cantidad"] ?></td>
                            <td><?= number_format($subTotal, 2, ",", "") ?></td>
                        </tr>

                    <?php endforeach; ?>
                </tbody>
            </table>
            <div class="total">
                <span for="">Total con impuestos (21% IVA): <b><?= number_format(totalConImpuestos($total, 0.21), 2, ",", "") ?></b></span>
            </div>
            <button type="submit">Vaciar el carrito</button>
        </form>


    </main>

    <footer>
        <a href="formulario.php">Volver al formulario</a>
    </footer>

</body>

</html>