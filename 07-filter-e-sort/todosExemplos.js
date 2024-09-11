const data = require("./data");

//Pega todas as cartas de um determinado tipo
// os ... servem para passar uma quantidade dinâmica de itens no cslog "1, 2, 3"

const getCardsByType = (...cardType) => {
  return data.cards
    .filter(({ typeId }) => cardType.find((type) => type === typeId))
    .map(({ typeId, name }) => ({ typeId, name }))
    .sort((a, b) => a.typeId - b.typeId);
};

console.log(getCardsByType(1, 2, 3));
