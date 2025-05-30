import leia from 'readline-sync'
import { Queue } from "./Queue";
const fila = new Queue<string>();
let opcao;
let nome: string;
do{
console.log("******************************" + "\n" + "1 - Adicionar Cliente na Fila" + "\n" + "2 - Listar todos os Clientes"
    + "\n" + "3 - Retirar Cliente da Fila" + "\n" + "0 - Sair" + "\n" + "******************************"
)
opcao = leia.questionInt("Digite uma opcao:")
switch(opcao){
    case 0:
        console.log("Ate logo!");
        break;
    case 1:
        nome = leia.question("Digite o nome: ");
        fila.enqueue(nome);
        console.log("Cliente Adicionado!")
        break;
    case 2:
        const lista = fila.printQueue()
        console.log(lista);
        break;
    case 3:
        const remover = fila.dequeue();
        break;
     default:
        console.log("Opção invalida")
}
} while (opcao != 0);