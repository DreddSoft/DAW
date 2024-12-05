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
    let enun = "<p><b>Ejercicio 1.</b> Realiza una aplicación web dónde se muestre en la parte destinada para tal efecto la siguiente cadena de caracteres en función de la hora y el día.</p>"
        + "<ul>"
        + "<li>\"Buenos dias, que tenga un feliz <diaSemana>\": de 6 de la mañana a 12 del medio día.</li>"
        + "<li>\"Buenas tardes, disfrute de su tarde del <diaSemana>\" : de las 12 del mediodía hasta las 20h.</li>"
        + "<li>\"Buenas noches, le deseamos lo mejor para el <diaSemana> próximo\" : de las 20h hasta las 6 de la madrugada.</li>"
        + "</ul>";


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

    // fecha de hoy
    let actual = new Date();

    laHora = actual.getHours();
    // alert(actual.getHours());

    // Array de dias
    let diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let mensaje = `Buenas noches, le deseamos lo mejor para ${diasDeLaSemana[actual.getDay() + 1]} proximo.`;

    if (laHora >= 6 && laHora < 12) {
        mensaje = `Buenos dias, que tengas un feliz ${diasDeLaSemana[actual.getDay()]}.`;
    } else if (laHora >= 12 && laHora < 20) {
        mensaje = `Buenas tardes, disfrute de su tarde del ${diasDeLaSemana[actual.getDay()]}.`;
    }

    // Como no hay c*****s de sacar el cero, pues lo creo como variable si es menor a 10.... el TOC
    let elCero = (actual.getMinutes() < 10) 
        ? "0"
        : "";

    let mensajeEntrada = `Ha entrado a la web a las ${actual.getHours()}:${elCero}${actual.getMinutes()} del dia ${diasDeLaSemana[actual.getDay()]}`;

    // Impresion
    impresion(mensajeEntrada, mensaje);
    
}

// Funcion para impresion
function impresion(input, mensaje) {

    // Capturamos el cuerpo de la tabla
    let tabla = document.querySelector("#bodyTable");

    // Insertamos el mensaje en el htm
    tabla.innerHTML += `<tr><td>${input}</td><td>${mensaje}</td></tr>`;
    
}