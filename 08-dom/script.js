const inputName = document.getElementById("name");
const inputEmail = document.querySelector("#email");
// no querySelector utiliza # para selecionar IDs e . para selecionar classes
const form = document.querySelector("form");
const btnMenosLanchao = document.querySelector(".btn-menos-lanchao");
const qtdLanchao = document.querySelector("#qtd-lanchao");
const btnMaisLanchao = document.querySelector(".btn-mais-lanchao");
const btnMenosLanche = document.querySelector(".btn-menos-lanche");
const qtdLanche = document.querySelector("#qtd-lanche");
const btnMaisLanche = document.querySelector(".btn-mais-lanche");
const btnMenosLanchinho = document.querySelector(".btn-menos-lanchinho");
const qtdLanchinho = document.querySelector("#qtd-lanchinho");
const btnMaisLanchinho = document.querySelector(".btn-mais-lanchinho");
const btnMenosOvo = document.querySelector(".btn-menos-ovo");
const qtdOvo = document.querySelector("#qtd-ovo");
const btnMaisOvo = document.querySelector(".btn-mais-ovo");
const btnMenosAbacaxi = document.querySelector(".btn-menos-abacaxi");
const qtdAbacaxi = document.querySelector("#qtd-abacaxi");
const btnMaisAbacaxi = document.querySelector(".btn-mais-abacaxi");
const batata = document.getElementById("sim");
const comentario = document.querySelector("textarea");
const listaNotaFiscal = document.getElementById("orderList");
const nota = document.querySelector(".ticket");
const numeroPedido = document.getElementById("ticket-number");

//Função para adicionar a quantidade nos botões
//ParseInt converte um dado de uma string para número

const atualizarQuantidade = (btnMenos, btnMais, qtdElementos) => {
  btnMenos.addEventListener("click", () => {
    const quantidade = parseInt(qtdElementos.innerText);
    if (quantidade > 0) {
      qtdElementos.innerText = quantidade - 1;
    }
  });

  btnMais.addEventListener("click", () => {
    qtdElementos.innerText = parseInt(qtdElementos.innerText) + 1;
  });
};

atualizarQuantidade(btnMenosLanchao, btnMaisLanchao, qtdLanchao);
atualizarQuantidade(btnMenosLanche, btnMaisLanche, qtdLanche);
atualizarQuantidade(btnMenosLanchinho, btnMaisLanchinho, qtdLanchinho);
atualizarQuantidade(btnMenosOvo, btnMaisOvo, qtdOvo);
atualizarQuantidade(btnMenosAbacaxi, btnMaisAbacaxi, qtdAbacaxi);

const geraNumeroPedido = () => {
  const numero = Math.ceil(Math.random() * 100);
  numeroPedido.innerText = numero;

  return numero;
};

const criarNotaFiscal = () => {
  listaNotaFiscal.innerHTML = "";

  let orderInfo = {};

  orderInfo.Id = geraNumeroPedido();
  orderInfo.Nome = inputName.value;
  orderInfo.Email = inputEmail.value;

  if (parseInt(qtdLanchao.innerText) > 0)
    orderInfo.Lanchao = qtdLanchao.innerText;
  if (parseInt(qtdLanche.innerText) > 0) orderInfo.Lanche = qtdLanche.innerText;
  if (parseInt(qtdLanchinho.innerText) > 0)
    orderInfo.Lanchinho = qtdLanchinho.innerText;
  if (parseInt(qtdOvo.innerText) > 0) orderInfo.Ovo = qtdOvo.innerText;
  if (parseInt(qtdAbacaxi.innerText) > 0)
    orderInfo.Abacaxi = qtdAbacaxi.innerText;

  const molhos = document.querySelectorAll('input[name="molho"]:checked');
  if (molhos.length > 0) orderInfo.Molhos = molhos.length;

  if (batata.checked === true) orderInfo.Batata = "Sim";

  if (comentario.value !== "") orderInfo.Comentario = comentario.value;

  const itensNotaFiscal = Object.entries(orderInfo);

  let sum = 0;

  itensNotaFiscal.forEach((item) => {
    const newLi = document.createElement("li");
    //cria o elemento
    newLi.innerText = `${item[0]}: ${item[1]}`;
    //popula o espaço que será criado
    listaNotaFiscal.appendChild(newLi);
    //cria as li dinamicamente como filhos no html

    if (item[0] === "Lanchao") sum += parseInt(item[1]) * 20;
    if (item[0] === "Lanche") sum += parseInt(item[1]) * 15;
    if (item[0] === "Lanchinho") sum += parseInt(item[1]) * 10;
    if (item[0] === "Ovo") sum += parseInt(item[1]) * 1.5;
    if (item[0] === "Abacaxi") sum += parseInt(item[1]);
    if (item[0] === "Molhos") sum += molhos.length * 2;
    if (item[0] === "Batata") sum += 2;
  });

  const newH3 = document.createElement("h3");
  newH3.innerText = `TOTAL: R$ ${sum.toFixed(2)}`;
  listaNotaFiscal.appendChild(newH3);

  nota.style.display = "block";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  criarNotaFiscal();
});
