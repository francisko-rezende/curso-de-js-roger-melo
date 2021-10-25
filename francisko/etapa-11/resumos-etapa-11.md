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

  if (error) {
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
# Aula 04

## Aula 04-01 - Correção dos exercícios da última aula

## Aula 04-02 - Correção dos exercícios da última aula

## Aula 04-03 - Introdução a promises

- Conforme foi dito na aula anterior, aninhar diversas callbacks de requests não é uma boa prática pois torna o código difícil de entender e de manter
- Usamos promises para evitar esse padrão
- Criamos promises assim `new Promise()`
- **Promises são objetos que representam o sucesso ou a falha de uma operação assíncrona**
- Normalmente consumimos promises geradas por alguém ou por uma biblioteca
- Ainda assim veremos como rola o processo de criação de promises por baixo dos panos
- `new Promise()` cria uma nova promise, que pode ter dois resultados: resolved ou rejected
  - resolved significa que os dados que queríamos foram obtidos
  - rejected significa que algum erro aconteceu e a promise foi rejeitada
- Então, o construtor deve receber uma função que recebe dois parâmetros, resolve e reject `new Promise((resolve, reject) => {})`
- Esses dois parâmetros são funções embutidas da API de promises que recebemos como parâmetros na função
- Apesar de podermos usar outros nomes para esses parâmetros, nomeá-los como resolve e reject é um convenção e portanto é bom seguir
- Geralmente buscamos os dados dentro da função através de requisições e quando essa busca é bem sucedida, invocamos a função resolve e passamos os dados como argumento
  - Ou seja, a resolve é invocada quando a operação assíncrona for bem sucedida
- Se a requisição for mal sucedida, reject é invocada
- Então se usarmos o código abaixo, obtemos uma promise com o estado fulfilled, o que significa que operação foi bem sucedida
- Para acessar os dados encapsulados na promise, usamos o método `then()`
  - Fica assim `getData().then()`
- O `then()` recebe uma função como argumento, que por sua vez recebe um parâmetro `value` que recebe o valor que é passado como argumento do `resolve` (no caso `'dados aqui'`)
- Então o snippet abaixo exibe 'dados aqui' no console

```javascript
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('dados aqui')
  })
}

getData()
  .then(value => {
    console.log(value)
  })
```
- E como ocorre o tratamento de erros em promises?
- Usando o método `catch()`, que é encadeado no `then()`
- É com esse método que determinamos o que fazer quando o resultado da operação não for um sucesso
- O catch só é executado em duas situações
  - Quando a função `reject`, dentro da função da criação da promise é invocada
  - Quando código dentro de algum `then()` lança um erro
- Assim como `resolve()`, o que for passado como argumento para `reject()` na criação da promise vai ser repassado como argumento para a callback que vai como parâmetro no `catch()`

```javascript
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('dados aqui')
    reject('erro aqui')
  })
}

getData()
  .then(value => console.log(value))
  .catch(error => console.log(error))
```
- Agora que a sintaxe de criação de promises está explicada, vamos mudar a função `getTodos` para que ela retorne uma promise

```javascript
const getTodos = url =>  new Promise((resolve, reject) => {
  const request = new XLMHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 4
    if (isRequestOK) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }
  
    if (isRequestNotOK) {
      reject('Não foi possível obter os dados')
    }
  })
  
  request.open('GET', url)
  request.send()
})

getTodos('https://pokeapi.co/api/v2/pokemon/1')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error))
```

## Aula 04-04 - Encadeando promises

- Podemos encadear promises e assim fazer operações assíncronas sequenciais
- Para fazer essas operações assíncronas, retornamos a invocação da função `getPokemon()` (antiga `getTodos()`) dentro do `then()`
- Como estamos retornando uma promise precisamos usar mais um `then()` para acessar os dados encapsulados na promise
- Portanto vamos encadear um outro `then()` no `then()` inicial
- Esse segundo then vai receber uma callback como parâmetro que vai receber os dados da segunda promise
- Baste repetir esses passos para encadear quantas operações forem necessárias
- Lembrando que o `catch()` vai ser invocado caso o reject (lá da função de criação da promise) for invocada ou se qualquer uma das invocações de `then()` seja mal sucedida
- Ou seja, apenas um `catch()` é o suficiente para lidar com erros
- No caso do último `then`, como só estamos exibindo os dados no console, podemos passar apenas `console.log` como argumento para o `then`

```javascript
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(console.log) // antes era squirtle => console.log(squirtle)
  .catch(error => console.log(error))
```

```javascript
const getPokemon = url =>  new Promise((resolve, reject) => {
  const request = new XLMHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 4
    if (isRequestOK) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }
  
    if (isRequestNotOK) {
      reject('Não foi possível obter os dados')
    }
  })
  
  request.open('GET', url)
  request.send()
})

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur)
    getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander
    getPokemon('https://pokeapi.co/api/v2/pokemon/7)
  })
  .then(console.log)
  .catch(error => console.log(error))
```

# Aula 05

## Aula 05-01 - Correção dos exercícios da aula anterior

## Aula 05-02 - Correção dos exercícios da aula anterior

## Aula 05-03 - A fetch API

- A fetch API é uma interface nativa do JS que nos permite fazer requests HTTP escrevendo menos do que escreveríamos usando objetos xlmhttp
-  Ela usa promises por baixo do panos, o que facilita escrever código tanto pra quando as requests dão certo quanto pra quando as requests dão errado
- Para usar essa API, usamos a função `fetch('endpoint')`, que recebe o endpoint para o qual queremos fazer o request e obtemos a resposta com os dados
- Essa invocação retorna uma promise
  - Lembrando que promises têm dois resultados possíveis: resolved (dados foram obtidos) e rejected (deu algum bizú e a promise foi rejeitada)
- Então encadeamos os métodos que são usados pra tratar promises
  - usamos `then()` para acessar os dados das promises bem sucedidas
  - usamos `catch()` para acessar os dados das promises mal sucedidas
- Aqui, o catch continua mandando uma resposta ainda que o request tenha sido mal sucedido, isso fica claro nos valores das propriedades do objeto retornada
- Isso rola porque a fetch só rejeita a promises devido a erros de conexão na rede, problemas na url continuam retornando um objeto response
- Pra lidar com isso podemos checar se o status do response é 200 e só então fazer algo com os dados ou com erro (caso o status seja 404 por exemplo)
- Se rolar um erro na rede, aí o catch vai ser executado direto
- O objeto response é criado pela fetch e dá várias informações sobre a request, como o status, se deu tudo certo (ok), e a url. **Ele não mostra os dados** retornados
- Esse objeto tem um método `json`, que usamos pra obter os dados, algo como o quer fizemos usando `JSON.parse()`
- Esse método gera uma promise, então retornamos essa promise como resultado do primeiro `then()` e em seguida encadeamos outro `then()`
- Assim, sabemos que o valor da promise resolvida que o primeiro `then()` retorna vai ser recebido pelo segundo `then()`

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => console.log(error))
```

## Aula 05-04 - Async/await

- Async/await é um tipo de syntax sugar que usam promises por baixo dos panos e reduzem ainda mais nosso código
- Além de ser mais sucinto, o código escrito usando essas palavras chave é lido como se fosse síncrono
- No código da aula anterior nós encadeamos promises, o que dificulta a leitura e manutenção de código escrito assim
- Quando usamos async/await, setamos nosso código assíncrono dentro de funções e usar a palavra *await* dentro dessa função pra lidar com promises de uma forma mais legível
- Assim, evitamos configurar explicitamente o encadeamento de promises
- O primeiro passo para usar esse padrão é declarar uma função e usar a palavra *async* antes dessa função
- Isso torna essa função assíncrona, o que significa que quando ela for invocada ela vai retornar uma promise independente do seu conteúdo
- Essa função vai executar nosso código assíncrono, vamos fazer um request e obter os dados como resposta desse request sem que a página precise ser recarregada
- Pra isso usaremos o fetch api e antes dessa invocação inserimos a palavra-chave *await*
- Essa invocação será atribuída à constante "response"
- *await* só pode ser usada dentro de funções assíncronas (criadas usando `async`)
- Quando usamos esse padrão, o código abaixo da requisição (do `fetch`) só vai ser executado quando a resposta da requisição chegar
- Ou seja, a await pausa a execução do resto da função até que a resposta da invocação do fetch for resolvida
- Encadeamos o método `json` para obter os dados da resposta do request
  - Novamente, esse método pega a promise resolvida e parseia o conteúdo dessa promise para um array de objetos *mas* acaba retornando outra promise. E agora José?
- Armazenaremos esses dados na const "users" que recebe `await response.json()`
- Usamos esse outro `await` pois `response.json()` retorna uma promise com a resposta parseada em um array de objetos e quando esse promise for resolvida, o `await` atribui para a const *users* o valor resolvido da promise (ou seja, o array de objetos)
- Lembrando, funções assíncronas retornam uma promise com os valores retornados pela função encapsulados
- Para usar esses valores podemos ou encadear um `then()` ou declarar uma outra função async que contém uma const com a declaração da `getUsers()` com um await na frente da declaração já que `getUsers()` retorna uma promise

```javascript
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return users
  // também pode ser return await.json()
}
```

# Aula 06

## Aula 06-01 - Correção dos exercícios da aula anterior

## Aula 06-02 - Correção dos exercícios da aula anterior

## Aula 06-03 - Requests paralelos vs. Sequenciais

- Esse código

```javascript
const getPokemon = async () => {
  const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  const squirtle = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle')

  console.log(await bulbasaur)
  console.log(await charmander)
  console.log(await squirtle)
}

