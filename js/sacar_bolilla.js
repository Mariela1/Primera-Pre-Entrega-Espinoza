function sacarbolillas() {
var bolillas = [];
while (bolillas.length < 15) {
    var bolilla = Math.floor(Math.random() * 75) + 1;
    if (bolillas.indexOf(bolilla) === -1) {
        bolillas.push(bolilla);
    }
}
document.getElementById("bolillas").innerHTML = bolillas.join(", ");
}



