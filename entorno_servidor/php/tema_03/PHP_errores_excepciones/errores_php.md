# ERRORES Y EXCEPCIONES EN PHP
## ¿Qué son los errores en PHP?
Los errores en programación se consideran interrupciones totales o parciales en el flujo normal de ejecución del código, lo que impide que un programa funcione como se esperaba. Pueden surgir por diversas causas, como fallos en la lógica, errores de sintaxis o problemas en el entorno de ejecución. 
Para facilitar su identificación y resolución, la mayoría de lenguajes de programación han desarrollado sistemas que clasifican y agrupan los errores más comunes, proporcionando información a los desarrolladores para ayudar al diagnóstico y corrección.

Algunos lenguajes de programación han desarrollado clases específicas, conocidas como clases de error, para facilitar el manejo y tratamiento de errores. Sin embargo, este no es el caso de PHP.
En PHP, los errores más comunes no se representan mediante clases, al menos no en el contexto del paradigma de programación orientada a objetos (OOP).

A partir de la versión 7 de PHP, se creó dentro del ecosistema el objeto **Error**, la clase base para todos los errores de internos de PHP.

## Tipos de errores comunes (E_NOTICE, E_WARNING, E_ERROR, etc)
PHP notifica errores en respuesta a varias condiciones de error internas. Cada error que genera PHP incluye un tipo, los tipos más comunes son:

### E_ERROR (int) | ERROR FATAL
Errores fatales en el tiempo de ejecución, surgen cuando el código no se puede ejecutar e indican errores que no se pueden recuperar, como problemas de asignación de memoria, falta de definición de una función, clase o método. 
**Interrumpe totalmente la ejecución del script.**

##### Ejemplo en código:
```PHP
<?php 

# Se procede a llamar a una función que no ha sido definida
functionVaciaSinDefinir();

?>
```

##### Error
![Error fatal](image.png)

### E_WARNINGS (int) | ADVERTENCIAS
Advertencias en tiempo de ejecución (NO FATALES). Errores menos graves que generalmente ocurren cuando algo esperado no está disponible. **No interrumpen la ejecución del script** y muestran mensajes informativos en pleno flujo de ejecución.

##### Ejemplo en código:
```PHP
<?php 

# Se incluye un archivo que no existe
include('otroArchivo.php');

?>
```

##### Error
![alt text](image-1.png)

### E_PARSE (int) | ERRORES DE PARSEO
Conocidos como errores de sintaxis, ocurren cuando el intérprete de PHP no puede “entender” el código debido a una estructura incorrecta. Se consideran errores de análisis en tiempo de compilación.

##### Ejemplo en código:
```PHP
<?php 

# impresión de un texto sin el comillado
echo "que pesados... 

?>
```

##### Error
![alt text](image-2.png)

### E_NOTICE (int) | ERRORES DE NOTIFICACIÓN
Indican que el script encontró algo que podría señalar un error o una situación inesperada, pero que también podría ocurrir en el curso normal de un script. Por ejemplo, intentar acceder a una variable no definida.
**NO INTERRUMPEN EL FLUJO DE EJECUCIÓN.**

##### Ejemplo en código:
```PHP
<?php 

# impresión de una variable no definida
echo $variableNoDefinida;

?>
```

##### Error
No consigo que me salga un NOTICE

### Diferencia entre errores y excepciones
- **Errores:**
  Son problemas que ocurren cuando PHP encuentra algo inesperado. Los errores tradicionales no forman parte del paradigma de programación orientada a objetos (OOP) y, en versiones anteriores a PHP 7, no podían manejarse con bloques ``try-catch`` al no tener un clase asociada, usaban funciones propias del lenguaje para el manejo así como modificaciones en la configuración. 
  
- **Excepciones:**
  Son OBJETOS que representan situaciones excepcionales (problemas) en el código. Son parte del paradigma OOP y su clase base es ``Exception``. Deben estar acopañadas de un bloque de prueba y control ``try-catch``, pueden ser lanzadas ``thrown`` dentro del propio PHP. El lenguaje nos ofrece herramientas para gestionar estas situaciones.

  **Tabla con las principales diferencias**

  | Errores                                                                  | Excepciones           |
  | ------------------------------------------------------------------------ | --------------------- |
  | Su base es el propio sistema de PHP (antes de la 7.0)                    | OOP                   |
  | sin clase asociada hasta la versión 7, después ``Error``                 | ``Exception``         |
  | Manejados en configuración o con funciones propias de PHP (antes de v 7) | Bloques ``try-catch`` |
  
## ¿Cómo manejar errores?
Podemos encontrar 2 maneras de manejar los errores en PHP, dependiendo de la versión en la que estemos.

### Anterior a la versión 7.0
El manejo de errores se realiza de forma personalizada haciendo uso de funciones como ``set_error_handler`` y ``trigger_error``. Estas funciones permiten interceptar, capturar y definir cómo manejar el error sin afectar al flujo de ejecución del código.

1. ``set_error_handler``
   Función que permite definir una función personalizada que manejará todos los errores generados en el script (excepto los fatales).
   **Sintaxis:**
   ```php
   set_error_handler(function $manejo_error);
   ```
