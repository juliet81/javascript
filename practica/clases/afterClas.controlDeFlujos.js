let pagos = 0;

let darwin = 19000;

pagos = pagos + darwin;

let motog82 = 69000;

pagos = pagos + motog82;

let tvsmart = 54000;

pagos = pagos + tvsmart;

console.log("a pagar.." + pagos);

//----------------------un modo mas sencillo para no repetir codigo---------------------

let acumulador = 0

let productos = 0;

let cantidadProductos = 0;

cantidadProductos++;
cantidadProductos++;
cantidadProductos++;

for(let i=0;i<3;i++){

    productos = Number(prompt("ingrese valor productos"));

    acumulador = acumulador + productos;

    console.log("el total a pagar es" + acumulador)

}