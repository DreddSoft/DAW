// let cnt = 0;


function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 4.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena y el carácter buscado.</p>"
        + "<p>Crea una función <b>recursiva</b> que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario.</b></p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Hoy es martes<br>e</td><td>El carácter e aparece 2 veces en la cadena.</td></tr></table>";

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

function introducir() {

    // Variables
    let frase = "";
    let mensaje = "Error, se ha introducido una cadena no VALIDA.";
    let cnt = 0;



    // Primero pedimos el texto
    frase = introduceTexto();

    if (frase != "" && frase != null) {

        let c = "e";

        console.log(cnt);

        cnt = numberOf(c, cnt, frase);

        mensaje = `El carácter ${c} aparece ` + cnt + " veces en la cadena.";

    }


    impresion(frase, mensaje);

}



// Función para pedir una cadena por ventana emergente
function introduceTexto() {

    let text = "";

    while (!isTextValid(text)) {

        // Pedimos por prompt
        text = prompt("Introduce un texto: ");

        if (!isTextValid(text)) {
            alert("Ojo! el texto introducido NO ES VALIDO.");
        }

        console.log(isTextValid(text));

    }

    alert("El texto introducido SI ES VALIDO.");

    return text;

}

// Función para evaluar el texto
function isTextValid(text) {

    const REGEX = /^[A-Za-z0-9ñáéíóú¿?!¡,.\s]+$/;

    return (REGEX.test(text))
        ? true
        : false;

}

// Crea una función recursiva que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario.
function numberOf(c, cnt, frase) {

    frase = frase.toString().toLowerCase();

    let idx = frase.lastIndexOf(c);

    if (idx == -1) {
        console.log(`El valor del contador: ${cnt}`);
        return cnt;
    }

    cnt++;
    frase = frase.substring(0, idx);
    return numberOf(c, cnt, frase);


}

// Función fácil para confirmar
function numberOfFacil(frase, c) {

    let pos = 0;
    let numVeces = 0;

    if (pos == frase.length - 1) {
        return numVeces;
    }

    if (frase.chatAt(pos) == c) {
        numVeces++;
    }

    pos++;
    return numberOfFacil(frase, c);
    
}



// Función para la impresión del resultado en la tabla
function impresion(texto, mensaje) {

    // Capturamos tabla
    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${texto}</td><td>${mensaje}</td></tr>`;

}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 3
 * Date: 19/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

