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

- O `while` faz, basicamente, a mesma coisa que o `for`: esses loops executam um codigo um determinado numero de vezes. Eles diferem em sua sintaxe.
- Segue um exemplo de `while`:

```javascript
let i = 0 // a declaracao do contador nao acontece dentro do loop e sim antes dele

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