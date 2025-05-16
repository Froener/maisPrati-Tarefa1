// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o peso para o IMC: "));

while (isNaN(peso) || peso < 0) {
  peso = prompt("Digite um peso válido: ");
}

let altura = Number(prompt("Digite a altura em metros para o IMC: "));

while (isNaN(altura) || altura < 0) {
  altura = prompt("Digite uma altura válida: ");
}

const imc = peso / (altura * altura);
console.log(`IMC igual a: ${imc.toFixed(2)}`);
if (imc < 1) {
  console.log("Verifique se a altura está em metros");
} else if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
