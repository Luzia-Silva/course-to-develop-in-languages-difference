//Passo 1: Modelando 
class Stack {
  constructor() {
    this.data = [];
    this.top = -1
  }
  //insere um valor na stack
  push(value){
    this.top++
    this.data[this.top] = value
    return this.data
  }
  //deleta algum item da sua stack
  pop(){
    if (this.top < 0 ) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }
  //retorna o ultimo valor da Stack
  peek(){
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

//Passo 2: utilizando e instanciando a classe
const stack = new Stack()

//Passo 3: Adicionar dados 
//push
//Insere valores na pilha
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

//peek
//Pega o ultimo valor da pilha
console.log("Pega o último valor da pilha => " + stack.peek())

//pop
//Remove o ultimo valor da pilha 
stack.pop()

//peek
console.log("Values Stack => " + stack.peek())

//Conceito de Stack
//Primeiro valor enserido vira o último e o último vira o primeiro.