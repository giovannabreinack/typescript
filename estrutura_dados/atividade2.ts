import { Stack } from "./Stack";
import leia from 'readline-sync'

const pilha = new Stack<string>();
let opcao;
let nomeLivro: string;

do{
console.log("******************************" + "\n" + "1 - Adicionar Livro na Pilha" + "\n" + "2 - Listar todos os Livros"
    + "\n" + "3 - Retirar Livro da Pilha" + "\n" + "0 - Sair" + "\n" + "******************************"
)
opcao = leia.questionInt("Digite uma opcao:")
switch(opcao){
    case 0:
        console.log("Ate logo!");
        break;
    case 1:
        nomeLivro = leia.question("Digite o nome do livro: ");
        pilha.push(nomeLivro);
        console.log("Livro Adicionado!")
        break;
    case 2:
        const lista = pilha.printStack()
        console.log(lista);
        break;
    case 3:
        const remover = pilha.pop();
        break;
    default:
        console.log("Opção invalida")
}
} while (opcao != 0);