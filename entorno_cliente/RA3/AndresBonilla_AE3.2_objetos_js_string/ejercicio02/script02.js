function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 2.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase con letras y números.</p>"
        + "<p>Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Estamos a 7 días de navidad y faltan 10 días para fin del año 1990</td><td>27 (7 + 1 + 0 + 1 + 9 + 9 + 0)</td></tr></table>";

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



        mensaje = principal(frase);

    }

    console.log(mensaje);


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

// Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.
function principal(frase) {

    // Variables
    let numeros = [];
    let mensaje = "";
    let sumatorio = 0;

    // sacamos los dígitos con la función
    numeros = sacarLosDigitos(frase);

    if (numeros.length > 0) {
        // Creamos el mensajeparcial
        for (let i = 0; i < numeros.length; i++) {

            // Si es el último número
            if (i == numeros.length - 1) {
                mensaje += `${numeros[i]}`;
                sumatorio += numeros[i];
            } else {
                // Añadimos el número al mensaje
                mensaje += `${numeros[i]} + `;
                sumatorio += numeros[i];
            }
        }

        return sumatorio + ` (${mensaje})`;
    }

    return "La frase no tiene ningún dígito.";

}

// Función para sacar todos los dígitos
function sacarLosDigitos(frase) {

    // Variables
    const REGEX = /^[0-9]$/;
    let nums = [];

    // Vale, tenemos que sacar los dígitos 
    for (let i = 0; i < frase.length; i++) {

        if (REGEX.test(frase.charAt(i))) {
            nums.push(parseInt(frase.charAt(i)));
        }

    }

    // Devolvemos los números en el array
    return nums;

}


// Función para la impresión del resultado en la tabla
function impresion(texto, mensaje) {

    // Capturamos tabla
    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${texto}</td><td>${mensaje}</td></tr>`;

}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 2
 * Date: 18/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

