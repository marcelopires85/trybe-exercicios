const data = require("./data.js");

// //Método sem usar map

// const newArray = [];

// for (let index = 0; index < data.types.length; index += 1) {
//   newArray.push(data.types[index].name);
// }
// console.log(newArray);

//Método acima usando "map" - O map sempre retorna um array transformado

const newArrayMap = data.types.map((type) => {
  return type.name;
});

console.log(newArrayMap);
