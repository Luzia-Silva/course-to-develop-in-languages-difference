import {Cliente} from "./Cliente.js";

export class contaCorrente{
    //variavel contadora de quantidades de conta no sistema
    //atributo estatico
   static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;// _ significa que ele é um atributo privado
    //Getters (get) ->  ele é um atribuidor de acesso ao valor
    //Setters (set) -> atribuidor de valores, mas de forma protegida e com sentenças.
    //você consegue ver o valor estático, mas não consegue atribuir
    get saldo(){
        return this._saldo;
    }
    //set e get são acessores
    //o set significa atribuir ou inserir um valor
    set cliente(novoValor){
        //Se o novo valor for uma instancia de cliente insere o valor
        if(novoValor instanceof  Cliente)
            this._cliente = novoValor;

    }
    get cliente(){
        return this._cliente;
    }
    //constructor
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        contaCorrente.numeroDeContas +=1;
    }

    sacar(valor){//metodo de sacar 
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;//utilizado para retornar um valor 
        }
    }
    //Metodo de Depositar
    //parametros/argumentos são o que estão dentro do ()
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }
    transferir(valor, conta){//o this ele faz referencia a uma variavel global 
        const valorSacado = this.sacar(valor);//você está sacando o valor da conta x
        conta.depositar(valorSacado);//e depositando na conta y
    }
}