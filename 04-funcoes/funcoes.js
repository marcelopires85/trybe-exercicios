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
