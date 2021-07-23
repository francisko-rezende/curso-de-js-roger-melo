# Aula 01-04 Adicionando o JavaScript a uma pagina web

- Como adicionar JS a uma página web?
  - Primeira pergunta a se fazer é, na verdade, "onde"
  - Podemos adicionar JS em qualquer lugar da `<head>` ou da `<body>`
  - Uma forma de adicionar js é através da tag `<scrip>`, o código vai dentro dessa tag
  - Adicionar JS na `head` pode gerar problemas de carregamento, melhor adicionar JS no como a última tag do `<body>`;
  - Apesar de adicionar JS no próprio HTML ser possível, é melhor guardar o JS em seu próprio arquivo principalmente quando o código for extenso;
  - Nesse caso, fazemos o link desse arquivo assim: `<script src="path-to-js/app.js"></script>`;
  
# Aula 01-05 O console do browser

- O roger usa o google chrome por causa das suas features (eg dev tools)
- Podemos usar o browser pra executar JS;
- JS executa o código de maneira sequencial, de cima pra baixo;
- `console.log()` é uma função que imprime os argumentos passados no console;

# Aula 01-06 Constantes, variáveis e comentários

- Variáveis armazenam valores (eg nomes, emails, números...);
- Declarando com `let`
  - A declaração é feita assim: 

```js 
let age = 31
```
  - `=` é o operador de atribuição em JS e é usado para associar valores a variáveis;
  - a forma de se ler a declaração acima é "age recebe 31";
  - JS permite passar variáveis como argumentos de funções, então o seguinte comando
  ```js
  let name = 'John';
  console.log(name);
  ```
  - Imprime "John" no console;
  - Como o nome sugere, variáveis podem variar. No caso da `let` isso significa que podemos mudar o valor atribuído (fazer uma reatribuição) a variáveis declaradas usando `let`;
- Declarando com `const`
  - Usada pra declarar variáveis ~~que não variam~~ cujo valor não pode ser atualizado/não aceitam reatribuição;
  - Atribuição é feita da mesma maneira que atribuições usando `let`:
  ```js
  const pi = 3.14;
  ```
- Essas maneiras de criar variáveis são mais recentes, antes delas variáveis eram criadas usando `var`;
- `var`, assim como `let`, aceita reatribuição
- Regras para nomear variáveis:
  - O nome deve ser constituído por uma única palavra/não deve conter espaços. Caso o nome tenha mais de uma palavra, usar camelCase para facilitar a leitura;
  - Nomes podem conter letras, números, underscores e cifrão e não podem começar com números;
  - [Algumas palavras](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) são reservadas para outras finalidades dentro da linguagem e não podem ser usadas para nomear variáveis;
  - De maneira geral é uma boa idéia/prática dar nomes significativos às suas variáveis. Esses nomes devem ser auto-explicativos;
- Suporte do seu código nos navegadores
  - Features mais modernos como `const`e `let`podem não funcionar em navegadores antigos;
  - Mas não tem revolta, não. Vamos aprender maneiras de fazer o nosso código funcionar em todos os browsers (inclusive os antigos);
- Comentários
  - Não são interpretados pelo navegador e podem ser criados assim
  
  // Comentário de uma linha

  /*
  Comentário
  de muitas
  linhas
  */

# Aula 02-02 - Um overview sobre tipos de dados

- JS tem oito tipos de dados mais comuns:
  - Number
    - 1, 2, 3, 100, 3.14
  - String
    - 'Hello, world', "francisko.rezende@gmail.com"
  - Boolean
    - true/false
  - Null
    - Seta, explicitamente, uma variável sem valor
  - Undefined
    - Representa um valor nao setado
  - Object
    - Estruturas de dados mais complexas
      - Arrays, Datas, Literais, etc
  - Symbol
    - Utilizado como objetos
  - BigInt
    - Usado para manipular números inteiros muito grandes
- Variáveis podem armazenar qualquer um desses e nao precisamos explicitar o tipo de dado que estamos setando

# Aula 02-03 Strings

- São usados para armazenar letras, números, ou qualquer outro tipo de caractere;
- São criadas usando aspas simples ou duplas:
  ```javascript
  const email = 'francisko@rezendemail.com'
  
  const favoriteColor = "red"
  ```
- Concatenação de strings é quando juntamos duas strings usando `+`
```javascript
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + lastName
```
- Acessamos determinados strings usando `[]`
```javascript
console.log(fullName[0])
```
- Strings possuem métodos e propriedades como `.length`
  - `length` é uma propriedade e retorna o comprimento (número de caracteres, inclusive caracteres em branco)
  - Métodos vs funções
    - funções são pedaços de código que executam ações
    - método é uma função associada a um objeto ou tipo de dado em particular
    - ambas tem o mesmo significado vai rolar uma função que vai fazer alguma coisa
    - Podemos armazenar os valores retornados por funções em variáveis
    - Os métodos `.toLowerCase()`e `.toUpperCase()` não alteram a string original no qual estão executando a ação, mas outros métodos podem modificar
    - Alguns métodos como `.indexOf()` precisam de argumentos para funcionar

