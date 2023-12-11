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

//Forma resumida e descritiva de resolver o mesmo problema acima

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

//Definir três lados de um triângulo - Três variáveis, uso de "E" e "Exatamente igual a"

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

//Exercício [5]

//Switch Xadrez - Switch/Case

let xadrez = 4;
let jogada;

switch (xadrez) {
  case 1:
    xadrez = "Uma casa reta";
    break;
  case 2:
    xadrez = "Andar na lateral";
    break;
  case 3:
    xadrez = "Andar na diagonal";
    break;
  case 4:
    xadrez = "Andar em L";
    break;
  case 5:
    xadrez = "Andar em qualquer direção";
    break;
  case 6:
    xadrez = "Andar uma casa em qualquer direção";
}

console.log(xadrez);

//Código do exercício da Trybe

let chessPiece = "bispo";

switch (chessPiece.toLowerCase()) {
  case "rei":
    console.log("Rei -> Uma casa para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo -> Diagonais.");
    break;
  case "rainha":
    console.log("Rainha -> Diagonal, horizontal e vertical.");
    break;
  case "cavalo":
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
  case "peão":
    console.log(
      "Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas."
    );
    break;
  default:
    console.log("Erro, peça inválida!");
}

//Exercício [6] - Calculadora de Impostos - If/Else usando duas variáveis

let alicotaInss;
let aliotaIR;

let salarioBruto = 4000;

if (salarioBruto <= 1556.94) {
  alicotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  alicotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  alicotaInss = salarioBruto * 0.11;
} else {
  alicotaInss = 570.88;
}

let salarioLiquido = salarioBruto - alicotaInss;

if (salarioLiquido <= 1903.98) {
  aliotaIR = 0;
} else if (salarioLiquido <= 2826.65) {
  aliotaIR = salarioLiquido * 0.075 - 142.8;
} else if (salarioLiquido <= 3751.05) {
  aliotaIR = salarioLiquido * 0.15 - 354.8;
} else if (salarioLiquido <= 4664.68) {
  aliotaIR = salarioLiquido * 0.225 - 636.13;
} else {
  aliotaIR = salarioLiquido * 0.275 - 869.36;
}

console.log("Salário: R$" + (salarioLiquido - aliotaIR));
