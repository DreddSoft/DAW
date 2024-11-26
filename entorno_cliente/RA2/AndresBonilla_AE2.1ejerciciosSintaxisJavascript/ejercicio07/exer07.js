// Capturamos los botones en constantes
const showBtn = document.getElementById("btn-show");
const hideBtn = document.getElementById("btn-hide");
const introBtn = document.getElementById("btn-intro");

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

function showPairs() {

    // Pedimos el número que va a marcar el límite
    let limit = getNumberFromPrompt();

    // Creamos el elemento html para que sea interactivo
    let element = `<tr><td>${limit}</td><td>`;

    // Capturamos el body de la tabla
    let bodyTable = document.getElementById("bodyTabla");

    // Recorremos desde 2 hasta el límite, de 3 en 3 (empezando en 1)
    for (i = 1; i <= limit; i++) {

        // Si no es divisible por 2, es impar
        if (i % 2 !== 0) {
            // Por cada iteración añadimos un numero y br
            element = element + `${i}<br>`;
        }

    }

    // Cerramos las etiquetas de td y tr
    element += "</td></tr>";

    // Lo añadimos al innerHTML de la tabla
    bodyTable.innerHTML += element;

}

function getNumberFromPrompt() {

    let number;
    let exit = false;

    do {

        number = parseInt(prompt("Introduce un número mayor que 1: "));

        if (!isNumberValid(number)) {
            alert("Has introducido un número menor que 1 o algo que no es un número.");
            exit = confirm("¿Quieres continuar con el ejercicio?");

        }

    } while (!isNumberValid(number) && exit);

    return number;

}

// Event Handler para el click del boton intro
introBtn.addEventListener('click', () => {

    // Aplicamos funcionalidad
    showPairs();

});

function isNumberValid(number) {

    return !isNaN(number) && number >= 1;

}




