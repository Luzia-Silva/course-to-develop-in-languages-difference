
//PEGUE O ELEMENTO PELO ID - o id é um elemento único, somente um elemento pode ter um id.
document.getElementById("title").innerHTML = "Seja mal vindo!"

//PEGUE OS ELEMENTOS PELA CLASSE - vários elementos pode ter a mesma classe
document.getElementsByClassName("lista")

//seleciona o elemento dentro do array e faça a inseração deste texto;
document.getElementsByClassName("lista")[1].innerHTML = "Item alterado!";

//Encontra os elementos pelo name
document.getElementsByName("name")

//Econtra o elemtento pela TAG - exemplo: os input's da sua aplicação
document.getElementsByTagName("input")

//uso dos querys - como o querySelector e querySelectorAll
//querySelector trás somente o selecionando_elementos
document.querySelector("#title"); //para usa-lo para selecionar id, você precisa colocar "#' antes
document.querySelector("button")//seleciona os bottons da page

//querySelectorAll
document.querySelectorAll(".lista")//retorna  os elementos da classe, precisa do "." antes para ser uma classe
document.querySelectorAll("div") //retornará todas as div's

