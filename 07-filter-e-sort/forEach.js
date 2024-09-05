const data = require("./data");

//Adiciona a propriedade Game em todos os elementos do Array Cards
//ForEach tem função parecida com o map, só que faz algo para cada elemento do array. O forEach não retorna nada por padrão, só modifica o objeto original.

const addProperty = (propKey, propValue) => {
  data.cards.forEach((card) => (card[propKey] = propValue));
};

addProperty("game", "Yu-Gi-Oh!");

console.log(data.cards);
