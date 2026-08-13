// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne + " es el numero mayor") 
    }
    else if (numberTwo > numberOne + " es el numero mayor") {
        console.log(numberTwo)
    }
    else {
        console.log("Los dos numeros son iguales")
    }
}

greaterNumber(10, 5);