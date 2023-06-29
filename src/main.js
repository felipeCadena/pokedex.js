import './style.css';

const inputNameId = document.querySelector('.input');
const image = document.querySelector('.pokemon');
// const buttonNext = document.querySelector('.next');
// const search = document.querySelector('.search');
const idPokemon = document.querySelector('.id');
const namePokemon = document.querySelector('.name');

async function fetchPokemon(pokemon) {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = url.json();
  return data;
}

const pokemonImage = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  idPokemon.innerHTML = `${data.id} -`;
  namePokemon.innerHTML = data.name.toUpperCase();
  image.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
};

inputNameId.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    pokemonImage(inputNameId.value);
  }
});
