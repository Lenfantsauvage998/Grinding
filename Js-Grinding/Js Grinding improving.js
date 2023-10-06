
let resultado

let resultado1 = document.querySelector("#resultado1");

function operacion () {
    let num1 = document.querySelector("#num1")
    let valorIngresado1 = parseFloat(num1.value);
    
    let num2 = document.querySelector("#num2")
    let valorIngresado2 = parseFloat(num2.value);

    resultado = (valorIngresado1)+(valorIngresado2) 

    resultado1.textContent = resultado;
}

let Newbottom = document.querySelector("#Calcular")
Newbottom.addEventListener("click", operacion )

/*------------------*/ 

let resultadofactorial

let resultado2 = document.querySelector("#resultado2");


function operacion1 () {
    let numFac1 = document.querySelector("#numFactorial");

    let incomingNumber = parseFloat(numFac1.value);

    resultadofactorial = 1; 

    for (let i= 1 ; i <= incomingNumber ; i ++   ) { 
        
        resultadofactorial *= i;

        console.log("El valor de i = " + i);
    } 
    

    resultado2.textContent = resultadofactorial; 
}

let Newbottom1 = document.querySelector("#Button")
Newbottom1.addEventListener("click", operacion1 )

/*---------------*/ 


let resultadoParImpar 

let resultado3 = document.querySelector("#resultado3")

function operacion2 (e){


    let numeroEntrante = document.querySelector("#numParImpar")

    numeroEntrante1 = numeroEntrante.value

    let ultimoDigito = numeroEntrante1[numeroEntrante1.length -1]

    if (ultimoDigito === '0' || ultimoDigito === '2' || ultimoDigito === '4' || ultimoDigito === '6' || ultimoDigito === '8') { 
        resultado3.textContent = "si es par"; 
    } else{
        resultado3.textContent = "no es par"; 
    }    
}

let detonante = document.querySelector("#VerificarParImpar")

detonante.addEventListener("click", operacion2)

/*----------------*/ 

let numeroPalabras 

let resultadopalabras = document.querySelector("#resultado4")

function basecontarPalabras (e) {



    let bolsacadenaTexto = document.querySelector("#cadenaTexto")

    numeroPalabras1 = bolsacadenaTexto.value.trim();

    if (numeroPalabras1.includes(" ") ){

        let palabras = numeroPalabras1.split(" ");
            
        for (let i= 0 ; i < palabras.length; i ++ ) { 
            resultadopalabras.textContent = ( 1 + i + " " +"rey")
        } 
    
            
    }else {   
        console.log("1 rey") 
        resultadopalabras.textContent = ( 1 +" "+"rey")
    }
}

let detonante1 = document.querySelector("#ContarPalabras")
detonante1.addEventListener("click",basecontarPalabras )

/*--------------------------*/ 

let resultadoNumeroGrande 

let Impresion = document.querySelector("#resultado5")

function numeroGrande(){
    let numero1 = document.querySelector("#num5_1")
    let numero2 = document.querySelector("#num5_2")
    let numero3 = document.querySelector("#num5_3")

    let valorIngresadoGrande1 = parseFloat(numero1.value);
    let valorIngresadoGrande2 = parseFloat(numero2.value);
    let valorIngresadoGrande3 = parseFloat(numero3.value);

    for (let i= 0 ; i < valorIngresadoGrande1 || i < valorIngresadoGrande2 || i < valorIngresadoGrande3  ; i ++ ) { 
    Impresion.textContent = (1 + i)
} 

}

let detonanteNumero = document.querySelector("#EncontrarMayor")
detonanteNumero.addEventListener("click",numeroGrande)

/*--------------*/ 

