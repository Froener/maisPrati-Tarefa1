// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

let item = 0;
let check = true;

do {
  console.log("Escolha o item:");
  console.log("1: Hamburguer");
  console.log("2: Batata Frita");
  console.log("3: Refrigerante");
  item = Number(prompt("Seua escolha: "));
  switch (item) {
    case 1:
      check = true;
      console.log("Hamburguer selecionado");
      break;
    case 2:
      check = true;
      console.log("Batata Frita selecionada");
      break;
    case 3:
      check = true;
      console.log("Refrigerante selecionado");
      break;
    default:
      console.log("Você não escolheu opções válidas");
      check = false;
      break;
  }
} while (!check);
