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