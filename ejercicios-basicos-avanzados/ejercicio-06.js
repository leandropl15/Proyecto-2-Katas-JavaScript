// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    console.log(numero);
}
//version for of
for (const numero of numeros) {
    console.log(numero)
}



// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < numeros.length; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// version forof
for (const numero1 of numeros) {
    if (numero1 % 2 == 0) {
        console.log(numero1)
    }
    else {
        console.log("El resultado de la division de " + numero1 + " no es igual a 0")
    }
}



// 1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a '¡Dormido!'.

for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log(i + " intentando dormir oveja 🐑" )
    }
    else {
        console.log(i + " dormido 🐑")
    }
}

// otra solucion seria poner dentro del if (i === 0) {console.log("dormido")} y else {console.log("intentando dormir oveja")}







