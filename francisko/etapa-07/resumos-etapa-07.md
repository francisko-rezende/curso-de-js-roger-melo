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

# Aula 02

## Aula 02-01 - Exibindo a pontuação

- Vamos exibir a pontuação entre os dois títulos do quiz
- Inciamos o processo pela marcação HTML

```html
<div class="result py-4 d-none bg-light text-center">
    <div class="container lead">
        <p>Você acertou <span class="text-primary display-4 p-3">0%</span>
        do quiz!
        </p>
    </div>
</div>
```
- A classe `.result` vai ser usada para obtermos a referência do div
- A classe `.py-4` implica que estamos adicionando um padding no eixo y
- A classe `.d-none` faz com que a div tenha um display none
- A classe `.bg-light` estiliza o fundo da div
- A classe `.text-center` centraliza o texto dentro da div
- A classe `.container` mantém o elemento em uma posição central da página
- A classe `.lead` estiliza o texto dentro desse elemento
- O `span` tem algumas classes que o estilizam e dentro dele vai a porcentagem de acertos do usuários
- Essas classes estão explicadas nos docs do bootstrap
- Como a div recebe display none, quando o form for enviado precisamos adicionar o valor dessa porcentagem ao span e exibir essa div
- Então, iremos manipular essa div como estamos acostumados a fazer: declaramos uma const que vai receber a referência da div

```javascript
const finalResult = document.querySelector('.result')
```

- Daí usaremos essa referência para obtermos a referência do span encadeando querySelector na finalResult e, como queremos mudar o text do span, encadeamos também textContent

```javascript
finalResult.querySelector('span').textContent = `${score}%`
```
- O último passo é remover a classe `.d-none`

```javascript
finalResult.classList.remove('d-none')
```

- Juntando tudo (inclusive o que criamos na aula anterior) fica

```javascript
const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']


form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion3.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswer[index]) {
            score += 25
        }
    })

    finalResult.querySelector('span').textContent = `${score}%`
    finalResult.classList.remove('d-none')
})
```

## Aula 02-02 - setTimeout() e o objeto window

- A solução para exibir a pontuação do usuário mostrada acima tem um problema: os pontos acabam aparecendo na parte superior da tela e podem passar desapercebidos caso o usuário acesse a aplicação em uma tela pequena e role a página para responder às últimas perguntas
- Para solucionar esse problema, vamos rolar a tela pro topo automaticamente usando um método do objeto `window`
- `window` é o objeto que existe no escopo global de aplicações JS quando trabalhamos no frontend/browser (no backend, usando node, o objeto global se chama `global`)
- Se digitarmos `window` no console e pressionarmos enter, vemos todas as propriedades do window, que são muitas!
- Por exemplo, a prop `window.outerWidth` retorna a largura atual da janela
- Quando queremos acessar propriedades do objeto `window` não precisamos chamar o objeto explicitamente, o que significa que `window.outerWidth === outerWidth`
  - Um outro exemplo disso é o `console.log()`, que é na verdade vem de `window.console.log()`, assim como o objeto `document` e seus métodos
  - De maneira geral, sempre que vermos propriedades ou métodos que não declaramos sendo usados, essas props ou métodos vêm do objeto window
- Veremos um outro método do `window`, o `setTimeout()`
  - Esse método executa uma função depois de um determinado tempo e recebe dois argumentos: a função que será executada e o o tempo até a execução da função em milisegundos
  - Por exemplo, para exibir um alert depois de dois segundos, fazemos o seguinte

    ```javascript
    setTimeout(() => {
        alert('executou')
    }, 2000)
    ```
- Para rolar a página para o topo, usaremos o método `scrollTo`, quer recebe as coordenadas X e Y do que deve aparecer no canto superior esquerdo da tela
- Ou seja, `scrollTo(0, 100)` rola a página para o pixel 0 no eixo X o 100o pixel de cima pra baixo no eixo Y
- O código já com essa estratégia implementada fica assim

```javascript
const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']


form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion3.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswer[index]) {
            score += 25
        }
    })

    scrollTo(0, 0)

    finalResult.querySelector('span').textContent = `${score}%`
    finalResult.classList.remove('d-none')
})
```
## Aula 02-02 - setInterval() e animação da pontuação

- Nessa aula, animaremos a pontuação do usuário. A pontuação irá de 0 até a pontuação final rapidamente
- Usaremos o `setInterval()` para isso
  - Esse método recebe uma função e um intervalo de tempo em milisegundos
  - Ele executa a função do primeiro argumento a cada intervalo setado no segundo argumento
- Usaremos o `setInterval()` para aumentar a pontuação de 0 até a pontuação do usuário
- Porém, esse método não para por padrão, temos que codar uma forma de fazer com que a contagem pare
- Criaremos uma `counter` antes de iniciar o `setInterval`, que será armazenado em uma constante e logo abaixo vamos adicionar um condicional que executará `clearInterval()`, que é uma função que para a execução do `setInterval()`
- Para que o `clearInterval()` pare um `setInterval()`, precisamos passar o ID único do setInterval que queremos parar como argumento para o `clearInterval()`. Obtemos esse ID setando uma const que recebe a invocação do setInterval e então podemos passar essa const como argumento para o `clearInterval`
- Segue um exemplo

```javascript
let counter = 0  // setamos o valor inicial do counter

const timer = setInterval(() => {  //setamos o setInterval e armazenamos seu valor na const timer
    console.log('1 segundo se passou')  // A funcao eh executada a cada segundo, exibindo a mensagem no console 
    counter++ // incrementando o valor da counter

    if (counter === 5) { // se counter for 5, o clearInterval para a execução do setInterval
        clearInterval(timer)
    }
}, 1000)
```
- Implementamos esse counter no código do quiz assim

```javascript
const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']


form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion3.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswer[index]) {
            score += 25
        }
    })

    scrollTo(0, 0)

    
    finalResult.classList.remove('d-none')

    let counter = 0  // criamos o counter que recebe 0

    const timer = setInterval(() => {  // invocamos e armazenamos o id do setInterval, que executara a funcao a cada 10 milisegundos
        if (counter === score) {  // se o counter for igual a pontuacao do usuario o setInterval eh cancelado
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)
})
```
- Substituímos  `finalResult.querySelector('span').textContent = ${score}%` por `finalResult.querySelector('span').textContent = ${counter}%` pois se usássemos "score" o valor final seria exibido logo de cara ao invés de aumentar como queríamos que acontecesse
