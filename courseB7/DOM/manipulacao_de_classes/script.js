//O JAVASCRIPT TRABALHA COM AS PROPRIEDADES
function verde(){
    limpar()
    //classlist retorna o objeto dom que espera uma classe
    document.querySelector('#exemplo').classList.add('green')
}
function vermelho(){
    limpar()
    document.querySelector('#exemplo').classList.add('red')
}
function azul(){
    limpar()
    document.querySelector('#exemplo').classList.add('blue')
}
function limpar(){
    //comando que remove a classe
    document.querySelector('#exemplo').classList.remove('blue')
    document.querySelector('#exemplo').classList.remove('red')
    document.querySelector('#exemplo').classList.remove('green')
}

function trocar(){
    //Para verificar se uma classe existe no elemento, devemos utilizar classList.contains().
    if(document.querySelector('#button-trocar').classList.contains('black')){
        document.querySelector('#button-trocar').classList.remove('black')
        document.querySelector('#button-trocar').classList.add('green')
    }else{
        document.querySelector('#button-trocar').classList.remove('green')
        document.querySelector('#button-trocar').classList.add('green')
    }
}