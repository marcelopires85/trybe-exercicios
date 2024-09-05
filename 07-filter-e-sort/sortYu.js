const data = require("./data");
// Pegue todas as cartas que possuem ataque e coloque em ordem rescente por ataque. Mostre da seguinte forma:

/*
{name: 'D.D Crow', atk: 100},
{name: 'Eka the Flame Buddy', atk: 1500},
...
*/

const sortCardsByAtk = (data) =>
  data
    .filter((card) => card.atk !== undefined)
    .map(({ name, atk }) => ({ name, atk }))
    .sort((a, b) => a.atk - b.atk);

console.log(sortCardsByAtk(data.cards));
