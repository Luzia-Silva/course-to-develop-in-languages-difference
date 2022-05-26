## Conceitos sobre Estruturação de Dados

# Porque estudar estrutura de dados?

- Organizar os dados da aplicação
- Entender estruturas para melhor tomada de decisão
- Escrever melhores algoritmos
- Eficiência
- Algumas empresas usam como requisito

# Por que estrutura de dados ?

Alguns <b>desafios diários</b> de uso de dados são:

- Entenimento de como estão nossos dados na aplicação
- Criar lista (ordenadas, não ordenadas)
- Repetir ou não dos dados dentro da estrutura
- Organizar os dados pelo par identificador + valor

# <b>O que é</b> estrutura de dados?

Imagine um guarda roupas...

- Uma maneira de organizar e ordenar informações como textos, números, booleanos, etc registrá-los na memória do compuatador.
- Organizar dados (informações) -> Textos, números, booleanos...
- Como estão registrados na memória

# Array

[1,2,3] //elementos 1,2,3

# Object

{name: 'Fulano', idade: 20} //elementos name: name: 'Fulano', idade: 20

# <b>Gerenciamento </b> dados

Estrutura de dados tem a ver com a gestão das informações de aplicação.<br>

Para esse gerenciamento, podemos dividir em <b>3 etapas:</b>

1. Modelar a estrutura;
2. Dar vida à estrutura (instanciar essa estrutura);
3. Criar as funcionalidades dessa estrutura.

- Exemplo: inserir, excluir, buscar, exibir, contar...

## Array

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação. <br>

Uma das estruturas mais básicas, simples de criar e utilizar.<br>
['a', 10, 'd', true] Total de 4 elementos <br>
// 0, 1 , 2, 3

# Matrix ou vetor multidimencional

Matriz ou Vetor multidimensional. <br>
Significa que é um Array, dentro de outro array. Poderemos ter muitos níveis.

# Stack

Tradução de Stack é pilha. <br>
Como uma pilha de livros.

- linear, um após o outro.
- o último a entrar na pilha é primeiro a sair.

# LIFO: Last In First Out

- O último elemento a entar na pilha, aquele elemento do topo da pilha, é o primeiro a sair.

![alt text](assets/lifo.png)

# Stack <b> no código</b>

Métodos fundamentais

- push(): adicionar um elemento à pilha
- pop(): remover o elemento do topo da pilha
- peek(): obter o elemento do topo da pilha

Outros métodos poderão ser implementados como <b>size()</b> para mostrar o tamanho da pilha.
