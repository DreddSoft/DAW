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
    let enun = "<p><b>Ejercicio 2.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos fechas y horas en formato XXXX/YY/ZZ HH:MM:SS</p>"
        + "<p>Donde:</p>"
        + "<p>XXXX es el año YY, el mes y ZZ, el día.</p>"
        + "<p>HH son las horas en formato 24 horas, MM los minutos y SS, los segundos.</p>"
        + "<p>Crea una función que sea capaz de calcular el número de días y horas transcurridos entre esas dos fechas y horas dadas . El resultado debe ser un valor absoluto, es decir, es indiferente que el primer argumento sea una fecha anterior o posterior al segundo, el resultado será un número de días y horas sin signo.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>";


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
    let fecha1 = introduceFecha();

    // Pedimos la 2da fecha
    let fecha2 = introduceFecha();


    let mensajeEntrada = `${fecha1.toLocaleString("es-ES")}<br>${fecha2.toLocaleString("es-ES")}`;


    // console.log(`Obtener el anno: ${prueba.getFullYear()}`);
    // console.log(`Obtener el mes: ${prueba.getMonth()}`);
    // console.log(`Obtener el dia: ${prueba.getDate()}`);

    // console.log(`Obtener la hora: ${prueba.getHours()}`);
    // console.log(`Obtener los minutos: ${prueba.getMinutes()}`);
    // console.log(`Obtener los segundos: ${prueba.getSeconds()}`);


    //TODO: Aqui hay que usar una funcion que devuelva un string con la diferencia en 
    let mensaje = diferenciaEntreDosFechas(fecha1, fecha2);

    // let diff = prueba - prueba2;
    // diffFecha = new Date(diff);
    //alert(fecha1.toLocaleString("es-ES"));

    // Impresion
    impresion(mensajeEntrada, mensaje);

}

// Funcion introducir fehca
function introduceFecha() {

    // Pedimos la fecha por prompt
    let fecha = prompt("Introduce una fecha en el formato: YYYY/MM/DD HH:MM:SS");

    // Formato de fecha en regex
    const REGEX = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}\:[0-9]{2}\:[0-9]{2}/;

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

    // Primero dividimos y separamos la fecha de la hora
    let partes = fechaString.split(" ");

    // Separamos las partes de la fecha por la barra
    let fechaPartes = partes[0].split("/");

    // Lo dividimos en variables para que sea mas comprensible
    let anno = parseInt(fechaPartes[0]);
    let mes = parseInt(fechaPartes[1]);
    let dia = parseInt(fechaPartes[2]);

    // Separamos las partes de la hora por los :
    let horaPartes = partes[1].split(":");

    // Dividimos las horas para que sea mas comprensible
    let hora = parseInt(horaPartes[0]);
    let min = parseInt(horaPartes[1]);
    let seg = parseInt(horaPartes[2]);

    // Controlamos que la fecha es valida
    if (!controlarPartesDeFecha(anno, mes, dia)) {
        return false;
    }

    // Controlamos las partes de la hora
    if (!controlarPartesDeHora(hora, min, seg)) {
        return false;
    }

    // Devolvemos un constructor de fecha con todos los parametros
    return new Date(anno, mes - 1, dia, hora, min, seg);

}

// funcion para controlar partesDeFecha
function controlarPartesDeFecha(anno, mes, dia) {

    // Controlamos que no introduzca un mes mas grande que 12 o menor 0
    if (mes <= 0 || mes > 12) {
        return false;
    }

    // controlamos si es anio bisiesto
    if ((anno % 4 == 0 && anno % 100 != 0) || (anno % 4 == 0 && anno % 100 == 0 && anno % 400 == 0)) {

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

// Funcion para controlar partesDeHora
function controlarPartesDeHora(hora, min, seg) {

    if (hora < 0 || hora > 24) {
        return false;
    }

    if (min < 0 || min > 60) {
        return false;
    }

    if (seg < 0 || seg > 60) {
        return false;
    }

    return true;

}

// Diferencia entre dos fechas
function diferenciaEntreDosFechas(fecha1, fecha2) {


    // La resta de una fecha en otro devuelve el resultado en milisegundos de la diferencia
    // Math.abs para devolver el valor absoluto
    let diffMS = Math.abs(fecha1 - fecha2);

    // los dias
    // Pasamos los milisegundos a dias 
    let temp = diffMS / (1000 * 60 * 60 * 24);
    let dias = Math.floor(temp); 
    temp = temp - dias;
    
    // Horas
    // El restante en temp lo pasamos a horas
    temp = temp * 24;
    let horas = Math.floor(temp);
    temp = temp - horas;

    // Minutos
    temp = temp * 60;
    let minutos = Math.floor(temp);
    temp = temp - minutos;
    
    // Segundos
    temp = temp * 60;
    let segundos = Math.round(temp);

    return `entre ambas fechas han transcurrido ${dias} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

}

// Funcion para impresion
function impresion(input, mensaje) {

    // Capturamos el cuerpo de la tabla
    let tabla = document.querySelector("#bodyTable");

    // Insertamos el mensaje en el htm
    tabla.innerHTML += `<tr><td>${input}</td><td>${mensaje}</td></tr>`;

}