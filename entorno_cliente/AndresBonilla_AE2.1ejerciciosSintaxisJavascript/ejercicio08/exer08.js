// Ejercicio 8. Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos números X e Y.
// La aplicación mostrará en la parte destinada para tal efecto, la tabla de multiplicar del número X, hasta el valor Y, controlando las siguientes condiciones:

// -50 <= X <= 50
// 1 <= Y <= 20

// La tabla se mostrará con una entrada por línea y entre cada elemento habrá un único espacio de separación.

//* Funciones principales
// Funcion para pedir numero
function getNumber() {

    return parseInt(prompt("Introduce un numero: "));
    
}

// Funcion para validar el numero X
function isValidNumberX(x) {

    return !isNaN(x) && x >= -50 && x <= 50;
    
}

// Funcion para validar el numero Y
function isValidNumberY(y) {

    return !isNaN(y) && y >= 1 && y <= 20;
    
}

// Funcion principal
function exercise8() {

    let x = getNumber();
    let y = getNumber();

    let element = "";

    // Si se cumple que x e y = true
    if (isValidNumberX(x) && isValidNumberY(y)) {

        console.log("Vas por aqui");

        element = `<tr><td>${x}<br>${y}</td><td>`;

        for (let i = 1; i <= y; i++) {
            element +=`${x} x ${i} = ${x * i}<br>`;
            
        }

        element += `</td></tr>`;

    } else if (isValidNumberX(x) && !isValidNumberY(y)) {

        element = `<tr><td>${x}<br>${y}</td><td><b>Error: </b>Introduce un valor entre 1 y 20.</td></tr>`;

    } else if (!isValidNumberX(x) && isValidNumberY(y)) {

        element = `<tr><td>${x}<br>${y}</td><td><b>Error: </b>Introduce un valor entre -50 y 50</td></tr>`;

    } else {

        element = `<tr><td>${x}<br>${y}</td><td><b>Error: </b>Introduce un valor entre -50 y 50<br><b>Errror: </b>Introduce un valor entre 1 y 20.</td></tr>`;

    }

    let tableBody = document.getElementById("bodyTabla");

    // Mostramos
    tableBody.innerHTML += element;

    console.log(tableBody.innerHTML); 
    
}




