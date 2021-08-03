# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - O que são funções

- Fazem parte to tipo `object` e seu principal papel é criar um bloco de código que podemos usar quando quisermos
- Após criar a função basta invocá-la sempre que quisermos usá-la
- Isso é super útil pois podemos reutilizar o mesmo pedaço de código em vários locais diferentes quantas vezes quisermos escrevendo esse código só uma vez
- Também podemos criar funções que aceitam valores e devolvem algum output (eg, uma função que converte coordenadas geográficas em endereços)

## Aula 01-03 - Function *declaration*, function *expression* e hoisting

- Para criar uma função usando o método **function declaration**, usamos a palavra-chave `function` seguida do nome que queremos dar para a função
- Para criar uma função usando o método **function expression**, declaramos uma variável que recebe a palavra chave `function`
- Para chamar/executar/invocar uma função, usamos o nome da função seguido por `()`

```javascript
// function declaration
function sayHi () {
    console.log('oi')
}

// function expression
const showFood = function () {
    console.log('pizza')
}

// calling functions
sayHi()
showFood()
```
- Hoisting/içamento é quando o JS "puxa" algum pedaço de código para o início do código por baixo dos panos
- Funções criadas usando function declaration **passam por hoisting**. Já funções criadas com function expression **não** passam por hoisting
- Depender de mecanismos que rolam por baixo dos panos não é legal pois isso acaba dificultando o *debugging* . Portanto, é melhor declarar as funções no início do nosso arquivo JS

## Aula 01-04 - Argumentos, parâmetros e default parameters

- Funções ficam ainda mais flexíveis quando elas recebem valores
- Esses valores são chamados de **argumentos** quando usados na invocação das funções
- Quando estamos declarando as funções, os placeholders que usamos são chamados de **parâmetros**
- 

```javascript
// Argumentos, parâmetros e default parameters
const myFunc = function(name, lastName) {
    console.log(`Oi, ${name} ${lastName}!`)
}

myFunc('Francisko', 'Rezende')  // logs 'Oi Francisko Rezende!
```
- Se não passarmos nenhum argumento para os parâmetros de uma função, esses parâmetros recebem `undefined`
- Para evitar isso podemos setar argumentos default dessa maneira

```javascript
const myFunc = function(name = 'Estrôncio', lastName = 'Almeida') {
    console.log(`Oi, ${name} ${lastName}!`)
}
```

## Aula 01-05 - Retornando valores

- Algumas vezes queremos que nossas funções transformem os valores que passamos pra elas para serem usados posteriormente
- Porém, o que acontece dentro do bloco das funções fica dentro dos blocos das funções
- Portanto, temos que usar `return` para fazer a função botar algo de seu bloco para fora
- Apenas retornar o valor não adianta muito, por isso é comum atribuir o que as funções retornam a variáveis

```javascript
const double = function(number) {
    return number * 2
}

const six = double(3)
```

# Aula 02

## Aula 02-01 - Correção de exercícios da aula anterior

## Aula 02-02 - Arrow functions

- Notação criada no es6 que costuma resultar em funções mais sucintas

```javascript
const double = (number) => {
    return number * 2
}
```

- Algumas coisas sobre arrow functions:
  - se a função recebe só um argumento os parênteses são opcionais
  - no entanto parênteses se tornam obrigatórios quando quremos setar um valor default
  - arrow functions sem argumentos têm parênteses vazios
  - Se o bloco de codigo de uma arrow function tiver só uma linha e retornar só um valor, o valor é retornado implicitamente portanto as chaves e o return não são necessários nesse caso

## Aula 02-03 - Funções vs Métodos

- Métodos e funções são quase sinônimos, o que os diferencia é como nós invocamos essas features
- para invocar funções, usamos o nome da função seguido por ()
- métodos são invocados usando a notação de ponto

```javascript
const name = 'Francisko'

const sayHi = () => 'oi'

const greet = sayHi() // invocando a função sayHi
console.log(greet)

// métodos
const nameInUpperCase =name.toUpperCase()
```
- então revisando: métodos são funções associadas a objetos ou tipos de dados (como strings) que são criados no próprio objeto ou tipo de dado
- então métodos e funções são muito parecidos, diferem em seus nomes e nas formas de criação e invocação

## Aula 02-04 - O método `forEach` e callbacks

- Podemos passar outras funções como argumentos para outras funções
- Essas funções (as que são passadas como argumentos) são chamadas de "callback"
- Segue um exemplo importante para o entendimento de como callbacks funcionam

```javascript
const myFunc = callback => {
    const value = 77

    callback(value)
}

myFunc(number => {
    console.log(number)
})

//77 vai pro console
```

- JS conta com um método semelhante a for loops chamado forEach:
```javascript
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach((socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
})
```
- forEach recebe uma callback function que, por sua vez, pode receber 3 parâmetros: cada elemento, o index, e o array que estã sendo iterado
- forEach permite desacoplar as callbacks, permitindo reutilizar a função e gerando oportunidade de tornar o código mais legível

## Aula 02-05 - Utilizando callbacks e exercícios

- Segue um exemplo de uso do `forEach` combinado com uma callback para a geração de HTML:

```javascript
const ul = document.querySelector('[data-js="ul"')

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

socialNetworks.forEach(socialNetwork => {
    HTMLTemplate += `<li style="color: deeppink;:>${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate
```