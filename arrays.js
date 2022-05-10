//Array <b>no código</b>
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0 
console.log("Primeiro elementos do vetor -> " + pilotos[0])//Senna
console.log("Segundo elemento do vetor -> " + pilotos[3])//Hamilton

// acessar o tamanho do array
console.log("Acessar o tamanho do vetor -> " + pilotos.length)//Senna

//iterável 
for(let piloto of pilotos){
  console.log(piloto)
}
console.log("Finished for of!")

// adicionar elementos
pilotos.push('Alonso')
console.log("Adicionando elemento no vetor -> " + pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log("Encontrando elemento no vetor -> " + senna)

//Deletar um elemento
//array na posição 1  e 1 elemento
pilotos.slice(0, 1)
console.log("Deletar um elemento no vetor na posição 1 -> " + pilotos)