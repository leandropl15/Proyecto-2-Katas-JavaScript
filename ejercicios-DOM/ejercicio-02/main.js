//2.1 Inserta dinamicamente en un html un div vacio con javascript
const body = document.body

const divVacio = document.createElement("div")

body.appendChild(divVacio)

//2.2  Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConParrafo = document.createElement("div")
const parrafo = document.createElement("p")

divConParrafo.appendChild(parrafo)
body.appendChild(divConParrafo)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divParrafoSeis = document.createElement("div")

for (let i = 1; i <= 6; i++) {
    const p = document.createElement("p")
    divParrafoSeis.appendChild(p)
}
body.appendChild(divParrafoSeis)

//2.4  Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafoDinamico = document.createElement("p")
parrafoDinamico.textContent = ("Soy dinamico")
body.appendChild(parrafoDinamico)

//2.5 nserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const titleDos = document.querySelector(".fn-insert-here").textContent = "Wubba Lubba dub dub"
//titleDos.textContent = "Wubba Lubba dub dub"

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul")

for (const element of apps) {
    const li = document.createElement("li")

    li.textContent = element
    ul.appendChild(li)
}
body.appendChild(ul)


//2.7  Elimina todos los nodos que tengan la clase .fn-remove-me
document.querySelectorAll(".fn-remove-me").forEach(elemento => elemento.remove())

//2.8  Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const parrafoMedio = document.createElement("p")
parrafoMedio.textContent = "Voy en medio!"

const divs = document.querySelectorAll("div")
document.body.insertBefore(parrafoMedio, divs[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

document.querySelectorAll(".fn-insert-here").forEach(div => {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
});










