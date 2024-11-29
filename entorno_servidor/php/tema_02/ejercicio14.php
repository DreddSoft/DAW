<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css">

    <style>
        :root {
            color-scheme: light dark;
        }

        body {
            display: grid;
            place-content: center;
            place-items: center;

        }

        .rojo {
            color: red;
        }

        .verde {
            color: green;
        }

        h4 {
            text-align: start;
            width: 100%;
        }
    </style>
    <title>Ejercicio14</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 14</h1><br>";

    //* Crear un array que contiene la información sobre productos y precios:

    $articulos = [
        "teclado" => 58,
        "raton" => 32,
        "impresora" => 185,
        "altavoz" => 62,
        "auriculares" => 36,
        "monitor" => 102,
        "webcam" => 47
    ];

    //* Mostrar el contenido del array utilizando var_export ();
    echo "<h4>1. Mostrar el contenido del array utilizando var_export</h4>";
    var_export($articulos);

    //* Mostrar en un listado el artículo y su precio
    echo "<h4>2. Mostrar en un listado el artículo y su precio</h4>";
    $tabla = "<table>";

    // fila cabecera
    $tabla .= "<tr><th>Articulo</th><th>Precio(€)</th></tr>";

    // articulos
    foreach ($articulos as $articulo => $precio) {

        $tabla .= "<tr><td>$articulo</td><td>$precio</td></tr>";
    }

    $tabla .= "</table>";

    // Impresion de la tabla
    echo $tabla;

    //* Copiar el contenido del array en otro que se llame $art_original
    $art_original = $articulos;

    //* Extraer del array $articulos los elementos cuyo precio sea inferior a 50 €.
    foreach ($articulos as $articulo => $precio) {

        if ($precio < 50)
            unset($articulos[$articulo]);   // la funcion unset espera que se le pase el indice para destruir la variable
        // en el foreach se puede usar $articulo como indice y como valor

    }

    // Comprobacion
    var_export($articulos);

    //* Mostrar en un listado el artículo y su precio
    echo "<h4>3. Mostrar el contenido del array con el contenido de los artículos extraídos.</h4>";
    $tabla = "<table>";

    // fila cabecera
    $tabla .= "<tr><th>Articulo</th><th>Precio(€)</th></tr>";

    // articulos
    foreach ($articulos as $articulo => $precio) {

        $tabla .= "<tr><td>$articulo</td><td>$precio</td></tr>";
    }

    $tabla .= "</table>";

    // Impresion de articulos con los valores quitados
    echo $tabla;

    //* Aumentar el precio un 15% a dichos artículos.
    // para aumentarlo recorremos el array, usando el & para permitir modificar el valor
    foreach ($articulos as $articulo => &$precio) {

        // Aumentamos el precio 15%
        $precio = intval($precio * 1.15);
        
    }

    // Comprobamos 
    var_export($articulos);

    //* Crear un nuevo array llamado $precio_act con todos los artículos y su precio actualizado.
    $precio_act = array_merge($art_original, $articulos);   // Usamos la funcion array_merge para unificar los dos arrays



        //* Volver a mostrar
        echo "<h4>4. array llamado \$precio_act con todos los artículos y su precio actualizado.</h4>";
        $tabla = "<table>";
    
        // fila cabecera
        $tabla .= "<tr><th>Articulo</th><th>Precio(€)</th></tr>";
    
        // articulos
        foreach ($precio_act as $articulo => $precio) {
    
            $tabla .= "<tr><td>$articulo</td><td>$precio</td></tr>";
        }
    
        $tabla .= "</table>";
    
        // Impresion de articulos con los valores quitados
        echo $tabla;





    ?>

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>



</body>

</html>