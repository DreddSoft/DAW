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
    let enun = "<p><b>Ejercicio 4.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una fecha.</p>"
        + "<p>Crea una función/método para el objeto Date, denominada getWeek, que devuelva el número de semana para la fecha introducida.</p>"
        + "<p>Según la norma ISO 8601, las semanas comienzan en lunes y si el año comienza antes del viernes esa es la semana 1 del año, en caso contrario esa es la última semana del año anterior. Si el año termina antes del jueves esa última semana se cuenta como semana 1 del año siguiente.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<table style='place-self: center; margin: 1rem;'><tr><th><b>ENTRADA</b></th><th><b>SALIDA</b></th></tr>"
        + "<tr><td>12/09/2024</td><td>El número de semana para la fecha introducida es 37</td></tr>"
        + "<tr><td>01/01/2023</td><td>El número de semana para la fecha introducida es 52 (ya que corresponde a la semana anterior)</td></tr>"
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
    // let fecha = new Date(2023, 0, 1);

    let mensajeEntrada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

    // Obtenemos el número de la semana con el getWeek
    let numSemana = getWeek(fecha);

    let mensaje = `El número de semana para la fecha introducida es ${numSemana}`;

    // Si el getWeek nos ha devuelto la semana 52 y estamos en Enero
    if (numSemana == 52 && fecha.getMonth() == 0) {
        mensaje = `El número de semana para la fecha introducida es ${numSemana} (ya que corresponde a la semana anterior)`;
    }

    // Impresion
    impresion(mensajeEntrada, mensaje);

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
function getWeek(fecha) {

    let jueves;

    // Encontrar el primer jueves de ese año
    // Hago un bucle for que recorra los 7 primeros días de enero
    for (let i = 0; i < 7; i++) {
        jueves = new Date(fecha.getFullYear(), 0, i);

        // Si es jueves, cortamos
        if (jueves.getDay == 4) {
            break;
        }
    }

    // La semana 1 empieza a partir del primer jueves del año
    // Calculamos la diferencia entre la fecha y el primer jueves
    let diff = fecha - jueves;

    // Convertimos la diferencia en semanas
    milisegundosEnSemana = 1000 * 60 * 60 * 24 * 7;

    // Le hacemos un mathfloor para aproximar al bajo
    let semanas = Math.floor(diff / milisegundosEnSemana) + 1;

    // Si la fecha es anterior al primer jueves y estamos en enero
    if (fecha < jueves && fecha.getMonth() == 0) {
        return 52;
    }

    return semanas ;

}

// Funcion para impresion
function impresion(input, mensaje) {

    // Capturamos el cuerpo de la tabla
    let tabla = document.querySelector("#bodyTable");

    // Insertamos el mensaje en el htm
    tabla.innerHTML += `<tr><td>${input}</td><td>${mensaje}</td></tr>`;

}

/**
 * Author: @DreddSoft
 * Exercise: AE3.4 Ejercicio 04
 * Date: 07/12/2024
 * Version: 1.0
 */