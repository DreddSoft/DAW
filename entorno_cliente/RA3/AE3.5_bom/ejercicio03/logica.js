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

    // Que marque tambien los bits del SO
    bitsSO();
    

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

        window.open("newWindow.html", "popup", `width=500, height=${h}`);

    });
}



//* FUNCIONES PROPIAS
// función para añadir el sistema operativo
function tuSistemaOperativo() {

    const sistemaOperativo = navigator.userAgent.toLowerCase();
    console.log(sistemaOperativo);

    if (sistemaOperativo.includes('win')) {
        return "Windows";
    } else if (sistemaOperativo.includes('mac')) {
        return "Mac OS";
    } else {
        return "Linux";
    }


}

function tuNavegadorWeb() {

    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {

        navigator.userAgentData.getHighEntropyValues(["platform", "brands"])
            .then(response => { // Procesamos la promesa
                // comprobacion
                console.log(response);

                // Impresion
                if (navegadorMsj) {
                    const browserName = response.brands[0].brand;
                    navegadorMsj.innerHTML = `Descargar Chrome para ${browserName}`;
                }
            })
            .catch (error => {
                console.error("Error al obtener los datos: ", error);
            }) 

    } else {    // Para el p*** FireFox, edge o chrome antiguo

        const browserName = navigator.userAgent.toLowerCase();
        console.log(browserName);

        // Comprobacion
        if (browserName.includes('chrome') && browserName.includes('edg')) {
            navegadorMsj.innerHTML = `Descargar Chrome para Google Chrome`;
        } else if (browserName.includes('firefox')) {
            navegadorMsj.innerHTML = `Descargar Chrome para Firefox`;
        } else if (browserName.includes('safari')) {
            navegadorMsj.innerHTML = `Descargar Chrome para Safari`;
        } else {
            navegadorMsj.innerHTML = `Descargar Chrome para Edge`;
        }
    }

}

// Seleccion de bits del sistema operativo
function bitsSO() {

    const bitsSO = navigator.userAgent.toLowerCase();

    if (bitsSO.includes("win64") || bitsSO.includes("x86_64")) {
        document.getElementById("v64").checked = true;
    } else if (bitsSO.includes("win32") || bitsSO.includes("x86")) {
        document.getElementById("v32").checked = true;
    } 

}

/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 3
 * Date: January 2025
 * Version: 1.0
 */