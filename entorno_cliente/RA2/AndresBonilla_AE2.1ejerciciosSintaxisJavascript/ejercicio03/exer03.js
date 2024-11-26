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
function introEmployee() {

    // Usa prompt para guardar el input del usuario
    let data = prompt("Introduzca los datos del empleado del siguiente modo: \n(nombre, sueldo, antiguedad):");

    // trim para eliminar espacios y dividimos en array
    data.trim();
    let dataArr = data.split(",");  // separador ","

    // Aclaramos el array
    let emp = dataArr[0];
    let baseSalary = dataArr[1];
    let years = dataArr[2];

    // limpiar los datos
    // el segundo indice del array es el sueldo debe ser entero
    baseSalary = parseInt(baseSalary);

    // el tercer indice (2) del array es la antiguedad que debe ser entero
    years = parseInt(years);


    // Establecemos el salario final
    let finalSalary = salary(baseSalary, years);

    // Creamos el string con los elementos
    let elements = `<tr><td>${emp}</td><td>${baseSalary}</td><td>${years}</td><td>${finalSalary}</td></tr>`;

    // capturamos la tabla
    let tabla = document.getElementById("bodyTabla");

    // introducimos los elementos sin sobrescribir lo anterior
    tabla.innerHTML = tabla.innerHTML + elements;

}

// Calcular sueldo resultante
function salary(baseSalary, years) {

    // 1. baseSalary < 500 && years >= 10 = 3xbaseSalary
    // 2. baseSalary < 500 && years < 10 = 2xbaseSalary
    // 3. baseSalary >= 500 = 1xbaseSalary

    switch (true) {
        case baseSalary < 500 && years >= 10:
            return 3 * baseSalary;
        // no es necesario el break, porque el return nos saca de la funcion

        case baseSalary < 500 && years < 10:
            return 2 * baseSalary;

        default:
            return baseSalary;
    }

}

