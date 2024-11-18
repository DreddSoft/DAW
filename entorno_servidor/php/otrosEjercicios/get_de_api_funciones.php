<?php

// Usar el require --> Mas interesante
// require 'functions.php';   
// cada vez que hace el require se trae el codigo del archivo
require_once 'sections/consts.php';
require_once 'sections/functions.php';

// Detecta si ha sido requerido y no lo importa  
// SI el archivo no existe da un FATAL ERROR


// Usar el include --> Algo opcional o secundario
// include 'functions.php';
// SI no encuentra al archivo solo te da un warning
// Incluye cada vez

// include_once 'functions.php';
// SI no encuentra el archivo solo da un warning
// Detecta si ha sido incluido (no lo incluye)





// Usamos la funcion para coger los datos
$data = get_data(API_URL);
$until_message = get_until_message($data["days_until"]);

?>
<!DOCTYPE html>
<html lang="es">

<?php render_template('head', ["title" => $data["title"]]); ?>

<body>

    <?php

    echo "<img src='" . LOGO_PHP . "' alt='' style='place-self: center; width: 200px;'><br>";

    ?>


    <!-- Importacion de codigo -->

    <?php render_template('main', array_merge(
        $data,
        ["until_message" => $until_message]
    )); ?>


</body>

</html>