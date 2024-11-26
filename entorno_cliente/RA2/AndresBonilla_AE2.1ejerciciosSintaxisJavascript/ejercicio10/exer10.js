// Funcion principal
function exercise10 () {

    // Pedimos input al usuario
    let iptNumber = parseInt(prompt("Introduce un numero: "));

    // texto
    let text = "NO";

    // Cuerpo de la tabla
    let tableBody = document.getElementById("bodyTabla");

    if (iptNumber < 1 || iptNumber > 10000) {
        text = "<b>Error: </b>Introduce un valor para numeros entre 1 y 10000.";
    } else if (isPrime(iptNumber)) {
        text = "SI";
    }

    let element = `<tr><td>${iptNumber}</td><td>${text}</td></tr>`;

    tableBody.innerHTML += element;
    
}

// Funcio para saber si es primo
function isPrime(num) {

    if (num < 2) return false;

    // Recorremos todos los valores desde 2 hasta el numero
    for (let i = 2; i < num; i++) {

        // Si el resto de alguna division del numero entre i es 0
        // NO ES PRIMO
        if (num % i == 0) return false;

    }

    // Primo
    return true;
    
}