getPokemon()
```
- Gera requests HTTP *sequenciais*, os fetchs mais abaixo só são executados quando os fetchs acima são resolvidos
  - Lembrando que o await pausa a execução das linhas abaixo dele enquanto a promise não for resolvida ou executada
- O lance é que, nesse caso, esses requests não precisam ser sequenciais já que um request não depende de informações do outro
- Para tornar esses requests paralelos, começamos removendo os *await*s das *fetch*, o que faz com que os requests não ocorram praticamente ao mesmo tempo
- Para obter os valores das promises que são os objetos dos requests usamos `Promise.all()`. Esse método recebe um array de promises e, quando essas promises forem resolvidas, ele retorna uma única promise que contém um array com os valores das promises resolvidas
- Se alguma promise recebida pelo `Promise.all()`, o método retorna uma promise rejeitada, que contém a mensagem e o erro que causou a rejeição
- Então, inserimos um await antes do `Promise.all()` para que possamos acessar o conteúdo encapsulado na promise desse método e armazenamos isso tudo numa constante
- Essa constante recebe um array com as respostas, para visualizar o conteúdo dessas respostas, encadeamos o método `forEach`
- Esse `forEach` recebe uma callback assíncrona com um `await` antes da invocação de um `console.log()`, que, por sua vez, recebe cada uma das respostas com o método `json()` encadeado
  
```javascript
const getPokemon = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/squirtle')

  const responses = await Promise.all([bulbasaur, charmander, squirtle])
  responses.forEach(async response => console.log(await response.json()))
}

