function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 2.</b> Realiza una aplicación web que simule el comportamiento del juego de La Quiniela propiedad de Loterías y Apuestas del Estado.</p>"
        + "<p><b><i>Nota:</i></b> La finalidad de este ejercicio es puramente académica, juega responsablemente sólo si eres mayor de edad. En ningún caso se pretende fomentar la ludopatía.</p>"
        + "<p>La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.</p>"
        + "<p>A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.</p>"
        + "<p>Cada combinación consta de 14 enfrentamientos entre dos equipos, donde hay tres opciones 1 X 2 (1 gana el equipo local, X empate y 2 gana el equipo visitante).</p>"
        + "<p>Cada boleto tiene una combinación extra donde se elige 0 1 2 M (representa el número de goles marcados por ese equipo, M 3 o más goles), correspondiente al Pleno al 15.</p>"
        + "<p>A continuación, se muestra una captura de la aplicación web <a src='https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/' target='_blank'>https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/</a>, para que sirva de inspiración y ayuda.</p>"
        + "<img src='../image-1.png' alt='Ejemplo de juegos' style='place-self: center'>";

    enunciado.innerHTML = enun;

    // Mostrar enunciado
    enunciado.style.display = "block";

    // Ocultar botón ver
    document.getElementById("ver").style.display = "none";

    // Mostrar botón ocultar
    document.getElementById("ocultar").style.display = "block";

}

function ocultarEnunciado() {

    // Ocultar enunciado
    let enunciado = document.getElementById("enunciado");
    enunciado.style.display = "none";

    // Ocultar el botón ocultar
    document.getElementById("ocultar").style.display = "none";

    // Mostar el botón ver
    document.getElementById("ver").style.display = "block";

}


function jugar() {

    // Variables
    let resultadoPartidosGanador = [1, 0, 0, 1, 2, 2, 0, 1, 0, 2, 2, 1, 0, 0];
    let pleno15Ganador = 0;
    let apuestas = [];
    let reintegros = [];
    let premioTotal = 0;
    let mensaje = "";

    // Capturamos las apuestas del usuario
    apuestas = apuestasDelUsuario();

    // Capturar las apuestas por el reintegro
    reintegros = apuestaPorElReintegro();

    for (let i = 0; i < apuestas.length; i++) {

        // Calculamos los aciertos por apuesta (por tirada)
        let aciertos = cuantosAciertos(resultadoPartidosGanador, apuestas[i], pleno15Ganador, reintegros);

        // Calculamos el premio por carrusel
        let premio = calcularPremio(aciertos);

        // Sumamos al total
        premioTotal += premio;

        // Creamos el mensaje
        mensaje += `<p>El Bloque ${i + 1} ha tenido ${aciertos} aciertos y un premio de: ${premio} EUROS.</p>`;

    }

    mensaje += `<p>El premio total recibido es de: ${premioTotal} EUROS.</p>`;

    // Hacemos display en div preparado para eso
    let display = document.querySelector("#display");

    // Añadimos el contenido
    display.innerHTML += mensaje;

    // Mostramos el display
    display.style.display = "flex";

}

// Funcion para recuperar las apuestas del usuario
function apuestasDelUsuario() {

    // capturamos el numero de carruseles
    const divCarruseles = document.querySelectorAll("div.carrusel");
    let numCarruseles = 0;
    let apuestas = [];

    // Contador de carruseles manual
    for (let i = 0; i < divCarruseles.length; i++) {

        if (divCarruseles[i].style.display != "none") {
            numCarruseles++;
        }
    }

    // Recogemos los valores de las apuestas del usuario por carrusel disponible
    for (let j = 1; j <= numCarruseles; j++) {
        apuestas[j - 1] = [];

        // for para las 14 filas
        for (let i = 1; i <= 14; i++) {

            // sacamos la fila
            let fila = document.querySelector(`#c${j}r${i}`);
            let valor = fila.querySelector(".seleccionado").value;

            console.log(valor);
            apuestas[j - 1].push(valor);
        }
    }


    return apuestas;

}

// Función para capturar las elecciones del reintegro
function apuestaPorElReintegro() {

    // Los reintegros
    let reintegros = [];
    let seleccionado = 0;

    // Capturamos las 2 filas del reintegro
    let fila1 = document.querySelector("#c15r1");
    let fila2 = document.querySelector("#c15r2");

    // Sacamos los valores seleccionados
    seleccionado = fila1.querySelector(".seleccionado").value;

    if (seleccionado) {
        reintegros.push(seleccionado);
    }

    seleccionado = fila2.querySelector(".seleccionado").value;

    if (seleccionado) {
        reintegros.push(seleccionado);
    }

    return reintegros;

}

function controlarBoton(idBoton) {

    // Obtenemos el elemento padre del boton, la fila
    let fila = document.getElementById(`${idBoton}`).parentElement;

    // Obtenemos todos los botones de la fila
    let botones = fila.querySelectorAll('button');

    // Recorremos los botones
    for (let i = 0; i < botones.length; i++) {

        // Borramos todas las clases de seleccionado
        botones[i].classList.remove('seleccionado');
    }

    // Aplicamos el estilos seleccionado al marcado
    console.log(`El id: ${idBoton}`);
    document.querySelector(`#${idBoton}`).classList.add('seleccionado');

}

function borrarCarrusel(id) {

    // Ocultamos el carrusel
    document.getElementById(`c${id}`).style.display = "none";

}

// Pleno al 15 76527504
// 14 4782969
// 13 170820
// 12 13140
// 11 1643
// 10 299

// Función para calcular el premio
function calcularPremio(aciertos) {

    switch (aciertos) {

        case 15:
            return 76527504;

        case 14:
            return 4782969;

        case 13:
            return 170820;

        case 12:
            return 13140;

        case 11:
            return 1643;

        case 10:
            return 299;

        default:
            return 0;

    }

}

// Función para calcular los aciertos
function cuantosAciertos(resultadoPartidosGanador, apuesta, pleno15Ganador, reintegro) {

    let aciertos = 0;

    // Calcular aciertos normales
    for (let i = 0; i < resultadoPartidosGanador.length; i++) {

        if (apuesta[i] == resultadoPartidosGanador[i]) {
            aciertos++;
        }

    }

    for (let j = 0; j < reintegro.length; j++) {

        if (reintegro[j] == pleno15Ganador) {
            aciertos++;
        }

    }

    return aciertos;

}



/**
 * Author: @Dreddsoft
 * Exercise: AE3.3 - ejercicio 02
 * Date: 29/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

