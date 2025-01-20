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

function imprimir(mensaje) {

    // Capturamos el div de impresión
    let logs = document.querySelector("#logs");

    logs.innerHTML += `${mensaje}<br>`;
    
}

function abrirMesa() {

    // Capturamos el select con el número de mesa
    let numero = document.querySelector("#numMesa");
    let comensales = document.querySelector("#comensales");
    let nuMesa = numero;

    // Creamos una instanacia de mesa
    let mesa = new Mesa(numero, comensales);
    
}