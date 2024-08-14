const data = require("./data");

//Exiba todas as cartas de um determinado tipo da seguinte forma:

/*
{ typeId: 1, name: 'Blue-Eyes White Dragon' },
  { typeId: 1, name: 'Red-Eyes Black Dragon' },
  { typeId: 1, name: 'Dragon Queen of Tragic Endings' }
*/

// const getCardsByType = (data, cardType) => {
//   const filterResult = data.filter((card) => card.typeId === cardType);
//   const mapResult = filterResult.map((card) => ({
//     typeId: card.typeId,
//     name: card.name,
//   }));

//   return mapResult;
// };

// console.log(getCardsByType(data.cards, 1));

//Forma resumida do processo acima

const getCardsByType = (data, cardType) =>
  data
    .filter(({ typeId }) => typeId === cardType)
    .map(({ typeId, name }) => ({ typeId, name }));

console.log(getCardsByType(data.cards, 3));
