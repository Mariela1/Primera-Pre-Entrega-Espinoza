//let cartillabingo = document.getElementById('cartillabingo');
//titulo.className = "rojo";
//cartillabingo.className = "rojo";


// Generamos lista de primera columna

function generarCartilla() {

    // Creamos el arreglo para cada columna del Bingo

    /* Las columnas del BINGO se dividen en:

    B: Del 1 al 15
    I: Del 16 al 30
    N: Del 31 al 45
    G: Del 46 al 60
    O: Del 61 al 75
    */

    let array = [

        [], //B (1 - 15)
        [], //I (16 - 30)
        [], //N (31 - 45)
        [], //G (46 - 60)
        [] //O (61 - 75)
    ]; 
    
    // Completamos los sub-arreglos con numeros aleatorios

    for (let i=0; i < array.length; i++) {
        // Asignamos un minimo y maximo  para las 5 columnas

        let min = (i*15) + 1;
        let max = min + 15;

        // Mientras el sub-arreglo tenga 5 elementos, el ciclo funciona
        while (array[i].length < 5 ) {
            let num = Math.floor(Math.random()* (max - min)) + min;
            // Para evitar que los numeros se repitan
            if (!array[i].includes(num)) {
                array[i].push(num);
            }
        }

        // Ordenar

        array[i].sort((a,b) => a - b);
    }
    // Colocamos una X en el centro de cada cartilla

    array[2][2] = 'FREE';
    return array;
    
}

function cartillas() {

    return [
        generarCartilla(),
        
    ]
}

let cartones = cartillas();
let html = '';
cartones.forEach(carton => {
    html += `
        <table>
        <thead>
        <tr>
            <th>B</th>
            <th>I</th>
            <th>N</th>
            <th>G</th>
            <th>O</th>
        </tr>
        </thead>
        <tbody>`;
    for (let i=0 ; i < 5; i++) {
        html += `
    <tr>
        <td>${carton[0][i]}</td>
        <td>${carton[1][i]}</td>
        <td>${carton[2][i]}</td>
        <td>${carton[3][i]}</td>
        <td>${carton[4][i]}</td>
    </tr>
        `;
    }

    html += '</tbody></table>';
});


bingocartillas = document.querySelector('#bingocartillas');
bingocartillas.innerHTML = html;
document.addEventListener('DOMContentLoader',cartillas, false)

//let boton = document.getElementById("btnPrincipal")
//boton.addEventListener("mouseover", respuestaClick)
function respuestaClick(){
    console.log("Respuesta evento");
}

function marcarNumeros() {
    var numeros = [];
    var celdas = [];
    var tabla = document.getElementsByTagName("table")[0];
    
    while (numeros.length < 25) {
        var numero = Math.floor(Math.random()*75) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

// asignando los numeros a las celdas de la tabla

    for (var i=0; i < 25; i++) {
        var celda = "celda" + (i + 1);
        celdas.push(celda);
        document.getElementById(celda).innerHTML = numeros[i];
    }

// agregar una clase css a las celdas marcadas

    for (var i= 0; i< celdas.length; i++) {
        document.getElementById(celdas[i]).classList.add("marcada");
    }


}