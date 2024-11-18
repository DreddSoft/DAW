<?php

declare(strict_types=1);  // Habilita checkeos para los tipos
// Esto deshabilita la transformacion automatica de PHP
// Se activa a nivel de archivo

function render_template(string $template, array $data = []) {

    // metodo muy interesante para extraer todos los datos de un array asociativo
    extract($data);


    // Primero hacemos un require del template que le pasemos
    require "templates/$template.php";


}

function get_data(string $url): array
{
    // Para evitar que se coma cualquier cosa podemos usar los tipos opcionales string $url
    // Se puede indicar tambien el tipo a devolver :arrray

    $result = file_get_contents($url); // si solo quieres hacer un GET de una API

    $data = json_decode($result, true); // El true nos lo pone en un array asociativo

    return $data;
}

function get_until_message(int $days): string
{

    return match (true) {

        $days === 0     => "Hoy se estrena.📅",
        $days === 1     => "Mañana se estrena! 📅",
        $days < 7       => "Se estrena esta semana. 📅",
        $days < 30      => "Se estrena este mes📅",
        default         => "$days dias hasta el estreno.📅"
    };
}
