import {Cliente} from './Cliente.js';
import { contaCorrente } from './ContaCorrente.js';

//Cliente 
// a variavel clienteOne está armazenando o as propriedades no novo cliente
//exemplo utilizando com constructor
const clienteOne = new Cliente("Luzia",1234556);
const clienteTwo = new Cliente('Josimar',565656);//você está inserindo novo cliente com new
//o new ele executa a classe e insere valores nela
//Para acessar os atributos  basta usar o ponto, assim você tem acesso aos atributos da classe

//Informações da conta corrente cliente 1
const contaCorrenteLuzia = new contaCorrente(1001, clienteOne);

//Informações da conta corrente cliente 2
const contaCorrenteJosi = new contaCorrente(66666, clienteTwo);

//Exibir minha conta corrente e cliente
console.log("Cliente:", clienteOne)
console.log("Conta corrente:", contaCorrenteLuzia)
console.log("Quantidade de contas:", contaCorrente.numeroDeContas)
//Null and undefined
//null ->  quando o valor não significa nada e está nulo
// undefined -> quando o usuário esqueceu de colocar um valor ,então fica indefinido