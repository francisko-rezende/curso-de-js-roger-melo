# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - O que são objetos

- Objetos são uma grande parte de JS e aprender a usá-los é essencial
- Objetos têm propriedades(que são como características) e métodos (que são como ações)
- Eles possibilitam a criação de estruturas de dados que representam certos elementos do nosso código ou das nossas aplicações web
- Usaremos tanto objetos que vem de fábrica no JS quanto nossos próprios objetos

# Aula 01-03 - Criando um objeto literal

- Criamos objetos literais assim:

```javascript
let user = {
    name: 'jobson', // atribuimos a propriedade name a string jobson
    age: 31,
    city: 'Joinville',
    blogPosts: ['torta de chocolate', 'salada cesar']
}
```
- Colocar cada propriedade em uma linha ajuda na legibilidade do código
- Acessamos o valor das propriedades usando `.`: `user.name`
- Para mudar valores fazemos o seguinte: `user.age = 32` (ou na própria definição do objeto)
- Também podemos usar a notação de colchetes: `user['name']`.
  - Nesse caso o que vai dentro dos colchetes precisa ser ou uma string ou uma variável que contem uma string
- Também podemos modificar propriedades usando os colchetes `user['name'] = 'Carla'`
- Uma das vantagens de se usar os colchetes é justamente a possibilidade de usar variáveis na  hora de selecionar propriedades, o que não é possível de se fazer usando o `.`

## Aula 01-04 - Adicionando métodos

- Adicionamos métodos a objetos assim

```javascript
let user = {
    name: 'Jobson', // atribuímos a propriedade name a string Jobson
    age: 31,
    city: 'Joinville',
    blogPosts: ['torta de chocolate', 'salada cesar']
    login: function () {  // assim
        console.log('Usuário logado')
    }
}
```
- Para invocar um método basta usar a notação de ponto com o nome do método e parenteses: `user.login()`
- Funções criadas dentro de um objeto sao métodos e funções criadas fora de um objeto sao funções

# Aula 02

## Aula 02-01 - Correção dos exercícios da última aula

## Aula 02-02 - Variáveis e escopo de bloco

- Blocos de código sao pequenas partes de código executas em contextos específicos (eg apos if e dentro de loops)
- **Escopo é a area em que o valor de uma variável está disponível pra gente**
- Quando declaramos uma variável no fluxo principal do documento essa variável estará disponível no escopo global (em qualquer lugar do arquivo)
- Podemos alterar os valores de variáveis (através de reatribuição) no escopo global mas não podemos recriá-las
- Quando entramos em um bloco de código elas ficam disponíveis no escopo local e só ali
- Podemos até recriar variáveis já criadas no escopo global dentro de blocos
- Vars ignoram escopo de bloco, possuem escopo global

```javascript

let age = 31

if (true) {
    let age = 41
    let name = 'Roger'

    console.log(`dentro do 1o bloco de código: ${age} ${name}`)  //41 roger

    if (true) {
        let age = 51
        console.log(`dentro do 2 bloco de código? ${age}`)  // 51
        var test = 'oi'
    }
}

console.log(`fora do bloco de código: ${age} ${name}`) // 31, name nao aparece pois nao esta disponível fora do bloco de código em que foi definida (eh uma variável local)

console.log(`${test}`) // oi, porque vars sempre tem escopo global
```

## Aula 02-03 A palavra-chave this

- `this` referencia o objeto em que esta sendo usado
- e um objeto de contexto, representa o contexto no qual o código atual esta sendo executado
- seu valor muda dependendo do local em que e usado
- quando usado no fluxo principal, `this` referencia o objeto 'window'
- quando usado dentro de algum objeto, `this` referencia o próprio objeto
- Em arrow functions, o `this` referencia o **local de invocação** do função/método
- Em function declarations, o `this` referencia o contexto de **definição** da função/método

```javascript
let user = {
    name: 'Joao',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'Sao Paulo',
    blogPost: ['Empadao de frango', '4 receitas de pure de batata'],
    login: function () {
        console.log('Usuario logado')
    },
    logout: function() {
        console.log('Usuario logado')
    },
    logBlogPosts: functions () { // uso de function declaration aqui e intencional! 
        // console.log(this.blogPosts) // referencia user
        console.log(`${this.name} escreveu os seguintes posts:`)
        
        this.blogPosts.forEach(post =>  {
            console.log(post)
        })
    }
}

user.logBlogPosts()
console.log(this) // referencia window
```

  - Não precisamos usar a sintaxe de `:` definição de métodos usando function declaration, podemos usar a chave imediatamente antes dos parenteses:

