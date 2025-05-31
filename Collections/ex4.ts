import leia from 'readline-sync'

// Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja 
// encontrado na Coction Set, exiba na tela a mensagem: O Número NN foi encontrado! 
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

const setInteiros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numeroDigitado: number;
let encontrou = false;
let posicao = 0;

numeroDigitado = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for(const item of setInteiros){
    if(item === numeroDigitado){
        console.log("O numero " + numeroDigitado + " foi encontrado na posicao " + posicao);
        encontrou = true;
        break;
    }
    posicao++;
}

if(!encontrou){
    console.log("O numero " + numeroDigitado + " nao foi encontrado!");
}