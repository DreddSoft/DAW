// obtener los enlaces
const enlaces = document.querySelectorAll(".nav-link");

// icono e input del search
const iconoSearch = document.querySelector("#search-icon");
const inputSearch = document.querySelector("#search-input");

// Capturar boton esp
const esp = document.querySelector("#esp");

// Nuestra url
let pathActual = window.location.pathname.split("/").pop();

//* Aplicar el estilo activo al que este en ese mometo
enlaces.forEach(link => {



    // Si coincide el atirbuto href con el path actyual
    if (link.getAttribute('href') == pathActual) {
        // añadimos la clase active
        link.classList.add('activo');

    } else {
        // Al resto le quitamos el actve si lo tuvieran
        link.classList.remove('activo');
    }


});

//* Para el año de copyright
// Cogemos el texto del copy
let textoCopy = document.querySelector(".derechos");

// Sacamos la fecha de hoy
let fecha = new Date();

textoCopy.innerHTML += ` ${fecha.getFullYear()}`;

// eventos
document.querySelector("#search-icon").addEventListener('click', () => {
    mostrarBarraSearch();
});


document.querySelector("#search-input").addEventListener('blur', () => {

    ocultarBarraSearch();

});

document.querySelector(".upper").addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        document.querySelector(".upper").classList.add("bg-dark");
    } else {
        document.querySelector(".upper").classList.remove("bg-dark");
    }

});

esp.addEventListener('click', () => {

    console.log("ENTRA");
    window.location.href = "idioma.html";

});

// Mostrar barra
function mostrarBarraSearch() {
    // Ocultar el icono
    iconoSearch.classList.add("hidden");

    // Quitamos el hidden al input
    inputSearch.classList.remove("hidden");

    // focus
    inputSearch.focus();

}

function ocultarBarraSearch() {

    // ocultamos el input
    inputSearch.classList.add("hidden");

    // mostramos el icono
    iconoSearch.classList.remove("hidden");


}