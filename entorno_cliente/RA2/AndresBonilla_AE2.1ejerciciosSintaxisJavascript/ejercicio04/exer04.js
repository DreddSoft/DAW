// Enunciado: Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una calificación numérica entre 0 y 10 (con decimales).
// La aplicación mostrará en la parte destinada para tal efecto, su transformación en calificación alfabética según la siguiente tabla.

// De 0 a 3, Muy deficiente.
// De 3 a 5, Insuficiente.
// De 5 a 6, Bien.
// De 6 a 9, Notable.
// De 9 a 10, Sobresaliente.


// Capturamos los botones en constantes
const showBtn = document.getElementById("btn-show");
const hideBtn = document.getElementById("btn-hide");

// Funciones para mostrar y ocultar el enunciado
function showStatement() {

    // Mostramos el div que contiene el enunciado
    document.getElementById("statement").style.display = "block";

    // Ocultamos showBtn
    showBtn.style.display = "none";

    // Mostramos hideBtn
    hideBtn.style.display = "block";

}

function hideStatement() {

    // Ocultamos el div que contiene el enunciado
    document.getElementById("statement").style.display = "none";

    // Mostramos showBtn
    showBtn.style.display = "block";

    // Ocultamos hideBtn
    hideBtn.style.display = "none";

}

//* Funcion para introducir empleados
function enterGrades() {

    let tableBody = document.getElementById("bodyTabla");

    let nota = inputGrades();

    let valorNota = calificacion(nota);

    let elemento = `<tr><td>${nota}</td><td>${valorNota}</td></tr>`;

    // añadimos la nueva fila a la tabla
    tableBody.innerHTML = tableBody.innerHTML + elemento;

}

function inputGrades() {

    // Pedimos el input con prompt
    let nota = prompt("Introduce una nota en formato (00,00): ");

    // Convertir la nota a Float (parseFloat)
    nota = parseFloat(nota);

    // Comprobamos si no es un número.
    if (isNaN(nota)) {
        alert("No ha introducido un número correcto.");
        return 0;
    }

    // Devolvemos el valor de la nota
    return nota;

}

function calificacion(nota) {

    switch (true) {
        case nota >= 9:
            return "Sobresaliente";

        case nota >= 6:
            return "Notable";

        case nota >= 5:
            return "Bien";

        case nota >= 3:
            return "Insuficiente";

        default:
            return "Muy deficiente";
    }
    
}


