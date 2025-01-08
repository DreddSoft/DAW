// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const btnNewWindow = document.querySelector("#btn-newWindow");
const btnMaxi = document.querySelector("#btn-maxi");
const btnMini = document.querySelector("#btn-mini");
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

if (btnNewWindow) {
    btnNewWindow.addEventListener('click', () => {

        // Ejecuta la función
        openPopUpWindow();

    });
}

if (btnMaxi) {
    btnMaxi.addEventListener('click', () => {

        // Ejecuta la función
        maximizar();

        // Oculta el botón MAXIMIZAR y muestra el MINIMIZAR
        btnMaxi.classList.add("hidden");
        btnMini.classList.remove("hidden");

    });
}

if (btnMini) {
    btnMini.addEventListener('click', () => {

        // Ejecuta la función
        minimizar();

        // Oculta el botón MINIMIZAR y muestra el MAXIMIZAR
        btnMini.classList.add("hidden");
        btnMaxi.classList.remove("hidden");
    });
}



//* FUNCIONES PROPIAS
// función para abrir ventana
function openPopUpWindow() {

    // Usamos el objeto window con el método open para abrir una nueva ventana
    // Especificamos los parámetros.
    window.open("newWindow.html", "popup", "width=720, height=1000, toolbar=1, menubar=1");

}

// Función maximizar
function maximizar() {

    // Usamos resizeTo estableciendo el ancho y el alto con el objeto screen, usando los métodos width y height.
    window.resizeTo(screen.width, screen.height);

}

// Funcion minimizar
function minimizar() {

    // Calculamos la altura cogiendo la altura de pantalla y restandole 100 pixeles.
    let altura = screen.height - 100;

    // Calcumalos el ancho cogiendo el ancho de pantalla y restandole 100 pixeles
    let ancho = screen.width - 100;

    // Redimensionamos la pantalla a las dimensiones definidas
    window.resizeTo(ancho, altura);

    // Movemos la ventana 50pixeles del eje X y 50px el eje Y (centramos la pantalla)
    window.moveTo(50, 50)


}
/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 2
 * Date: 08/01/2025
 * Version: 1.0
 */