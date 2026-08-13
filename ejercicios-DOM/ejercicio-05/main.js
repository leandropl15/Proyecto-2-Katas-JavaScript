//uso el import export visto en clase, y ademas agrego una hoja de estilo css sencilla para mejorar un poco la visibilidad de la pagina.

import albums from "./albums.js";

const main = document.querySelector("main");

const ul = document.createElement("ul");

for (const album of albums) {
  const li = document.createElement("li");

  li.innerHTML = `
        <h3>${album.titulo}</h3>
        <h4>${album.artista}</h4>
        <p>Canciones:${album.canciones}</p>  
        <p>Duracion Total: ${album.duracion} Minutos</p>
        <img src="${album.portada}" alt="${album.titulo}">
    `;

  ul.appendChild(li);
}
main.appendChild(ul);
