  # Aula 01
  
  ## Aula 01-01 - Correção dos exercícios da aula anterior

  - Utilizar IDs no HTML tem um efeito colateral: eles geram variáveis no escopo global que contém a referência ao objeto da ID
  - Para evitar a declaração desnecessárias dessa variáveis, podemos restringir o uso de IDs para inputs ou para fazer ancoras na página
  - Daí usamos classes para estilizar elementos, ids para os casos acima, e atributos do tipo *data* para manipulação do DOM
  - No entanto, como o exercício conta com apenas um form não vamos usar o atributo data
  - Também removemos os IDs pra evitar as variáveis globais (e a classe da div que receberá os gifs pois queremos usar classes só para estilizar)
  - Após essa modificação no HTML, partimos pro JS
  - Iniciamos adicionando um event listener ao form
  - Em seguida, obtemos o valor do input usando `event.target.search.value`
  - O próximo passo é manipular a url para a qual o request será feito através de um template string
  - Usaremos um try/catch para tratar tanto da resposta de sucesso do request quanto a falha da resposta
  - Declaramos a variável "response" dentro do `try`, que vai receber a promise desencapsulada que o `fetch` retorna (usamos `await` para isso)
  - Ainda dentro do `try`, adicionamos um bloco `if` que checa de o request foi não foi bem sucedido e, caso não tenha sido, cria um novo erro genérico que recebe "Não foi possível obter os dados"
  - Depois desse bloco criamos a constante `gifData`, que receberá a resposta parseada utilizando o encadeamento do método `json()`
  - Então partimos pro `catch`, que vai passar o erro recebido para um `alert`
  - Voltamos pro `try` e declaramos uma `const` "downsizedGifUrl", que receberá a url do resultado do que buscarmos, isso acontece usando o seguinte `response.data[0].images.downsized.url`
  - Em seguida criamos uma tag img e setamos a sua propriedade `src` para que esta contenha a url contida na const `downsizedGifUrl`. Também setamos a prop `alt` para que ela receba a propriedade `title` (lembre-se, acessibilidade é super importante!)
  - Depois disso, inserimos a `img` no início da div que receberá os gifs. Fazemos isso assim `gifContainer.insertAdjacentElement('afterbegin', img)`
  - Finalizamos resetando o input usando `event.target.reset()`

```javascript
const form = document.querySelector('form')
const gifContainer = document.querySelector('div')

form.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.search.value
  const apiKey = 'mimimimimimi'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${inputValue}`

  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    const gifData = response.json()
    const downsizedGIFUrl = gifData.data[0].images.downsized.url
    const img = document.createElement('img')

    img.setAttribute('src', downsizedGifUrl)
    img.setAttribute('alt', gifData.data[0].title)

    gifContainer.insertAdjacentElement('afterbegin', img)

    event.target.reset()
  } catch (error) {
    alert(`Erro: "${error}"`)
  }

})
```

## Aula 01-02 - Correção dos exercícios da aula anterior

- Nessa aula, iremos refatorar o código da aula anterior

```javascript
const form = document.querySelector('form')
const gifContainer = document.querySelector('div')

form.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.search.value
  const apiKey = 'mimimimimimi'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${inputValue}`

  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    const gifData = response.json()
    const downsizedGIFUrl = gifData.data[0].images.downsized.url
    const img = document.createElement('img')

    img.setAttribute('src', downsizedGifUrl)
    img.setAttribute('alt', gifData.data[0].title)

    gifContainer.insertAdjacentElement('afterbegin', img)

    event.target.reset()
  } catch (error) {
    alert(`Erro: "${error}"`)
  }

})
```
## Aula 01-02 - Correção dos exercícios da aula anterior

## Aula 01-03 - Correção dos exercícios da aula anterior

## Aula 01-04 - Um preview da Weather Application

## Aula 01-05 - Um overview da AccuWeather API

## Aula 01-06 - Obtendo informações da cidade

- O primeiro request que fazemos é pra Locations API, para obter informações de uma cidade
- Essa resposta contem o location keycode, que é um código que corresponde a cidade buscada na Weather API
- Depois, faremos o request para a Weather API para obter as informações do tempo
- Para fazer esses requests, utilizaremos a url base que encontramos na documentação das APIs seguida por *query parameters*
  - *query parameters* são uma lista de chave-valor separados por um "&" que indagam informações específicas para o um servidor
  - eles são iniciados por um "?"
  - Ex "http://127.0.0.1:5500/index.html?city=Itutinga&country=Brasil"
- Para facilitar nossa vida quando formos fazer esses requests, vamos criar `const`s que recebem as url base das queries
```javascript
const cityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?$apikey=${APIKey}&q=${cityName}`
```
- Vamos usar async/await para trabalhar com a resposta desse request, vamos inserir uma invocação de `fetch` dentro de uma função async
- Inserimos o fetch dentro de um `try` e já usamos o `await` pra desencapsular a promise retornada por ele
  - Atribuímos o resultado à response
- Verificamos se o request deu certo usando um `if`
- No catch, fazemos um destructuring assignment e obtemos os valores `name` e `message`, que colocamos numa call de alert dentro do catch
- Então, convertemos a cont `cityUrl` em uma função que recebe o nome da cidade que queremos buscar por parâmetro e retorna o endpoint e incorporamos essa função no `fetch`
- Em seguida, criamos uma const para receber o json da resposta parseado e desencapsulado
- A API pode retornar vários objetos e o primeiro costumar ser a resposta mais acurada, por isso vamos usá-lo
- Então, fazemos um destructuring na `response.json()` para pegar o primeiro item, fica assim
```javascript
const [cityData] = await response.json()
```
- Finalizamos retornando uma promise (já que fizemos uma função assíncrona) contendo o objeto `cityData`

```javascript
const APIKey = ''
const getCityUrl = cityName => 
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityData] = await response.json()
    return cityData
  } catch ({ name, message }){
    console.log(`${name}: ${message}`)
  }
}

getCityData('Lavras')
```
## Aula 01-07 - Obtendo informações do clima da cidade

- Agora partimos pro segundo request. Esse request será feito pra Current Conditions API, que responde com informações do tempo da cidade nesse momento
- O primeiro passo é gerar o endpoint

```javascript
`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`
```
- Vamos precisar de uma função que faz a mesma coisa que a função da aula anterior (um request para uma api), a diferença está no endpoint
- Essa função também usará try/catch
- Essa função precisa do objeto retornado por `getCityData` para que possamos acessar a prop Key, então criamos uma const `cityData` que recebe a promise desencapsulada vinda da invocação de `getCityData`
- Para obter o valor de Key, fazemos um destructuring assignment
- Então, inserimos uma interpolação contendo `APIKey` para gerar o endpoint que será repassado para o fetch
- Daí mais uma vez pegamos o primeiro item do array retornado e retornamos esse item; ele contém (dentre outras coisas) as informações de tempo da cidade escolhida

```javascript
const getCityWeather = async cityName => {
  try {
    const { Key } = await getCityData(cityName)
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&`
    const response = await fetch(cityWeatherUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityWeatherData] = await response.json()
    return cityWeatherData
  } catch ({ name, message }){
    console.log(`${name}: ${message}`)
  }
}
```