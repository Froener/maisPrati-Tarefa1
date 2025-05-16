// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade: "));

while (isNaN(idade) || idade < 0) {
  idade = prompt("Digite uma idade válida: ");
}

if (idade < 12) {
  console.log("A pessoa é criança");
} else if (idade >= 12 && idade < 18) {
  console.log("A pessoa é adolescente");
} else if (idade >= 18 && idade < 65) {
  console.log("A pessoa é adulta");
} else {
  console.log("A pessoa é idosa");
}