getPokemon()
```
## Aula 06-04 - Tratando erros com try/catch

- Devido a sua natureza síncrona, erros em JS podem fazer com que a execução da sua aplicação pare completamente
- Podemos usar try/catch, que é uma cláusula que tenta executar um código e, se ocorrer algum erro, ela passa o erro para o part 'catch' e continua executando o código
- Podemos usar as informações obtidas no catch para tratar o erro ocorrido
- Objetos de erro têm as propriedades `name` e `message`, que armazenam o nome e a mensagem do erro
- Usamos essa cláusula quando queremos fazer algo com o objeto de erro
- O try/catch exige mais recursos do que ifs portanto é importante usar try/catch com cautela

```javascript
try {
  console.log(oi)
} catch (error) {
  if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
    const oi = 'const oi criada'
    console.log(oi)
  }
}
console.log('oi')
```

## Aula 06-05 - Try/catch em requests e erros personalizados

- Começamos refatorando o código abaixo

```javascript

```
- Fica assim

```javascript
const getUsers = async () => {
  return await 
    (await (fetch('https://jsonplaceholder.typicode.com/users')))
    .json()
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()
```
- Se estivéssemos usando `then()`, encadearíamos `catch()` para tratar erros mas como funções assíncronas simulam código síncrono, vamos usar try/catch
- Então movemos o código que esperamos que rode pra dentro do try
- No catch nós apenas vamos logar potenciais erros
- Um possível problema com esse padrão é o fato da fetch só retornar erros quando há problemas de conexão
- Por conta disso, erros no path acabam sendo interpretados como erros no parseamento do arquivo json
- Para evitar esse problema, checamos o status do request (se o status é 200)
- Uma forma que ainda não vimos de fazer isso é através da propriedade `ok`, da propriedade `status` do request. Essa propriedade armazena um boolean que indica se o status do request está entre 200 e 299, que são os status que indicam que tudo correu bem com o request
- Então, dentro desse if lançamos um erro: `throw new Error()`
- Isso faz com que qualquer código abaixo desse seja ignorado e o erro seja passado como parâmetro pro catch e o bloco do catch é executado
- *Quando lançamos erros precisamos de um catch para lidar com esse erro*
- O `Error` é um tipo de erro genérico mas podemos usar outros erros mais específicos
- O MDN tem mais informações sobre tipos de erro 
- Podemos inserir uma mensagem como argumento no `Error` explicando o que rolou, assim temos erros personalizados e sem travar o código