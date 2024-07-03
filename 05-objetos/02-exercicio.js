const { getMacInfo } = require("./01-exercicio");
//O VSC cria automaticamente o arquivo acima por conta da exportação da Função do exercício 01 com o getMacInfo
const cardapio = require("./data");

const totalItens = () => {
  const itens = getMacInfo();

  const values = Object.values(itens);

  sum = 0;
  for (let index = 0; index < values.length; index += 1) {
    sum += values[index];
  }
  return sum;
  //return values será igual a 3,5,3,2 = 13
};
console.log(totalItens());
