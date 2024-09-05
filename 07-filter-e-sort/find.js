const data = require("./data");

//Encontre uma carta de acordo com o seu nome
//O find funciona da mesma forma que o filter, só que a busca para após a iteração encontrar o primeiro resultado igual ao pedido no console.

const findCard = (data, cardName) => {
  const cardFound = data.find((card) => card.name === cardName);

  return cardFound;
};

console.log(findCard(data.cards, "Dark Magician"));
