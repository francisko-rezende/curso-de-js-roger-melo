# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - Data e hora em JavaScript

- Datas são um tipo de **objeto** em JS
- São usadas, por exemplo, pra criar datas em posts e datas de eventos
- Usamos date constructors para criar datas, esse construtor cria um novo objeto de data pra gente
- O default do `new Date()` é retornar um objeto com o dia e hora em que o construtor é chamado

```javascript
const present = new Date()
```

- Podemos obter informações específicas usando métodos do objeto retornado pelo construtor:

```javascript
const present = new Date()

present.getFullYear()
present.getMonth() // tem index 0 então janeiro é 0
present.getDate()
present.getDay()
present.getHours()
present.getMinutes()
present.getSeconds()
```
- Também podemos obter timestamps, que representam o número de milissegundos desde 1970-01-01
- Podemos usar timestamps para comparar datas
- Obtemos timestamps assim:

```javascript
present.getTime()
```
- Também usamos métodos para obter partes da data em strings

```javascript
present.toDateString()
present.toTimeString()
present.toLocaleString()
```

## Aula 01-03 - Timestamps e comparações

- Vamos começar criando e armazenando um objeto de data
- Depois, criamos um outro objeto de data que vai representar o dia primeiro de maio de 2020 e a hora 7:47
- Com esses dois datestamps na mão, podemos ver a diferença entre eles e converter essa diferença para segundos/minutos/dias/etc

```javascript
const past = new Date('May 1 2020 7:47:00')

const present = new Date()

const difference = present.getTime() - past.getTime()

const seconds = Math.round(difference / 1000)
const minutes = Math.round(seconds / 60)
const hours = Math.round(minutes / 60)
const days = Math.round(hours / 24)
```
- Podemos converter um timestamp em um objeto de data assim

```javascript
new Date(myTimestamp)
```