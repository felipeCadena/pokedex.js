import './style.css';

const inputNameId = document.querySelector('.input');
const img = document.querySelector('.pokemon');
const idPokemon = document.querySelector('.id');
const namePokemon = document.querySelector('.name');
const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');
const form = document.querySelector('form');

async function fetchPokemon(pokemon) {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = url.json();
  return data;
}

let nextPrev = 1;

const pokemonImage = async (pokemon) => {
  namePokemon.innerHTML = 'Loading...';
  idPokemon.innerHTML = '';

  const { id, name, sprites } = await fetchPokemon(pokemon);

  idPokemon.innerHTML = `${id} -`;
  namePokemon.innerHTML = name.toUpperCase();
  img.src = sprites.versions['generation-v']['black-white'].animated.front_default;
  inputNameId.value = '';
  nextPrev = id;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  pokemonImage(inputNameId.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (nextPrev > 1) {
    nextPrev -= 1;
    pokemonImage(nextPrev);
  }
});

buttonNext.addEventListener('click', () => {
  nextPrev += 1;
  pokemonImage(nextPrev);
});

pokemonImage(nextPrev);
