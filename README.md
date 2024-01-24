# Docker

### **O que é o docker?** 

O Docker é um software de código aberto usado para implantar aplicativos
 dentro de containers virtuais. A conteinerização permite que vários 
aplicativos funcionem em diferentes ambientes complexos por eles **construírem, executarem e transferirem** o ambiente.

---

### **Processo de Dockerização:**

APLICAÇÃO → DOCKERFILE → IMAGEM(OS) → CONTAINER

![Untitled](Docker%20fb2a21263bc0472f990aff7502e66b06/Untitled.png)

---

### DockerHub:

É **um repositório público de imagens de containers, onde diversas empresas e 
pessoas podem publicar imagens pré-compiladas de soluções**.

---

### Comandos 🚀

[Dockerfile reference](https://docs.docker.com/engine/reference/builder/#dockerfile-reference)

```jsx
Arquivo Dockerfile:

FROM node:alpine
COPY . /app  --Copia os arquivos da pasta do projeto para a pesta do docker virtual (alpine)
WORKDIR /app --Define a pasta atual
ADD https: girludev.com/package -- Adiciona arquivos na aplicação
CMD node app.js --Roda o projeto

```

![Untitled](Docker%20fb2a21263bc0472f990aff7502e66b06/Untitled%201.png)

```jsx
- docker version // visualizar versão do docker
- docker build --t name-your-project:tag.  //Criando imagem com tag (tem ponto no final)
- docker build -t app . // criando imagem sem tag
- docker images //listar as imagens
- docker login //realizar login com a sua conta Docke
- docker run -d hi-docker:tag //Executar o projeto em backgroud (Necessário mesclar o nome do repositório com a tag repositorio:tag)
- docker run -d --name name-your-container hi-docker:tag //Executar o projeto em backgroud (Necessário mesclar o nome do repositório com a tag repositorio:tag)
- docker ps //containers rodando 
- docker ps -a //histórico dos containers executados
- docker pull name-image //fazer download da imagem local
- docker run -it name-images // modo interativo que executa de forma temporarária a imagem, e após encerrar a imagem é deletada
- docker exec -it -u your-user container-id bash //execute forma interartiva usuário com id do container utilizando terminal bash
- docker images save -o name-your-application.tar name-your-application:version //Salvar uma imagem local do tipo .tar
- docker logs id-conatiner-the-3-values // (exemple: sudo docker logs --details 5b9) para saber os comandos dos logs somemte usar --help
- docker run -d -p 80:3000 --name your-container application:version // Aplicações rodando na porta 3000 agora irá rodar na 80
- docker exec name-conatiner ls // Ver os arquivos presentes no con
tainer
- docker stop name-container // Parar o seu container
- docker start name-container //Rodar o seu container
- docker rm name-container  //Remover o container (-f force remove forçado mesmo ele rodando)
- docker rmi -f $(sudo docker images -q) // Apagar todas as images existentes
- docker rm -f $(sudo docker ps -aq) // Apagar todos os container criados e registros
```

---

### **Imagem & Contêiner**

**A imagem é a definição estática do ambiente do aplicativo, enquanto o contêiner é a instância em execução dessa imagem.** Você pode criar várias instâncias (contêineres) a partir de uma única imagem. Essa abordagem permite a portabilidade e a consistência de ambientes de desenvolvimento, teste e produção, uma vez que o mesmo contêiner pode ser executado em diferentes sistemas operacionais ou ambientes que suportam o Docker.

![Untitled](Docker%20fb2a21263bc0472f990aff7502e66b06/Untitled%202.png)

### Características

### Image

- Cut - down Os
- Libraries
- arquivos
- variaveis
    - A Imagem tem tudo que precisa para executar um programa.

### Containers

- VM isolado
- Start/Stop
    - O container é um processo que roda a imagem

---

### Docker Compose

O Docker Compose é uma ferramenta que permite definir e gerenciar aplicativos multi-container Docker. Ele utiliza um arquivo YAML para configurar os serviços, redes e volumes necessários para a execução de um ambiente de aplicação distribuída. Com o Docker Compose, você pode definir toda a infraestrutura da sua aplicação, incluindo as dependências, configurações de rede e outros aspectos, em um único arquivo.

O arquivo YAML utilizado pelo Docker Compose é chamado de "docker-compose.yml". Este arquivo contém informações sobre os serviços, volumes e redes que compõem o aplicativo, bem como opções de configuração para cada um deles.

A principal vantagem do Docker Compose é a capacidade de criar, iniciar e parar vários contêineres de uma só vez com uma única instrução. Isso é particularmente útil para aplicações que dependem de vários serviços e precisam ser executadas em ambientes complexos.

Além disso, o Docker Compose simplifica a colaboração entre desenvolvedores, pois todos os membros da equipe podem compartilhar o mesmo arquivo de configuração e replicar facilmente o ambiente de desenvolvimento em seus próprios sistemas.

![Untitled](Docker%20fb2a21263bc0472f990aff7502e66b06/Untitled%203.png)

```jsx
- docker-compose up //realiza a criação dos containers
- docker-compose up --build // contrói a imagem e inicia 
- docker-compose up -d // o "-d" para utilizar o terminal enquanto app roda
- docker-compose --help //informações sobre os comandos
- docker-compose ps // visualizar os containers rodando
- docker exec -it -u root id-container sh //Execute de modo interativo o conatiner para shell (pro,mp de comando)
- docker-compose logs // visualizar os logs existentes (--help ver options)
```

- docker-compose utiliza extensão YAML (Linguagem de ***Data Serialization):***
    - Utilizado para escrever uma inicialização lógica de cima para baixo;
    - Ele tem uma estrutura de endentação;
    
    ![Captura de tela de 2024-01-23 23-15-35.png](Docker%20fb2a21263bc0472f990aff7502e66b06/Captura_de_tela_de_2024-01-23_23-15-35.png)
    

### Docker Network

No Docker, uma "rede" é uma abstração que permite que contêineres se comuniquem entre si de maneira eficiente. O Docker fornece várias opções para criar e gerenciar redes, e a `docker network` é um conjunto de comandos que permite a manipulação dessas redes.

Alguns conceitos importantes relacionados à Docker Network incluem:

1. **Bridge Network (rede de ponte):** Esta é a rede padrão criada quando você instala o Docker. Contêineres em uma rede de ponte podem se comunicar entre si usando nomes de host, mas geralmente estão isolados do host e de outros contêineres fora da rede.
2. **Host Network (rede de hospedeiro):** Com esta opção, o contêiner compartilha a mesma rede do host. Isso significa que o contêiner pode usar diretamente as interfaces de rede do host, sem isolamento. Pode ser útil para situações em que o desempenho é crítico.
3. **Overlay Network (rede de sobreposição):** Esta é uma rede que permite a comunicação entre contêineres em diferentes hosts. É útil para aplicações distribuídas em escala, onde os contêineres precisam se comunicar entre hosts em um cluster Docker Swarm.
4. **Macvlan Network (rede Macvlan):** Permite que os contêineres tenham um endereço MAC próprio na rede, o que pode ser útil em cenários onde os contêineres precisam ser acessíveis como se fossem máquinas físicas na rede.

Os comandos mais comuns da `docker network` incluem:

```jsx

- docker network ls //Lista as redes disponíveis.
- docker network create //Cria uma nova rede.
- docker network connect //Conecta um contêiner a uma rede.
- docker network disconnect //Desconecta um contêiner de uma rede.
- docker network inspect //Exibe informações detalhadas sobre uma rede.
```

A utilização de redes no Docker é uma parte essencial para criar ambientes mais complexos, especialmente quando há necessidade de comunicação entre contêineres ou quando se trabalha com orquestradores como o **Docker Swarm** ou **Kubernetes.**

![Untitled](Docker%20fb2a21263bc0472f990aff7502e66b06/Untitled%204.png)

![Captura de tela de 2024-01-23 23-39-11.png](Docker%20fb2a21263bc0472f990aff7502e66b06/Captura_de_tela_de_2024-01-23_23-39-11.png)

[Docker Networking](https://towardsdatascience.com/docker-networking-919461b7f498)

### **Versão docker-compose**

[Compose file version 3 reference](https://docs.docker.com/compose/compose-file/compose-file-v3/)

---

### Material Extra ✨

[Como construir uma aplicação com Docker?](https://blog.geekhunter.com.br/docker-na-pratica-como-construir-uma-aplicacao/)

[How To Install and Use Docker Compose on Ubuntu 20.04  | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

[Acesse o pdf com informações sobre o curso](Dockerfb2a21263bc0472f990aff7502e66b06.pdf)

![Untitled](Docker%20fb2a21263bc0472f990aff7502e66b06/Untitled%205.png)

