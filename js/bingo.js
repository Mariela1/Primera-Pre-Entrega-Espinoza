// Define las cartillas del bingo de los jugadores

let jugador1Cartilla = [];
let jugador2Cartilla = [];

// Crea una nueva partida de bingo

function nuevoJuego() {
    
     // Oculta cualquier mensaje de ganador que se este mostrando
     ocultarMensaje();

    // Genera una nueva cartilla de bingo para cada jugador
    jugador1Cartilla = generarCartilla();
    jugador2Cartilla = generarCartilla();

    // Muestra las cartillas en la pagina
    mostrarCartilla(jugador1Cartilla, "p1");
    mostrarCartilla(jugador2Cartilla, "p2");
}

// Genera una cartilla de bingo
    function generarCartilla() {
    const cartilla = [];
    const numeros = Array.from({ length: 75 }, (_,i) => i + 1);
   
    // Agrega 24 numeros aleatorios a la cartilla
    for (let i = 0; i < 24; i++) {
        const index = Math.floor(Math.random() * numeros.length);
        cartilla.push(numeros.splice(index, 1)[0]);
    }
    // Coloca el espacio FREE en el centro de la cartilla
   // cartilla.splice(12,0, "FREE");

    return cartilla;

    }
// Muestra una cartilla de bingo en la pagina
function mostrarCartilla(cartilla,jugador) {
    for (let i = 1 ; i <= 24; i++) {
        const numero = cartilla[i-1];
        const id= `${jugador}-${i}`;
        const celda = document.getElementById(id);
        celda.textContent = numero;
    }
}

// Sacar una bolilla aleatoria

function sacarBolilla() {
    const numeros = Array.from({ length: 75},(_, i) => i + 1);
    const index = Math.floor(Math.random() * numeros.length);
    return numeros.splice(index, 1)[0];
    
}

// Marca un numero en la cartilla

function marcarCartilla(numero, cartilla) {
    const index = cartilla.indexOf(numero);

    if (index !== -1) {
        cartilla[index] = "X";
    }
}

// Verifica si un jugador ha completado su cartilla
function chequearGanador(cartilla) {
    // Verifica si se han marcado todos los numeros de una fila
    for (let i = 0; i < 5; i++) {
        const fila = cartilla.slice(i * 5, i * 5 + 5);
        if (fila.every(numero => numero === "X")) {
            return true;
        }
    }

    // Verifica si se han marcado todos los numeros de una columna
    for (let i = 0; i < 5; i++) {
        const columna = [cartilla[i], cartilla[i + 5], cartilla[i + 10], cartilla[i + 15], cartilla[i + 20]];
        if (columna.every(numero => numero === "X")) {
            return true;
        }
    }

    // Verifica si se han marcado todos los numeros en diagonal
    if (cartilla[0] === "X" && cartilla[6] === "X" && cartilla[12] === "X" && cartilla[18] === "X" && cartilla[24] === "X") {
        return true;
    }

    if (cartilla[4] === "X" && cartilla[8] === "X" && cartilla[12] === "X" && cartilla[16] === "X" && cartilla[20] === "X") {
        return true;
    }
    // Si no se ha completado la cartilla, devuelve false
    return false;

}

// Muestra un mensaje de ganador en la pagina

function muestraMensaje(jugador) {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = `!Bingo! El jugador ${jugador} ha ganado!`;
    mensaje.style.display = "block";
}

// Oculta el mensaje de ganador en la pagina

function ocultarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "none";
}

// Inicia el juego al cargar la pagina

document.addEventListener("DOMContentLoaded",function() {
nuevoJuego();

const nuevoJuegoButton = document.getElementById("nuevo-juego");
nuevoJuegoButton.addEventListener("click", function() {
nuevoJuego();

});

// Inicializa el juego al cargar la pagina

window.addEventListener("load", nuevoJuego);
 

// Maneja el evento de sacar una bola

const siguienteBolillaButton = document.getElementById("siguiente-bolilla");
siguienteBolillaButton.addEventListener("click", function() {
const bolilla = sacarBolilla();

// Muestra la bola en la pagina

const bolillaDisplay = document.getElementById("bolilla-display");
bolillaDisplay.textContent = bolilla;

    marcarCartilla(bolilla, jugador1Cartilla);
    marcarCartilla(bolilla, jugador2Cartilla);

    // Muestra las cartillas actualizadas en la pagina

    mostrarCartilla(jugador1Cartilla, "p1");
    mostrarCartilla(jugador2Cartilla, "p2");

    // Verifica si alguno de los jugadores ha ganado

    if (chequearGanador(jugador1Cartilla)) {
        muestraMensaje(1);
    }

    if (chequearGanador(jugador2Cartilla)) {
        muestraMensaje(2);
    }

    
});


});



let juegoInProgreso = false;
let intervalId = null;

// Inicia el juego

