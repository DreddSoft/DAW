const btnIntroducir = document.getElementById("btn-intro");

btnIntroducir.addEventListener('click', () => {

    // Primer valor
    // Pedirlo

    let valores = [];

    valores[0] = prompt("Introduce el primer valor");

    // Parseamos a entero
    valores[0] = parseInt(valores[0]);

    // Segundo valor
    // Pedirlo
    valores[1] = prompt("Introduce el primer valor");

    // Parseamos a entero
    valores[1] = parseInt(valores[1]);

    // Tercer valor
    // Pedirlo
    valores[2] = prompt("Introduce el primer valor");

    // Parseamos a entero
    valores[2] = parseInt(valores[2]);

    let isGreater = false;
    let cnt = 3;

    // Recorremos los td de entrada para hacer display
    for (let i = 0; i < 3; i++) {

        celda = i + 1;


        // Cambiamos el contenido del td que muestra el valor ingresado
        document.getElementById("ent" + celda).innerHTML = valores[i];

        // usamos la funcion evaluarValor, que devuelve true si es mayor que 10
        // y además cambia el contenido del td que es salida.
        if (isGreater = evaluarValor(valores[i], celda)) {
            // Si es mayor que 10, disminuye el contador
            cnt--;
        }

    }

    if (cnt == 3) {
        alert("\"NINUGNO MAYOR QUE 10\"");
    }


})

function evaluarValor(valor, contador) {

    let mayorQue = "\"ALGUNO MAYOR QUE 10\"";

    if (valor > 10) {
        document.getElementById("sal" + contador).innerHTML = mayorQue;
        return true;
    }

    document.getElementById("sal" + contador).innerHTML = "";

    return false;

}