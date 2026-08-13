// Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
        console.log(products[i]);
    }
}

// version con array y forof
let camiseta = [];

for (const producto of products) {

    if (producto.includes("Camiseta")) {
        camiseta.push(producto)
    }
}

console.log(camiseta)

