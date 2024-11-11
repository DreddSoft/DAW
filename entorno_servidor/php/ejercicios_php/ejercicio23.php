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
            padding: 1rem;

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

        p {
            text-align: start;
        }

        .btn {
            padding: 10px;
            max-width: 200px;
        }
    </style>
    <title>Ejercicio 23</title>
</head>

<body>


    <?php

    define('LOGO_PHP', 'https://imgs.search.brave.com/n47Kd35ttgRyl7BLjYZ3wgbmDxQS-UIZbetG1tGbeqQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI3L1BI/UC1sb2dvLnN2Zy82/NDBweC1QSFAtbG9n/by5zdmcucG5n');

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";


    echo "<h1 style='text-align: center;'>Ejercicio 23</h1><br>";

    // Capturamos y guardamos en variables
    $name = $_POST['nombre'];
    $lengProgramacion = $_POST['lprog'];

    $mensaje = "No has solicitado información adicional, pero estamos aquí si cambias de opinión.";

    if (!empty($_POST['noticias'])) {
        $mensaje = "Has solicitado estar actualizado con las noticias.";
    }

    if ($_POST['nExp'] == 0) {
        $nivel = "Principiante";
    } else if ($_POST['nExp'] == 1) {
        $nivel = "Intermedio";
    } else {
        $nivel = "Avanzado";
    }

    // Mensaje de leng programación
    if (strtolower($lengProgramacion) == "php") {
        $mensProg = "Perfecto, php es un lenguaje con mucha presencia en el mundo Web.";
    } else if (strtolower($lengProgramacion) == "javascript") {
        $mensProg = "Javascript es super necesario.";
    } else {
        $mensProg = "Python es un lenguaje perfecto para un aprendizaje rápido.";
    }



    ?>

    <!-- // Mostramos el nombre -->
     <h2><?= "¡Hola " . $name . "!" ?></h2>
     <p><?= "Tu lenguaje elegido es: $lengProgramacion" ?></p>
     <p><?= "Tu nivel de experiencia: $nivel" ?></p>
     <p><?= $mensProg ?></p>
     <p><?= $mensaje ?></p>

    <!-- Botón para volver -->
     <input type="button" value="Volver" onclick="window.location.href = '../formularios/formulario23.html'" class="btn">

    <?= "<h3 style='bottom: 0; float:initial; display: grid; place-self: center;'>Andrés Bonilla Tardío</h3>" ?>

</body>

</html>