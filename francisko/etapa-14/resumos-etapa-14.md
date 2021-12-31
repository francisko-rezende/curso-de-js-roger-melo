# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - Correção dos exercícios da aula anterior

## Aula 01-03 - Correção dos exercícios da aula anterior

## Aula 01-04 - Correção dos exercícios da aula anterior

## Aula 01-05 - Mais sobre o Spread Operator: Unindo objetos e Arrays

- Além de podermos usar o spread operator pra clonar objs e arrays, podemos usá-lo pra juntas dois objs, arrays ou strings
- Como essa sintaxe é, basicamente, a criação de um novo array, podemos adicionar novos elementos normalmente

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const newArray = [...arr1, ...arr2, 7, 8, 9]
```
- Pra usar o spread operator para combinar objetos, fazemos

```js
const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop3: 3 }
const obj3 = { ...obj1, ...obj2 }

// Object.assign({}, obj1, obj2) // primeiro argumento é um objeto para setar que o output será um objeto e os argumento seguintes setam as props de qual objeto serão adicionadas ao obj vazio
```

- No caso acima usando o spread operator, além de ser um pouco mais fácil de entender o que acontece, sempre criamos um novo objeto
  - No caso do `Object.assign()`, nós podemos modificar objs existentes se, por exemplo, tivéssemos colocado um dos objs existentes como primeiro argumento dessa função

## Aula 01-06 - Mais sobre o Spread Operator: Casos de uso em strings e funções

- Podemos espalhar os caracteres individuais de uma string em um local "esperado", como um array `[...myString]` (é uma alternativa a usar o `myString.split('')`)
- Em funções, podemos usar o spread operator pra facilitar a reutilização de argumentos dessa maneira

```js
const numbers [7, 3, 5, 3.1, 9]

Math.min(...numbers)
Math.max(...numbers) // ambas as funções
```

# Aula 02

## Aula 02-01 - Correção dos exercícios da aula anterior

## Aula 02-02 - Correção dos exercícios da aula anterior

## Aula 02-03 - Correção dos exercícios da aula anterior

## Aula 02-04 - Correção dos exercícios da aula anterior

## Aula 02-05 - O que é orientação a objetos

- Orientação a objetos uma abordagem/forma de programar/um paradigma no qual dados são encapsulados em objetos e esses objetos são trabalhados no decorrer da aplicação
- JS nos permite combinar diferentes paradigmas de programação
- Lembrando, em JS temos dois grandes tipos de dados: tipos de referência (objetos, por exemplo) e tipos primitivos
- Além do tipo que já aprendemos, podemos usar construtores para criar objetos
- Esses construtores são precedidos pela palavra-chave `new`
- Mais sobre esses construtores [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- Aqui um exemplo

```javascript
const obj = new Object()
```

- É melhor criar objetos usando a notação literal (`const obj = {a: 1}`) pois essa forma é mais rápida de escrever
- Quando queremos converter valores podemos invocar os construtores sem a palavra-chave `new`
- Quando precisamos executar uma propriedade ou um método em tipos primitivos, por baixo dos panos o valor primitivo é envolvido temporariamente em um wrapper object
- Após a execução da prop/método, o JS remove o object wrapper e o valor primitivo volta a ser só um valor primitivo
- Isso é feito por baixo dos panos
- Basicamente, o que foi descrito acima corresponde a `const name2 = new String('francisko')`, só que o JS faz essa parada por baixo dos panos
- Esses wrapper objects têm acesso a, entre outras coisas (como os métodos associados a cada tipo primitivo), todos os métodos do objeto *proto*
- Null e undefined não possuem object wrapper
- Então o que as pessoas querem dizer quando dizem que em JS tudo é objeto é que tudo *pode* se comportar como um objeto se envolvido por um wrapper object

- Pq tipos primitivos às vezes se comportam como objetos? Quais as diferenças entre objetos criados usando new a notação literal? O que são construtores embutidos na linguagem e quando usá-los? O que são wrapper objects?

## Aula 02-06 -  Introdução a Classes

- Criar objetos um a um nem sempre é uma boa ideia
- Quando precisamos criar vários objetos muito parecidos podemos usar construtores
- Podemos usar, por exemplo, classes
- Uma classe é a planta de um objeto, elas são templates que descrevem as características básicas e as ações possíveis de um objeto
- Algumas coisa importantes sobre `new`
  - a palavra-chave `new` cria um objeto vazio
  - Dentro da classe, `this` referencia o novo objeto que está sendo criado
  - o `new` invoca o método constructor para criar novos objetos
- Então, usando construtores podemos criar propriedades que queremos que nossos objetos tenham e na invocação do construtor especificamos os valores que gostaríamos que essas propriedades tenham

```javascript
class User { // construtores sempre têm a primeira letra maiúscula, é uma convenção da linguagem
  constructor (name, email) {
    this.name = name
    this.email = email
  }
} 

