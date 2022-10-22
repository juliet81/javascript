/*
var numero = 10;
var decimal = 10.5;
var nombre = "nombre";

//BOOLEANOS  -  CONDICIONALES

var soyRobot1 = true; // 1
var soyRobot2 = false; //0

console.log("soy robot?" + soyRobot1);
console.log("soy robot?" + soyRobot2);

let seEntendio = true; //si fuese false, no se ejecuta la linea de codigo

if(seEntendio){
    alert("soy un robot se ejecuta el codigo")
}

//OPERADORES DE RELACION / COMPARACION >...>=...<...<=...==(compara solo el valor)...===(igual estricto, compara no solo el valor, sino tambien el tipo de dato)...!=(distinto)
//= (es solo un operador de asignacion)
console.log(10>5); //(true)
console.log(8>4);//true
console.log(10>15);//false
console.log(10==9);//false
console.log(10==10);//true
console.log(10=="10");//true
console.log(10==="10");//false
console.log(10!=10);//false
//console.log(10=10);//= es un comparador de asignacion, da error
console.log(1==true);//true  //1-tipo dato numero - true-tipo dato booleano, convierte de forma automatica a 1, el true x detras es un 1. Como no esta comparando estrictamente, compara con el operador logico, que por detras, el true es un 1
console.log(1===true);//false //porque pregunta si es el tipo dato y el tipo valor

let password = 1234;

let inputUsser = Number(prompt("ingrese su clave"))

//...........si se cumple corre el primero, si no se cumple corre el else
if(password==inputUsser){

    alert("uruario correcto")
}else{
    alert("no ingreso bien su pass")
};
//para el vacio
if(nombreUsuario != ""){

    alert("no ingresaste el nombre de usuario")
}else{

    alert("nombre de usuario ingresado" + nombreUsuaruio)
}

//CONDICIONALES ANIDADOS

console.log(10<10);
console.log(10<=10);

let numeroA = 100;

if (numeroA<20){
    alert("es menor a 20")

}else if(numeroA<50){

    alert("es menor a 50");

}else if(numeroA<=100){

    alert("es menor a 100");
}else{
    alert("es mayor a 100");
}

//-------Para evitar todo este código, se realiza lo de arriba
if (numeroA<50){
    alert("es menos a 50")

};
if (numeroA<100){
    alert("es menor a 100")

}else (numeroA>100){
    alert("es mayor a 100")

};

let numeroX =10;

let esMayor = (numeroX > 5)  //true

console.log("resultado relacion:" + esMayor);

let cafe = true

if(cafe==true){
    alert("estoy mas despierto");
}else{
    alert("med duermo en clase");
}

//OPERADORES LOGICOS - sirven para evaluar dos resultados

AND --- &&   me va a indicar que si trabajo con dos comparaciones e ingreso el operador logico and, el resultado general de 
trabajar con dos comparaciones, si las dos son verdaderas, me da true;
true&&true = true
true&&flase= false
false&&true= false
false&&false0 false


console.log((true&&true)) //true
console.log((true&&true)) //false

let password = true
let usuario = true
let soyRobot = false

//...true
if(password==true){
    alert("pass correcto");
}

//...true
if(usuario==true){
    alert("usuario correcto");
}

//..........true..........&&.......true= true
if((password==true) && (usuario==true) && (soyRobot==false)){
    alert("usuario y pass correctos");
}else{
    alert("usuario o pass incorrecto")
}

//OR....siempre y cuando haya un valor true el global va a ser siempre true
        en el unico momento que va a ser falso, es cuando dos o mas valores son falsos

....||

true||true = true
true||flase= true
false||true= true
false||false0 false

let password = true
let usuario = true
//es inseguro para una aplicacion, porque con que uno de los datos sea correcto, ingresa a la cuenta. Mas probabilidad 
//que hackeen la cuenta
if((password==true) || (usuario==true)){
    alert("usuario y pass correctos");
}else{
    alert("usuario o pass incorrecto");
}
*/

let nombreIngresado = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "AnA") || (nombreIngresado == "anA")){
    alert("El nombre ingresado es Ana");
}else{
    alert("El nombre ingresado no es ANA");
}

//............TRUE........&& (      TRUE                 ||         TRUE                )
if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))){

}

if((nombreIngresado !="") && (nombreIngresado == "EMA") || (nombreIngresado == "ema")){
    
}
//............true.......&&.false= false
console.log((true||true) && false)

//Operador logico NOT !..negar el resultado; si es true lo pasa a false, si es false lo pasa a true

let robot = true

console.log(!robot); //si era true, el negado lo invierte, false
