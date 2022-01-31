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

## O que é o NodeJS?
O Node.js pode ser definido como um ambiente de execução Javascript server-side e uma tecnologia assíncrona que trabalha em uma única thread de execução.
## Porque utilizar  o NodeJs?
Ele é muito importante para o desenvolvedor, porque imagine você precisar utilizar sempre um browser para fazer seus projetos? Então, paulera, né. Mas com essa tecnologia na sua máquina fica mais fácil para desenvolver e depois subir o projeto finalizadinho para o seu usuário.

## Quem fez?
Ryan Dahl (O cara topzeiro) e sua equipe. (Maravilhosa)

## Qual a importância de aprender usar o NodeJS?
Eu acredito que todo desenvolver de aplicações com Javascript precisa aprender, até porque é um ambiente de execução de Javascript. Então, bora aprender!


![Alt Text](https://media.giphy.com/media/SvcIZouMTdCPlT2IL3/giphy.gif)

## O que são Modulos ?
No Node.js, um module é uma coleção de funções e objetos do JavaScript que podem ser utilizados por 
aplicativos externos. Descrever um trecho de código como um módulo se refere menos ao que o código é do que aquilo que ele faz — qualquer arquivo Node.js pode ser considerado um módulo caso suas funções e dados sejam feitos para programas externos.

Link: https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module-pt

## o que o path?
Ele é um modulo presente na documentação oficial do Nodejs, para ver suas aplicabilidade acesse a documentação. 

## O que o require?
Esta é uma instrução node.js embutida e é mais comumente usada para incluir módulos de outros arquivos 
separados. Ele funciona lendo o arquivo JS, executando-o e retornando o objeto que está sendo exportado.
É muito popular por sua capacidade de incorporar módulos de nós centrais, baseados na comunidade e 
até mesmo módulos locais.

Podemos usar require() para incluir um módulo embutido em JavaScript.

const express = require ("express");

-> Enquanto require() é uma instrução node.js que usa CommonJS, import() é usado apenas com ES6.

Link: 
https://www.delftstack.com/pt/howto/javascript/javascript-import-vs-require/

#O que o process?
