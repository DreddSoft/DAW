// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
let enunciado = document.querySelector("#enunciado-texto");
const enlaces = document.querySelectorAll(".nav-link");
const enlaceWebMail = document.querySelector("#webMail");

let numero = null;

// Sacamos el path actual
let pathActual = window.location.pathname.split("/").pop();

//* Aplicar el estilo border-bottom al que este en ese mometo
enlaces.forEach(link => {

    // Si coincide el atirbuto href con el path actyual
    if (link.getAttribute('href') == pathActual) {
        // añadimos la clase
        link.classList.add('border-bottom');

    } else {
        // Al resto se lo quitamos
        link.classList.remove('border-bottom');
    }

});

document.addEventListener('DOMContentLoaded', () => {

    // Número aleatorio entre 0 y 2
    numero = Math.floor(Math.random() * 3);

    // Mostramos el webmail
    mostrarWebMail(numero);

})

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

if (enlaceWebMail) {
    // Escuchamos el evento de click
    enlaceWebMail.addEventListener('click', () => {

        // Ejecutamos la función
        webMailAleatorio(numero);

    });

}

//* Función para mostrar el webmail aleatorio
function mostrarWebMail(numero) {

    switch (numero) {
        case 0:
            enlaceWebMail.innerHTML = "Hotmail";
            break;

        case 1:
            enlaceWebMail.innerHTML = "Gmail";
            break

        case 2:
            enlaceWebMail.innerHTML = "serviciodecorreo.es";
            break;

        default:
            break;
    }



}


//* Función para redirigir a un webmail aleatorio
function webMailAleatorio(numero) {

    switch (numero) {
        case 0:
            window.location.href = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=170&ct=1736884512&rver=7.5.2211.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26RpsCsrfState%3df78895a0-8f60-323a-6865-74ab079ddf60&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c";
            break;

        case 1:
            window.location.href = "https://workspace.google.com/intl/es/gmail/";
            break;

        case 2:
            window.location.href = "https://serviciodecorreo.es/";
            break;

        default:
            break;
    }



}



/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 5
 * Date: January 2025
 * Version: 1.0
 */