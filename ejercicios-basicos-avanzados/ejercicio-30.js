// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const playList = {};

for (const cancion of tracks) {
    if (cancion.genre.includes("Rock")) {
        if (!playList[cancion.genre]) {
            playList[cancion.genre] = [];
        }
        playList[cancion.genre].push(cancion.title)
    }

    if (cancion.genre.includes("Pop")) {
        if (!playList[cancion.genre]) {
            playList[cancion.genre] = [];
        }
        playList[cancion.genre].push(cancion.title)
    }

    if (cancion.genre.includes("Metal")) {
        if (!playList[cancion.genre]) {
            playList[cancion.genre] = [];
        }
        playList[cancion.genre].push(cancion.title)
    }

    if (cancion.genre.includes("Country")) {
        if (!playList[cancion.genre]) {
            playList[cancion.genre] = [];
        }
        playList[cancion.genre].push(cancion.title)
    }

    if (cancion.genre.includes("Grunge")) {
        if (!playList[cancion.genre]) {
            playList[cancion.genre] = [];
        }
        playList[cancion.genre].push(cancion.title)
    }

}
console.log(playList)