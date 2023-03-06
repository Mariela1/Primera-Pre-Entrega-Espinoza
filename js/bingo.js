// Definimos las variables globales
let intervalId;
var numerosCartilla = [];
var numerosSacados = [];
let cartilla = [];
let intervaloSacarBolilla = null;
let tiempoBolilla = 2000;

// Generamos una cartilla de bingo aleatoria

function generarCartilla() {
     // Reiniciamos los arryas de numeros
     numerosCartilla.length = 0;
     numerosSacados.length = 0;
     // Generamos los 24 numeros de la cartilla

     for (let i=1; i <=25; i++) {
        if (i !== 13) {
            numerosCartilla.push(i);
        }
     }

     // Barajamos los numeros

     for (let i= numerosCartilla.length -1; i >0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numerosCartilla[i], numerosCartilla[j]] = [numerosCartilla[j], numerosCartilla[i]];

     }

     // Insertamos los numeros en la tabla de la cartilla

     const tablaCartilla = document.getElementById("tablaCartilla");
     tablaCartilla.innerHTML = "";
     let contador = 0;
     for (let i =0; i < 5; i++) {
        const fila = document.createElement("tr");
        for (let j=0; j < 5; j++) {
            const celda = document.createElement("td");
            celda.setAttribute("data-numero", numerosCartilla)
            if (i ===2 && j ===2) {
                celda.textContent = "FREE";
                celda.classList.add("filled");
                numerosSacados.push("FREE");
                celda.classList.add("marcada");
            } else {
                celda.textContent = numerosCartilla[contador];
                contador++;
            }
            fila.appendChild(celda);
        }
        tablaCartilla.appendChild(fila);
      

     }
}

// Mostramos la cartilla en la pagina HTML

function mostrarCartilla() {
   const tablaCartilla = document.getElementById("tablaCartilla");
   const celdas = tablaCartilla.getElementsByTagName("td");
  
   let k=0; 
   for (let i=0; i < cartilla.length; i++) {
    const fila = cartilla[i];
    celdas[i].innerHTML = cartilla[i];
    celdas[i].classList.remove("marcada");
    for (let j=0; j < fila.length; j++) {
        const celda = celdas[k++];
        if (fila[j] === 0) {
            celda.textContent = "FREE";
        } else {
            celda.textContent = fila[j];
        }
    }
   }

}


    // Creamos las filas y columnas de la tabla
/*
    for (var i = 0; i < 5; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 5; j++) {
            var celda = document.createElement("td");
            celda.setAttribute("data-numero", numerosCartilla); // Agregamos el atributo data-numero
            if (i == 2 && j == 2) {
                // Celda del centro con la palabra "FREE"
                celda.innerHTML = "FREE";
            } else {
                // celda con un numero de la cartilla
                celda.innerHTML = numeros.shift();

            }
            fila.appendChild(celda);
        }
        tablaCartilla.appendChild(fila);
     
    }
    */


// Marcamos un numero en la cartilla si esta presente

//function marcarCartilla(numero) {
  //  var celdas = document.getElementsByTagName("td");
    //for (var i=0; i < celdas.length; i++) {
      //  if (celdas[i].innerHTML == numero) {
         //   celdas[i].classList.add("marcado");
        //}
    //}
//}

// Sacamos una bolilla al azar cada 2 segundos



function sacarBolilla() {

    const tablaBolillas = document.getElementById("tablaBolillas");
    const numero = Math.floor(Math.random()* (numerosCartilla.length - numerosSacados.length)) +1;
    numerosSacados.push(numero);
    const bolilla = document.createElement("button");
    bolilla.innerText = numero;
    tablaBolillas.appendChild(bolilla);

    const tablaCartilla = document.getElementById("tablaCartilla");
    const celdas = tablaCartilla.getElementsByTagName("td");
    for (let i=0; i < celdas.length; i++) {
        const numeroCelda = celdas[i].getAttribute("data-numero");
        if (numeroCelda == numero) {
            celdas[i].classList.add("marcada");
        break;
        }
    }

    // Verificamos si se completo la cartilla

    if (numerosCartilla.every(numero => numerosSacados.includes(numero))) {
        detenerJuego();
        alert("!Ganaste!");
    }
marcarCartilla();
}