const user = new User('Francisko', 'francisko@bubas.com')
const user2 = new User('Roger', 'oi@rogermelo.com.br')
```
- Objetos criados usando construtores/classes são chamados de instâncias dessa classe

## Aula 02-07 - Métodos em classes

- Tá, mas e se você quiser usar métodos nas classes?
- Métodos não são setados no constructor, ele só serve pra setar props
- Pra setar o método basta declarar depois do constructor e lembre-se, não são separados por virgula!
- Também podemos manipular dados dentro da classe, como fazemos abaixo no constructor e no método addPoint

```javascript
class User {
  constructor (user, email) {
    this.user = user,
    this.email = email
    this.points = 0
  }

  login () {
    return `${this.user} logou na aplicação`
  }

  logout () {
    return `${this.user} deslogou da aplicação`
  }

  addPoints () {
    return `${this.user} agora tem ${this.ponits > 1 ? 'ponto' : 'pontos'}` 
  }
}
```
- Se quisermos encadear invocações de métodos de objetos criados em uma classe, precisamos fazer a invocação dos métodos retornarem `this`, pois o this representa o objeto que a classe está criando

```javascript
class User {
  constructor (user, email) {
    this.user = user,
    this.email = email
    this.points = 0
  }

  login () {
    console.log(`${this.user} logou na aplicação`)
    return this
  }

  logout () {
    return `${this.user} deslogou da aplicação`
  }

  addPoints () {
    return `${this.user} agora tem ${this.points > 1 ? 'ponto' : 'pontos'}` 
  }
}

const user = new User('Roger', 'oi@rogermelo.com.br')

