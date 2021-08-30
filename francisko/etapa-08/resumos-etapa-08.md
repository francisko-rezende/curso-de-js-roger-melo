# Aula 01

## Aula 01-01 - Correção dos exercícios da última aula

## Aula 01-02 - O método map

- O map é um método de array que pode ser usado para gerar um novo array com a mesma quantidade de elementos que o array original mas com cada item transformado
- O map percorre o array e transforma cada item usando uma função que passamos para o método e retorna o esses elementos modificados em um novo array
- O map pode receber 3 argumentos: `item`, `index` e `array`. Só o `item` é obrigatório
- Para que o map funcione, a callback que ele recebe sempre precisa retornar um valor
- Essa é a principal diferença entre o map e o forEach, o map retorna um array e forEach não
- Por exemplo, podemos usar o map para obter todos os elementos de um array dobrados

```javascript
const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(doubleNumbers)
```
- Também podemos usar o map para obter a metade dos items de um array de preços para uma promoção

```javascript
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)
```
- No exemplo abaixo iremos reduzir o preço de produtos que custem 30 ou mais pela metade

```javascript
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const sale = products.map(product => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    }

    return product
})
```
- Atenção!!! O map itera pelo conteúdo do array em que ele for chamado, o que significa que podemos alterar os valores do array original dependendo do conteúdo da callback! Por isso no exemplo acima, quando queremos modificar os preços, retornamos um novo objeto com os valore alterados ao invés de simplesmente alterar a propriedade price

```javascript
// usamos isso
return { name: product.name, price: product.price / 2 }

// e não isso
product.price = product.price / 2
return product
```

## Aula 01-03

- O filter, de forma similar ao map, recebe uma função como argumento e executa essa função para cada elemento desse array
- Usamos o filter quando, baseado em um array, queremos obter só alguns items do array original
- A função do filter **sempre** deve retornar um boolean. Se o resultado da invocação da callback em um determinado item do array em que o filter foi encadeado for `true`, esse item vai entrar no novo array que o `filter` retorna. Se o resultado for `false` o item não entra no novo array
- Por exemplo, se quisermos obter só os números maiores do que 37 de um array, fazemos o seguinte

```javascript
const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)
```
- Agora, queremos obter só os usuários premium do array abaixo

```javascript
const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)
```

## Aula 01-03 - O método reduce

- Assim como o `map` e o `filter`, o `reduce` também recebe uma função por argumento e executa essa função para cada item do array
- Ele é usado quando precisamos reduzir o array original a algum outro tipo de dado, como um objeto literal, uma string, um número e até mesmo outro array
- Portanto, o `reduce` tem poder e versatilidade para gerar outputs que não são arrays
- Vamos aos exemplos! Primeiro vamos obter a soma de todos os números de um array

```javascript
const numbers = [1, 2, 3]

const sumResult = numbers.result((accumulator, item) => accumulator + item, 0)
```
- Dois pontos essenciais sobre o `reduce`
  1. A callback **sempre** tem que retornar um valor
  2. Cada vez que o valor é retornado, o parâmetro accumlator recebe esse valor
- O `reduce` recebe dois argumentos, o callback e um outro valor. Esse outro valor/segundo argumento do método serve como primeiro valor do `accumulator`
- É uma boa prática explicitar esse valor inicial para termos uma representação explícita e visual do tipo de valor que obteremos após a execução do reduce
- Agora vamos pra outros casos de uso do reduce
- Abaixo, queremos obter a pontuação do Roger

```javascript
const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        accumulator += phaseScore.score
    }

    return accumulator
}, 0)
```
