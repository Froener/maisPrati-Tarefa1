// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

console.log("Digite 3 valores para os lados de um triângulo");
let ladoA = Number(prompt("Digite o comprimento do lado A: "));

while (isNaN(ladoA) || ladoA < 0) {
  ladoA = prompt("Digite um comprimento válido para o lado A: ");
}

let ladoB = Number(prompt("Digite o comprimento do lado B: "));
while (isNaN(ladoB) || ladoB < 0) {
  ladoB = prompt("Digite um comprimento válido para o lado B: ");
}

let ladoC = Number(prompt("Digite o comprimento do lado C: "));
while (isNaN(ladoC) || ladoC < 0) {
  ladoC = prompt("Digite um comprimento válido para o lado C: ");
}

const somaAB = ladoA + ladoB;
const somaAC = ladoA + ladoC;
const somaBC = ladoB + ladoC;

function isTriangulo(ladoA, ladoB, ladoC) {
  const somaAB = ladoA + ladoB;
  const somaAC = ladoA + ladoC;
  const somaBC = ladoB + ladoC;
  const check = ladoA < somaBC && ladoB < somaAC && ladoC < somaAB;

  if (!check) {
    return "Não é um triângulo";
  } else if ((ladoA === ladoB) === ladoC) {
    return "equilátero";
  } else if (ladoA != ladoB && ladoB != ladoC) {
    return "escaleno";
  } else {
    ("isósceles");
  }
}
console.log(`O triângulo é ${isTriangulo(ladoA, ladoB, ladoC)}`);
