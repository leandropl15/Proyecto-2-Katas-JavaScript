// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];


const miembroMasAntiguo = (list) => {

    let miembroFinal = xMen[0];

    for (const champion of list) {
        if (champion.year < miembroFinal.year) {
            miembroFinal = champion
        }
    }
    return miembroFinal
}
console.log(miembroMasAntiguo(xMen))


