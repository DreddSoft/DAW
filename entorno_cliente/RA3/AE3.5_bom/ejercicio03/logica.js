// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
let enunciado = document.querySelector("#enunciado-texto");

// Usamos el evento de carga de contenido
addEventListener('DOMContentLoaded', () => {


    tuSistemaOperativo();
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




//* FUNCIONES PROPIAS
// función para añadir el sistema operativo
function tuSistemaOperativo() {

    // Sacamos la versión del navegador y el SO y lo guardamos en una variable
    //! Ojo, también podemos usar navigator.platform para sacar sólo el SO, pero no funciona bien
    let SOversion = navigator.userAgentData.platform;

    // if (navigator.platform == "Win32") {
    //     SOversion = "Windows 11";
    // } 

    // Modificamos el innerHTML del botón para añadir esta información
    document.querySelector("#btn-descargar").innerHTML += ` ${SOversion}`;
    
}

/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 2
 * Date: 08/01/2025
 * Version: 1.0
 */