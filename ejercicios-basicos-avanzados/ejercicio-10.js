// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma = 0;

function average(numberList) {
    for (const numero of numberList) {
        suma = suma + numero;
    }
    let resultado = suma / numberList.length;
    return resultado
    //return suma / numberList.length
}

let promedio = (average(numbers));
console.log(promedio);



