// Declaramos el array global
var numeros = [];

// Función longitud
function longitudArray (arrayParametro) {

    let long = 1;

    arrayParametro.forEach(element => {
        console.log(element);
        long++;
        
    });

    return long;

}

//* Función introducirValor
function introducirValor(arr, valor) {

    // Sacamos la longitud del array
    let lArray = longitudArray(arr);

    // Creamos un nuevo array con la longitud + 1
    let nArray = new Array(lArray + 1);

    // Copiamos los datos del array
    for (let i = 0; i < lArray; i++) {
        nArray[i] = arr[i];

    }

    // Añadimos en el nuevo array el valor al final
    nArray[lArray - 1] = valor;

    return nArray;
    
}

function mostrarArray() {

    // Sacamos longitud
    let l = longitudArray(numeros);

    // Pedimos valor
    let valor = parseInt(prompt("Introduce un número: "));

    // Introducimos en array
    numeros = introducirValor(numeros, valor);

    // Mostramos
    let element = "";

    for (let i = 0; i < l; i++) {
        element += `${numeros[i]}, `;
        console.log(numeros[i]);

    }

    // Display
    document.getElementById("res").innerHTML = `El contenido del array es: ${element}. Su longitud: ${l}`;

    
}
