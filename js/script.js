let NumeroAleatorioi=1;
let NumeroAleatoriof =75;
let continuar = "S", letra;

let Numerosusados = new Array(76);

Math.random();

function inicio(){
    generarCartilla();
}

function generarCartilla(){

    resetNumerosusados();

    for (let i=0; i <25; i++){
        if (i==12)
        continue;
        generarCasilla(i);
    }

}

function Cartillas(inicio, fin, cantidad) {
    
    lista = listaNum(inicio, fin)
    listaNueva = []
    
    for (x in cantidad ){
        a = random.randint(0, length(lista)-1)
        n = lista[a]
        listaNueva.append(n)
        lista.pop(a)
    print(listaNueva)
    
   
}
Cartillas(1,15,5);
Cartillas(16,30,5);
Cartillas(31,45,4);
Cartillas(46,60,5);
Cartillas(61,75,5);

}

//  Sacar bolillas una por una

function Bolillas() {

    lista = listaNum(1, 75)

    while (lista.length> 0)  {
        a = random.randint(0, length(lista)-1)
        n = lista[a]
        print(n, end= "")
        lista.pop(a)
        print()
        TimeRanges.sleep(5)
    }

}





function generarCasilla(NumeroCasilla){
    let actualcastilla = "Casilla" + NumeroCasilla;
    let num;
    let Numerosusados;

    let NumerosColumna = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4)
    nuevoNumero = (NumerosColumna[NumeroCasilla]*15)+generaNuevoNum();

    while (Numerosusados[nuevoNumero] == true){
        nuevoNumero = (NumerosColumna[NumerosColumna]*15) + generaNuevoNum();
    }
    Numerosusados[nuevoNumero] = True;
    document.getElementById(actualcastilla).value = nuevoNumero; 

}

function generaNuevoNumero(){
    return Math.floor((Math.random()*15)+1);
}

function resetNumerosusados() {
    for (let i=0; i < Numerousados.length; i++){
        Numerosusados[i] = false;
    }
}

function generarOtraCartilla(){
    resetNumerosusados();
    generarCartilla();
}

function marcarCasilla(casilla) {
    let actualcastilla = document.getElementById(casilla);
    //if (actualcastilla.style.backgroundColor == "blue")
   // actualcastilla.style.backgroundColor == "yellow";
   // else
   // actualcastilla.style.backgroundColor = "red";
    return;
}

function SacarBola(){
    do{
        // Retorna a random entero from 1 to 75:
        continuar=prompt("Desea sacar otra bola? S/N");
        numero=Math.floor(Math.random()*75);
        //letra B
       
        switch(true){
            case (numero >=1 && numero <=15):
                letra = "B"
                break;
            
            //letra I
            case (numero >=16 && numero <=30):
                letra = "I"
                break;
            // letra N
            case(numero >=31 && numero <=45):
                letra = "N"
                break;
            // letra G
            case (numero >=46 && numero <=60):
                letra = "G"
                break;
            //letra O
            case (numero >=61 && numero <=75):
                letra = "O"
                break;
            
        }
       
        console.log(letra+numero);
    }while(continuar.toLowerCase()||continuar.toUpperCase())
    
}

    

