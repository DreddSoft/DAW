// Ejercicio 6. Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número N. La aplicación mostrará en la parte destinada para tal efecto, todos los pares desde 2 hasta N (inclusive), con las siguientes condiciones:

// Cada número se mostrará en una línea distinta.
// Controlar que N siempre será mayor o igual a 2. En caso contrario, mostrar advertencia y volver a solicitar N.


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

function showPairs () {

    // Pedimos el número que va a marcar el límite
    let limit = getNumberFromPrompt();

    // Creamos el elemento html para que sea interactivo
    let element = `<tr><td>${limit}</td><td>`;

    // Capturamos el body de la tabla
    let bodyTable = document.getElementById("bodyTabla");

    // Recorremos desde 2 hasta el límite, de 2 en 2 (pares)
    for (i = 2; i <= limit; i += 2) {
        // Por cada iteración añadimos un numero y br
        element = element +  `${i}<br>`;
    }

    // Cerramos las etiquetas de td y tr
    element += "</td></tr>";

    // Lo añadimos al innerHTML de la tabla
    bodyTable.innerHTML += element; 

}

function getNumberFromPrompt () {

    let number;
    let exit = false;

    do {

        number = parseInt(prompt("Introduce un número mayor que 2: "));

        if (!isNumberValid(number)) {
            alert("Has introducido un número menor que 2 o algo que no es un número.");
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

    return !isNaN(number) && number >= 2;
    
}




