// Capturamos y guardamos en variables ciertas cositas
const menu = document.querySelector("#menu");
const infoMesa = document.querySelector("#info-mesa");

// Botones de abrir y cerrar mesa
const abrirMesaBtn = document.querySelector("#abrir");
const cerrarMesaBtn = document.querySelector("#cerrar");


// Definimos la clase mesa
class Mesa {

    // Variables private no definidas
    #_numero;
    #_comensales;

    // Constructor de la clase
    constructor(numero, comensales) {
        this.#_numero = numero;
        this.#_comensales = comensales;

    }

    // GETTERS Y SETTERS
    get numero() {
        return this.#_numero;
    }

    set numero(numero) {
        this.#_numero = numero;
    }

    get comensales() {
        return this.#_comensales;
    }

    set comensales(comensales) {
        this.#_comensales = comensales;
    }

    // Funciones personalizadas
    getUbicacionMesa() {

        if (this.#_numero <= 4) {
            imprimir("La mesa se encuentra en la primera fila de mesas del salón");
        }
    }
}

//* EVENTOS
// capturamos todos los botones butaca
const butacas = document.querySelectorAll(".butaca");
const mesa4 = document.querySelectorAll(".mesa4");
const mesa6 = document.querySelectorAll(".mesa6");

// Recorremos todas las butacas
if (butacas) {
    butacas.forEach((butaca) => {

        console.log("En el bucle");

        // Evento
        butaca.addEventListener('dblclick', () => {

            console.log("En el evento");

            // Funcion para el click de abrir menu
            abrirMenu(butaca.id);

        });
    });
}

if (mesa4) {

    mesa4.forEach((mesa) => {

        console.log("En el bucle de mesas4");

        mesa.addEventListener('dblclick', () => {

            console.log("En el evento de mesa4");

            // Funcion para abrir menu
            abrirMenu(mesa.id);

        });
    })

}

if (mesa6) {

    mesa6.forEach((mesa) => {

        console.log("En el bucle de mesa 6");

        mesa.addEventListener('dblclick', () => {

            console.log("En el evento de mesa6");

            // Funcion abrir menu
            abrirMenu(mesa.id);
        });

    });    
}

function imprimir(mensaje) {

    // Capturamos el div de impresión
    let logs = document.querySelector("#logs");

    logs.innerHTML += `${mensaje}<br>`;

}

// Función Para arbir el menu de la aplicación.
function abrirMenu(id) {


    let y = (parseInt(screen.height) / 2) - 250;
    let x = (parseInt(screen.width) / 2) - 250;


    let nuevaVentana = window.open(`menu.html?id=${id}`, "popup", "width=500, height=500, toolbar=1, menubar=1");
    nuevaVentana.moveTo(x, y);

}

// Funcion para abrir una mesa (instanciar un objeto de tipo mesa)
function abrirMesa() {

    // Capturar el id de la url
    // Para eso primero sacamos nuestra url
    // alert(location.href);
    let url = new URL(location.href);
    let params = new URLSearchParams(url.search);

    // Sacamos el parametro id
    const id = params.get('id');
    // alert(parseInt(id));


    

    
}