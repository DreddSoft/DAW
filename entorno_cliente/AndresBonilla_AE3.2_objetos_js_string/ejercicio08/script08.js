function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 8.</b> Realiza una aplicación web dónde se solicite por pantalla,m mediante una ventana emergente, al usuario una frase o una palabra.</p>"
        + "<p>Crea una función que reciba dicha frase o palabra como parámetros, y como resultado la fucnión determinara si es palíndromo o no.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Yo voy</td><td>El texto introducido SI ES PALINDROMO</td></tr>"
        + "<tr><td>World Of Warcraft</td><td>El texto introducido NO ES PALINDROMO</td></tr></table>";

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

    // A mamá Roma le aviva el amor a mamá.
    // Anita lava la tina.
    // Dábale arroz a la zorra el abad.
    // yo voy

    // variable
    let mensaje = "El texto introducido NO ES PALINDROMO.";

    // Pedimos las cadenas de texto
    const frase = prompt("Introduce una frase: ");


    // Eliminamos espacios al principio y al final
    frase.trim();


    // Usamos la funcion para evaluar si es palindromo
    if (esPalindromo(frase)) {
        mensaje = "El texto introducido SI ES PALINDROMO.";
    }

    // Impresión
    impresion(frase, mensaje);

}

//* Función para encontrar caractéres comunes
function esPalindromo(frase) {

    // Variables
    let reves = "";

    // pasamos a minusculas
    frase = frase.toLowerCase().replace(/ /g, "");

    // Recorremos desde el final hasta el principio
    for (let i = frase.length - 1, j = 0; i >= 0; i--, j++) {

        reves += frase[i]; 

    }

    alert(`frase: ${frase}, reves: ${reves}`);

    return (reves == frase) 
        ? true
        : false;

}



// Función para la impresión del resultado en la tabla
function impresion(input1, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input1}</td><td>${mensaje}</td></tr>`;


}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 8
 * Date: 24/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

