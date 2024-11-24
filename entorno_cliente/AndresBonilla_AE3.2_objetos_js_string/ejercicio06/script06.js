function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    /**
     Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras.
La función recibe como argumentos dos palabras o frases y devuelve una cadena con los
caracteres que haya en común entre ambas ordenados de menor a mayor.
Se desechan los espacios en blanco. No se tiene en cuenta el caso (mayúsculas o
minúsculas)

     */

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 6.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos cadenas.</p>"
        + "<p>Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras. La función recibe como argumentos ds palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor. Se desechan los espacios en blanco. No se tienen en cuenta el caso (mayúsculas o minúsculas).</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Ciudad<br>cuidar</td><td>acdiu</td></tr></table>";

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

    // Pedimos las cadenas de texto
    const frase1 = prompt("Introduce el primer texto: ");

    const frase2 = prompt("Introduce la segunda cadena: ");

    // Eliminamos espacios al principio y al final
    frase1.trim();
    frase2.trim();

    // Comrpobamos con la función
    let comunes = caracteresComunes(frase1, frase2);

    // Impresión
    impresion(frase1, frase2, comunes);

}

//* Función para encontrar caractéres comunes
function caracteresComunes(text1, text2) {

    // Pasamos a minúsculas y eliminamos espcios en blanco
    text1 = text1.toLowerCase().split(" ").join("");
    text2 = text2.toLowerCase().split(" ").join("");

    // Se podría haber usado también replace con la regEXP = /\s+/g, "" para sustituir todos los epsacios en blanco, pero no he visto esa función en los apuntes.

    // Array comunes
    comunes = [];

    // Recorremos la primera cadena
    for (let i = 0; i < text1.length; i++) {

        let c = text1[i];

        // Comprobamos cada caracter si se incluye en la segunda cadena y no esta en el array
        if (text2.includes(c) && !comunes.includes(c)) {
            comunes.push(c);
        }

    }

    // Ordenamos los comunes y los juntamos en una cadena de texto
    return comunes.sort().join("");
    
}



// Función para la impresión del resultado en la tabla
function impresion(input1, input2, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input1}<br>${input2}</td><td>${mensaje}</td></tr>`;


}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 6
 * Date: 24/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

