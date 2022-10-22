console.log("hola sumando cosas")

//AND &&......or  ||......!.......condicionales simples....anidados
/*
let dia = 1;

if(dia==1){
    alert("es lunes");
}else if(dia==2){
    alert("es martes");
}else if(dia==3){
    alert("es miércoles");
}else{
    alert("eligió día Osvaldo");
}

// Utilizamos switch si quisieramos preguntar exclusivamente si voy a utilizar el operador de (igual estricto)==
// En el case no existe ni el <, >, sirve para trabajar con valores que sean estrictamente iguales
// Lo utilizamos cuando queremos validar un dato estricto y que no intervengan las operaciones de < y >
// SIRVE PARA UN MENU DE UN CAJERO, CALCULADORA

switch(dia){

    case 1: //por detras está haciendo el igual estricto ===
        alert("es lunes");
    break; //sin el break no corta con la sentencia y evalua todos los casos
    case 2:
        alert("es martes");
    break;
    case 3:
        alert("es miércoles");
    default:
        alert("no ha seleccionado ninguna opcion");
    break;
}

let saldo = 50000;

let opcion = Number (prompt("elegir opcion cajero 1-Consultar saldo 2-Extraer 3-Transferir"));

switch(opcion){

    case 1:
        alert("Su saldo es de:" + saldo);
    break;
    case 2:
        alert("Extraer"); //se pueden hacer sumas, restas; puedo dar más de una instrucción
        if(saldo>0){

        }else{
            alert(("buscate un currito para llegar a fin de mes...."))
        }
    break;
    case 2:
        alert("Transferir");
    default:
        alert("La opcion ingresada no es válida");
    break;
}


//---------------------------CICLOS REPETITIVOS---------------------------------------
//-------CLICLO WHILE
// Va a evaluar si el resultado global es TRUE
// Lo primero que hace es ir a los paréntesis, y evalua, sigue con la instrucción, si es false, no hace nada

let nombre1 = prompt("Ingrese un nombre X");

let contador = 10; 

while(true){     //true  -   continua el bucle
    console.log("alert...");
}
En caso de utilizar booleanos, al 10 ser mayor a 5, es true, por lo que ejecuta y sigue con la instrucción
while(10>5){
    console.log("alert...");
}

let contador = 10; //true - continua el bucle

while(contador>5){
    console.log("alert...");
}

let contador = 10; //true - continua el bucle

while(contador>5){  // da false y sale del loop xq toma el valor del contador de abajo 
    console.log("alert...");

    contador=3
}

------Contadores, así funciona un clásico contador

contador = 0

contador = contador + 1; vale 1

contador = contador + 1; vale 2

contador = contador + 1; vale 3

otra opcion es
contador += 1

tambien se puede hacer un operador de incremento
contador++  lo que hace es incrementar en 1 

let contador = 0; 

while(contador<5){  
    console.log("alert...");

   
}
1- 0<5 = true  se vuelve infinito

*/

//si quiero que el contador vaya incrementando de a uno

/*
let contador = 0; 

while(contador<5){  // continua el bucle hasta llegar a 5, termina en 5 alerts
    console.log("alert...");

   contador=contador + 1;

   let nombres = prompt("ingrese el nombre");

   let card = prompt("dibujar card"); //te ahorras de pegar la cant de veces que desees

   contador++; //es otra opción; lo va a preguntar 4 veces, en la 5ta se rompe el ciclo
}

1- 0<5 = true
2- 1<5 = true
3- 2<5 = true
4- 3<5 = true
5- 4<5 = true
6- 5<5 = false y rompe con el cilco while
*/

/*----Operador decremento --

vidas = vidas - 1

vidas -= 1

let vidas = 3

while(vidas>0){

     alert("cantidad de vidas");
}

//while(vidas>0)  tendras vidas infinitas xq siempe 3 va a ser mayor a 0


//para sumar de a una vida, opciones
//no funciona para incrementar de a 2; para que funcione de esa forma, cambiar el 1 x el 2, menos opcion 4
let vidas = 0;

console.log(vidas)

vidas = + 1; // vale 1 - opcion 1

vidas = + 1; // vale 2 - opcion 2

vidas += 1;// vale 3 - opcion 3

vidas ++; // vale 4  - opcion 4

console.log(vidas)

//si quiero que reste

vidas = vidas - 1;

vidas = vidas - 1;

vidas = vidas - 1;
// o
vidas --;


while(true){  
    console.log("alert...");

    break; //el break rompe todo, corta el ciclo

}


let entrada = prompt("Ingresar un dato");  //todo va a depende de lo que ponga en entrada

while (entrada != "ESC"){  //mientras que entrada es distinto que ESC

    alert("El usuario ingreso" + entrada); //ingresa el codigo, pide el usuario
    
    entrada = prompt("Ingresar otro dato"); // luego aca pide entrada; 
    //si en entrada pongo perro....ESC se corta en ciclo while
    //ESC!="ESC" -->FALSE, sale del ciclo
        //while ((entrada != "ESC") || (entrada !=esc)) para que tome el codigo en minuscula
}  


//---------DO WHILE  --- primero ejecuta y luego evalua

//Sirve para por ej aparezca un menu, si queremos que el menu aparezca de lleno y preguntar que elige lo podemo usar tranquilamente
//Lo usamos cuando queremos que primero nos muestre alguna ejecucion y despues preguntar, caso concreto un menu, primero queremos que aparezcan los datos y despues elegir

let contador2 = 0; //tambien ocasiona un infinito

do{

    alert("Ejecutando do while" + contador2);

    //puedo trabajar internamente con 
    //if(contador2 == 2){
        break; //loopea asta 2 y se corta x el break
    }

    contador2 ++;    //para romperlo, hace bucle hasta llegar a 4 y sale
    
}while(contador2<5)



//----------ESTRUCTURA FOR
          

            //aca es donde evalua: el resultado es TRUE
    for(let i=0;i<5;i++){

    console.log("ciclo for:" + i);

}
//--------------------------------------------
//si tengo una lista de productos

let productos

// puedo condicionar el ciclo for de la sig manera

let cantidadIngresos = Number (prompt("Cuanto ingresos necesitas?"));
                //para ejecutar la linea de arriba, reemplazar el i<5 por i<cantidadIngresos; de esta manera no limito la cantidad que el usuario quiere ingresar
                //si quiero que avance de a dos, al final reemplazo i++ por i=i+2
for(let i=0;i<5;i++){

    //productos = prompt("ingrese un producto")

    if(i==50){ //si quiero que corte en 50
       // break; o:
        console.log("es 50");
        continue;  //saltea todo lo que está debajo y vuelve arriba
    }

    console.log("ciclo for:" + i); //me va a agregar hasta 4 productos

}

// al i(indice) le puede pedir que arranque desde el numero que quiero, ej 50 en este caso
//for(let i=50;i<100;i++)*/