# Aula 02-04 Métodos comuns de strings

- Lembrando: métodos são funções que pertencem a um objeto ou tipo de dado específico
- Nessa aula veremos alguns dos métodos de `strings`

```javascript
myString.lastIndexOf('a')
```

- Esse método retorna o index da última ocorrência de um determinado caractere;
  
```javascript
myString.slice(a, b)
```
- Esse método retorna um subset de um determinado string
- `a`: índice do caractere à partir do qual queremos começar a "fatiar" a string
- `b`: índice do caractere que encerra a "fatia"
- Esse método **não** altera a string original

```javascript
myString.replace('a', 'b')
```
- Esse método substitui um determinado caractere em uma string
- `a`: string que queremos substituir
- `b`: caractere que irá substituir o que passamos em `a`
- Esse método **não** altera a string original

# Aula 02-05 Numbers

- Números são usados em diversos casos em JS
- Usamos `.` ao invés de `,` para criar números decimais
- JS nos permite fazer operações aritméticas
- `%` é o operador que retorna o resto de divisões
```javascript
  console.log(3 % 2)
```
- O snippet acima imprime 1
- `**` é o operador de potência
- JS segue a mesma precedência da matemática básica:
  1. parenteses
  2. expoentes ou raízes
  3. multiplicação e divisão
  4. adição e subtração
- O shorthand para incrementar o valor de uma variável é o seguinte:
  ```javascript
  let myAge = 30
  myAge++
  ```
- O shorthand para decrementar o valor de uma variável é o seguinte:
  ```javascript
  let myAge = 30
  myAge--
  ```
- Operadores addition, subtraction, multiplication e division assignment
  ```javascript
  let myFavoriteNumber = 42
  myFavoriteNumber += 1 // equivale a myFavoriteNumber = myFavoriteNumber + 1
  myFavoriteNumber -= 1 // equivale a myFavoriteNumber = myFavoriteNumber - 1
  myFavoriteNumber *= 1 // equivale a myFavoriteNumber = myFavoriteNumber * 1
  myFavoriteNumber /= 1 // equivale a myFavoriteNumber = myFavoriteNumber / 1
  ```
- `NaN`
  - Valor que representa operações que não fazem sentido como `4 / 'oi'`
- Concatenação de string com números
  - Número sempre resulta em string 
  
  # Aula 02-06 Template strings
 - Template string é uma forma de escrever strings mais moderna (introduzida no es6)
 - Também chamados de "Template Literals";
 - Torna a criação de strings menos verbosa e mais fácil de escrever, segue um exemplo
  
 ```javascript
 const postTitle = 'É bolacha ou biscoito?'
 const postAuthor = 'Matheus Saad'
 const postComments = 15
 
 const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem' + postComments + ' comentários' // sem template string

 const postMessage = `O post "${postTitle}", do ${postAuthor}, them ${postComments} comentários` // com template string 
 ```
 - Para solucionar conflitos de aspas em JS podemos usar uma das seguintes soluções
    1. Usar `'` dentro de uma string com abertura e fechamento usando `"` ou vice e versa
    2. Escapa as aspas usando `\`
- Criando templates HTML

```javascript
const html = `
<h2>${postTitle}</h2>
<p>Autor: ${Matheus Saad}</p>
<span>Esse post tem ${postComments}</span>
`
```
- Quando você não vai interpolar variáveis na string, usar aspas ou quebrar linhas, apas normais resolvem bem. Caso contrário template strings são uma boa

# Aula 03-02 Arrays

- Por que usar arrays?
  - Para armazenar uma lista de valores que tem relação entre si
- Para criar arrays:

```javascript
let heroes = ['batman', 'catwoman', 'iron man']
```

- Para acessar elementos específicos de uma array usamos `[]` da mesma forma que usamos em strings
  - Podemos inclusive usar operações matemáticas nesses colchetes 
- Para sobrescrever um elemento, selecionamos esse elemento e fazemos a atribuição
- Arrays podem receber tipos de dados diferentes
  - Mesmo sendo possível, isso não é necessariamente uma boa idéia
- Alguns métodos
  - `myArray.join(sep)` retorna uma nova string com os elementos do array separados por `sep`
  - `myArray.indexOf(arg)` retorna o primeiro index do primeiro match de `arg`
  - `myArray.concat(myOtherArray)`  concatena/junta dois arrays, recebe um array como argumento. Retorna um novo array com o conteúdo do array original mais o conteúdo do novo array. O argumento pode ser um array ou um/vários item soltos
  - `myArray.push(newItem1, newItem2)` adiciona items ao array e retorna o número de items no array após a adição. Esse método **muda o array original**
  - `myArray.pop()` remove e retorna o último item do array. Esse método **muda o array original**

# Aula 03-03 Null e undefined

- `Null` e `Undefined` são tipos similares usados para identificar a falta de um valor
- `Null` deve ser intencional, ao contrário de `Undefined`
- JS  atribui `undefined` para variáveis que não recebem nenhum valor como no exemplo a seguir
  
```javascript
const emptiness
console.log(emptiness) // imprime "undefined"
```

- Usamos `Null` indica intencionalmente que não há valor em uma variável