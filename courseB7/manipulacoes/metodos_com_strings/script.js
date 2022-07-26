
let nome = 'Luzia Gabriela Abreu da Silva Santos'

// o length faz a contagem dos elementos
console.log('Quantidade caracteres --> ' + nome.length)

// o indexOf retorna  a posição inicial da string encontrada
//Lembre que a contagem inicia no numero 0 
// case sensitive não faz diferenciação dos caracteres maisculos e minusculos
console.log('Quantidade caracteres --> ' + nome.indexOf('Silva'))

//usada geralmente para saber se a palavara  está presente no texto
//exemplo
if(nome.indexOf('Silva') != -1){ 
  //-1  significa que a palavra procurada não foi encontrada
  console.log('você tem silva, então é pobre!')
}else{
  console.log('Do you no pobre!')
}

//o slice ele pega os pedaços do texto
//é passado 2 parametros onde o primeiro é onde começa a contagem
//e o segundo onde ele corta o pedaço  
console.log('O slice cortou isso ' + nome.slice(0,5))
//você pode também fazer com numeros negativos também, só que eles começaram no final
console.log('O slice cortou isso ' + nome.slice(-15,-6))

//subtring ele começa de modo padrão com números positivos.
 console.log('O substring cortou isso ' + nome.substring(0,5))

 //substr ->  Você coloca a posição inicial e coloca a quantidade caracteres que você
 //quer pegar 
console.log('O substr cortou isso ' + nome.substr(0,15))

//replace ->  ele substitui uma parte de string por outro texto
console.log('replace ->  ele substitui uma parte de string por outro texto: ' + nome.replace('Luzia', 'Sabrina'))

//toUppercase -> deixa as fontes todas maisculas
console.log('toUppercase -> deixa as fontes todas maisculas:' + nome.toUpperCase())

//toLowerCase-> deixa as fontes todas mainusculas
console.log('toLowercase -> deixa as fontes todas maisculas:' + nome.toLowerCase())

//trim ->  ele remove os espaços das strings
console.log('trim ->  ele remove os espaços das strings' + nome.trim())

//charAt ->  ele coleta os valores da posição pedida
console.log('charAt ->  ele coleta os valores da posição pedida' + nome.charAt(1))
// mas você pode fazer dessa forma também
console.log('charAt ->  ele coleta os valores da posição pedida' + nome[1])

//split significa cortar, então ele corta e insere em um array
const spaceSplit = nome.split(' ')
console.log("Olá " + spaceSplit[0])
