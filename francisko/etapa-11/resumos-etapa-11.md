# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - Código assíncrono em JS

- Entender operações assíncronas implica em entender como o JS executa operações que levam um certo tempo para serem concluídas
- Alguns exemplos são buscar dados em uma API ou em um banco de dados
- É bem provável que as aplicações que você vai construir irão executar operações assíncronas
- Então, operações assíncronas são códigos que iniciam processos agora e finalizam esses processos posteriormente
- Tá, mas e o que é código síncrono?
  - Em JS, isso quer dizer que o código é executado de forma sequencial cima pra baixo, uma linha por vez
  - Isso é um outro nome pro fato do JS ser uma linguagem single-threaded
- O problema de linguagens síncronas é que, se uma das intruções demora a ser executada (como uma requisição a um banco de dados), o resto do código é bloqueado até que essa execução seja concluída
- A instrução que custa a ser executada é chamada de *blocking code*
- Código assíncrono nos permite contornar esse problema
- Normalmente o código assíncrono usa callbacks que são executadas no final da thread, quando a ação do código assíncrono já obteve os dados da requisição
- Esse processamento é feito em outra parte do browser

## Aula 01-03 - Código assíncrono na prática

- Segue um exemplo simples de código assíncrono: todos os console.log são executados normalmente, o setTimeout manda a sua callback para outro lugar no browser e essa callback só é executada quando as demais linhas tenham sido executadas

```javascript
console.log(1)
console.log(2)

setTimeout(() => {
  console.log('função de callback executada')
  }, 2000)

console.log(3)
console.log(4)
```
## Aula 01-04 - O que são requests HTTP

- Requests HTTP demoram um tempo para serem executados, 
- Vão ter momentos que precisaremos exibir informações que estão guardadas em outro lugar como um servidos ou banco de dados ou uma API
  - API = application programming interface
  - são ferramentas para que sistemas se comuniquem
- Fazemos requisições HTTP para realizar a conexão com esse outro lugar
- Requisições são pedidos ou solicitações e HTTP é um protocolo de comunicação entre computadores
- Essas requisições são feitas para *end-points*, que mandam a resposta para nossa requisição (ou não)
- Daí nosso browser faz alguma coisa como exibir as informações da resposta na tela
- Normalmente essas respostas vem em formato JSON (javascript object notation)
- Usaremos a [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para treinar fazer requisições

# Aula 02

## Aula 02-01 - Correção dos exercícios da aula anterior

## Aula 02-02 - Correção dos exercícios da aula anterior (continuação)

## Aula 02-03 - Fazendo requests HTTP

- Iniciamos nosso request criando um objeto xlmhttprequest
- Em seguida, abrimos o request através do método `open()`, que recebe uma string informando o tipo de request queremos fazer (eg, GET, PUT) e o endpoint para o onde queremos mandar a request
- Para de fato enviar o request, usamos o método `send()`
- Os passos até esse ponto não nos informam em que pé anda a requisição que acabamos de fazer. Para conseguir mais informações sobre a requisição (se a resposta foi obtida ou não, por exemplo e começar a acessar os dados dessa resposta), trackeamos o processo da requisição através de um event listener chamado "ready state change"
- Esse eventListener vai logo depois de criarmos o xlmhttp object
- Dentro desse eventListener temos acesso à propriedade `readyState`, que informa o estado da requisição da seguinte forma 

| Value |       State      |                          Description                          |
|:-----:|:----------------:|:-------------------------------------------------------------:|
| 0     | UNSENT           | Client has been created. open() not called yet.               |
| 1     | OPENED           | open() has been called.                                       |
| 2     | HEADERS_RECEIVED | send() has been called, and headers and status are available. |
| 3     | LOADING          | Downloading; responseText holds partial data.                 |
| 4     | DONE             | The operation is complete.                                    |

- Testamos se `readyState` é 4 pois é só nesse estado que podemos fazer algo com a resposta
- Agora só falta entender os status http das respostas das nossas requisições, o que veremos na próxima aula

```javascript
const request = new XLMHttpRequest()
request.addEventListener('readystatechange', () => {
  if (request.readyState === 4) {
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
```

## Aula 02-04 - Status de respostas HTTP

- Apenas a checagem que realizamos na aula anterior não é suficiente pois caso haja algum erro no request (como se inserirmos um endpoint inválido), a requisição ainda pode chegar no status 4
- Portanto, precisamos dar um passo extra, que é verificar o status da requisição
- Acessamos esse status através da propriedade `status` (mais informações sobre o [significado de cada status no MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status))
- Então adicionamos mais uma checagem no nosso if: `request.status === 200`, que é um status que indica que a request foi bem sucedida

```javascript
const request = new XLMHttpRequest()
request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
```