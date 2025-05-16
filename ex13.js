// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let numeros = [];
let value;

while (true) {
  value = prompt("Digite um número decimal (0 para parar): ");
  value.trim();

  const num = Number(value);

  if (!value || isNaN(num)) {
    console.log("Valor inválido, digite um número decimal: ");
    continue;
  }

  if (num === 0) {
    break;
  }

  numeros.push(num);
}

const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
const media = soma / numeros.length;
console.log(`Media dos números: ${media.toFixed(3)}`);
