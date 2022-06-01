export class contaCorrente{
    agencia; 
    _saldo = 0;// _ significa que ele é um atributo privado 
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