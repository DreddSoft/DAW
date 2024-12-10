# TEORÍA PHP

## Nivel Base
### Variables Predefinidas
| **Nombre** | **Descripción**                                        |
| ---------- | ------------------------------------------------------ |
| $GLOBALS   | Variables globales definidas en el script              |
| $_SERVER   | Información sobre el servidor                          |
| $_GET      | Parámetros enviados con el método GET (url)            |
| $_POST     | Parámetros enviados con el método POST (formularios)   |
| $_FILES    | Ficheros subidos al servidor                           |
| $_COOKIE   | Cookies almacenadas por el navegador que recibe la web |
| $_SESSION  | Información de sesión                                  |
| $_REQUEST  | Contiene información de GET, POST y COOKIES            |
| $_ENV      | Información de variables de entorno                    |

### Constantes
- Por convenio las constantes van en MAYUSCULAS.
- En PHP tenemos dos formas de declararlas:

```PHP
# Palabra reservada const e instanciandola con el valor constante
const NOMBRECONSTANTE1 = "Hola";

# con la funcion define("NOMBRECONSTANTE", valor);
define("NOMBRECONSTANTE2", "Mundo");
```

### Arrays en PHP
Principalmente hay dos tipos de array: 
- Indexado: La posición se indica con un índice numérico.
- Asociativo: Almacenamiento de pares clave - valor, donde la posición se indica con la clave.

**Sintaxis:**
```PHP
// Con el constructor
$nombreArray = array(valor1, valor2, ...);

// Sintaxis corta
$nombreArray = [valor1, valor2, ...];

// Ejemplo de array asociativo
$arrayAsociativo = [
    "so1" => "windows 10",
    "so2" => "Windows Server 10",
    "so3" => "Ubuntu 22"
];

// Array multidimensional
$arrayMultidimensional = [
    "alumno01" => [
        "nombre" => "Andres",
        "apellido" => "Bonilla",
        "edad" => 31
    ]
];

echo $arrayMultidmensional["alumno01"]["edad"]; // 31
```

### Estructura de control de flujo: Match
Similar al switch
```PHP
match (true) {

    $days === 0     => "Hoy se estrena.📅",
    $days === 1     => "Mañana se estrena! 📅",
    $days < 7       => "Se estrena esta semana. 📅",
    $days < 30      => "Se estrena este mes📅",
    default         => "$days dias hasta el estreno.📅"
}
```

### Algunas funciones de interes
```PHP
strlen($cadena); // Longitud de cadena
str_word_count($cadena); // Cuenta palabras

// Contar palabras de otra forma
$arrPalabras = explode(" ", $cadena);
$numPalabras = count($arrPalabras);


substr($cad, $ini, $fin); // substring vaya
substr_count($cad, $subcad); // numero de veces que subcad aparece en cad
strcmp($cad1, $cad2); // compara 2 cadenas a nivel binario (1, -1 o 0).
strpos($cad, $subcad); // posicion de la subcad en cad
str_replace($buscar, $reemplazar, $base); // busca y reemplaza en una cadena base.
str_ireplace($buscar, $reemplazar, $base); // same pero case insensitive
strtolower($cadena); // a minusculas
strtoupper($cadena); // a mayus

isset($var); // true si esta definida, false si no
is_null($var); // true si es null, false si no
empty($var); // true si vacia, false si no

// para comprobar tipos
is_int($var);
is_float($var);
is_string($var);
is_bool($var);
is_array($var);

explode($separador, $cadena); // separa una cadena en array en base a un separador
implode($separador, $array); // same, pero junta array y devuelve cadena

```

**Funciones para arrays:**
```PHP
count($nombre_array); //Cuenta el número de elementos en un array.
count($nomArray, COUNT_RECURSIVE); // Mismo pero si el array es de mas de un nivel

list($var1, $var2, ...) = $nomArray; //Asigna variables al contenido de un array.

//La función list se ha usado tradicionalmente en PHP, pero desde PHP 8 existe la opción, para el mismo resultado, de *array destructuring*:

// Declaracion del array
$array = [1, 2, 3, 4, 5];

// Desesctruturacion del array
[$a, $b, $c, $d, $e] = $array;

range($valor_ini, $valor_fin, $incremento); // Crea un array de un rango

in_array($valor_buscado, $array);   // true o false si se encuentra en el array

is_array($variable); // true o false si la variable es un array

unset($array); // elimina uno, varios o todos los elementos de un array

shuffle($array); // shuffle array elements

var_dump($array); // muestra tamano, indice, tipo de dato y contenido
var_export($array); // indice y contenido
print_r($array); // indice y contenido

array_search($dato, $array); // posicion del dato en el array

$array[] = $valor; // asigna valor al final del array
array_push($array, $valor); // inserta 1 o mas elements al final
array_pop($array); // pop last element
array_unshift($array, $valor); // inserta 1 o mas al inicio
array_shift($array); // quita element al principio
array_merge($arr1, $arr2); // combina arrays insertando los elements del segundo al final del primero
array_merge_recursive($arr1, $arr2); // same
array_slice($arr1, 3, 7); // extrae porcion de array en otro array
array_reverse($arr1); // Invierte
array_unique($arr1); // elimina elements repetidos
array_keys($arr1); // devuelve las claves del asociativo
array_values($arr1); // devuelve los valores del asociativo
```



