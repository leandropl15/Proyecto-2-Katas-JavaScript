// Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()


const rollDice = (caras) => {
    const resultado = Math.floor(Math.random() * caras) + 1
    return resultado
}
console.log(rollDice(6))

// explicacion breve: Math.random() no generara un numero aleatorio entre 0 y 1 sin incluir el 1 ejemplo, 0.50, 0.23 etc. para aplicar esto al dado el punto esta el multiplicar por el numero de caras del dado, pero nos podria devolver un decimal entonces utilizamos el Math.floor que nos ayudara a redondear hacia abajo es decir 3.78 = 3 y por ultimo como no tenemos cara 0 en nuestro dado le sumamos 1 para que devuelva el numero aleatorio entre 1 y 6 es decir que empieze desde el 1 y no desde el 0. metemos Math.random() * caras dentro de Math.floor porque este nesecita un numero para redondearlo.
