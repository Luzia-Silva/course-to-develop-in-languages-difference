import {Cliente} from './Cliente.js';
import { contaCorrente } from './ContaCorrente.js';
//Cliente 
// a variavel clienteOne está armazenando o as propriedades no novo cliente
const clienteOne = new Cliente();
const clienteTwo = new Cliente();//você está inserindo novo cliente com new 
//o new ele executa a classe e insere valores nela 
clienteOne.nome = "Luzia";
clienteOne.cpf = 1234556;

clienteTwo.nome = 'Josimar';
clienteTwo.cpf = 565656;
//Para acessar os atributos  basta usar o ponto, assim você tem acesso aos atributos da classe

//Informações do Cliente 1
const contaCorrenteLuzia = new contaCorrente();
contaCorrenteLuzia.agencia = 1001;
contaCorrenteLuzia.Cliente = clienteOne;

const contaCorrenteJosimar = new contaCorrente();
contaCorrenteJosimar.agencia = 66666;
contaCorrenteJosimar._saldo = 0.5;
// //Realizar deposito
// contaCorrenteLuzia.depositar(300)

// //Valor sacado 
// //operação de subtração de valorSacado com valor da contaCorrente
// const valorSacado = contaCorrenteLuzia.sacar(100)
// console.log(valorSacado)
//Exibir minha conta corrente
console.log(contaCorrenteLuzia)