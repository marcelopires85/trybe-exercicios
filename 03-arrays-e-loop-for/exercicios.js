// //Exercícios 1

// const amazonList = [
//   "Escova",
//   "Pasta de Dente",
//   "Detergente",
//   "Sabonete Phebo",
//   "Molho de Tomate",
// ];

// for (let index = 0; index < amazonList.length; index += 1) {
//   const itemCorrente = amazonList[index];
//   console.log(itemCorrente);
// }

// //Exercício Soma

// let numeros = [2, 3, 5, 7, 9, 13];
// let adicao = 0;

// for (let i = 0; i < numeros.length; i++) {
//   adicao += numeros[i];
// }
// console.log(adicao);
//console.log("A adicao é:", adicao)

// //Exercícios 2 - Meus códigos

// //Questão 1
// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let total = 0;
// let media = 0;
// let numeroMaior = numbers[0];

// //Questão 2
// for (let indice = 0; indice < numbers.length; indice++) {
//   total += numbers[indice];
//   media = numbers[indice] / 10;
// }

// //Questão 3

// media = media / numbers.length;

// if (media > 20) {
//   console.log("O valor da média aritmética é maior que 20");
// } else {
//   console.log("O valor da média aritmética é menor ou igual a 20");
// }

// //Questão 4
// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > numeroMaior) {
//     numeroMaior = numbers[index];
//   }
// }

// //Questão 5 e 6

// console.log(numbers);
// console.log("A soma é:", total);
// console.log("A média é:", media);
// console.log(numeroMaior);

// //Exercício 2 feito com Reduce

// // let numeros = [1, 2, 3, 4, 5];
// // let soma = numeros.reduce(
// //   (acumulador, valorAtual) => acumulador + valorAtual,
// //   0
// // );

// // console.log("A soma dos elementos é:", soma)

//Códigos dos Exercício - Questões 1 a 6

//01
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//02
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log(result);

//03
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;
let higherNumber = numbers[0];

console.log(average);

//04
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}
//05

// Inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar o for com index = 1.

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);

//06 - Resultado não identificado como o esperado

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log(result);
}
