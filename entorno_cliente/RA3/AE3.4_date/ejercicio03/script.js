// Capturamos los dos botones de mostrar enunciado para usar events
const mostrar = document.querySelector("#mostrar");
const ocultar = document.querySelector("#ocultar");
const resultado = document.querySelector("#resultado");

//* Eventos
mostrar.addEventListener('click', () => {

    // ejecutamos la funcion mostrar Enunciado
    mostrarEnunciado();
});

ocultar.addEventListener('click', () => {

    // ejecutamos la funcion ocultar enunciado
    ocultarEnunciado();
});

resultado.addEventListener('click', () => {

    // Ejecutamos la funcion mostrarResultado
    mostrarResultado();
});
//* Funciones de logica
function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 3.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una fecha.</p>"
        + "<p>Crea una función que reciba como argumento esa fecha y devuelva el número de días del mes introducido para ese año.</p>"
        + "<p><b>Recuerda:</b> un año es bisiesto si es múltiplo de 4, excepto el primer año del siglo (1500, 1600...) que solo lo será si es divisible por 400.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<table style='place-self: center; margin: 1rem;'><tr><th><b>ENTRADA</b></th><th><b>SALIDA</b></th></tr>"
        + "<tr><td>01/02/2000</td><td>29 dias</td></tr>"
        + "<tr><td>01/12/2024</td><td>31 dias</td></tr>"
        + "</table>";


    enunciado.innerHTML = enun;

    // Mostrar enunciado
    enunciado.style.display = "block";

    // Ocultar botón ver
    mostrar.style.display = "none";

    // Mostrar botón ocultar
    ocultar.style.display = "block";

}

function ocultarEnunciado() {

    // Ocultar enunciado
    let enunciado = document.getElementById("enunciado");
    enunciado.style.display = "none";

    // Ocultar el botón ocultar
    ocultar.style.display = "none";

    // Mostar el botón ver
    mostrar.style.display = "block";

}

// Funcion para el resultado del ejercicio
function mostrarResultado() {

    // Pedimos la 1ra fecha
    let fecha = introduceFecha();

    let mensajeEntrada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

    let dias = getDiasDelMes(fecha);

    let mensaje = `${dias} dias`;

    // Impresion
    impresion(mensajeEntrada, mensaje);
    alert(fecha.isLeap());

}

// Funcion introducir fehca
function introduceFecha() {

    // Pedimos la fecha por prompt
    let fecha = prompt("Introduce una fecha en el formato: DD/MM/YYYY");

    // Formato de fecha en regex
    const REGEX = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

    // Si no cumple el formato, volvemos a repetir la funcion
    if (!REGEX.test(fecha)) {
        alert("Formato de fecha incorrecto");
        return introduceFecha();
    }

    let fechaTipoDate;

    if (!(fechaTipoDate = convertirToFecha(fecha))) {
        alert("Fecha de tipo incorrecto.");
        return introduceFecha();
    }

    return fechaTipoDate;

}

// Funcion convertir string en fecha
function convertirToFecha(fechaString) {

    // Separamos las partes de la fecha por la barra
    let fechaPartes = fechaString.split("/");

    // Lo dividimos en variables para que sea mas comprensible
    let dia = parseInt(fechaPartes[0]);
    let mes = parseInt(fechaPartes[1]);
    let anno = parseInt(fechaPartes[2]);

    // Controlamos que la fecha es valida
    if (!controlarPartesDeFecha(anno, mes, dia)) {
        return false;
    }

    // Devolvemos un constructor de fecha con todos los parametros
    return new Date(anno, mes - 1, dia);

}

// funcion para controlar partesDeFecha
function controlarPartesDeFecha(anno, mes, dia) {

    // Controlamos que no introduzca un mes mas grande que 12 o menor 0
    if (mes <= 0 || mes > 12) {
        return false;
    }

    // controlamos si es anio bisiesto
    if ((anno % 4 == 0 && anno % 100 != 0) & anno % 400 == 0) {

        // y el mes es febrero
        if (mes == 2) {
            // Que el dia no sea mayor a 29
            if (dia > 29) {
                return false;
            }
        }
    } else {    // si no es bisiesto
        if (mes == 2) { // y es febrero
            // que dia no sea mayor a 28
            if (dia > 28) {
                return false;
            }
        }
    }

    // Arrays
    let mesesDe30 = [4, 6, 9, 11];

    // si el mes tiene 30 dias
    if (mesesDe30.includes(mes) && (dia < 0 || dia > 30)) {
        return false;

    } else {    // cualquier otro mes
        if (dia < 0 || dia > 31) {
            return false;
        }
    }

    // Cualquier otra cosa 
    return true;

}

// Obtener los dias del mes
function getDiasDelMes(fecha) {

    // Sacamos el anno y el mes
    let anno = fecha.getFullYear();
    let mes = fecha.getMonth();
    mes = mes + 1;
    let mesesDe30 = [4, 6, 9, 11];

    let bisiesto = false;

    // Valoramos si es bisiesto
    if ((anno % 4 == 0 && anno % 100 != 0) || (anno % 4 == 0 && anno % 100 == 0 && anno % 400 == 0)) {
        bisiesto = true;
    }

    // si es mes de 30
    if (mesesDe30.includes(mes)) {
        return 30;
    }

    // Sacamos si es febrero
    if (mes == 2 && bisiesto) {
        return 29;
    } else if (mes == 2 && !bisiesto) {
        return 28;
    }

    return 31;
    
}

// Funcion para impresion
function impresion(input, mensaje) {

    // Capturamos el cuerpo de la tabla
    let tabla = document.querySelector("#bodyTable");

    // Insertamos el mensaje en el htm
    tabla.innerHTML += `<tr><td>${input}</td><td>${mensaje}</td></tr>`;

}