// Desarrolla una función que reciba un país por parámetro y devuelva su capital. Utiliza un objeto para almacenar los países y sus capitales. La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

const getCapital = (country) => {

    let capital;

    for (const key in capitals) {
        if (country === key) {
            capital = capitals[key]
        }
        
    }
    if (!capital) {
        return "no conozco al capital de este pais"
    }
    return capital 
}

console.log(getCapital("Spain"))

const capital2 = (pais) => {
    let capital = capitals[pais]

    if (capital != undefined) {
        return capital
    }
    else {
        return "No hay capital para este pais"
    }
}
console.log(capital2("Spain"))
