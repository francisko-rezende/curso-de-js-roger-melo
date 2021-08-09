# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - Observações sobre as duas próximas aulas

## Aula 01-03 - 3 escopos em JavaScript que você deve conhecer

- Essa aula aborda
  1. Escopo de **funções**
  2. Escopo de **blocos**
  3. Escopo **léxico**
- Mas o que é escopo?
  - é a visibilidade de uma variável, onde podemos acessar nossas variáveis
- Escopo de funções
  - Funções têm escopo local dentro da sua definição e as variáveis definidas dentro de funções só estão disponíveis nesse escopo
  - Isso vale pra `let`, `const` e `var`
- Escopo de bloco
  - Funciona de maneira similar ao escopo de funções: blocos de código (delimitados por `{}`) têm escopo local para `const` e `let`, mas *não* para `var`
- Escopo léxico
  - Em funções aninhadas, o escopo da função mais externa está disponível para a função mais interna
  
  ```javascript
  const external = () => {
      const greet = 'Oi'

      const internal = () => {
          const message = `${greet}. Seu pai tem boi?` // greet está disponível no escopo da função internal apesar de ter sido declarada na função external
          console.log(message)
      }

      internal()
  }
  ```
    - Além disso, as regras de escopo se mantém, o que significa que só temos acesso à função `internal` dentro da função `external`
    - De maneira resumida, escopo léxico é o fato de funções aninhadas estarem sujeitas a buscarem variáveis no escopo acimas elas
    - Essa relação é de mão única: funções aninhadas não conseguem acessar o escopo abaixo de seu próprio escopo
    - A acesso ao escopo acima só se dá quando a variável não está presente no atual escopo do função
    - O acesso a níveis superiores se dá independente da quantidade de níveis existente:
      - Caso existam 3 funções aninhadas e tentamos acessar uma variável na função mais interna, o JS primeiro busca a variável no escopo da função intermediária e se também não encontrar busca a variável na função mais externa. Isso pode rolar pra quantos níveis de aninhamento nós tivermos.

## Aula 01-04 - Mozilla Developer Network

- O Mozilla Developer Network (MDN) abriga documentação do JS e é excelente para tirar dúvidas pontuais sobre a linguagem. 
- O Roger dá suas dicas sobre a utilização do MDN:
  - A busca do próprio site nem sempre funciona bem, usar um buscador com os 'mdn' e o que queremos saber costuma ser mais eficiente
  - As páginas em inglês costumam ser mais completas que as em português

## Aula 01-05 - Interagindo com o browser

- Podemos usar JS para interagir com o browser/pagina web para
  - Adicionar conteúdo
  - Modificar estilos CSS
  - Reagir a eventos
  - Criar interações menos discretas, como criar pop-ups
- O JS foi criado justamente para fazer as páginas mais interativas
- Tudo que fazemos para interagir com o browser passa pelo Documento Object Model (DOM)
- Vamos também adicionar, modificar e remover conteúdo
  - adicionar eventos e pop ups

## Aula 01-06 - O que é o DOM - Document Object Model

- O DOM é criado pelo browser, não faz parte de JS em si
- Quando HTML é carregado no browser, o browser cria um objeto que modela esse documento que se chama `document`
- `document` possui várias propriedades e métodos que tornam a interação e manipulação possível
- Quando visualizamos o `document` no console, vemos que ele exibe uma representação visual do html da página
- Além dessa representação, `document` possui os métodos e propriedades que possibilitam a interação entre nosso código js e a página
- O DOM descreve a página html com uma estrutura de árvore hierárquica de nós com o nós mais abrangente sendo o `html`, também conhecido como *root node*
- A hierarquia vai avançando até atingir os elementos mais específicos que são os text nodes

![](dom-tree.png)

- Programaticamente, o documento HTML é modelado no objeto `document` criado pelo browser quando o HTML é carregado. Utilizamos esse objeto para interagir com a página, usamos suas propriedades e métodos.

## Aula 01-07 Query selector & query selector all

