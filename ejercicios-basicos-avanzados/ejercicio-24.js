// Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = [];
const noHumanos = [];

for (const personaje of characters) {
    if (personaje.species === "Human") {
        humanCharacters.push(personaje)
    }
    else if (personaje.species != "Human") {
        noHumanos.push(personaje)
        //agregue este else if para mejorar el ejercicio y separar el array en dos los humanos y los no humanos "Solo para practicar"
    }
}

console.log(humanCharacters)
console.log(noHumanos)
