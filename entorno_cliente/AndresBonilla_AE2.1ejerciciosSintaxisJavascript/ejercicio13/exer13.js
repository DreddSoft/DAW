
//* Mostrar enunciado
function mostrarEnunciado() {

    document.getElementById("enunciado").innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de números enteros.\nAdicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes.\nLa aplicación mostrará en la parte destinada para tal efecto, la línea en orden inverso.";

    document.getElementById("enunciado").style.display = "block";


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

function exercise13() {

    // Variables
    let cantidad = 0;
    let numeros = [];
    let inversos = [];

    let celdaNumeros = "";
    let celdaInversos = "";

    // Pedimos cantidad
    cantidad = parseInt(prompt("Introduce un límite: "));

    while (isNaN(cantidad)) {
        cantidad = parseInt(prompt("ERROR. Introduce un límite: "));

    }

    // Introduce números 
    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Introduce valor: "));
        celdaNumeros += `${numeros[i]}, `;
    }


    // Invertidos
    for (let j = cantidad - 1, i = 0; j >= 0; j--, i++) {

        inversos[i] = numeros[j];
        celdaInversos += `${inversos[i]} ,`;
        console.log("Por aqui");
    }

    // Display del contenido
    let tableBody = document.getElementById("bodyTabla");

    tableBody.innerHTML += `<tr><td>${celdaNumeros}</td><td>${celdaInversos}</td></tr>`;

}




