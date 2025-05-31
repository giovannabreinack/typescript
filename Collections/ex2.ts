import leia from 'readline-sync'

// Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros.
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array,
// exiba na tela a posição deste número na Collection. 
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

const inteiros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let numeroDigitado: number;
let contador;
let encontrou = false;

numeroDigitado = leia.questionInt("Digite o numero que você deseja encontrar: ");

for(contador = 0; contador < inteiros.length; contador++){
    if (numeroDigitado === inteiros[contador]){
        let encontrado = inteiros.indexOf(numeroDigitado);
        console.log("O numero " + numeroDigitado + " esta localizado na posicao: " + encontrado);
        encontrou = true;
        break;
}
}

if(!encontrou){
    console.log("O numero " + numeroDigitado + " não foi encontrado.")
}