
//* Mostrar enunciado
function mostrarEnunciado() {

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

function exercise15() {

    // El factorial...
    let num = 0;
    let factorial = 0;

    // Pedimos al usuario e igualamos el factorial al num
    num = parseInt(prompt("Introduce un número natural: "));
    factorial = num;

    if (num <= 0) {  // Si es 0, error
        factorial = "<b>Error: </b> Introduce un numero natural.";

    } else {    // Calculo factorial
        for (let i = num - 1; i > 0; i--) {
            factorial *= i;
        }
    }

    let table = document.getElementById("bodyTabla");

    table.innerHTML += `<tr><td>${num}</td><td>${factorial}</td></tr>`;


}




