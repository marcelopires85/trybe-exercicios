const data = require("./data");

//Exibir Todas as Cartas com Ataque Maior que 2000 - Usando Método Filter

const getCardsByAtk = (data, atkNumber) =>
  data.filter((card) => card.atk > atkNumber);

console.log(getCardsByAtk(data.cards, 2000));
