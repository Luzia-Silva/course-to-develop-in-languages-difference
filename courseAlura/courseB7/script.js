 function clicou() {
        document.getElementById('title').innerHTML = "Eu concordo! ✨";
        //identifica o id com o getElementById e com o innerHTML faz a troca do texto
      }

function digitou(e){
  //console.log("Você digitou!")
  //console.log(e) - Ver evento o KeyboardEvent que aparece as propiedades
   
  //Para ve as propriedades do evento acesse o KeyboardEvent
  //keyCode(código) é coletado essa propriedade quando o "ENTER" é pressionado
  // E ctrlKey coleta o  CTRL

  //Se CTRL and  ENTER  pressionado então: 
  if(e.keyCode == 13 && e.ctrlKey == true){
    let texto = document.getElementById("campo").value; 
    //você coleta o valor(value) digitado

    console.log(texto)
  }

}
//buttons -> Mudança de estilo 
function azul(){
  document.getElementById('title').classList.add('azul');
}

//exemplo de objetos mesclados com arrays
let names = [
	{name: "luzia", idade: 19, sexo:"feminino"},
	{name: "Ana", idade: 15, sexo:"feminino"},
	{name: "João", idade: 19, sexo:"masculino"},
];
//como acessar o index e o objeto
console.log(names[2].name)

//objetos 
let pessoa = {
  name: "luzia",
  idade: 19,
  sexo:"feminino"
  }
console.log("A sua idade é " +  pessoa.idade);

//uso do this
let person = {
  name: "luzia",
  idade: 19,
  sexo:"feminino", 
  andar: function (){
    console.log(this.name)
  }
}
//acessando os objetos 
person.andar();

//Uso do this com if and else 
let sorvetes = {
	sabor: "morango",
	valor: 10.5,
	estado: "gelado",
	verificacao: function()
  {
			if(this.estado == "gelado"){
			console.log("Que Geladinho!");
		}else{ console.log("Que Mole");}
	 }

};
//executando function
sorvetes.verificacao();