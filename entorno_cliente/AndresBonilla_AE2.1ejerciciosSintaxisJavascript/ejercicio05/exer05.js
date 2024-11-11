// Ejercicio 5. Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario el número de horas trabajadas y el precio por hora.

// La aplicación mostrará en la parte destinada para tal efecto, el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes reglas:

// Las primeras 35 horas se pagan a tarifa normal.
// Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.

// Al sueldo bruto se le aplicarán las siguientes tasas de impuestos:

// Los primeros 500 euros son libres de impuestos.
// Los siguientes 400 tienen un 25% de impuestos.
// Los restantes un 45% de impuestos.


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

function showSalary() {

    let hours = prompt("Introduce las horas (sin decimales): ");
    let hourlyRate = prompt("Introduce el precio de la hora (00.00): ");

    // Transformamos
    hours = parseInt(hours);
    hourlyRate = parseFloat(hourlyRate);

    // Calculamos salario bruto
    let grossSalary = calculateGrossSalary(hours, hourlyRate);

    // Calculamos salario neto
    let netSalary = calculateNetSalary(grossSalary);

    let tableBody = document.getElementById("bodyTabla");

    let element = `<tr><td>${hours}<br>${hourlyRate}</td><td>${netSalary}</td></tr>`;

    tableBody.innerHTML = tableBody.innerHTML + element;
    
}

// Funcion para calcular el salario bruto
function calculateGrossSalary(hours, hourlyRate) {

    let restHours = 0;
    let partBase = 0;
    let partExtra = 0;

    if (hours > 35) {
        restHours = hours - 35;
        partBase = 35 * hourlyRate;
        partExtra = restHours * (hourlyRate * 1.5);

        return partBase + partExtra;
    } 

    return hours * hourlyRate;
    
}

function calculateNetSalary(grossSalary) {

    // Array para guardar los tramos salariales
    let parts = [];
    
    // Switch para las evaluaciones de los tramos
    switch (true) {
        case grossSalary > 900:
            parts[0] = 500;
            parts[1] = 400;
            parts[2] = grossSalary - 900;

            return parts[0] + (parts[1] * 0.75) + (parts[2] * 0.55);

        case grossSalary > 500 && grossSalary <= 900:
            parts[0] = 500; 
            parts[1] = grossSalary - 500;

            return parts[0] + (parts[1] * 0.75);
    
        default:
            return grossSalary;
    }

}


