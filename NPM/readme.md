## NPM
Node Package Manager 

__Glossary: Dependencies, Packages, Modules..

## O que é o Npm ?
Ele é um gerenciador de pacotes do NodeJs.

## Comandos: 
-> Verificar de tem o NPM instalado: npm -v <br>
-> Entrar no pacote: npm init; Se você usar o "npm init -y" ele cria sem fazer perguntas o json direto.<br>
-> Fazer instalação de modulos: npm install "name modulo"; Atalho para instalação "npm i "nome modulo"<br>
-> Para fazer o modulo ser dependente, isso significa que o modulo será dependente do ambiente de desenvolvimento e você não vai precisar instala-lo novamente: npm i "nome modulo" -D; Ele fica no json como "devDependencies". <br>
-> Caso você manipule no json é sempre importante atualizá-lo, remover informações ou inserir.SEMPRE, SEMPRE MEU FILHO faça: npm update. <br>


## O que o package.json?
O arquivo package.json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.<br>

JSON, que significa JavaScript Object Notation, é uma formatação utilizada para estruturar dados em formato de texto e transmiti-los de um sistema para outro, como em aplicações cliente-servidor ou em aplicativos móveis.<br>

Link: https://wbruno.com.br/nodejs/package-json-entendendo-os-scripts/

## O que o Node_Modules, package.json e package-lock.json?
A pasta node_modules contém todas as dependências instaladas para o seu projeto. Na maioria dos casos, você não deve enviar essa pasta em seu repositório controlado por versão. Conforme instala mais dependências, o tamanho dessa pasta crescerá rapidamente. Além disso, o arquivo package-lock.json mantém um registro das versões exatas instaladas de uma maneira mais sucinta. Assim, incluir o node_modules não é necessário.<br>
-> No package.json em "script" você coloca aqueles projects que você quer que execute, no nome você pode colocar START(ele é reconhecido pelo npm, assim não precisa do run antes para executar) ou outro nome, mas sempre lembre do RUN antes: npm run "nome"; npm start;<br>
->Enquanto o arquivo package.json lista as dependências que nos informam as versões adequadas que devem ser instaladas para o projeto, o arquivo package-lock.json acompanha todas as alterações no package.json ou node_modules e nos informa a versão exata do pacote instalado. Normalmente, você envia isso para seu repositório controlado por versão, ao invés do node_modules, pois é uma representação mais clara de todas as suas dependências.<br>

Link: https://www.digitalocean.com/community/tutorials how-to-use-node-js-modules-with-npm-and-package-json-pt

## Porque utilizar os modulos globais?
 O npm instala pacotes de forma global na sua máquina (usando o -g). Um exemplo clássico são os utilitários do create-react-app e o pacote http-server. Quando instalados de forma global, nos permitem que sua utilização seja feita em qualquer diretório/projeto e não somente naqueles em que estão contidos como dependências no package.json: npm i "nome global" -g; <br>
 -------> Listar os pacotes globais<br>
 -> Este comando fará com que todos os pacotes e suas respectivas versões apareçam na tela: npm list -g — depth=0<br>
-> Este comando te mostrará uma tabela com as versões atuais, as versões mais próximas e a última lançada. Isso é importante para que você possa avaliar o cenário antes de sair atualizando tudo sem distinção: npm outdated -g;<br>
-> O processo de desinstalação também é bastante simples. No caso eu queria remover o pacote jshint. Para isso, basta executar: npm uninstall -g jshint<br>

Esse link tem todas as informações sobre como utilizar as globs. <br>
Link:https://medium.com/code-prestige/lidando-com-pacotes-globais-do-npm-7689a8786310

## Dependencias do package.json
Esse vídeo explica como fazer o gerenciamento das versões dos modulos <br>
Link: https://app.rocketseat.com.br/node/node-js-o-motor-da-nave/group/npm-node-package-manager/lesson/gerenciando-versoes-das-dependencias<br>

-> (^2.23.1): "^" esse sinal significa que sempre que você atualizar o npm as duas ultimas versões vão atualizar o minor.patch;<br>
-> (~2.23.1): somente o patch irá atualizar; <br>
-> (2.23.1): Estiver dessa forma significa que ele manterá essa versão fixa;<br>
-> (*): significa que ele mudará todas as versões;<br>
------> major.minor.patch: (2.23.1)<br>
        Major: (2):  É a versão do pacote e pode sim destrurar o pacote quando houver mudanças;<br>
        Minor: (23): Ele terá alteração mais não significa desestrurar o pacote;<br>
        Patch: (1):  Significa que ele está resolvendo um bugzinho.<br>

-> Para instalar a opção desejada basta: node i "nome module"@1.3.4 (num versão)<br>
-> Para ver as versões do projeto: npm outdated<br>
    -> exemplo: <br>
                Package  Current  Wanted  Latest  Location<br>
                moment     1.5.1   1.7.2  2.29.1  course-to-develop-in-languages-difference<br>
                -> Current: a versão que você está usando; <br>
                -> Wanted: Mais procurado; <br>
                -> Latest: Ultima versão; <br>
-> Para utilizar a ultima versão basta rodar: npm i "nome modulo"@latest<br>
-> Removendo pacotes: npm unsinstall "nome modulo". <br>


![Alt Text](https://media.giphy.com/media/A7Gpt39kH5sAg/giphy.gif)