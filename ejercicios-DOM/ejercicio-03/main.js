//1.1  Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const primeraLista = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");

  li.textContent = country;
  primeraLista.appendChild(li);
}
document.body.appendChild(primeraLista);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove();

//1.3  Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const divData = document.querySelector('[ data-function="printHere"]');

const segundaLista = document.createElement("ul");

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;

  segundaLista.appendChild(li);
}
divData.appendChild(segundaLista);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countriesDos = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const countri of countriesDos) {
  const divs = document.createElement("div");
  const ul = document.createElement("ul");
  //const li = document.createElement("li")

  ul.innerHTML = `
        <li>
            <h4>${countri.title}</h4>
            <img src="${countri.imgUrl}" alt= "${countri.title}" >
        </li>
    `;

  divs.appendChild(ul);
  document.body.appendChild(divs);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement("button");
button.textContent = "Eliminar último";

button.addEventListener("click", () => {
  const divs = document.querySelectorAll("div");
  if (divs.length > 0) {
    divs[divs.length - 1].remove();
  }
});

document.body.appendChild(button);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  const button = document.createElement("button");
  button.textContent = "Eliminar";

  button.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(button);
});
