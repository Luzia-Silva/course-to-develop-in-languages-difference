## O que são variáveis globais?
JavaScript tem um objeto especial, chamado um objeto global (Global Object), ele e todos os seus atributos
podem ser acessados ​​em qualquer lugar do programa, a variável global.
Navegador JavaScript geralmente é global janela de objeto, o objeto global Node.js é global, todas as variáveis
 ​​globais (excepto si global) são de propriedade de objeto global.
Em Node.js-nos acesso direto às propriedades globais, sem a necessidade de incluí-lo no aplicativo.

Link:
http://www.w3big.com/pt/nodejs/nodejs-global-object.html#:~:text=processo%20%C3%A9%20uma%20vari%C3%A1vel%20global,finalmente%2C%20para%20lidar%20com%20ele.
Link NodeJs sobre as Globals:
https://nodejs.org/dist/latest-v17.x/docs/api/globals.html

## O que são Modulos ?
No Node.js, um module é uma coleção de funções e objetos do JavaScript que podem ser utilizados por 
aplicativos externos. Descrever um trecho de código como um módulo se refere menos ao que o código é do que aquilo que ele faz — qualquer arquivo Node.js pode ser considerado um módulo caso suas funções e dados sejam feitos para programas externos.

Link: https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module-pt
Link Youtube: https://youtu.be/uzEhd3Lugik
## O que o path?
Ele é um object global presente na documentação oficial do Nodejs, para ver suas aplicabilidade acesse a documentação. 

## O que são require?
Esta é uma instrução node.js embutida e é mais comumente usada para incluir módulos de outros arquivos 
separados. Ele funciona lendo o arquivo JS, executando-o e retornando o objeto que está sendo exportado.
É muito popular por sua capacidade de incorporar módulos de nós centrais, baseados na comunidade e 
até mesmo módulos locais.

Podemos usar require() para incluir um módulo embutido em JavaScript.

const express = require ("express");

-> Enquanto require() é uma instrução node.js que usa CommonJS, import() é usado apenas com ES6.

Link: 
https://www.delftstack.com/pt/howto/javascript/javascript-import-vs-require/

## O que o process?
O process é um Object global que você visualiza os argumentos do seu módulo ao executá-lo. 
Pesquise na documentação oficial sobre!

Link: https://www.freecodecamp.org/news/node-process-object-explained/
## O que é indexOf?
O indexOf é utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1. É uma função que pode ser encaixada junto com qualquer lógica que precise comparar algum valor, seja dentro de um array ou dentro de uma string.

![Alt Text](https://media.giphy.com/media/137EaR4vAOCn1S/giphy.gif)