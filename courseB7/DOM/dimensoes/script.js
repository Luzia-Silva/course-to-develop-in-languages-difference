//O offsetHeighté uma medida em pixels da altura CSS do elemento,
// incluindo quaisquer bordas, preenchimento e barras de rolagem horizontais (se renderizadas). 
const offset = document.querySelector('.texto').offsetHeight
console.log('Valor do offsetHeight:' + offset)

//A Element.clientWidthpropriedade é zero para elementos inline e elementos sem CSS; 
//caso contrário, é a largura interna de um elemento em pixels. Inclui preenchimento,
//mas exclui bordas, margens e barras de rolagem verticais (se houver).
const client = document.querySelector('.texto').clientHeight
console.log('Valor do clientHeight:' + client)

//A Element.scrollHeightpropriedade somente leitura é uma medida da
// altura do conteúdo de um elemento, incluindo conteúdo não visível 
//na tela devido ao estouro.
const scroll = document.querySelector('.texto').scrollHeight
console.log('Valor do scrollHeight:' + scroll)

//Para saber o scroll de um elemento basta scrolltop, scrollleft .... 
const scrollElement = document.querySelector('.texto').scrollTop
console.log("O scroll do elemento texto está em: " + scrollElement)
//Esse comando move o scroll do elemento
document.querySelector('.texto').scrollTo(0,15)

//Para saber o scroll da tela basta dar scrollY, scrollX ...
const scrollWindow = document.querySelector('.texto').scrollY
console.log("O scroll da tela é : " + scrollWindow)
//Esse comando move o scroll da tela
window.scrollTo(0,15)

  function scrollPage(){
      window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }
function scrollWindows (){
  if(window.scrollY === 0){
    document.querySelector('.button-red').style.display = 'none'
  }
  else{
     document.querySelector('.button-red').style.display = 'block'
  }
}
window.addEventListener('scroll', scrollWindows)