- Quando trabalhamos com o DOM e adicionamos, removemos ou modificamos alguma coisa seguimos alguns passos
- Iniciamos decidindo qual elemento da página vamos manipular para então buscar a referência desse elemento no DOM
- Essa busca se chama querying
- Tendo feito isso vamos pra manipulação de fato
- Essa aula trata das queries
- Os métodos mais recomendados para fazer queries no DOM são `document.querySelector()` e `document.querySelectorAll()` 
- Esses métodos recebem strings de seletores de CSS
- Esses seletores podem ser os elementos de maneira geral (como `h1`, `p`, etc) que são chamados de seletores de tipo, ou seletoresmais específicos como classes ou ids
- Podemos combinar os dois tipos de seletores css (eg, posso selecionar uma `div` que tenha a classe 'error' com a seguinte string:`div.error`)
- Uma outra forma de obter a string para selecionar um elemento específico é abrindo a página, clicando com o botão direito noelemento que queremos selecionar, escolhendo "inspecionar", clicando com o botão direito no elemento HTML que aparece no console dodev tools, clicando em copy e então clicando em "CSS Selector"
- Para obtermos todos os elementos de um determinado tipo, como todos os elementos `p`, usamos `document.querySelectorAll('p')`
- Esse método retorna uma NodeList com as referências para todos os `p` da página
- NodeList é similar a um array mas não é de fato um array, o que significa que nem todos os métodos de array funcionam em NodeLists
- A notação de colchetes para selecionar um elemento específico funciona em NodeLists, assim como .`forEach`
- Para obtermos todos os elementos da página que contém a classe "error", usamos `document.querySelectorAll('.error')`
- Apesar de serem as formas mais eficientes de selecionar elementos do DOM, `document.querySelector` e `document.querySelectorAll()` não são as únicas formas de realizar esse tipo de seleção

## Aula 01-08 - Outras maneiras de fazer queries no DOM

- Também podemos obter a referência de elementos do DOM através do **ID**, do **nome da classe** ou através do **nome da tag**
- Obter um elemento através do seu ID:

```javascript
const title = document.getElementById('title')
```

- Obter um elemento através da sua classe:

```javascript
const errors = document.getElementByClassName('error') // como o metodo eh para classes, nao precisa colocar o ponto antes do nome
```
  - O método acima retorna um html collection, que é tipo um nodelist. Html collections aceitam a notação de colchete para selectionar elementos específicos mas não `.forEach`
- Obter um elemento através do nome da tag:

```javascript
const paragraphs = document.getElementsByTagName('p') // resulta em um html collection com todas as tags p da pagina
```

- Esses métodos tem seus usos mas também têm suas limitações que vem do fato deles retornarem html collections. A impossibilidade (sem antes converter as html collections) de utilizar forEach é uma delas.

# Aula 02

## Aula 02-01 - Correção dos exercícios da aula anterior

## Aula 02-02 - Adicionando e modificando conteúdo em uma página

- Como manipular elementos do DOM?
- Manipulando o *texto* de elementos do DOM
  - A propriedade `document.innerText` determina o texto dos elementos do DOM
  - Portanto, podemos realizar modificações no texto através de modificações no valor dessa propriedade
  - Essas modificações podem ser feitas em dois passos simples:
    1. Selecionamos o elemento que queremos modificar usando `document.querySelector`
    2. Modificamos o valor da propriedade `innerText` usando JS (eg fazendo uma reatribuição, concatenação ou qualquer outra operação aceita em JS)

  ```javascript
  const paragraph = document.querySelector('p')

  paragraph.innerText = 'Estou mudando o texto'
  ```
  - O processo é parecido para realizar modificações em múltiplos elementos:
    1. Selecionamos os elementos que queremos modificar usando `document.querySelectorAll`
    2. Modificamos o valor das propriedades `innerText` usando JS (como `querySelectorAll` retorna uma nodeList podemos usar forEach para facilitar as modificações)

  ```javascript
  const paragraphs = document.querySelectorAll('p')

  log

  paragraphs.forEach((paragraph, index) => {
      paragraph.innerText += `novo texto ${index + 1}`
  })
  ```

  - Manipulando o HTML de elementos do DOM
    - A propriedade `innerHTML` contém o código HTML (inclusive os espaços e identações) dos elementos do DOM
    - Então podemos modificar o HTML através dessa propriedade assim como fizemos com `innerText`
    - Esse método funciona inclusive com propriedades que não possuem conteúdo
    - Caso já exista HTML no elemento que estamos modificando, esse HTML será sobrescrito. Caso não haja HTML, o HTML que passarmos pro elemento será adicionado ao elemento
    - Podemos **acrescentar** HTML usando concatenações ou addition assignments
  
  ```javascript
  const div = document.querySelector('.content')

  const people = ['Jonatan', 'Vinicius', 'Diego']

  people.forEach(person => {
      div.innerHTML += `<p>${person}</p>`
  })
  ```
