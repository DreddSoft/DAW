function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 2.</b> Realiza una aplicación web que simule el comportamiento del juego de La Quiniela propiedad de Loterías y Apuestas del Estado.</p>"
        + "<p><b><i>Nota:</i></b> La finalidad de este ejercicio es puramente académica, juega responsablemente sólo si eres mayor de edad. En ningún caso se pretende fomentar la ludopatía.</p>"
        + "<p>La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.</p>"
        + "<p>A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.</p>"
        + "<p>Cada combinación consta de 14 enfrentamientos entre dos equipos, donde hay tres opciones 1 X 2 (1 gana el equipo local, X empate y 2 gana el equipo visitante).</p>"
        + "<p>Cada boleto tiene una combinación extra donde se elige 0 1 2 M (representa el número de goles marcados por ese equipo, M 3 o más goles), correspondiente al Pleno al 15.</p>"
        + "<p>A continuación, se muestra una captura de la aplicación web <a src='https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/' target='_blank'>https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/</a>, para que sirva de inspiración y ayuda.</p>"
        + "<img src='../image-1.png' alt='Ejemplo de juegos' style='place-self: center'>";

    enunciado.innerHTML = enun;

    // Mostrar enunciado
    enunciado.style.display = "block";

    // Ocultar botón ver
    document.getElementById("ver").style.display = "none";

    // Mostrar botón ocultar
    document.getElementById("ocultar").style.display = "block";

}

function ocultarEnunciado() {

    // Ocultar enunciado
    let enunciado = document.getElementById("enunciado");
    enunciado.style.display = "none";

    // Ocultar el botón ocultar
    document.getElementById("ocultar").style.display = "none";

    // Mostar el botón ver
    document.getElementById("ver").style.display = "block";

}


function jugar() {

    //* La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.

    let numCombinaciones = combinaciones();
    let partidos = ["Valencia-Betis", "At. Madrid-Alavés", "Las Palmas-Mallorca", ""];
    let contenido = "";

    let tabla = document.getElementById("bodyTabla");

    titulines = impresionPartidos();

    // Esto es un random que genera 0, 1 y 2.
    randomNum = Math.floor(Math.random() * 3);

    alert(`Prueba de un random: ${randomNum}`)


}

// Función complementaria para sacar el número de combinaciones y controlar errores
function combinaciones() {

    // Pedir un numero
    let num = parseInt(prompt("Introduce un número de combinaciones entre 1 y 8, ¿Cuántas combinaciones?"));

    while (isNaN(num) || num < 1 || num > 8) { // Mientras que sea menor que 1 y mayor que 8

        // Volvemos a pedir e informamos
        num = parseInt(prompt("Error, recuerda un número entre 1 y 8. ¿Qué número eliges?"));
    }

    return num;

}

function crearCombinacion() {

    let combinacion = [];

    for (let i = 0; i < 6; i++) {
        // Random entero entre 1 y 49
        let randomNum = parseInt((Math.random() * 49) + 1);
        console.log(`El primer numero random es: ${randomNum}`);

        // Seguimos creando random hasta que no este en combinaciones, asi evitamos la repeticion
        while (combinacion.includes(randomNum)) {

            randomNum = parseInt((Math.random() * 49) + 1);
            console.log(`EL random estaba repetido, el nuevo es: ${randomNum}`);

        }

        // Insertamos en combinaciones
        combinacion.push(randomNum);
    }

    return combinacion;

}


/**
 * Author: @Dreddsoft
 * Exercise: AE3.3 - ejercicio 02
 * Date: 29/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

