# Aula 01

## Aula 01-01 - Resolução dos exercícios da aula anterior

## Aula 01-02 - O que é controle de fluxo?

- Conforme a complexidade do código que escrevemos aumenta, aumenta também a probabilidade de termos que tomar decisões sobre o que será executado e como essa execução vai acontecer
- Também precisaremos executar um pedaço de código várias vezes
- Nessas situações usamos controle de fluxo como **loops** e **conditional statements**

## Aula 01-03 - For loop

- for é o tipo de loop mais popular em JS, eis sua estrutura básica
- lembrando: o propósito de todo loop é executar um pedaço de um código repetidas vezes

```javascript

for(let i = 0; i < 5; i++) {
 // everything in here is called code block
    console.log(`Dentro do loop ${i}`)
}

console.log('Loop concluído')
```

- O `for` loop tem três expressões dentro de seus parênteses:
  - `let i = 0`: é a inicialização do contador que monitora quantas vezes o bloco (o conteúdo entre chaves) foi executado
  - `i < 5`: é a condição que determina se o código vai ser executado (quando a condição é true) ou não (quando a condição é false)
  - `i++`: é o incremento que move o loop ao final de sua execução

- Caso não soubéssemos exatamente quantos vezes o loop deve ser executado podemos adaptar o loop acima da seguinte forma

```javascript
const names = ['Linus', 'Ada', 'Bill']

for(let i = 0; i < names.length; i++) { // como usamos a propriedade length, o loop se adequa ao tamanho do array names
    const HTMLTemplate = `<p>${names[i]</p>`
    console.log(HTMLTemplate)
}
```
- Um pouco sobre terminologia
  - o processo de percorrer um array = **iteração** (cada vez que o código dentro do bloco é executado)

## Aula 01-04 - while loops e exercícios

- O `while` faz, basicamente, a mesma coisa que o `for`: esses loops executam um código um determinado numero de vezes. Eles diferem em sua sintaxe.
- Segue um exemplo de `while`:

```javascript
let i = 0 // a declaração do contador nao acontece dentro do loop e sim antes dele

while (i < 5) {
    console.log(`Dentro do loop: ${i}`)
    i++ // o incremento fica aqui. eh essencial adicionarmos o incremento pois se nao houver incremento o loop eh executado infinitamente
}
```
- Outro exemplo:

```javascript
const names = ['Jobs', 'Hopper', 'Turing']
let i = 0

while (i < names.length) {
    console.log(names[i])
    i++
}
```

# Aula 02

## Aula 02-01 - Correção de exercícios

## Aula 02-02 - A condicional `if`

- A condicional if é um tipo de controle de fluxo chamado de estrutura condicional
- Ela recebe esse nome (if, que significa "se" em inglês) pois serve para delimitar um bloco de código que é executado se uma determinada condição for verdadeira
- Segue um exemplo
  
```javascript
const age = 18

if (age > 18) {
  console.log('Vocẽ tem mais de 18 anos.')
}

// Nesse caso nada acontece (feijoada) porque a condição retorna false
```

- Segue outro exemplo

```javascript
const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

if (simpsons.length >= 3) {
  console.log('O array tem bastante personagens')
}
```

- Mais outro exemplo 

```javascript
const password = 'oi123'

if (password.length >= 8) {
  console.log('essa senha tem 8 ou mais caracteres')
}
```

## Aula 02-03 - `else` e `else if` statements

- Usamos `else` para adicionar alternativas de execução a blocos de `if`
- `else` (que é "senão" em inglês) é usada em conjunto com blocos `if` delimita blocos de código que são executados quando a condição do `if` é falsa
- Se houverem várias condições que queremos testar usamos o `else if`
- Segue um exemplo

```javascript
const password = 'oi123'

if (password.length >= 12){
  console.log('senha muito forte :)')
} else if (password.length >= 8) {
  console.log('essa senha tem 8 ou mais caracteres')
} else {
  console.log('a senha deve conter 8 ou mais caracteres')
}
```

## Aula 02-04 - Operadores lógicos `&&` e `||`

- Os operadores dessa sessão são usados para executar um bloco de código caso uma certa combinação de condições seja verdadeira
- `&&` é o operador "e" e `||` é o operador "ou"
- `&&` delimita um bloco que será executado se *todas* as condições forem verdadeiras
- `||` delimita um bloco que será executado se *ao menos uma* condição for verdadeira
- Segue um exemplo

```javascript
const password = 'oi123'

if (password.length >= 12 && password.includes('1')){
  console.log('senha muito forte :)')
} else if (password.length >= 8 || password.includes('1')) {
  console.log('essa forte')
} else {
  console.log('a senha deve conter 8 ou mais caracteres')
}
```
- Atenção, `password.length >= 8 || password.includes('1') && password.length >= 5` tem duas condições principais: `password.length >= 8` e `password.includes('1') && password.length >= 5`. Para o código delimitado por um bloco que contenha essas condições ser executado, pelo uma das duas precisa ser verdadeira
- O exemplo do tópico acima não segue boas práticas, evitar!
