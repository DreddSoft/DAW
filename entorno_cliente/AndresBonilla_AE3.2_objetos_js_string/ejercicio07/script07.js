function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    /**
Ejercicio 7. Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras.
Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como resultado la función insertará la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original.


     */

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 7.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras.</p>"
        + "<p>Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como resultado la función insertará la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>nombre: edad 30:<br>nombre: juan</td><td>nombre: Juan edad: 30</td></tr></table>";

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
    const frase = prompt("Introduce la frase a evaluar: ");

    const palabra1 = prompt("Introduce la primera palabra: ");
    const palabra2 = prompt("Introduce la segunda palabra: ");

    // Eliminamos espacios al principio y al final
    frase.trim();
    palabra1.trim();
    palabra2.trim();

    // Frase resultado, que llamaremos mensaje
    let mensaje = insertarPalabra(frase, palabra1, palabra2);

    // Impresión
    impresion(frase, palabra1, palabra2, mensaje);

}

//* Función para encontrar caractéres comunes
function insertarPalabra(frase, palabra1, palabra2) {

    const susti = `${palabra1} ${palabra2}`;

    // Usamos la funcion includes
    if (frase.includes(palabra1)) {

        // Sustituimos la primera palabra, por la primera palabra y la segunda seguidas
        return frase.replace(palabra1, susti);

    }
    
    // Si no encuentra la primera palabra, devolver la frase original
    return frase;

}



// Función para la impresión del resultado en la tabla
function impresion(input1, input2, input3, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input1}<br>${input2}<br>${input3}</td><td>${mensaje}</td></tr>`;


}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 7
 * Date: 24/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