``extract($nomArray);`` Extrae la información de un array asociativo, tratando las claves como nombres de variables y los valores cómo los valores de dichas variables.

**Buscar una palabra en un texto.**
```PHP
// 1. Pasando el texto a un array de palabras (si sabemos el separador)
$arrPalabras = explode(" ", $texto);

$contador = 0;
foreach ($arrPalabras as $palabraPos) {

    if (strtolower($palabraPos) == strtolower($palabra)) {
        $contador++;
    } 
}

// 2. Usando la propia funcion de PHP mb_substr_count()
mb_substr_count($texto, $palabra);

substr_count($texto, $palabra);
```

**Reemplazar palabras en un texto**
```PHP
str_replace($palabraAReemplazar, $reemplazo, $textoBase);
```

## Subida de archivos

### Subir archivos con input:file
> **Ojo:** Los archivos subidos con input:file se almacenan en una carpeta temporal. Estos deben ser movidos a una carpeta definitiva para su almacenamiento (si interesa).

En el form debemos añadir el atributo ``enctype="multipart/form-data"`` y usar el metodo POST.

**Para almacenar estos documentos:** usamos la función:
```PHP
move_uploaded_file(string $from, string $to): bool; 
```

Mueve un documento subido a una nueva localización. Comprueba (si el archivo es válido) y asegura que el documento haya sido movido de `$from` hasta `$to`.
Esta comprobación es especialmente importante si el archivo subido puede revelar contenido del usuario.

Supervariable ``$_FILES``: es un array asociativo de dos dimensiones que contiene los datos del archivo.
```PHP 
$_FILES['imagen']['name']; // nombre del archivo
$_FILES['imagen']['size']; // tamaño del archivo en bytes
$_FILES['imagen']['type']; // tipo MIME del archivo
$_FILES['imagen']['tmp_name']; // ubicacion temporal
$_FILES['imagen']['error']; // codigo de error asociado

// Cuando subimos imagenes, de cualquier tipo que no especifiquemos, pero que sean imagenes y queramos la funcion exif_imagetype(), tenemos que crear la ruta donde se encuentra el archivo temporal con el nombre del archivo

$rutaTemp = $_FILES['imagen']['tmp_name'] . basename($nombreImg);
if (exif_imagetype($tempImg)) {
    # codigo...
} 

```

### Redirigir con php y comprobación del método de envío.
---
```PHP
// Primero analizamos si el metodo es POST
if ($_SERVER['REQUEST_METHOD'] != "POST") {

    // Si el metodo de envio no es POST
    // ejemplod de una redireccion con un get para que active un mensaje
    $url = "form_bienve.php?error=metodoEnvio";
    header("Location: $url");
    exit();
}

// Redirect if the file was not included
if (empty($_FILES)) {
        $url = "form_bienve.php?error=faltaArchivo";
    header("Location: $url");
    exit();
}
```

## SESIONES
Una sesión es un mecanismo que permite almacenar y gestionar información del usuario de manera **persistente** durante su interacción con un sitio web.

Las cookies almacenan la info en el navegador, las sesiones en el servidor.

Para iniciar la sesion y para mantenerla en todas las paginas, se requiere: ``session_start();``.

** Ejemplo en codigo:**
```PHP

// Iniciar o mantener sesion
session_start();

// Guardar informacion dentro de la supergloba SESSION
$_SESSION['nombre'] = $nombre;
$_SESSION['email'] = $email;
$_SESSION['color'] = $color;


```

#### Ejemplo de script tipico de cierre de sesion:
```PHP
session_start();

// Borramos la cookie personalizada
setcookie("nombre_usu", "", time() - 3600, "/");

// borramos la cookie de session
setcookie("PHPSESSID", "", time() - 3600, "/");

// Borramos la info
session_unset();

// Destruimos la sesion
session_destroy();

// Redireccionamos al login
header("Location: ej28_form_inicial.html");
exit();
```

## COOKIES
Archivos que dejan los servidores web en la memoria del navegador para recordar información del usuario entre visitas.
En PHP, hay dos cosas principales referentes a las cookies:
- ``setcookie();`` para crear cookies.
- variable superglobal ``$_COOKIE``.

Crear una cookie: ``setcookie('nombre_cookie',”valor_cookie”,caducidad, directorio, dominio);``

- caducidad: se indica en segundos.
- directorio: indica el directorio que tendra acceso a la cookie.
- dominioL el dominio que tendra acceso a la cookie.

```PHP
// Importante en las cookies, establece el tiempo de duraccion del IDSESSION que usa la cookie
session_set_cookie_params(10);

// Establecer una cookie
setcookie("nombre_usu", $nombre, time() + 3600 * 24, "/");

// Borramos la cookie
setcookie("nombre_usu", "", time() - 3600, "/");

```