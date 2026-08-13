// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const peliculasPorDecadas = {

}

for (const movie of starWarsMovies) {

    if (movie.releaseYear >= 1970 && movie.releaseYear < 1980) {
        if (!peliculasPorDecadas["Decada de los 70: "]) {
            peliculasPorDecadas["Decada de los 70: "] = [];
        }
        peliculasPorDecadas["Decada de los 70: "].push(movie.title)
    }

    else if ( movie.releaseYear >= 1980 && movie.releaseYear < 1990) {
        if (!peliculasPorDecadas["Decada de los 80: "]) {
            peliculasPorDecadas["Decada de los 80: "] = [];
        }
        peliculasPorDecadas["Decada de los 80: "].push(movie.title)
    }

    else if (movie.releaseYear < 2000) {
        if (!peliculasPorDecadas["Decada de los 90: "]) {
            peliculasPorDecadas["Decada de los 90: "] = [];
        }
        peliculasPorDecadas["Decada de los 90: "].push(movie.title)
    }

    else if (movie.releaseYear >= 2000 && movie.releaseYear < 2010) {
        if (!peliculasPorDecadas["Decada de los 2000"]) {
            peliculasPorDecadas["Decada de los 2000"] = [];
        }
         peliculasPorDecadas["Decada de los 2000"].push(movie.title)
             
    }

    else if (movie.releaseYear >= 2010 && movie.releaseYear < 2020) {
        if (!peliculasPorDecadas["Decada de los 2010: "]) {
            peliculasPorDecadas["Decada de los 2010: "] = [];
        }
        peliculasPorDecadas["Decada de los 2010: "].push(movie.title)
    }
}

console.log(peliculasPorDecadas)
