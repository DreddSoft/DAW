<?php

// Creamos la excepcion personalizada extendiendo de Exception
class excepcionAndres extends Exception {
    
    // Creamos un contrusctor
    public function __construct($message = "Encontrado Andres, SUSPENSO", $code = 0, Exception $previous = null) {

        // Llamamos al constructor de la clase exception
        parent::__construct($message, $code, $previous);

    }
    
        
}

$alumno = "Andres";

// Uso de la excepcion personalizada
try {

    if (strtolower($alumno) == "andres") {
        throw new excepcionAndres();

    }

} catch (excepcionAndres $e) {
    echo "Resultado: " . $e->getMessage();
} finally {
    echo "<br>Proceso finalizado.";
}