2. ``trigger_error``
   Función que permite general un error manualmente.
   **Sintaxis:**
   ```php
   trigger_error(string $mensaje, const TIPOERROR);
   ```
   La constante ``TIPOERROR`` puede tener los siguientes valores para generar un error: ``E_USER_NOTICE``, ``E_USER_WARNING``, ``E_USER_ERROR``.

### Ejemplo práctico sencillo
```php

// La función para manejar los errores
function myErrorHandler ($errno, $errstr, $errfile, $errline) {

    echo "Estoy manejando un error...<br>";
    echo "Numero de error: $errno<br>";
    echo "Tipo de error: $errstr<br>";
    echo "Archivo de error: $errfile<br>";
    echo "Linea de error: $errline<br>";
    echo "Estoy manejando un error...";

}

// Usamos la funcion propia de PHP para establecer el control personalizad de los errores
set_error_handler("myErrorHandler");

// Forzamos un error usando trigger_error
trigger_error(E_USER_WARNING);
```

**Salida del código:**

![Error](image-3.png)

### Posterior a la versión 7.0
Tras esta versión, donde se creo la clase ``Error``, podemos capturar y gestionar errores usando la estructura ``try-catch``. 

**Ejemplo práctico:**
```php
try {

    // Forzamos un error
    $division = 3 / 0;
} catch (Throwable $e) {
    echo "Error capturado: " . $e->getMessage();
}
```

**Salida del código:**

![Error_division](image-4.png)

## ¿Que son las excepciones en PHP? 
En el marco de la programación, una excepción es un "suceso" que interrumple la ejecución normal del programa. PHP, como otros lenguajes, nos permite controlar estos "sucesos" con las herramientas ``try-catch-finally``, permitiendo al desarrollador decidir cómo gestionar dichas interrupciones de manera flexible y organizada.

**¿Qué puede hacer PHP con las excepciones?**

- No hacer nada, y que la excepción rompa el flujo del programa.
- Capturar y tratar la excepción (`try-catch`).
- Lanzar una excepción (generar una excepción con ``throw``).
- Ejecutar un código SIEMPRE, haya excepción o no (``finally``).

Hasta el momento hemos controlado los posibles errores y excepciones de nuestro código usando estructuras de control de flujo (bucles, condicionales, etc), pero PHP nos proporciona un mecanismo adicional para la prevención de estas "situaciones", las **excepciones**.
**¿Por qué se usan las excepciones?** Porque este mecanismo nos permite tratar estas "situaciones" de una forma independiente, separando el código de tratamiento de errores del código normal, por lo tanto **SIMPLIFICA Y OPTIMIZA**.

#### Conceptos clave
``try``
Bloque donde se escribe el código que puede generar (lanzar) la excepción:
```php

try {

  # codigo...

}
```

``catch``
Bloque que captura y maneja la excepción lanzada en el bloque ``try``.
```php
catch (Throwable $exception) {

  echo "Esto es una excepción capturada: " . $exception->getMessage();
  # getMessage() es un metodo de las excepciones.

}
```

``finally``
Bloque que siempre se ejecuta.
```php
finally {
  echo "Siempre paso por aqui";
}
```

### Excepciones Personalizadas
En PHP, como otros lenguajes, se pueden definir **excepciones personalizadas** creando clases que extienden/ heredan de la clase base ``Exception``. Esto es útil cuando necesitas representar errores específicos para tu aplicación o programa.

**Ejemplo práctico:**

Excepción personalizada:
```php
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

```

**Salida del codigo:**

![Resultado del codigo](image-5.png)

### Ventajas del uso de excepciones frente a los errores tradicionales
1. Flexibilidad: Se pueden propagar, permitiendo que el manejo se realice en el nivel interesado del programa.
2. Mantenimiento: Al agrupar el código sensible a errores, y el código de tratamiento de errores en bloques ``try-catch``, se facilita la compresión, depuración y mantenimiento.
3. OOP: Las excepciones son objetos.
4. Finally: ejecución garantizada, pese a la excepción siempre se ejecutará el código dentro del bloque ``finally``.


## Bibliografía
### Enlaces
- https://www.mclibre.org/consultar/php/lecciones/php-errores.html
- https://www.php.net/manual/es/language.errors.basics.php
- https://www.netuy.net/cuales-son-los-tipos-de-errores-en-php/#:~:text=Un%20error%20de%20PHP%20ocurre,tipo%20de%20problema%20est%C3%A1%20ocurriendo
- https://www.php.net/manual/es/language.errors.php
- https://www.php.net/manual/es/language.exceptions.php
- https://www.linkedin.com/pulse/manejo-de-errores-y-excepciones-en-php-bruno-rossani-hlc8f/
- https://www.php.net/manual/es/book.errorfunc.php
- https://www.php.net/manual/es/language.exceptions.php
- https://blogprog.gonzalolopez.es/articulos/excepciones-en-php.html
- 

### Libros
- [PHP 7: Desarrollar un sitio web dinámico e interactivo (Olivier HEURTEL)](https://www.google.es/books/edition/PHP_7/EJ1t1GsMHbIC?hl=es&gbpv=1&dq=error+php&pg=PA234&printsec=frontcover)
- [PHP Avanzado (Francisco Minera)](https://www.google.es/books/edition/PHP_Avanzado/fZscQ3xS4vAC?hl=es&gbpv=0)
