const data = require("./data");

//Adicionar uma propriedade para cada elemento

const addProperty = (data, propName, propValue) => {
  const arrayNewProp = data.map((card) => {
    const id = card.id;
    const name = card.name;

    return {
      id: id,
      name: name,
      [propName]: propValue,
    };
  });
  return arrayNewProp;
};

console.log(addProperty(data.cards, "game", "Yu-Gi-Oh"));

//Mesma função acima só que escrita de forma reduzida e os ... para espalhar o conteúdo do objeto

const addProperty2 = (data, propName, propValue) =>
  data.map((card) => ({ ...card, [propName]: propValue }));

console.log(addProperty2(data.cards, "trybe", "Resumiu map"));

//Criar uma string para cada ataque e defesa

const getCardAtkAndDef = (cards) => {
  return cards.map((card) => {
    if (card.atk !== undefined && card.def !== undefined) {
      return `A carta ${card.name} possui o ataque ${card.atk} e defesa de ${card.def}.`;
    }

    return `Esta carta não possui ataque e/ou defesa`;
  });
};

console.log(getCardAtkAndDef(data.cards));
