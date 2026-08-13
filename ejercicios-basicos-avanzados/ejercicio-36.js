// Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades. Averigua como hallar el año actual en tus cálculos.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];


const  calculateActorsAges = (actors) => {
    const actoresConEdad = [];

    const añoActual = new Date().getFullYear(); // new date crea un objeto con la fecha actual del ordenador y .getFullYear() extrae unicamente el año asi obtengo la fecha actual, que seria lo mismo que poner a mano añoActual = 2026;

    for (const actor of actors) {
        const edad = añoActual - actor.born

        actoresConEdad.push({
            name:actor.name,
            age: edad
        })
    }
    
    return actoresConEdad;

}

console.log(calculateActorsAges(actors))

