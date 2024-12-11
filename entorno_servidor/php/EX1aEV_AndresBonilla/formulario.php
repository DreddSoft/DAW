<?php
// Iniciamos la sesion
session_start();

// Si no existe el carrito en la sesión
if (!isset($_SESSION['carrito'])) {

    // Declaramos la variable de sesion del carrito y el array productosDisponibles
    $_SESSION["carrito"] = [];
}

// Variables
$correcto = false;
$productosDisponibles = [
    0 => [
        "nombre" => "Camiseta",
        "precio" => 25
    ],
    1 => [
        "nombre" => "Pantalón",
        "precio" => 23
    ],
    2 => [
        "nombre" => "Zapatos",
        "precio" => 64
    ]
];



// Verificamos que el método de envío sea POST
//* Agregar al carrito: si el formulario ha sido enviado a través de POST y existen los productos seleccionados
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Guardamos en variables los valores del post
    $codProducto = htmlspecialchars($_POST['articulo']);
    $cantidad = htmlspecialchars($_POST['cantidad']);
    $nomProducto = $productosDisponibles[$codProducto]["nombre"];
    $precio = $productosDisponibles[$codProducto]["precio"];

    // * Agregar al carrito 
    $_SESSION["carrito"][] = [
        "nombre" => $nomProducto,
        "cantidad" => $cantidad,
        "precio" => $precio
    ];


    // Texto informativo
    $correcto = true;
}

$presentacion = "Andrés Bonilla Tardío";

var_export($_SESSION['carrito']);

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>

<body>

    <header>
        <h1>Formulario de Compra</h1>
        <h3><?= $presentacion ?></h3>
    </header>

    <main>
        <form action="formulario.php" method="post">
            <label for="articulo">Selecciona un producto: </label>
            <select name="articulo" id="articulo">
                <option disabled selected></option>
                <!-- Usamos un foreach para imprimir todas las opciones de $productosDisponibles -->
                <?php foreach ($productosDisponibles as $idx => $producto) : ?>
                    <option value="<?= $idx ?>"><?= $producto['nombre'] . " - " . $producto['precio'] . "€" ?></option>
                <?php endforeach; ?>
            </select>
            <label for="cantidad">Cantidad:</label>
            <input type="number" name="cantidad" id="cantidad" min="0" max="10">

            <button type="submit">Agregar al carrito</button>

            <?php if ($correcto) : ?>
                <p>Artículo añadido correctamente.</p>
            <?php endif; ?>

        </form>
    </main>

    <footer>
        <a href="resultado.php">Ver el carrito</a>
    </footer>

</body>

</html>