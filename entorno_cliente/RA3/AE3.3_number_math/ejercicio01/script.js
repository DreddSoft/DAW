function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 1.</b> Realiza una aplicación web que simule el comportamiento del juego de La Primitiva propiedad de Loterías y Apuestas del Estado.</p>"
        + "<p><b><i>Nota:</i></b> La finalidad de este ejercicio es puramente académica, juega responsablemente sólo si eres mayor de edad. En ningún caso se pretende fomentar la ludopatía.</p>"
        + "<p>La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.</p>"
        + "<p>A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.</p>"
        + "<p>Cada combinación consta de 6 números del 1 al 49. En una combinación, los números no se pueden repetir. Cada boleto tiene un número del 1 al 10, correspondiente al reintegro.</p>"
        + "<p>A continuación, se muestra una captura de la aplicación web <a>https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/</a>, para que sirva de inspiración y ayuda.</p>"
        + "<img src='quiniela.jpg' alt='Ejemplo de juegos'>";

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


// Función para la impresión del resultado en la tabla
function impresion(input1, input2, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input1}<br>${input2}</td><td>${mensaje}</td></tr>`;


}

function jugar() {

    //* La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.

    let cantidadCombinaciones = combinaciones();

    // Muestra el resultado temporal
    alert(cantidadCombinaciones);
    
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





/**
 * Author: @Dreddsoft
 * Exercise: AE3.3 - ejercicio 01
 * Date: 28/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

