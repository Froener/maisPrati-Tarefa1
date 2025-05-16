// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fiboNum = [0, 1];
n = 10;

for (i = 2; i < n; i++) {
  fiboNum[i] = fiboNum[i - 2] + fiboNum[i - 1];
}
console.log("Primeiros 10 números da sequência de Fibonacci");
for (i = 1; i <= n; i++) {
  console.log(`F[${i}]. ${fiboNum[i]}`);
}
