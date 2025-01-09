// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const btnNewWindow = document.querySelector("#btn-newWindow");

//* EVENT LISTENER
btnShow.addEventListener('click', () => {

    // Volcamos enunciado
    document.querySelector("#enunciado-texto").classList.remove("hidden")

    // Ocultamos boton Mostrar
    btnShow.classList.add("hidden");

    // Quitamos ocultar del btnHide
    btnHide.classList.remove("hidden");

});

btnHide.addEventListener('click', () => {

    // Ocultamos boton hide
    btnHide.classList.add("hidden");

    // Ocultamos el enunciado
    document.querySelector("#enunciado-texto").classList.add("hidden");

    // Mostramos btnShiw
    btnShow.classList.remove("hidden");
});

btnNewWindow.addEventListener('click', () => {

    openPopUpWindow();

});


//* FUNCIONES PROPIAS
// función para abrir ventana
function openPopUpWindow() {

    window.open("https://google.com", "popup", "width=720, height=1000, toolbar=1, menubar=1");
    
}