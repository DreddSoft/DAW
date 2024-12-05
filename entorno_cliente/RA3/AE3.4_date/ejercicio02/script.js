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

    // Convertimos la fecha
    fecha1 = convertirToFecha(fecha1);

    // Pedimos la 2da fecha
    let fecha2 = introduceFecha();

    // convertimos la fecha
    fecha2 = convertirToFecha(fecha2);


    alert(fecha1);

    alert(fecha2);

    // Impresion
    //impresion(mensajeEntrada, mensaje);
    
}

// Funcion introducir fehca
function introduceFecha() {

    // Pedimos la fecha por prompt
    let fecha = prompt("Introduce una fecha en el formato: YYYY/MM/DD HH:MM:SS");

    // Formato de fecha en regex
    const REGEX = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}\:[0-9]{2}\:[0-9]{2}/;

    // Si no cumple el formato, volvemos a repetir la funcion
    if (!REGEX.test(fecha)) {
        return introduceFecha();
    }

    return fecha;
    
}

// Funcion convertir string en fecha
function convertirToFecha(fechaString) {

    // Primero dividimos y separamos la fecha de la hora
    let partes = fechaString.split(" ");

    // Separamos las partes de la fecha por la barra
    let fechaPartes = partes[0].split("/");

    // Separamos las partes de la hora por los :
    let horaPartes = partes[1].split(":");

    // Devolvemos un constructor de fecha con todos los parametros
    return new Date(fechaPartes[0], fechaPartes[1], fechaPartes[2], horaPartes[0], horaPartes[1], horaPartes[2]);
    
}

// Funcion para impresion
function impresion(input, mensaje) {

    // Capturamos el cuerpo de la tabla
    let tabla = document.querySelector("#bodyTable");

    // Insertamos el mensaje en el htm
    tabla.innerHTML += `<tr><td>${input}</td><td>${mensaje}</td></tr>`;
    
}