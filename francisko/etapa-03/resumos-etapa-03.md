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