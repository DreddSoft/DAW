function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 3.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase.</p>"
        + "<p>Crea una función que reciba como argumento esa frase y devuelva el número de espacios, dígitos y letras  contenidos en la frase. <b>Puedes usar expresiones regulares.</b></p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Si, hoy es dia 10</td><td>2 dígitos, 4 espacios y 10 letras.</td></tr></table>";

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
    let mensaje = "Error, se ha introducido una frase NO VALIDA.";



    // Primero pedimos el texto
    frase = introduceTexto();

    if (frase != "" && frase != null) {



        mensaje = numberOf(frase);

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

// Función que devuelve el número de dígitos, espacios y letras
function numberOf(frase) {

    // digitos, espacios, letras
    let conts = [0, 0, 0];

    // Recorremos con un for los caracteres de la frase
    for (let i = 0; i < frase.length; i++) {

        // Recorremos cada caracter y aumentamos los contadores evaluando si son dígitos, letras o espacios.

        let c = frase.charAt(i);

        if (isDigit(c)) conts[0]++;

        if (isSpace(c)) conts[1]++;

        if (isLetter(c)) conts[2]++;

    }

    return `${conts[0]} dígitos, ${conts[1]} espacios, ${conts[2]} letras.`;
    
}

// Función para saber si es un espacio
function isSpace(c) {

    const REGEX = /[\s]/;

    return REGEX.test(c);
    
}

// Función para saber si es un digito
function isDigit(c) {

    const REGEX = /[\d]/;

    return REGEX.test(c);
    
}

// Función para saber si es una letra
function isLetter(c) {

    const REGEX = /[A-Za-záéíóúÁÉÍÓÚ]/;

    return REGEX.test(c);
    
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

