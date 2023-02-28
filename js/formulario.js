//input = document.querySelector("#input-normal");
input.setAttribute("minlength","5");
input.placeholder = "Nombre de usuario";

// <input type="text" id="input-normal" placeholder="hola" >
// <input type="Submit" name="">
//<div id="cuadradoRojo" style="height: 50px; background-color: red"> </div>
titulo = document.querySelector(".titulo");
titulo.style.backgroundcolor = "green";
document.write(titulo)

let boton = document.getElementById("btnPrincipal")


//boton.addEventListener("mouseup", respuestaClickUp)
//boton.addEventListener("mousemove", respuestaMove)


//let cuadradoRojo = document.getElementById("cuadradoRojo")
//cuadradoRojo.addEventListener("mousemove", respuestaMove)
//cuadradoRojo.addEventListener("mouseup", respuestaClickUp) 

function respuestaClickUp() {
    console.log("MOUSE UP");
}

function respuestaMove() {
    console.log("MOUSE MOVE");
}

function MayorEdad() {
    let edad = document.getElementById("edad").value;
    let voteable = (edad < 18) ? "Lo siento, Es menor de edad": "En buenahora, Es mayor de edad";
    document.getElementById("formulario").innerHTML = voteable + " para jugar";

}

function enlazar() {
    window.location.href = "../index.html"; 
}