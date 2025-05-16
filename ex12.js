// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

const prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número inteiro de 1 a 10: "));
let tabuada = 0;
while (!Number.isInteger(num) || num > 10 || num < 1) {
  console.log("Número invalido");
  num = Number(prompt("Digite um número inteiro de 1 a 10: "));
}
console.log(`Tabuado do número ${num}:`);
for (i = 1; i < 11; i++) {
  tabuada = num * i;
  console.log(`${i}. ${num}x${i} = ${tabuada}`);
}