function nuevoJuego() {
    if (juegoInProgreso) {
        return;
    }

// Habilita el boton de sacar bolilla
const sacarBolillaButton = document.getElementById("sacarBolilla-button");
sacarBolillaButton.disabled = false;

// Inicia un intervalo para sacar una bolilla cada 3 segundos

intervalId = setInterval(() => {
    sacarBolillaButton.click();
}, 2000);

juegoInProgreso = true;

}

// Continua el juego

function continuarJuego() {
    if (juegoInProgreso) {
        return;
    }

    // Habilita el boton de sacar bolilla

    const sacarBolillaButton = document.getElementById("sacarBolilla-button");
    sacarBolillaButton.disabled = false;

    // Continua el intervalo para sacar una bolilla cada 2 segundos

    intervalId = setInterval(() => {
        sacarBolillaButton.click();
    }, 2000);
    juegoInProgreso = true;
}

// Detiene el juego

function detenerJuego() {
    if (!juegoInProgreso) {
        return;
    }


// Deshabilita el boton de sacar bolilla

const sacarBolillaButton = document.getElementById("sacarBolilla-button");
sacarBolillaButton.disabled = true;

// Detiene el intervalo para sacar bolillas

clearInterval(intervalId);
intervalId = null;

juegoInProgreso = false;

}

// Reinicia el juego

function reiniciarJuego() {
    // Ocupa el mensaje del jugador

    ocultarMensaje();

    // Reiniciar las cartillas de los jugadores

    jugador1Cartilla = generarCartilla();
    jugador2Cartilla = generarCartilla();
    
    // Muestra las cartillas actualizadas en la pagina

    mostrarCartilla(jugador1Cartilla, "p1");
    mostrarCartilla(jugador2Cartilla, "p2");

    // Detiene el juego si esta en progreso

    detenerJuego();

}

// Maneja los eventos de los botones

const iniciarButton = document.getElementById("iniciar-button");
iniciarButton.addEventListener("click", nuevoJuego);

const continuarButton = document.getElementById("continuar-button");
continuarButton.addEventListener("click", continuarJuego);

const detenerButton = document.getElementById("detener-button");
detenerButton.addEventListener("click", detenerJuego);

const reiniciarButton = document.getElementById("reiniciar-button");
reiniciarButton.addEventListener("click", reiniciarJuego);

///////////////////////////////////////////////////
// Funcion para iniciar el juego

/*
function iniciarJuego() {
    
    nuevoJuego();
    // Marca el numero en las cartillas de los jugadores

    marcarCartilla(bolilla, jugador1Cartilla);
    marcarCartilla(bolilla, jugador2Cartilla);

    // Muestra las cartillas actualizadas en la pagina

    mostrarCartilla(jugador1Cartilla, "p1");
    mostrarCartilla(jugador2Cartilla, "p2");

    // Verifica si alguno de los jugadores ha ganado

    if (chequearGanador(jugador1Cartilla)) {
        muestraMensaje("1");
    }

    if (chequearGanador(jugador2Cartilla)) {
        muestraMensaje("2");
    }
    
    document.getElementById("mensaje").textContent = "";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
    document.getElementsByTagName("button")[1].removeAttribute("disabled");
    document.getElementsByTagName("button")[2].setAttribute("disabled", "true");
    //intervalo = setInterval(sacarBolilla, 1000);
    sacarBolilla();
    
}

// Funcion para detener el juego

const controles = document.getElementById('controles');
function detenerJuego() {
    clearInterval(intervalo);
    document.getElementsByTagName("button")[0].removeAttribute("disabled");
    document.getElementsByTagName("button")[1].setAttribute("disabled", "true");
    document.getElementsByTagName("button")[2].removeAttribute("disabled");
}

// Funcion para reiniciar el juego

function reiniciarJuego() {
    //cartilla = [];
    detenerJuego();
    nuevoJuego();

    // Marca el numero en las cartillas de los jugadores

    marcarCartilla(bolilla, jugador1Cartilla);
    marcarCartilla(bolilla, jugador2Cartilla);

    // Muestra las cartillas actualizadas en la pagina

    mostrarCartilla(jugador1Cartilla, "p1");
    mostrarCartilla(jugador2Cartilla, "p2");

    // Verifica si alguno de los jugadores ha ganado

    if (chequearGanador(jugador1Cartilla)) {
        muestraMensaje("1");
    }

    if (chequearGanador(jugador2Cartilla)) {
        muestraMensaje("2");
    }
    //turno = jugadores;
    document.getElementById("mensaje").textContent = "";
}

// Funcion para continuar el juego despues de detenerlo

function continuarJuego() {
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
    document.getElementsByTagName("button")[1].removeAttribute("disabled");
    document.getElementsByTagName("button")[2].setAttribute("disabled","true");
    //intervalo = setInterval(sacarBolilla, 1000);
    sacarBolilla();
}

*/