function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 1.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena de caracteres.</p>"
        + "<p>Crea una función que reciba como argumento esa cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Hola soy Pepe</td><td>El número de vocales de la cadena es: <br>a:1, e:2, i:0, o:0, u:0</td></tr></table>";

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
    let texto = "";
    let mensaje = "";



    // Primero pedimos el texto
    texto = introduceTexto();

    if (texto != "" && texto != null) {

        mensaje = vecesVocalesPorTexto(texto);

    }


    impresion(texto, mensaje);



}

// Función para comprobar cuantas veces se repite una cadena dentro de otra cadena
function howManyTimes(cadenaBase, cadenaObjetivo) {

    // pasamos la cadena base a minuscula
    cadenaBase = cadenaBase.toLowerCase();

    // variables
    let cnt = 0;
    if (cadenaBase.includes(cadenaObjetivo)) {

        // Recorremos caracter por caracter para aumentar el contador
        for (i = 0; i < cadenaBase.length; i++) {

            if (cadenaBase.charAt(i) === cadenaObjetivo) {
                cnt++;
            }

        }

    }

    return cnt;

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

    const REGEX = /^[A-Za-z0-9¿?!¡\s]+$/;

    return (REGEX.test(text))
        ? true
        : false;

}

// Función que recibe por parámetro el texto y devuelve una cadena con todas las vocales y el número de veces
function vecesVocalesPorTexto(texto) {

    let arrVocales = [0, 0, 0, 0, 0];   // a, e, i, o, u

    // vocal a
    arrVocales[0] = howManyTimes(texto, "a");

    // vocal e
    arrVocales[1] = howManyTimes(texto, "e");

    // vocal i
    arrVocales[2] = howManyTimes(texto, "i");

    // vocal o
    arrVocales[3] = howManyTimes(texto, "o");

    // vocal u
    arrVocales[4] = howManyTimes(texto, "u");

    return `El número de vocales de la cadena es: <br>a:${arrVocales[0]}, e:${arrVocales[1]}, i:${arrVocales[2]}, o:${arrVocales[3]}, u:${arrVocales[4]}`;


}


// Función para la impresión del resultado en la tabla
function impresion(texto, mensaje) {

    // Capturamos tabla
    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${texto}</td><td>${mensaje}</td></tr>`;

}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 1
 * Date: 18/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

