// Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2000 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let peliculaAntesDeDosMil = 0;

let peliculaPosteriorAlDosMil = 0;

for (const pelicula of movies) {
    if (pelicula.releaseYear < 2000) {
        peliculaAntesDeDosMil++
    }
    else if (pelicula.releaseYear > 2000) {
        peliculaPosteriorAlDosMil++
    }
    else {
        console.log(pelicula.title + " :es una pelicula del año 2000")
    }
}

// modique el objeto y puse una de la peliculas con year 2000 para que salte el else{}
console.log(peliculaAntesDeDosMil)
console.log(peliculaPosteriorAlDosMil)
