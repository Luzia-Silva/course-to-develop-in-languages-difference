//como adicionar modulos dentro de um dos nosso arquivos 
const path = require('path')
console.log(path.basename(__filename))

//Usando meu modulo 
//meus modulos 
const mymodule  =  require('./exports');//processe de exportar um modulo
console.log(mymodule)