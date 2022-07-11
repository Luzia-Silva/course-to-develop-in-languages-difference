export class Cliente{ //classe 
    nome;  //atributos 
    _cpf; //atributo privado

    get cpf(){
       return this._cpf;
    }
    //O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
    //os valores só são atribuidos no momento da construção
    //São funções que não são explicitas , mas ao utilzar dentro da classe você consegue realizar
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}
//Ao usar export você pode fazer o import dele no outro arquivo e utilizar a classe, e seus atributos