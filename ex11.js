// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();
let soma = 0;

for (i = 1; i < 6; i++) {
  let num = Number(prompt(`Digite o ${i}º valor: `));
  while (isNaN(num)) {
    console.log("O valor deve ser um número.");
    num = prompt(`Digite o ${i}º valor: `);
  }
  soma = soma + num;
}
console.log(`A soma dos 5 valores é ${soma}`);
