
//* Mostrar enunciado
function mostrarEnunciado() {

    document.getElementById("enunciado").innerHTML = "Realiza una aplicación web donde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de números enteros.\nAdicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes.\nLa aplicación mostrará en la parte destinada para tal efecto, el número más alto y el más bajo, cada uno en una línea distinta."

    // Ocultamos boton ver
    document.getElementById("ver").style.display = "none";

    // Mostramos el boton ocultar
    document.getElementById("ocultar").style.display = "block";
    
}

function ocultarEnunciado() {

    // Ocultamos enunciado
    document.getElementById("enunciado").style.display = "none";

    // Ocultamos btn ocultar
    document.getElementById("ocultar").style.display = "none";

    // Mostrar btn ver
    document.getElementById("ver").style.display = "block";
    
}

function exercise12() {

    // Variables
    let minValor = 0;
    let maxValor = 0;

    // Primero pedimos al usuario cuantos numeros introducir
    let cantidad = parseInt(prompt("Cuantros números introduciras: "));

    while (cantidad > 100 || cantidad < 1) {
        console.log("Has entrado al bucle, cantidad: " + cantidad);
        cantidad = parseInt(prompt("Error, introduce un numero entre 0 y 100: "));
    }

    // Creamos un array de números con la longitud del cantidad
    let numeros = new Array(cantidad);

    // Introducimos valores en el array
    for (let i = 0; i < numeros.length; i++) {

        numeros[i] = parseInt(prompt("Introduce un número: "));

    }

    // Igualamos el min y el max al primer valor del array
    minValor = numeros[0];
    maxValor = numeros[0];

    // Recorremos la cantidad 
    for (let i = 1; i < cantidad; i++) {

        // Si el valor es mayor, se guarda
        if (numeros[i] > maxValor) {
            maxValor = numeros[i];
        }

        // Si el valor es menor, se guarda
        if (numeros[i] < minValor) {
            minValor = numeros[i];

        }

    }

    // Mostramos
    let element = "";

    for (let i = 0; i < numeros.length; i++) {

        element += `${numeros[i]}<br>`;

    }

    let tabla = document.getElementById("bodyTabla");

    let maximos = `<b>Número más alto: ${maxValor}</b><br>`;
    maximos += `<b>Número más bajo: ${minValor}</b>`;

    tabla.innerHTML += `<tr><td>${element}</td><td>${maximos}</td></tr>`;

}