user.login().addPoint()
```

## Aula 02-08 - Herança entre classes

- Herança é a fazer com que uma subclasse herde propriedades e métodos e outra classe
- Veja como fazemos isso no código abaixo
- A palavra-chave "extends" conecta classes filha a classes mãe
- Classes herdeiras recebem as props do constructor da classe mãe
- Declaramos os *métodos* que queremos na classe filha dentro do seu bloco
- Para declarar propriedades exclusivas das filhas, declaramos um constructor dentro da classe filha
- Para usarmos o constructor da classe mãe podemos usar a função `super`, que receberá os mesmos parâmetros do constructor da classe mãe
- Após essa invocação da super podemos declarar as propriedades que quisermos

```javascript
class Mammal {
  constructor (species, name, age, mammaryGland) {
    this.species = species,
    this.name = name,
    this.age = age,
    this.mammaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal {
  constructor(species, name, age, manEater) {
    super(species, name, age)
    this.manEater = manEater
  }

  eatZebras (animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const angus = new Mammal('cavalo', 'Angus', 3)
const Lion = new Lion('leão', 'Mufasa', 7, false)
```

# Aula 03

## Aula 03-06 -  Funções construtoras

- Em JS, classes são uma abstração (ocultam detalhes de implementação e monstram outros), isso simplifica a forma de lidar com situações mais complexas (outros exemplo é promises)
- Mas o que as classes abstraem? Funções construtoras
- Por exemplo, imagine que estamos criando objetos contendo os dados de alunos do curso
- Podemos usar a sintaxe a seguir, que é uma função construtora
- Invocamos a função usando a palavra-chave *new*, que retorna um objeto
- É importante usar a sintaxe de function declaration (ao invés de usar arrow function) por conta do comportamento do *this* dentro de cada uma dessas sintaxes
  - Em uma função construtora usando arrow functions, o this referencia o local de declaração da função (provavelmente o window)
  - Em uma função construtora usando function declarations, o this referencia o objeto que a função iria gerar
- Pra adicionar métodos a funções construtoras é melhor usar function declaration porque, normalmente, essas funções estão em código mais antigo em que arrow functions não estão presentes. Então, pra facilitar o reconhecimento dessas funções vamos adotar essa sintaxe

```javascript
// class Student {
//   constructor(name, email) {
//     this.name = name
//     this.email = email
//   }
// }

function Student(name, email) {
  this.name = name
  this.email = email

  this.login = function() {
    return `${this.name} fez login`
  }
}

const jonhDoe = new Student('johnDoe', 'doe@inter.com')

```
## Aula 03-07 - Prototypes

- No exemplo de função construtora acima, declaramos o método login dentro da função construtora e isso não é bom
- Isso não é bom porque o método vai ser criado dentro de cada instância, fazendo com que o mesmo método ocupe a diversos espaços na memória
- Isso faz com que a aplicação ocupe mais memória do que o necessário, interferindo na sua
- Uma forma de resolver esse problema é usando prototypes
- Em JS, todo novo objeto que criamos herda propriedades e métodos do seu prototype
- Prototype é o objeto que armazena props e métodos que serão herdados por novos objetos que criamos e que esses objs podem usar
- Pra evitar o problema acima, vamos criar os métodos que queremos utilizar no obj proto para que todos os objetos que possuam esse proto tenham acesso a esses métodos sem que ele ocupe vários espaços na memória de maneira desnecessária
- Cada tipo de obj tem um prototype (arrays, objetos, etc)
- Quando invocamos um método em um objeto, caso o método não esteja disponível no objeto em sim, o JS busca esse método no seu objeto prototype
- A propriedade prototype é tanto um getter quanto um setter
  - Se usarmos a propriedade usando os construtores (eg `Array.prototype`) ela retorna os métodos disponíveis
  - Também podemos usar a propriedade prototype como um setter atribuindo a ela **fora** da função construtora o método que queremos adicionar ao prototype dos objetos que a função construtora criar (ver abaixo)

```javascript
function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function () {
  return `${this.name} fez login`
}

Student.prototype.comment = function () {
  return `${this.name} comentou`
}
```

- Quando usamos classes a coisa muda um pouco: classes fazem a atribuição de métodos ao prototype dos objetos criados automaticamente:

```javascript
class Student {
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  comment () {
    return `${this.name} comentou.`
  }
}
```

- Se nos esquecermos da propriedade prototype em funções construtoras, declaramos um [**método estático**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties). Assim, só conseguiremos acessar esse método encadeando o mesmo *no construtor*
- Esses métodos são úteis pra métodos utilitários, isso é, métodos que são úteis em situações frequentes na aplicação
- Para visualizar os métodos de um objeto podemos usar o método `dir`

```javascript
function Student (name, email) {
  this.name = name
  this.email = email
}

Student.formatToDataBase = function (aString) {
  return aString
    .toUpperCase()
    .replaceAll(' ', '_')
}

Student.login()
```
- Para declaramos métodos estáticos em classes, usamos a palavra chave `static` antes de declarar o método dentro da declaração da classe mas como uma função anônima

```javascript
class Student () {
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  comment () {
    return `${this.name} comentou`
  }

  static formatToDataBase (aString) {
    return aString
      .toUpperCase()
      .replaceAll(' ', '_')
}
}
```
- Essas duas formas de declarar métodos estáticos têm uma diferença importante
  - Quando o método estático é declarado usando a sintaxe de function declaration com nome, o nome da função vai pra prop "name" do método
  - Quando o método estático é declarado usando a sintaxe de function declaration anônima, essa prop name recebe uma string em branco/vazia
  - Isso pode ser problemático porque caso ocorra algum erro, esse erro pode receber essa string em branco
  - Portanto convém evitar criar métodos usando function declaration anônimas
- *Vale ressaltar que podemos substituir esses métodos estáticos por funções*
- No fim das contas o importante é entender o que o seu código faz

## Aula 03-08 - Herança prototipal

- E como rola a herança prototipal do JS?
- Vamos começar expandindo a função construtora que declaramos na aula anterior
- Para isso usamos `FunçãoConstrutora.call(this, arg1, arg2)` dentro da função filha
- Usamos o call para ter certeza que o `this` vai se referir à função filha ao invés da função mãe
  - Os argumentos após o `this` (arg1 e arg2) são passados para a função em que encadeamos o `call` (no caso `FunçãoConstrutora`)
- Pra adicionar novas props à função construtora filha usamos `this.propName = propValue` dentro da função construtora
- Pra adicionar métodos únicos na função filhar podemos adicionamos o método ao prototype dessa função `derivedFunc.prototype.funcName = function funcName () {}`
- Pra fazer o prototype das funções construtoras derivadas herdarem métodos do prototype da função construtora mãe, fazemos com que o prototype da mãe seja também o prototype da filha usando o método `obj.prototype()`
  - Esse método nos permite setar o prototype de um objeto
  - Pra fazer a herança fazemos assim `derivedFunc.prototype = Object.create(motherFunc)` e função filha terá acesso ao prototype da função mãe de maneira aninhada
  - O JS vai buscando os métodos de prototype em prototype na cadeia até encontrar (ou não) e é assim que o JS faz herança
  - Essa cadeia vai desde o mais específico (a função mãe de uma função filha bem derivada) até o mais geral (o proto de objetos no geral)
- Vamos usar classes/funções construtoras quando precisamos criar objs muito parecidos, classes economizam memória
- Vamos usar classes quando precisamos usar herança e fazendo libs quando precisamos economizar quantidades muito pequenas de memória, a forma mais eficiente e mais comum de criar classes é a discutida na próxima aula


```javascript
function Student (name, email) {
  this.name = name
  this.email = email
}

Student.prototype.login = function login() {
  return `${this.name} comentou`
}

Student.prototype.comment = function comment () {
  return `${this.name} comentou`
}

function TeacherAssistant (name, email, scheduleWeekPosts) {
  Student.call(this, name, email)
  this.scheduleWeekPosts =  scheduleWeekPosts 
}

TeacherAssistant.prototype = Object.create(Student.prototype)

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
  return `${this.name} deu uma medalha para ${name}`
}
```
## Aula 03-09 = Factory functions e composição de objetos

- Factory functions são uma forma mais direta de se compor objetos em JS puro
- Uma sacada importante é que em JS qualquer função pode retornar objetos e factory functions são funções que fazem isso sem usar a palavra-chave new
- Usando essas funções, conseguimos criar códigos mais simples para criação de objetos
- Veja o exemplo:

```javascript
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

const user = new User('Roger', 'roger@melo.com')
```

```javascript
const createUser = (name, email) => ({ name, email })
```
- Também podemos criar props privadas, olha só:

```javascript
class User {
  #counter = 0

  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

const createUser = (name, email) => {
  let counter = 0

  return { name, email }
}
```

- Também dá pra criar métodos

```javascript
class User {
  #counter = 0

  constructor(name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    return ++this.#counter
  }
}

const createUser = (name, email) => {
  let counter = 0

  return { 
    name, 
    email,
    incrementCounter: () => ++counter
    }
}
```
- O método acima cria counters diferentes pra cada instância de usuário (falando das factory functions) por conta das Closures
- Closure é a combinação de uma função com seu escopo léxico (o escopo de declaração da função)
- Como usamos uma variável declarada fora da função do método acima, esse método passa a ser uma closure
- Tá, mas classes tem suas vantagens: são comuns no código alheio, são familiares pra quem vem de linguagens que tem classes, o this represente o novo obj que tá sendo criado, tem gente que gosta do new pois ele representa a criação de um novo objeto
- Um outro problema envolvendo classes é a herança, que não permite escolhermos qual método queremos que as extensões dessa classe tenham
- Uma alternativa é a composição de objetos, que é quando criamos vários objetos com métodos e depois compomos a "classe" que queremos só com os métodos que queremos

```javascript
const a = {
  first () {
    return 1
  }
}

const b = {
  second () {
    return 'nãooooooo'
  }
}

const c = {
  third () {
    return 3
  }
}


const obj = {
  ...a,
  ...b
}
```

- Eis algumas vantagens de se usar factory functions ao invés de classes ou funções construtoras
  - Factory functions não nos tentam com níveis de herança na app
  - As apps tendem a ter menos problemas de refatoração
  - Não precisa usar new
  - This tem comportamento padrão de novo e menos usado, fazendo o código ser mais previsível