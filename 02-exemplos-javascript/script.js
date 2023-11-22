//Exercício [1]

//Adição

const num1 = 10;
const num2 = 5;

const adicao = num1 + num2;

console.log(adicao);

//Subtração

const subtracao = num1 - num2;

console.log(subtracao);

//Multiplicação

const multiplicacao = num1 * num2;

console.log(multiplicacao);

//Divisão

const divisao = num1 / num2;

console.log(divisao);

//Módulo

const modulo = num1 % num2;

console.log(modulo);

//Forma resumida de resolver o mesmo problema acima

let num01 = 10;
let num02 = 5;

console.log("Soma: " + (num01 + num02));
console.log("Subtração: " + (num01 - num02));
console.log("Multiplicação: " + num01 * num02);
console.log("Divisão: " + num01 / num02);
console.log("Módulo: " + (num01 % num02));

//Exercício [2, 3, 4]

//Maior de dois números

let num001 = 20;
let num002 = 21;

if (num001 > num002) {
  console.log(num001 + " é maior que " + num002);
} else if (num001 === num002) {
  console.log("Os números são iguais.");
} else {
  console.log(num002 + " é maior que " + num001);
}

//Maior de três números

let num0001 = 6;
let num0002 = 4;
let num0003 = 2;

if (num0001 > num0002 && num1 > num0003) {
  console.log("O maior número é: " + num0001);
} else if (num0002 > num0001 && num0002 > num0003) {
  console.log("O maior número é: " + num0002);
} else if (num0003 > num0001 && num0003 > num0002) {
  console.log("O maior número é: " + num0003);
} else {
  console.log("IIHH, tem números iguais!");
}

//Definir três lados de um triângulo

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives =
  degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: ângulo inválido!");
}