```javascript
let user = {
    logBlogPosts: functions () { // uso de function declaration aqui e intencional! 
        // console.log(this.blogPosts) // referencia user
        console.log(`${this.name} escreveu os seguintes posts:`)
        
        this.blogPosts.forEach(post =>  {
            console.log(post)
        })
}
```
 E equivalente a:

 ```javascript
 let user = {
     logBlogPosts () { // uso de function declaration aqui e intencional! 
        // console.log(this.blogPosts) // referencia user
        console.log(`${this.name} escreveu os seguintes posts:`)
        
        this.blogPosts.forEach(post =>  {
            console.log(post)
        })
 }
 ```

 # Aula 03

 ## Aula 03-01 - Correção de exercícios

 ## Aula 03-02 - Objetos em arrays

 - Armazenar objetos dentro de arrays é algo possível e comum, basta separar os objetos por vírgulas como faríamos com qualquer outro valor:

```javascript

const posts = [
    { title: 'Empadao de frango', likes: 30 },
    { title: '4 receitas de pure de batata', likes: 50}
]
}
```

- Vamos mudar o objeto que criamos na última aula para usar um objetos ao invés de strings

```javascript

let user = {
    name: 'Joao',
    age: 31,
    email: 'joaocardoso@gmail.com',
    city: 'Sao Paulo',
    blogPost: [
        { title: 'Empadao de frango', likes: 30 },
        { title: '4 receitas de pure de batata', likes: 50}
    ],
    login: function () {
        console.log('Usuario logado')
    },
    logout: function() {
        console.log('Usuario logado')
    },
    logBlogPosts: functions () { 
        console.log(`${this.name} escreveu os seguintes posts:`)
        
        this.blogPosts.forEach(post =>  {
            console.log(post.title, post.likes) // modificamos a funcao para acessar as propriedades title e likes 
        })
    }
```

## Aula 03-03 - O objeto Math

- O objeto `Math` vem de fábrica no JS e é bem útil

```javascript
// acessando o pi

Math.PI

// acessando e (base dos logs naturais)

Math.E

// para listarmos as props do obj

console.log(Math)

// alguns métodos úteis

const area = 7.7

console.log(Math.round(area)) // arredonda pra 8, se o decimal for >= 5 arredonda pra cima

Math.floor(area) // arredonda pra 7, floor sempre arredonda pra baixo

Math.ceil(area) // arredonda pra 8, ceil  sempre arredonda pra 9

Math.trunk(area) // retorna 7, trunk remove o decimal e retorna a parte inteira de um número
``` 
- Agora veremos um exemplo

```javascript
const randomNumber = Math.random() // retorna um número aleatório entre 0 e 1

Math.round(randomNumber * 100) // retorna um número aleatório entre 0 e 100
```

## Aula 03-04 - Tipos de referência vs Tipos primitivos

- Tipos primitivos são
  - Numbers
  - Strings
  - Booleans
  - Null
  - Undefined
  - Symbol
- Tipos de referência são tipos de objetos
  - Objetos literais
  - Arrays
  - Funções
  - Datas
  - Todos os outros objetos
- A diferença entre tipos primitivos e tipos de referência está em como eles são armazenados na memória
- Tipos primitivos são armazenados na memória numa estrutura chamada **stack**, que possui espaço limitado porém é rápida
- Tipos de referência são armazenados na memória em uma estrutura chamada **heap**, que tem mais espaço disponível do que a **stack** mas é mais lento
- Quando armazenamos um dado do tipo primitivo e referenciamos esse dado através do nome de sua variável, acessamos a stack diretamente
- Quando armazenamos um tipo de referência, o valor em si vai pro **heap** mas também é criado um ponteiro que vai pra **stack**. Esse ponteiro é a variável que aponta pro real dado
- Isso é importante porque:
  ```javascript
  let scoreOne = 50 // scoreOne é criado na stack
  let scoreTwo = scoreOne // scoreTwo é criada como um valor separado na stack
  scoreOne = 100 // O valor de scoreOne será atualizado e scoreTwo não será afetada pois é um valor independente na stack

  let userOne = {user: 'Roger', score: 100} // userOne eh armazenado no heap e seu pointer vai pra stack
  let userTwo = userOne // userTwo não é criada como um valor independente no heap! é criada apenas uma cópia do ponteiro de userOne que recebe um novo rótulo e que aponta pro mesmo valor no heap
  userOne.score = 50 // Na prática, isso significa podemos alterar o objeto na heap ambos os pointers vão refletir essa mudança
  console.log(userTwo.score) // imprime 50 pois o valor no heap foi atualizado
  ```