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
    let texto = "";
    let mensaje = "";



    // Primero pedimos el texto
    texto = introduceTexto();

    if (texto != "" && texto != null) {

        mensaje = vecesVocalesPorTexto(texto);

    }


    impresion(texto, mensaje);



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

// Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.
function sumaDeTodosLosDigitos(frase) {

    

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

