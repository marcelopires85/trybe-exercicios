//Objetos

//Informações Macdonalds - Descrição com várias constantes

// const bigMac = 26.90;
// const bigTasty = 39.90;
// const mcFritas = 11.90;
// const topSunday = 13.90;
// const isDelicious = true;
// const city = 'São Paulo';
// const state = 'SP';
// const unitName = 'Shopping Recife';

//Criação com objetos do exemplo acima
//Para navegar com os objetos no console via propriedades do objeto, usar os pontos ou então [' ']
//Além das propriedades existe as chaves (Object.keys) e os valores (Object.values). Retornam como um array com as informações
//A também outra propriedade chamada entradas (Object.entries), ele retorna as chaves e os valores como forma de array (um array com arrays contendo as infomações)

const Macdonalds = {
  bigMac: 26.9,
  BigTasty: 39.9,
  mcFritas: 11.9,
  topSunday: 13.9,
  isDelicious: true,
  adress: {
    city: "São Paulo",
    state: "SP",
    unitName: "Shopping Recife",
  },
};

// console.log(Macdonalds.mcFritas);
// console.log(Object.keys(Macdonalds));
// console.log(Object.values(Macdonalds));
// console.log(Object.entries(Macdonalds));

//Exercício 01

const cardapio = require("./data");

const getMacInfo = () => {
  const report = {
    sanduiches: 0,
    acompanhamentos: 0,
    sobremesas: 0,
    bebidas: 0,
  };
  const keys = Object.keys(cardapio);

  for (let index = 0; index < keys.length; index += 1) {
    report[keys[index]] = cardapio[keys[index]].length;
  }
  return report;
};
//console.log(getMacInfo());

module.exports = {
  getMacInfo,
};
