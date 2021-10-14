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

# Aula 03

## Aula 03-01 - Correção dos exercícios da aula anterior

## Aula 03-02 - Correção dos exercícios da aula anterior

## Aula 03-03 - Funções de callback

```javascript
const getTodos = callback => {
  const request = new XLMHttpRequest()
  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 4
    if (isRequestOK) {
      callback(null, request.responseText)
      return
    }
  
    if (isRequestNotOK) {
      callback('Não foi possível obter os dados', null)
    }
  })
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos((error, data) => {
  console.log('Callback executado')

  if (erro) {
    console.log(error)
    return
  }

  console.log(data)
})
```

## Aula 03-04 - Trabalhando com JSON

- JSON é um acrônimo para JavaScript Object Notation e é um formato para troca de dados que a maioria das apis retornam quando um request é feito pra elas
- Ele parece um array com vários objetos mas **NÃO É**
- Ele é uma string que se parece com um array de objetos JS
- Ele precisa ser uma string porque quando rola troca de informações entre computadores e servidores, as informações trocadas precisam ser strings
- Então o primeiro passo para trabalhar com JSON é converter os dados recebidos em objetos a fim de acessar esses dados
- Para essa conversão usamos um objeto embutido em JS chamado `JSON`
- Vamos continuar usando o código da aula anterior e vamos passar os dados recebidos caso o request tenha sido bem sucedido para o método `parse`
- Em seguida passamos esse novo objeto para a nossa callback

```javascript
const data = JSON.parse(request.responseText)
callback(null, data)
```
- Também podemos criar nossos próprios arquivos JSON, basta usarmos a extensão ".json"
- Daí podemos editar o arquivo usando o VSCode
- Lembrando que precisamos seguir o padrão de escrita de JSON, isso é, colocar objetos dentro de um array e usar aspas duplas para nomes de propriedades e strings
- Para declarar outros objetos JSON é igual a JS, basta adicionar uma vírgula e digitar o objeto
- Segue um exemplo

```json
[
  {
    "myKey": "My key value",
    "myKey2": 7
  },
  {
    "myKey": "Other value",
    "myKey2": true
  },
  {
    "myKey": "Another value",
    "myKey2": null
  }
]
```
- Para ler esse arquivo, colocamos o path para esse arquivo ao invés do do endpoint no `.open()` do request HTTP

```javascript
request.open('GET', './todos.json')
```

```javascript
const getTodos = callback => {
  const request = new XLMHttpRequest()
  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 4
    if (isRequestOK) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
  
    if (isRequestNotOK) {
      callback('Não foi possível obter os dados', null)
    }
  })
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos((error, data) => {
  console.log('Callback executado')

  if (erro) {
    console.log(error)
    return
  }

  console.log(data)
})
```

## Aula 03-05 - Callback Hell (Pyramid of Doom)

- Até então fizemos um request e obtivemos um arquivo, mas e se tivéssemos mais arquivos pra passar por esse processo?
- É comum criar uma fila de requests quando usamos mais de uma API, podemos esperar o resultado de uma determinada API para usarmos os dados obtidos em outro request
- Como a callback que implementamos na aula anterior já nos informa se a request deu certo ou não, não haverá problemas em determinar se podemos partir pro próximo request
- Vamos modificar a função `getTodos` de modo que ela receba um argumento que informe qual o endpoint que o `open` vai receber
- Então, dentro da callback que a `getTodos` recebe vamos invocar `getTodos` de novo
- Essa sequência de invocações resulta nos dados do primeiro request sendo exibidos primeiro e só então o próximo request vai ser executado
- No exemplo, fazemos o processo que acabei de descrever de novo para executar um terceiro request com base nos dados obtidos do segundo request
- Esse padrão é conhecido como callback hell ou pyramid of doom por conta da identação triangular e pela falta de legibilidade do código
- Portanto é bom evitar esse padrão

```javascript
const getTodos = (url ,callback) => {
  const request = new XLMHttpRequest()
  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 4
    if (isRequestOK) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
  
    if (isRequestNotOK) {
      callback('Não foi possível obter os dados', null)
    }
  })
  
  request.open('GET', url)
  request.send()
}

getTodos('./todos.json', (error, data) => {
  console.log(data)
  getTodos('./todos copy.json', (error, data) => {
    console.log(data)
    getTodos('./todos copy 2.json', (error, data) => {
      console.log(data)
    })
  })
})
```
