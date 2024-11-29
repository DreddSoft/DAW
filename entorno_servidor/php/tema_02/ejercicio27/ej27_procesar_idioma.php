<?php

// Procesamos el post
$idioma = htmlspecialchars($_POST["idioma"]);

setcookie("idioma", $idioma, time() + 3600 * 24 * 30, "/");


// Relocalización
header("Location: ej27_web_idioma.php");
exit();



/**
 * Ejercicio 27: Procesar idioma
 * author: @dreddsoft
 * date: 22/11/2024
 * version: 1.0
 */
