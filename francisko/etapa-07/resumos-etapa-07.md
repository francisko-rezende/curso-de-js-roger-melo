# Aula 01

## Aula 01-01 - Correção dos exercícios da última aula

## Aula 01-02 - Uma introdução ao Bootstrap

- O bootstrap é uma biblioteca de componentes frontend
- Componentes são elementos e partes da interface do usuário que podem ser reutilizadas
- Esses componentes no auxiliam com o design dos nossos apps, podemos fazer um app com uma interface interessante e focar no JS
- Apesar de ter JS também, só utilizaremos CSS
- Podemos usar nossas próprias classes pra complementar o bootstrap
- A forma mais rápida de usar o bootstrap é através da sua CDN (content distribution network)
- Para isso, basta adicionar a seguint tag no `head` do HTML do app

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
```
- Daí em diante podemos usar as classes CSS do bootstrap no app
- Linkamos nosso próprio arquivo CSS após linkar o bootstrap pra usar nossas próprias classes
- Os componentes do bootstrap disponibiliza estão no [site do framework](https://getbootstrap.com/)

## Aula 01-03 - Template HTML e checando as respostas

- O [repositório do projeto](https://github.com/roger-melo-treinamentos/quiz-interativo) já contém um boilerplate incial que inclui o HTML e o CSS. Portanto, podemos focar no JS
- O primeiro passo para implementação do quiz é criar um array que vai conter as respostas das perguntas

```javascript
const correctAnswers = []
```
- No caso do código do boilerplate, todas as repostas corretas contém o valor "B", ou seja, todas a resposta de todas as perguntas é a segunda alternativa
- Portanto, vamos adicionar quatro Bs no array

```javascript
const correctAnswers = ['B', 'B', 'B', 'B']
```
- Com o array criado, vamos usar adicionar um eventListener ao form para escutar quando o form for enviado

```javascript
const form = document.querySelector('.quiz-form')

form.addEventListener('submit', event => {
    event.preventDefault()
})
```

- O próximo passo é criar uma pontuação para o usuário baseado em suas respostas
  - Para obter essa pontuação, precisamos saber quais alternativas o usuário marcou
  - Acessamos essa informação através da propriedade com o `name` ou `id` do input de cada questão 
  - Por exemplo, a primeira questão é acessada usando a propriedade `form.inputQuestion1`, que retorna um `RadioNodeList`
  - O `RadioNodeList` retornado tem as referências dos `inputs` contidos nas questôes (as opções que o usuário pode selecionar) e uma propriedade `value`, que contém o valor da opção marcada
  - Então, para obter o valor da opção marcada na primeira questão, usamos `form.inputQuestion1.value`, que retorna 'A'
  <!-- - Podemos obter essa informação acessando o valor dos inputs das divs em que cada questão está codada
  - Por exemplo, para acessar a opção marcada pelo usuário na primeira questão usamos `form.inputQuestion1.value` -->
  - Para acessar o valor de outras questões basta substituir `inputQuestion1` pelo `id` ou `name` do input da questão desejada
  - Vamos colocar as respostas marcadas pelo usuário no array `userAnswers`

```javascript
form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
})
```
- Com as respostas do usuário em mãos, o próximo passo é compará-las com a resposta correta das perguntas
  - Para fazer essa comparação, podemos iterar pelo array de respostas e verificar se o item da iteração atual é igual ou diferente do item correspondente do array de respostas
  - Para cada acerto, vamos fazer a variável `score` receber todo o valor que ela já tinha mais 25, que é o resultado de 100 (a pontuação máxima) dividido por 4 (o número de perguntas do quiz)
  - 
  
  ```javascript
  userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === correctAnswer[index]) {
          score += 25
      }
  })
  ```

- O código final fica assim

```javascript
const form = document.querySelector('.quiz-form')

const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
})
```