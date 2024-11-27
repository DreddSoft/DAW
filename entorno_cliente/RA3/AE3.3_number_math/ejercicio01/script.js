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


function encriptar() {

    let frase = "Este es el mensaje";
    let clave = prompt("Introduce la clave: ");
    let mensaje = "";

    if (clave == "12345") {

        // encriptar el mensaje
        // para ello debemos sacar el caracter unicode
        let mensajeEncriptado = "";
        let desplazamiento = 0;
        for (let i = 0; i < frase.length; i++) {

            desplazamiento++;
            // Obtener el caracter actual
            let c = frase.charAt(i);

            // Calcular el nuevo caracter sumando el desplazamiento
            let cNew = String.fromCharCode(c.charCodeAt(0) + desplazamiento);
            mensajeEncriptado += cNew;

            console.log(`El caracter: ${c}, el desplazamiento: ${desplazamiento}`);

            // Si es un espacio, reiniciar pero transformando antes el espacio
            if (desplazamiento == 5) {
                desplazamiento = 0;
            }


        }

        mensaje = `<b>Mensaje cifrado:</b> ${mensajeEncriptado}`;

    } else {
        mensaje = "<b>Error: </b>Clave erronea.";
    }

    impresion(frase, clave, mensaje);

}

function desencriptar() {

    let frase = "Fuwi%fu#iq!ohrxblh";
    let clave = prompt("Introduce la clave: ");
    let mensaje = "";

    if (clave == "12345") {

        // encriptar el mensaje
        // para ello debemos sacar el caracter unicode
        let mensajeDesencriptado = "";
        let desplazamiento = 0;
        for (let i = 0; i < frase.length; i++) {

            desplazamiento++;
            // Obtener el caracter actual
            let c = frase.charAt(i);

            // Calcular el nuevo caracter descontando el desplazamiento
            let cNew = String.fromCharCode(c.charCodeAt(0) - desplazamiento);
            mensajeDesencriptado += cNew;

            console.log(`El caracter: ${c}, el desplazamiento: ${desplazamiento}`);

            // Si es un espacio, reiniciar pero transformando antes el espacio
            if (desplazamiento == 5) {
                desplazamiento = 0;
            }

        }

        mensaje = `<b>Mensaje descifrado:</b> ${mensajeDesencriptado}`;

    } else {
        mensaje = "<b>Error: </b>Clave erronea.";
    }

    impresion(frase, clave, mensaje);

}



/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 10
 * Date: 24/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

