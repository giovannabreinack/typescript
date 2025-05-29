import leia from 'readline-sync'
// Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros 
// não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
// ● Mostre na tela todos os elementos da Collection Set.

let valoresInteiros: number;
const setValoresInteiros: Set<number> = new Set<number>

for (let contador = 1; contador <= 10; contador++){
    valoresInteiros = leia.questionInt("Digite 10 numeros: ");
    setValoresInteiros.add(valoresInteiros);
}

console.log("Numero digitados: ", setValoresInteiros);