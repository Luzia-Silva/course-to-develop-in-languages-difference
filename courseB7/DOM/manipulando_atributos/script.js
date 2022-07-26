function trocarImagem(filename, animalName){
  //o setAttribute insere qual é o atributo que você quer trocar e qual você quer inserir 
  document.querySelector('.lista').setAttribute("src", "./assets" + filename);
  document.querySelector('.lista').setAttribute('data-animal', animalName)
}

function pegarAnimal(){
  //O getAttribute coleta o valor do atributo
  let animal = document.querySelector('.lista').getAttribute('data-animal')
  alert("O animal é um " + animal)
}