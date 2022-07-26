
//<--------- AULA 1 -------->

const lista  = ['Ovo', 'Farinha', 'Corante', 'Massa']
const lista2  = ['Chapeu', 'balão', 'Convidados', 'Musica']

//toString() -> transforma em uma string os itens do array separados por vírgula
console.log(lista.toString())

//join() -> Ele pega o array e transforma em string e você pode colocar qual o tipo de item divisor
// você quer que apareça no texto
console.log(lista.join(' - '))

//indexOf ->  procura um item especifico no array e é retornada a posição
//Caso apareça -1 significa que o item não foi encontrado
console.log(lista.indexOf('Corante'))

//shift() -> remove o primeiro item do array
console.log(lista.shift() + ' => ' + lista)

//pop() -> remove o ultimo item do array
console.log(lista.pop() + ' => ' + lista)

//push -> Adiciona um novo item no array
console.log(lista.push('Fermento') + ' => ' + lista)

//acessando arrays
lista[0] = 'Ovos'
lista[3] = 'Açucar'

// Ele altera o valor do item nessa posição 
//ou insere um valor na posição pedida que não está preenchida

//exemplo
console.log(lista)

//uma forma inteligente, mas que pode ser considerada gambiarra é fazer dessa forma
lista[  lista.length ] = 'Chocolate' 
//porque o length pega o tamanho do array e sempre será a última posição

//<--------- AULA 2 -------->

//splice ->  ele remove um os elementos do array
// os parametros são 'index' + 'quantidade item'  
console.log(lista.splice(0,1)) //index => 0 e somente 1 item
//exemplo
console.log(lista)

//Concat ->  realiza a concatenação de dois arrays
const concArrays = lista.concat(lista2)
console.log(concArrays)

//sort ->  ordena o array em ordem alfabetica
console.log(lista.sort())

//reverse -> ele inverte a ordem que os itens estão no array
console.log(lista.reverse())
// Importante ele não faz a ordem descrecente dos itens alfabeticamente 
// --> ele só inverte a ordem dos arrays 

//<--------- AULA 3 -------->
const number = [10,45,5,40,8,20,4,3]

//map => ele vai rodar em todos os itens do array e mapea-los
const map = number.map((item)=>{
    return item * 2
})

//exemplo
console.log(map)

//filter => ele roda uma função de filtra e retorna true ou false
//Ele retorna os itens com true  e false não retorna os valores

let filter = number.filter((item)=>{
    if(item < 2){
      return true
    }else {
      return false
    }
})
 console.log('filter: ' , filter)

 //every =>Todos os números precisam ser igual a sentença no if para ser true
 let every = number.every((item)=>{
    if(item > 2){
      return true
    }else {
      return false
    }
})
 console.log('every: ' , every)

  //every =>Somente um números precisa ser igual a sentença no if para ser true
 let some = number.some((item)=>{
    if(item == 3){
      return true
    }else {
      return false
    }
})
 console.log('some: ' , some)

 
//<--------- AULA 4 -------->

//find =>  ele retorna o primeiro item que satisfaça o que você procura
//Sempre será o PRIMEIRO ITEM  
 let find = number.find((item)=>{
    return (item == 4) ? true : false //true -> retorna o primeiro item
    //false => retorna undefined
})
 console.log('find: ' , find)

 //findIndex =>  retorna a posição do primeiro item no array assim encontrado
//Sempre será o PRIMEIRO ITEM  e a sua posição
 let findIndex = number.findIndex((item)=>{
    return (item == 0) ? true : false //true -> retorna a posicção do primeiro item encontrado
    //false => retorna -1 quando não encontrado
})
 console.log('findIndex: ' , findIndex)