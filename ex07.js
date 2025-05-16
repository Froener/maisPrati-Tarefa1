// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let numMacas = Number(prompt("Quantas maças foram compradas: "));
let precoMacas = 0.3;
let valorCompra = 0;

while (isNaN(numMacas) || numMacas < 0) {
  console.log("Número invalido");
  numMacas = prompt("Quantas maças foram compradas: ");
}
if (numMacas >= 12) {
  precoMacas = 0.25;
  valorCompra = Math.floor(numMacas * precoMacas);
  console.log(`O valor total da compra foi de ${valorCompra.toFixed(2)}`);
} else if (numMacas < 12 && numMacas > 0) {
  valorCompra = numMacas * precoMacas;
  console.log(`O valor total da compra foi de ${valorCompra.toFixed(2)}`);
} else {
  return;
}
