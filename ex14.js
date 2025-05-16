// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número inteiro: "));
let count = 0;
let temp = 2;
let fatorial = 1;

while (isNaN(num) || !Number.isInteger(num)) {
  console.log("Número inválido");
  num = Number(prompt("Digite um número inteiro: "));
}
while (temp > 1) {
  if (num < 2) {
    fatorial = 1;
    temp = fatorial;
  } else {
    temp = num - count;
    count++;
    fatorial = fatorial * temp;
  }
}
console.log(`O fatorial de ${num} é ${fatorial}`);
