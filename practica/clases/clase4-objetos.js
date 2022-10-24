//  FUNCIONES

/*let nombre = prompt("ingrese un nombre");

console.log(nombre);

// esta funcion sirve para ahorrar codigo, se evita repetir el codigo de arriba tantas veces se desee
// de esta forma, lo unico que modificamos es lo que contiene el console.log


//-----FUNCIONES SIN PARAMETRO
function saludar(){//nombre de la funcion

    console.log("hola chicos, hoy es martes");//lo que quiero que haga la funcion
}


saludar();
//lo vuelve a tomar
saludar();

//en este caso la funcion no describe a la accion, va a funcionar, pero no sabemos para que
//poner nombre concreto para que sirve la funcion

function x(){ 

        alert ("hola coder");

x();
x();

}

//-----FUNCIONES CON PARAMETRO

//datos para trabajar los parametro: string; numeros:enteros, decimales; booleanos
function conParametro(nombre){

    console.log("tu nombres es:" + nombre);
}

conParametro("Jazmin");
conParametro("Juan Carlos");
conParametro("Analia");

function unNumero(numero){

    console.log(numero);
    console.log(numero+numero);
}
//sin comillas xq es un numero
unNumero(5);
unNumero(10);
unNumero(10.5);


 //es importante el orden en que guardo los parametros
 // si invirtiera, apellido, nombre; se imprimiria igual Jazmin Torres, porque toma el orden
 // ---- CON DOS PARAMETROS
function conDosParametros(nombre,apellido){

    console.log("tu nombre es" + nombre);
    console.log("tu apellido es:" + apellido)
}

conDosParametros("Jazmin", "Torres");


function conMasParametros(nombre,apellido,edad,soyRobot){

    if(soyRobot){
    console.log("tu nombre es" + nombre);
    console.log("tu apellido es:" + apellido)
    console.log("tu edad es:" + edad)
    }else{
        console.log("algo...")//se ejecuta e imprime en caso de dar false al parametro soyRobot
    }

}

conMasParametros("Jazmin", "Torres", 15,true);




//Declaracion de variable para guardar el resultado de la suma
let resultado = 0
// Funcion que suma dos numeros y asigna a resultado
function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero
}
// Funcion que muestra resultado por consola
function mostrar(mensaje){
    console.log(mensaje)
}
// Llamamos primero a sumar y luego a mostrar
sumar(6, 3);
mostrar(resultado);




let resultado = 0

function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje){
    console.log(mensaje);
}
sumar(6, 3);
mostrar(resultado);




function conRetorno(edad){

   
        return true; //podeoms utilizar un dato concreto, una variable, concatenar stream
                    //va a depende de lo que quiera retornar
}

let mayorEdad = conRetorno (20);

console.log(mayorEdad); // se va imprimir true



function sumaNumeros(numeroA,numeroB){

        let resultado = numeroA + numeroB;

        return resultado 
}

let resultadoSuma = sumaNumeros(10,15);

console.log(resultadoSuma);
*/

function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

    

console.log(calculadora(10, 5, "/"))