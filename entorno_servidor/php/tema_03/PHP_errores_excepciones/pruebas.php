<?php

// // La función para manejar los errores
// function myErrorHandler ($errno, $errstr, $errfile, $errline) {

//     echo "Estoy manejando un error...<br>";
//     echo "Numero de error: $errno<br>";
//     echo "Tipo de error: $errstr<br>";
//     echo "Archivo de error: $errfile<br>";
//     echo "Linea de error: $errline<br>";
//     echo "Estoy manejando un error...";

// }

// // Usamos la funcion propia de PHP para establecer el control personalizad de los errores
// set_error_handler("myErrorHandler");

try {

    // Forzamos un error
    $division = 3 / 0;
} catch (Throwable $e) {
    echo "Error capturado: " . $e->getMessage();
}
