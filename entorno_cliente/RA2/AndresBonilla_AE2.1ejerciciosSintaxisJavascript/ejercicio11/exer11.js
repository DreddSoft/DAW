// Solicitar por prompt una cantidad de dinero (mult de 5)
// Desglose el cambio en billetes, intentando dar el número mínimo de billetes

// Algoritmo para el control de billetes
function exercise11() {

    // Variables
    let money = 0;
    let pending = 0;
    const bills = [500, 200, 100, 50, 20, 10, 5];
    let tableBody = document.getElementById("bodyTabla");
    let element = "";
    let exit = false;

    // Teniendo en cuenta que las posiciones son:
    // 0 = 500, 1 = 200, 2 = 100, 3 = 50, 4 = 20, 5 = 10, 6 = 5

    do {
        // Prompt
        money = parseInt(prompt("Introduce una cantidad de dinero: "));

        if (!isNaN(money) && money % 5 == 0 && money >= 5) {
            console.log("Entra aquí.")
            exit = true;
        }


    } while (!exit)

    pending = money;

    //* Calculo de billetes
    // Hay que disminuir el pendiente entre el valor de billetes por el numero de veces que estan
    for (i = 0; i < bills.length; i++) {
        console.log(`Entra al bucle de billetes de ${bills[i]}`)

        // Contador de billetes que se reinicia a 0 con cada iteracion
        let numBilletes = 0;

        // Mientras que la cantidad pendiente sea mayor que el billete
        while (pending >= bills[i]) {
            // Aumenta el contador de billetes
            numBilletes++;
            console.log("Entra en el otro bucle")
            // Descontamos del total el valor del billete
            pending -= bills[i];
        }

        // Despues del bucle se inserta el html a elemento
        // Si hay algun billete de ese tipo
        if (numBilletes > 0) {
            console.log("Entra en el condicional");
            element += `${numBilletes} billete(s) de ${bills[i]} euros<br>`;
        }
    }

    console.log(`Money es: ${money}`);
    console.log(element);


    //* Imprimimos el resultado
    // abrimos fila
    tableBody.innerHTML += `<tr></tr>`;

    // contenido
    tableBody.innerHTML += `<td>${money}</td><td>${element}</td>`;

    // cerramos fila
    tableBody.innerHTML += `</tr>`;


}




