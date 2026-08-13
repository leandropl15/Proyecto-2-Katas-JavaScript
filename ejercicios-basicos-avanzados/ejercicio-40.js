// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const  findArrayIndex = (array, text) => {
    if (array.includes(text)) {
        return array.indexOf(text);
    }

    return -1 //esto lo agregue en base a una investigacion ya que en la funcion de abajo de removeItem cuando ponia como parametro un nombre que no estuviera en el array la funcion me eliminaba en primer nombre del array, la razon es que cuando no existia devolvia undifined haciendo if fuera true y entrara y javascript convertira el undefined en 0 aliminando el primer elemento, agregando return -1 nos aseguramos que cuando el nombre no este en el array no se cumpla la condicion y no entre al if.
}

console.log(findArrayIndex(mainCharacters, "Han Solo" ))

// Parte 2: Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

const removeItem = (array, text) => {
    const indice = findArrayIndex(array, text)

    if (indice !== -1) { // si no existe findArrayIndex devuelve -1
        array.splice(indice, 1)
    }
    return array
}
console.log(removeItem(mainCharacters, "leandro"))


