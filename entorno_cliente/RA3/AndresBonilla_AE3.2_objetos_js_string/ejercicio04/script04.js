


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
    let cnt2 = 0;



    // Primero pedimos el texto
    frase = introduceTexto();

    // Pedimos el caracter, para asergurarnos cogemos el valor de la posicion 0
    c = introduceCaracter();

    // Si la frase no esta vacia
    if (frase != "" && frase != null && c != "" && c != null) {

        cnt = numberOf(c, cnt, frase);
        cnt2 = numberOfFacil(frase, c);

        // Esto es para comparar para mi
        alert(`Diferencias entre cnt1: ${cnt} y cnt2: ${cnt2}`);

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

// Función para introducir un caracter
function introduceCaracter() {

    let c = "";

    while (true) {

        // Pedimos por prompt
        c = prompt("Introduce un caracter: ").charAt(0);

        // Si el texto es valido y tiene una longitud de 1 se sale del bucle
        if (isTextValid(c) && c.length == 1) {
            break;
        }

    }

    // Devuelve el caracter
    return c;
    
}

// Crea una función recursiva que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario.
function numberOf(c, cnt = 0, frase) {

    frase = frase.toString().toLowerCase();

    let idx = frase.lastIndexOf(c);

    // Caso de salida: si el indice es igual a -1 (no ha encontrado el caracter)
    if (idx == -1) {
        console.log(`El valor del contador: ${cnt}`);
        return cnt;
    }

    // En el caso de que encuentre el caracter
    cnt++;  // aumenta contador
    frase = frase.substring(0, idx);    // Recortas la frase
    return numberOf(c, cnt, frase);     // Usas recursiva


}

// Función fácil para confirmar recorrer los caracteres con un indice (imitando a un bucle iterador)
function numberOfFacil(frase, caracter, idx = 0, cnt = 0) {

    // Pasamos frase a minuscula
    frase = frase.toLowerCase();

    // Caso de salida: si el indice es igual a la longitud del texto devuelve las veces que se repite
    if (idx >= frase.length) return cnt;         

    // Si caracter coincide aumenta el contador
    if (frase[idx] == caracter) cnt++;

    // Volvemos a ejecutar la recursiva
    return numberOfFacil(frase, caracter, idx + 1, cnt);
}



// Función para la impresión del resultado en la tabla
function impresion(texto, mensaje) {

    // Capturamos tabla
    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${texto}</td><td>${mensaje}</td></tr>`;

}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 4
 * Date: 19/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

