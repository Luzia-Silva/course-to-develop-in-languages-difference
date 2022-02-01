## NPM
Node Package Manager 

__Glossary: Dependencies, Packages, Modules..

## O que é o Npm ?
Ele é um gerenciador de pacotes do NodeJs 

## Comandos: 
-> Verificar de tem o NPM instalado: npm -v 
-> Entrar no pacote: npm init; Se você usar o "npm init -y" ele cria sem fazer perguntas o json direto.
-> Fazer instalação de modulos: npm install "name modulo"; Atalho para instalação "npm i "nome modulo"
-> Para fazer o modulo ser dependente, isso significa que o modulo será dependente do ambiente de desenvolvimento e você não vai precisar instala-lo novamente: npm i "nome modulo" -D; Ele fica no json como "devDependencies". 
-> Caso você manipule no json é sempre importante atualizá-lo, remover informações ou inserir.SEMPRE, SEMPRE MEU FILHO faça: npm update. 
->

## O que o package.json?
O arquivo package.json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.

JSON, que significa JavaScript Object Notation, é uma formatação utilizada para estruturar dados em formato de texto e transmiti-los de um sistema para outro, como em aplicações cliente-servidor ou em aplicativos móveis.

Link: https://wbruno.com.br/nodejs/package-json-entendendo-os-scripts/
Link: 

## O que o Node_Modules, package.json e package-lock.json?
A pasta node_modules contém todas as dependências instaladas para o seu projeto. Na maioria dos casos, você não deve enviar essa pasta em seu repositório controlado por versão. Conforme instala mais dependências, o tamanho dessa pasta crescerá rapidamente. Além disso, o arquivo package-lock.json mantém um registro das versões exatas instaladas de uma maneira mais sucinta. Assim, incluir o node_modules não é necessário.
-> No package.json em "script" você coloca aqueles projects que você quer que execute, no nome você pode colocar START(ele é reconhecido pelo npm, assim não precisa do run antes para executar) ou outro nome, mas sempre lembre do RUN antes: npm run "nome"; npm start;
->

Enquanto o arquivo package.json lista as dependências que nos informam as versões adequadas que devem ser instaladas para o projeto, o arquivo package-lock.json acompanha todas as alterações no package.json ou node_modules e nos informa a versão exata do pacote instalado. Normalmente, você envia isso para seu repositório controlado por versão, ao invés do node_modules, pois é uma representação mais clara de todas as suas dependências.

Link: https://www.digitalocean.com/community/tutorials how-to-use-node-js-modules-with-npm-and-package-json-pt

## Porque utilizar os modulos globais?
 O npm instala pacotes de forma global na sua máquina (usando o -g). Um exemplo clássico são os utilitários do create-react-app e o pacote http-server. Quando instalados de forma global, nos permitem que sua utilização seja feita em qualquer diretório/projeto e não somente naqueles em que estão contidos como dependências no package.json: npm i "nome global" -g; 
 -------> Listar os pacotes globais
 -> Este comando fará com que todos os pacotes e suas respectivas versões apareçam na tela: npm list -g — depth=0
-> Este comando te mostrará uma tabela com as versões atuais, as versões mais próximas e a última lançada. Isso é importante para que você possa avaliar o cenário antes de sair atualizando tudo sem distinção: npm outdated -g;
-> O processo de desinstalação também é bastante simples. No caso eu queria remover o pacote jshint. Para isso, basta executar: npm uninstall -g jshint

Esse link tem todas as informações sobre como utilizar as globs. 
Link:https://medium.com/code-prestige/lidando-com-pacotes-globais-do-npm-7689a8786310

## Dependencias do package.json
Esse vídeo explica como fazer o gerenciamento das versões dos modulos
Link: https://app.rocketseat.com.br/node/node-js-o-motor-da-nave/group/npm-node-package-manager/lesson/gerenciando-versoes-das-dependencias

-> (^2.23.1): "^" esse sinal significa que sempre que você atualizar o npm as duas ultimas versões vão atualizar o minor.patch;
-> (~2.23.1): somente o patch irá atualizar; 
-> (2.23.1): Estiver dessa forma significa que ele manterá essa versão fixa;
-> (*): significa que ele mudará todas as versões;
------> major.minor.patch: (2.23.1)
        Major: (2):  É a versão do pacote e pode sim destrurar o pacote quando houver mudanças;
        Minor: (23): Ele terá alteração mais não significa desestrurar o pacote;
        Patch: (1):  Significa que ele está resolvendo um bugzinho.

-> Para instalar a opção desejada basta: node i "nome module"@1.3.4 (num versão)
-> Para ver as versões do projeto: npm outdated
    -> exemplo: 
                Package  Current  Wanted  Latest  Location
                moment     1.5.1   1.7.2  2.29.1  course-to-develop-in-languages-difference
                -> Current: a versão que você está usando; 
                -> Wanted: Mais procurado; 
                -> Latest: Ultima versão; 
-> Para utilizar a ultima versão basta rodar: npm i "nome modulo"@latest
-> Removendo pacotes: npm unsinstall "nome modulo" 