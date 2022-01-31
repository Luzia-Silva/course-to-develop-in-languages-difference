//Lista de argumentos
console.log(process.argv)//ele é um array 

//armazenando os vetores do process
const firstname = process.argv[2]
const lastname = process.argv[3]

console.log('seu nome é ', process.argv[2] + process.argv[3])//opção 1 
console.log('seu nome é ', firstname + lastname)//opção 2
