//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

function parImpar(numero) {
  if (num === 0) {
    return "par";
  } else if (num % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
let num = Number(prompt("Digite um número: "));

while (isNaN(num) || !Number.isInteger(num)) {
  num = Number(prompt("Digite apenas números inteiros: "));
}

console.log(`O número é ${parImpar(num)}`);
