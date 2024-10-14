const form = document.querySelector("form");
const pokeImg = document.querySelector("#poke-img");
const pokeName = document.querySelector("#poke-name");
const inputName = document.querySelector("#name-input");

//método fetch serve para fazer requisições numa api
const fetchAPI = (value) => {
  const result = fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then((response) => response.ok && response.json())
    .then((data) => data);

  return result;
};

const showInfo = async (pokemon) => {
  pokeImg.src = `./img/poke-loading.gif`;

  const pokeInfo = await fetchAPI(pokemon);

  if (!pokeInfo) {
    pokeImg.src = `./img/poke-not-found.png`;
    pokeName.innerText = `Não encontrado!`;
  }

  pokeImg.src = `${pokeInfo.sprites.front_default}`;
  pokeName.innerText = `${pokeInfo.name}`;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showInfo(inputName.value);
});
