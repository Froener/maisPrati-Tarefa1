// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let valor = [];
let valor1 = Number(prompt("Digite um número para o valor 1: "));
valor.push(valor1);
while (isNaN(valor1)) {
  console.log("O valor 1 deve ser um número.");
  valor1 = prompt("Digite um número para o valor 1: ");
}

let valor2 = Number(prompt("Digite um número diferente para o valor 2: "));
valor.push(valor2);
while (isNaN(valor2) || valor2 === valor1) {
  console.log("O valor 2 deve ser um número diferente do valor 1");
  valor2 = prompt("Digite um número para o valor 2: ");
}

console.log("Os valores em ordem crescente:");

n = valor.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (valor[j] > valor[j + 1]) {
      const temp = valor[j];
      valor[j] = valor[j + 1];
      valor[j + 1] = temp;
    }
  }
}
for (let i = 0; i < n; i++) {
  console.log(valor[i]);
}
