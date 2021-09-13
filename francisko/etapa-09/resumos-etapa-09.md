# Aula 01

## Aula 01-01 - Correção dos exercícios da aula 02 da etapa 08

## Aula 01-02 - Correção dos exercícios da aula 02 da etapa 08

## Aula 01-03 - Adicionando to-dos

- Para adicionar novos items na to-do list do app, obtemos a referência do form em que o input do 
- Em seguida, adicionamos um eventListener a essa referência
- Na callback do eventListener, atribuimos o valor do input do form à constante `inputValue` e encadeamos o método `trim()` para remover eventuais espaços em branco no começo e no final do valor do input
- O próximo passo é inserir uma nova `li` na `ul` que contém os demais items da to-do list
- O procedimento para essa inserção é o de sempre: obtemos a referência e passamos o valor desejado na propriedade `innerHTML`
- Nesse caso é importante usarmos o padrão de HTML usado para que nossa nova to-do não distoe das demais
- No entanto, essa abordagem tem um problema: podemos adicionar items vazios à nossa to-do list
- Para evitar que isso ocorra podemos usar uma condicional que recebe `inputValue.length` e então movemos a atribuição do novo item to-do pra dentro dessa condicional
- Como 0 é um valor falsy, essa condicional só será executada se o valor do input tiver mais do que um caracter, eliminando o problema de ter items vazios
- Finalmente, usamos `event.target.reset()` para resetar o input (isto é deixá-lo vazio) após o envio

```javascript
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    if (inputValue.length) {
      todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${message}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
      `
      event.target.reset()
    }
})
```