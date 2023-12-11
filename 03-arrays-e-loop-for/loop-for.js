//Exercícios de Array e Loop

const numerosLoteria = [2, 6, 8, 19, 35, 52];
//                      0  1  2   3   4   5

for (let index = 0; index < numerosLoteria.length; index += 1) {
  //console.log("Número " + index + " = " + numerosLoteria[index]); Método descritivo
  console.log(`Número ${index} = ${numerosLoteria[index]}`); //String Literal
}

const lotteryNumbers = [];
const firstGame = [4, 8, 15, 16, 23, 42];

// Sorteio dos números
for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.ceil(Math.random() * 60);
  if (lotteryNumbers.includes(randomNumber)) {
    index -= 1;
  } else {
    lotteryNumbers.push(randomNumber);
  }
}

// Comparação do sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for (
  let indexLottery = 0;
  indexLottery < lotteryNumbers.length;
  indexLottery += 1
) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
      numberOfHits += 1;
      hits.push(lotteryNumbers[indexLottery]);
    }
  }
}

// Quantidade de acertos
console.log(`Números sorteados: ${lotteryNumbers}`);
console.log(`Jogo: ${firstGame}`);
console.log(`Quantidade de acertos: ${numberOfHits}`);
console.log(`Números acertados: ${hits}`);
