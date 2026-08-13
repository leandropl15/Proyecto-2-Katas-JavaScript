const image = document.querySelector(".random-image");

const getPokemon = async () => {
  const randomId = Math.floor(Math.random() * 151) + 1;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemon = await response.json();

  image.src = pokemon.sprites.front_default;
  image.alt = pokemon.name;
};

getPokemon();
