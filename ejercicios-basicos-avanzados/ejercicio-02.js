// 1. Luke Skywalker cumple años:
const jedi = {
    nombre: "Luke Skywalker", 
    edad: 19
};

const jedi2 = {
    nombre: "Luke Skywalker",
    edad: 25
};

// 2. Presentación al estilo Leia Organa:
const nombre = "Leia";
const apellido = "Organa";
let edad = 20;

let presentacionDeLeia = "Soy " + nombre + " " +  apellido + " tengo " + edad + " años y soy la princesa de Alderaan"
console.log(presentacionDeLeia);

// 3. Calculando el coste total de sables de luz:

const precioTotal = (precio1, precio2) => {
    const total = precio1 + precio2;
    return total;
}

const sable1 = {
    nombre: "Shoto de Yoda", 
    precio: 1500
};

const sable2 = {
    nombre: "Sable de Darth Vader", 
    precio: 2000
};

const totalSables = precioTotal(sable1.precio, sable2.precio)
console.log(totalSables);

//4. Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = {
    nombre: "Ala-X", 
    precioBase: 50000, 
    precioFinal: 60000
};

const total1 = precioBaseGlobal + nave1.precioBase;
nave1.precioFinal = total1;
console.log(total1)

const nave2 = {
    nombre: "Halcón Milenario", 
    precioBase: 70000, 
    precioFinal: 80000
};

const total2 = precioBaseGlobal + nave2.precioBase;
nave2.precioFinal = total2;
console.log(total2)

//