- Tanto `innerText` quanto `innerHTML` são getters e setters: podemos usá-las para obter (get) valores e setar (set) valores

## Aula 02-03 - Obtendo e setando atributos

- Também podemos obter e modificar atributos e elementos HTML
- Para obter os atributos de um determinado elemento, primeiro selecionamos os elemento usando `querySelector` (ou `querySelectorAll`) e depois encadeamos `getAttribute`, que recebe uma string com o nome do atributo que queremos obter

```javascript
const link = document.querySelector('a')

link.getAttribute('href');
```
- Para setar atributos, usamos `setAttribute` que recebe dois argumentos: o nome do atributo que queremos modificar e o valor que queremos inserir nesse atributo

```javascript
const link = document.querySelector('a')

link.setAttribute('href', 'https://www.rogermelo.com.br')
```
- Modificar atributos é útil em casos como quando o usuário preenche um formulário e, caso haja erro, modificamos a classe do form para uma classe que denota erro ou, caso não exista erro, usamos uma classe que denota que está tudo certo
- Também podemos setar atributos que não existem no elemento/adicionar novos atributos usando `setAttribute`

```javascript
paragraph.setAttribute('style', 'color: green')
```

## Aula 02-04 - Modificando estilos CSS (inline)

- Setar o style da forma como fizemos na última aula (usando `setAttribute` para setar o `style` diretamente) não é uma idéia tão boa pois esse método *pode* **sobrescreve** o style que o elemento possa ter
- Usamos a propriedade `style` para adicionar estilos mantendo o que já existe
- Essa propriedade contém outras propriedades que representam propriedades CSS
- Modificamos o estilo reatribuindo valores para essas propriedades
- Segue um exemplo de como setar a margem de um elemento

```javascript
const title = document.querySelector('h1')

title.style.margin = '50px'
```
- Esse método funciona tanto para adicionar novos atributos CSS quanto para modificar atributos existentes
- **Atenção!** Os atributos CSS que têm hífen são escritos em camelCase no JS! Por exemplo, `font-size` vira `fontSize`
- Podemos remover o valor de atributos setando uma string vazia para a propriedade que queremos remover
- Apesar de mudar o estilo usando `style` ser mais interessante do que usando `setAttribute`, é ainda melhor mudar o estilo através de alterações nas classes CSS (atribuir novas classes)

## Aula 02-05 - Obtendo, adicionando, removendo e alternando classes CSS

- Uma vez que tenhamos selecionado o elemento que queremos modificar, podemos verificar as classes atribuídas a esse elemento na propriedade `classList`, que retorna um `DOMTokenList` (similar a um array) contendo as classes do elemento

```javascript
const paragraph = document.querySelector('p')

paragraph.classList
```

- Usamos o método `add()`, da propriedade `classList` para adicionar classes à elementos do DOM

```javascript
const paragraph = document.querySelector('p')

paragraph.classList.add('error')
```
- Usamos o método `remove()`, da propriedade `classList` para adicionar classes à elementos do DOM

```javascript
const paragraph = document.querySelector('p')

paragraph.classList.remove('error')
```
- Para alternar uma classe em um elemento (se um elemento tiver uma classe vamos removê-la e se ele tiver vamos adicioná-la)
  - Usamos o método `element.classList.toggle('className')` para adicionar uma classe caso a mesma não esteja presente ou remover uma classe já aplicada a um elemento

```javascript
const title = document.querySelector('h1')

title.classList.toggle('test') // test não está presente e portanto é adicionada ao title
title.classList.toggle('test') // test está presente e portanto é removida do title
```