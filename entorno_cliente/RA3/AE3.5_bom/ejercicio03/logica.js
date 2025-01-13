// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const btnDownload = document.querySelector("#btn-descargar");
let enunciado = document.querySelector("#enunciado-texto");
const enlaces = document.querySelectorAll(".nav-link");
const navegadorMsj = document.querySelector("#navegador");
const sistemaOperativo = document.querySelector("#SO");

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

// Usamos el evento de carga de contenido
addEventListener('DOMContentLoaded', () => {



    // Aplicar el sistema operativo
    if (btnDownload) {
        btnDownload.innerHTML += ` ${tuSistemaOperativo()}`;
    }

    tuNavegadorWeb();

    if (sistemaOperativo) {
        sistemaOperativo.innerHTML += `Tu sistema operativo: ${tuSistemaOperativo()}`;
    }
    

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


//* Condicional y eventlistener para el botón descargar
if (btnDownload) {
    btnDownload.addEventListener('click', () => {


        // Obtener la altura máxima de pantalla
        let h = screen.height;

        window.open("https://www.google.com/intl/es_es/chrome/next-steps.html?statcb=1&installdataindex=empty&defaultbrowser=0", "popup", `width=500, height=${h}`);

    });
}



//* FUNCIONES PROPIAS
// función para añadir el sistema operativo
function tuSistemaOperativo() {

    // Sacamos la versión del navegador y el SO y lo guardamos en una variable
    //! Ojo, también podemos usar navigator.platform para sacar sólo el SO, pero no funciona bien


    // let result = "";


    // navigator.userAgentData.getHighEntropyValues(["platformVersion"])
    // .then(response => {
    //     // console.log(data);
    //     // console.log(data['platform']);

    //     return response;
    // })
    // .then(data => {
    //     console.log(data['platform']);
    //     result = data['platform'];
    // });

    return navigator.userAgentData.platform;

    // return result;

}

function tuNavegadorWeb() {

    let navegadorV2 = "";

    navegadorV2 = navigator.userAgentData.getHighEntropyValues(["platform"])
    .then(response => {
        console.log(response);
        console.log(response['brands'][0]['brand']);

        if (navegadorMsj) {
            navegadorMsj.innerHTML += `${response['brands'][0]['brand']}`;
        }
        
    })

}

/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 2
 * Date: 08/01/2025
 * Version: 1.0
 */