function marcarCartilla(numerosSacados) {
    const tablaCartilla = document.getElementById("tablaCartilla");
    const celdas = tablaCartilla.getElementsByTagName("td");
    let marKed = [];
    for (let i=0; i < celdas.length; i++) {
          if (celdas[i].getAttribute("data-numero") == numerosSacados && !celdas[i].classList.contains("marcada")) {
             celdas[i].classList.add("marcada");
         break; 
         }
      }
}

function desmarcarCartilla(numerosSacados) {
    const tablaCartilla = document.getElementById("tablaCartilla");
    const celdas = tablaCartilla.getElementsByTagName("td");
    for (let i=0; i < celdas.length; i++) {
    if (celdas[i].innerHTML == numerosSacados) {
        celdas[i].classList.remove("marcada");
        break;
    }
}
}

//let intervalId;
    /*
    setInterval(function() {
        var numeroBolilla;
        do {
            numeroBolilla = Math.floor(Math.random()*75) + 1;
        } while (numerosSacados.includes(numeroBolilla));

        numerosSacados.push(numeroBolilla);

        // Actualizamos la lista de bolillas sacadas en la pagina HTML
       // var listaBolillas = document.getElementById("bolillas");
       // var bolilla = document.createElement("li");
        bolilla.innerHTML = numeroBolilla;
        listaBolillas.appendChild(bolilla);

        // Marcamos el numero en la cartilla si esta presente

        marcarCartilla(numeroBolilla);

        // Verificamos si se completo la cartilla

        if (numerosCartilla.every(numero => numerosSacados.includes(numero))) {
            var mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = "!Ganaste!";

        }

    },3000); */



// Iniciemos el juego

function iniciarJuego() {

    // Generamos la cartilla

    generarCartilla();
   

    // Mostramos la cartilla en HTML

    mostrarCartilla();

    document.getElementById('iniciarJuego').disabled = true;
    document.getElementById('detenerJuego').disabled = false;
    document.getElementById('continuarJuego').disabled = false;
    intervalId = setInterval(sacarBolilla, 2000); // Llama a la funcion sacarBolilla cada 2 segundos

}

function detenerJuego() {
    clearInterval(intervalId);
    document.getElementById('iniciarJuego').disabled = false;
    document.getElementById('detenerJuego').disabled = true;
    document.getElementById('contiuarJuego').disabled = false;
}

function continuarJuego() {
    intervalId = setInterval(sacarBolilla, 2000);
    document.getElementById('iniciarJuego').disabled = true;
    document.getElementById('detenerJuego').disabled = false;
    document.getElementById('continuarJuego').disabled = true;
}

// Limpiamos la pagina para reiniciar el juego

listaBolillas.innerHTML = ""

function reiniciarJuego() {
    const tablaBolillas = document.getElementById("tablaBolillas");
    const tablaCartilla = document.getElementById("tablaCartilla");
    const celdas = tablaCartilla.getElementsByTagName("td");
    numerosCartilla = generarCartilla();
    numerosSacados = [];
 

    // Vaciamos las bolillas y desmarcamos la cartilla

    while (tablaBolillas.firstChild) {
        tablaBolillas.removeChild(tablaBolillas.firstChild);
    }
    
    for (let i=0; i < celdas.length; i++) {
        celdas[i].classList.remove("marcada");
    }

    // Mostramos la nueva cartilla

    mostrarCartilla(numerosCartilla);

    // Habilitamos el boton de inicio y deshabilitamos los otros

    document.getElementById('iniciarJuego').disabled = false;
    document.getElementById('detenerJuego').disabled = true;
    document.getElementById('continuarJuego').disabled = true;
}