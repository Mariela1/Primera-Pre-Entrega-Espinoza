

// Obtener numero random del 1 al 75

const bolillas = document.querySelector('.main__contenedor-bolillas');
const playBtn = document.querySelector('.main__btn-play');
const stopBtn = document.querySelector('.main__btn-stop');

// Obtener numero random

function getRandomNumero(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

let mostrarArrayNumeros = [];
let cartillaArrayNumeros = [];
const bingoArray = []; 

//Extraer bolillas

function comparaBolillas(){
    let bingoHtml = '';
// Si encontramos la posicion de un valor que coincida con la cartilla
    if (
        cartillaArrayNumeros.indexOf(mostrarArrayNumeros[mostrarArrayNumeros.length]) !== -1
    ){
    const htmlBolilla = document.querySelector(`#bolilla-${mostrarArrayNumeros[mostrarArrayNumeros.length - 1]}`);

    const htmlCartilla = document.querySelector(`#cartilla-${mostrarArrayNumeros[mostrarArrayNumeros.length - 1]}`);

    if (bingoArray.length === 75) {
        stopBolillas();
    }
}
}

function muestraBolillas(ev){
    let htmlBolillas = '';
    for (let i=0; i < 75; i++) {
        const numero = getRandomNumero(75);
    if (!mostrarArrayNumeros.includes(numero)) {
        htmlBolillas +=`<div class=".main__contenedor-bolillas--bolilla" id="bolilla-${numero}"> ${numero}</div>`;
        mostrarArrayNumeros.push(numero);
    } else {
        i--;
    }
    }

    bolillas.innerHTML += htmlBolillas;
    comparaBolillas();
}

// Intervalo de tiempo para mostrar Bolillas

let timer;

function autoBolillas() {
    timer = setInterval(muestraBolillas, 2000);
}

// Stop setInterval
function stopBolillas() {
    clearInterval(timer);
}

//Eventos

playBtn.addEventListener('click', autoBolillas);
stopBtn.addEventListener('click', stopBolillas);


