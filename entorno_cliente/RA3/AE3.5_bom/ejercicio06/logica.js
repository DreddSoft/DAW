// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
let enunciado = document.querySelector("#enunciado-texto");


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

// Accede a ese fichero externo mediante el botón anteriormente descrito y cambia los estilos para que el texto se muestre de color azul y con un tamaño de 25 px.
function cambiarEstilo() {

    // usando styleSheets accedemos a un array de las hojas de estilos que tengamos asociadas al documento
    const hojaEstilos = document.styleSheets[0];

    // Recorrer las reglas de la hoja de estilo
    for (let i = 0; i < hojaEstilos.cssRules.length; i++) {
        const regla = hojaEstilos.cssRules[i];

        // Comprobar si el selector coincide con el ID del texto de prueba
        if (regla.selectorText === "#t-prueba") {
            regla.style.color = "blue";
            regla.style.fontSize = "25px";
            // regla.cssText = "#t-prueba {color: blue; font-size: 25px;}";
            console.log(regla);

            // Salir
            break;
        }
    }
    
}

/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 6
 * Date: January 2025
 * Version: 1.0
 */