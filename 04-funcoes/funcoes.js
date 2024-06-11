//Exemplo 1 - OP1 - Descritivo
const sum = 12 + 5;

console.log(sum);

//Função da operação 1 - O console.log pode iniciar antes da função porque a presença da palavra function puxa o log para cima

function sum1(num1, num2) {
  return num1 + num2;
}

console.log(sum1(8, 3));

//Exemplo 2 - OP2 - Descritivo

const peopleName = "Gandalf";

console.log(`Olá ${peopleName}, tudo bem?`);

//Função da operação 2 - Arrow Functions o console.log precisa iniciar depois da função por causa da ausência da palavra function. Também pode ser omitida a palavra return.

const peopleName1 = "Galdalf";
const helloPeople = (name) => `Olá ${name}, tudo bem?`;

console.log(helloPeople("Marcelo"));
console.log(helloPeople("Maira"));
console.log(helloPeople("Eliphas"));

//Crie uma função que retorne o maior e o menor número de um array

//arrow function abaixo

//const maiorMenorNumero = (array) => {}
function maiorMenorNumero(array) {
  let maiorNumero = array[0];
  let menorNumero = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    } else if (array[index] < menorNumero) {
      menorNumero = array[index];
    }
  }
  return `Menor: ${menorNumero}
Maior: ${maiorNumero}`;
}

console.log(maiorMenorNumero([1, 2, 3, 8, 15, -5, 0, 21]));
console.log(maiorMenorNumero([1, 18, 32, 85, 151, -57, 0, 213, 25, 35]));

//Refatoramento do código da Mega-Sena utilizando Função

const lotteryNumbers = [];
const firstGame = [4, 8, 15, 16, 23, 42];

// Sorteio dos números
const gerarNumerosLoteria = (quantidade, numeroMaximo, array) => {
  for (let index = 0; index < quantidade; index += 1) {
    let randomNumber = Math.ceil(Math.random() * numeroMaximo);
    if (array.includes(randomNumber)) {
      index -= 1;
    } else {
      array.push(randomNumber);
    }
  }
};
gerarNumerosLoteria(18, 99, lotteryNumbers);

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

//Exercícios Saldo em Conta

//Exercício 1

let balance = 100;

function sumBalance(value) {
  return value + balance;
}

function subBalance(value) {
  return balance - value;
}

function multBalance(value) {
  return value * balance;
}

function divBalance(value) {
  return balance / value;
}

console.log("Saldo em conta é:" + sumBalance(100));
console.log("Saldo em conta é:" + subBalance(60));
console.log("Saldo em conta é:" + multBalance(10));
console.log("Saldo em conta é:" + divBalance(10));

//Exercício 2 - Trybebank
