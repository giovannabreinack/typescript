import leia from 'readline-sync'
// Escreva um programa para criar uma Collection Array de Objetos do tipo string.
//  O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e
//   deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// ● Mostre na tela todas as cores adicionadas.
// ● Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

const cores: string[] = [];
let coresDigitadas;

for(let contador = 1; contador <= 5; contador++){
   coresDigitadas = leia.question("Digite 5 cores: ");
   cores.push(coresDigitadas)
}

console.log("Cores Digitadas: ", cores);
cores.sort();
console.log("Cores ordenadas: ", cores);

