// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

let suma = 0;

function averageWord(list) {
    for (const elemento of list) {
        if (typeof elemento === "number") {
            suma = suma + elemento;
        }
        else {
            suma += elemento.length;
        }
    }
    
    return suma;
}

let resultado = averageWord(mixedElements)
console.log(resultado)