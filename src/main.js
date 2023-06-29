import './style.css';

const inputNameId = document.querySelector('.input');
const img = document.querySelector('.pokemon');
// const random = document.querySelector('.random');
const idPokemon = document.querySelector('.id');
const namePokemon = document.querySelector('.name');
const nextPokemon = document.querySelector('.next');
// const prevPokemon = document.querySelector('.prev');
// const id = document.querySelector('.id');

async function fetchPokemon(pokemon) {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = url.json();
  return data;
}

const pokemonImage = async (pokemon) => {
  const data = await fetchPokemon(pokemon.toLowerCase());

  idPokemon.innerHTML = `${data.id} -`;
  namePokemon.innerHTML = data.name.toUpperCase();
  img.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
};

inputNameId.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    pokemonImage(inputNameId.value);
  }
});

nextPokemon.addEventListener('click', () => {

});
