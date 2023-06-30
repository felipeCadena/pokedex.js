import './style.css';

const inputNameId = document.querySelector('.input');
const img = document.querySelector('.pokemon');
const idPokemon = document.querySelector('.id');
const namePokemon = document.querySelector('.name');

async function fetchPokemon(pokemon) {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = url.json();
  return data;
}

const pokemonImage = async (pokemon) => {
  const { id, name, sprites } = await fetchPokemon(pokemon);
  namePokemon.innerHTML = 'Loading...';
  idPokemon.innerHTML = `${id} -`;
  namePokemon.innerHTML = name.toUpperCase();
  img.src = sprites.versions['generation-v']['black-white'].animated.front_default;
};

inputNameId.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    pokemonImage(inputNameId.value.toLowerCase());
  }
});
