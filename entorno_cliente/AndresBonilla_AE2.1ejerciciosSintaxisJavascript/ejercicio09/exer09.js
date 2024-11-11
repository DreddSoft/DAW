function exercise9() {

    // Pedimos los valores y los guardamos en un array
    let grades = [];
    grades = getGrades();

    // Cuerpo de la tabla
    let bodyTable = document.getElementById("bodyTabla");

    // Elemento html a incluir
    let element = "<tr><td>";

    // Temporal
    let temp = "NO";

    // Insertamos las notas
    for (let i = 0; i < grades.length; i++) {
        element += `${grades[i]}<br>`;

    }

    // Evaluamos
    if (itHasNumberTen(grades))
        temp = "SI";

    element += `</td><td>${temp}</td></tr>`;

    // Incrustar al cuerpo de la tabla
    bodyTable.innerHTML += element;


}

// Funcion para obtener las notas
function getGrades() {

    // Input
    let ipt = 0;

    // Array valores
    let values = [];

    // Bucle while
    while (true) {

        // Guardamos el input
        ipt = parseInt(prompt("Introduce una nota (0 - 10): "));

        // Si el valor es 1- rompemos el bucle
        if (ipt === -1)
            break;

        // Controlamos que solo se introduzcan valores validos
        if (!isNaN(ipt) && ipt >= 0 && ipt <= 10)
            values.push(ipt);

        console.log(values);

    }

    return values;

}

function itHasNumberTen(grades) {

    // Con for
    for (let i = 0; i < grades.length; i++) {

        if (grades[i] === 10)
            return true;


    }

    return false;

}




