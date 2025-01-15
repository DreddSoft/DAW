// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
let enunciado = document.querySelector("#enunciado-texto");
let nivelActual = 1;
const nivelMaximo = 5;
const nivelMinimo = 1;

document.addEventListener('DOMContentLoaded', () => {

    // AL cargar el DOM que actualice el nivel
    actualizarNivel(nivelActual);

    // alert("url del historial: " + history.length);

});


//* EVENT LISTENER
if (btnShow) {
    btnShow.addEventListener('click', () => {

        // Volcamos enunciado
        document.querySelector("#enunciado-texto").classList.remove("hidden")

        // Ocultamos boton Mostrar
        btnShow.classList.add("hidden");

        // Quitamos ocultar del btnHide
        btnHide.classList.remove("hidden");

    });
}

if (btnHide) {
    btnHide.addEventListener('click', () => {

        // Ocultamos boton hide
        btnHide.classList.add("hidden");

        // Ocultamos el enunciado
        document.querySelector("#enunciado-texto").classList.add("hidden");

        // Mostramos btnShiw
        btnShow.classList.remove("hidden");
    });
}

/// Función para actualizar el nivel
function actualizarNivel(nivelActual) {

    let nivelMsj = document.querySelector("#nivel");

    // Asignamos el nivel actual
    nivelMsj.innerHTML = `Nivel ${nivelActual}`;

    // Comprobar si el nivel es el minimo
    if (nivelActual == nivelMinimo) {
        document.querySelector("#btn-anterior").disabled = true;
        document.querySelector("#btn-anterior").classList.add("myButtonProhibited");

    } else {
        document.querySelector("#btn-anterior").disabled = false;
        document.querySelector("#btn-anterior").classList.remove("myButtonProhibited");

    }

    // Comprobar si es nivel maximo
    if (nivelActual == nivelMaximo) {
        document.querySelector("#btn-siguiente").disabled = true;
        document.querySelector("#btn-siguiente").classList.add("myButtonProhibited");
    } else {
        document.querySelector("#btn-siguiente").disabled = false;
        document.querySelector("#btn-siguiente").classList.remove("myButtonProhibited");

    }

}

// Función para siguiente
function siguiente() {

    // si el nivel es menor que 5
    if (nivelActual < 5) {
        // aumentamos el nivel
        nivelActual++;
        // actualizamos
        history.forward();
        actualizarNivel(nivelActual);

    }

}

// Funcion para anterior
function anterior() {

    // si el nivel es mayor que 1
    if (nivelActual > 1) {
        // reducimos nivel
        nivelActual--;

        history.back();
        //actualizamos
        actualizarNivel(nivelActual);
    }

}


/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 7
 * Date: January 2025
 * Version: 1.0
 */