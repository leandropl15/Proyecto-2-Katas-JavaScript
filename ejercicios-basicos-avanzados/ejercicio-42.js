// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array. Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, elemento1, elemento2) => {
  const temporal = array[elemento1];

  array[elemento1] = array[elemento2];
  array[elemento2] = temporal;

  return array;
};

console.log(swap(fantasticFour, 1, 2));

//Expliacion: primero almacenamos un valor de manera temporal en una variable esto nos permitira utilizarla despues para hacer el intercambio, al decir que array[elemento1] = array[elemento2] conseguimos que el elemento 2 se repita en las dos posiciones y se duplique, entonces para resolver esto almacenamos al principio el valor del elemento 1 para despues asignarselo a elemeto 2 permitiendo el intercambio de ambos valores, por ultimo hacemos return para devolver el valor de array.
