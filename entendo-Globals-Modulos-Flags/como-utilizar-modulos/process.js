//Lista de argumentos
console.log(process.argv)//ele é um array 
//A process.argvpropriedade retorna uma matriz contendo os argumentos
// de linha de comando passados ​​quando o processo Node.js foi iniciado.

//armazenando os vetores do process
const firstname = process.argv[2]
const lastname = process.argv[3]

console.log('seu nome é ', process.argv[2] + process.argv[3])//opção 1 
console.log('seu nome é ', firstname + lastname)//opção 2
