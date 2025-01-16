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
    let indicadorNivel = document.querySelector("#indicadorNivel");
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

    switch (nivelActual) {
        case 1:
            indicadorNivel.src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg";
            indicadorNivel.alt = "Nivel 1"
            break;
        case 2:
            indicadorNivel.src = "https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg";
            indicadorNivel.alt = "Nivel 2"
            break;
        case 3:
            indicadorNivel.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg";
            indicadorNivel.alt = "Nivel 3"
            break;
        case 4:
            indicadorNivel.src = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg";
            indicadorNivel.alt = "Nivel 4"
            break;
        case 5:
            indicadorNivel.src = "https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg";
            indicadorNivel.alt = "Nivel 5"
            break;

        default:
            break;
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

//* Función para abrir buscaminas
function abrirBuscaminas() {

    window.location.href = `../buscaminas/buscaminas.html?nivel=${nivelActual}`;


}


/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 8
 * Date: January 2025
 * Version: 1.0
 */