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

# Aula 02

## Aula 02-01 - Correção dos exercícios da aula 01 da etapa 09

## Aula 02-02 - Removendo to-dos

- Para excluir os todos quando a lixeira for clicada, usaremos event delegation
- Adicionaremos um `event listener` do tipo clique na ul e, quando esse evento for disparado, verificamos se o item clicado foi o ícone da lixeira
- Essa abordagem é melhor de um ponto de vista de performance, além de evitar o trabalho de ter que adicionar event listeners em novos items como seria necessário na abordagem em que cada `li` recebe um `event listener`
- Uma vez que tenhamos adicionado o `event listener`, podemos obter mais informações sobre o elemento que recebeu o clique usando `event.target`
- Obtemos a lista de classes que o elemento clicado possui dessa forma: `event.target.classList`
- Podemos usar o método de arrays `includes()` para verificar se o elemento clicado possui a classe delete (a lixeira é o único elemento que possui essa classe) mas antes precisamos converter o DOMTokenList retornado por`classList` para um array. Fazemos essa conversão assim: `Array.from(event.target.classList)`
- Como o `.includes()` retorna um boolean, podemos usar esse valor retornado em uma condicional para que possamos remover o to-do apenas quando a lixeira for clicada
- Dentro dessa estrutura condicional, podemos encadear o método `remove()` no elemento pai da lixeira, que é o `li`

```javascript
todosContainer.addEventListener('click', event => {
  const clickedElement = event.target

  if (Array.from(clickedElement.classList).includes('delete')) {
    clickedElement.parentElement.remove()
  }

})
```

## Aula 02-03 - Buscando e filtrando to-dos

- Começamos adicionando um `event listener` do tipo `input` no input de busca
- Utilizamos o evento do tipo `input` para que o evento seja disparado sempre que o valor do input mudar, ou seja, enquanto o usuário digita
- Em seguida obteremos as referências dos to-dos: `todosContainer.children`
- A ideia aqui é usar o `filter`, que é um método de arrays. Portanto, vamos converter o HTML collection retornado por `children`: `Array.from(todosContainer.children)`
- Então, encadeamos o `filter` na invocação que converte o HTML collection em array e, na callback do `filter`, testamos se o texto dos todos (os todos serão iterados pelo filter) inclui o valor do input: `todo.textContent.includes(event.target.value.trim())`
- Agora o plano é adicionar uma classe CSS nas lis que não contém o valor inserido no input, portanto vamos inverter o teste lógico da callback do `filter`: `!todo.textContent.includes(inputValue)`
- Agora adicionaremos uma classe que esconde as lis obtidas no passo anterior usando o `forEach`
  - Usamos o `forEach` pois o `map` e o `filter` são métodos usados para gerar arrays, o `reduce` deve ser usado para reduzir um array a qualquer outro tipo de dado e o `forEach` pode ser usado quando não queremos gerar nem reduzir arrays mas precisamos executar um efeito colateral, que no caso é uma manipulação do DOM
- Então encadeamos um `forEach` no resultado do `filter` e, na callback do `forEach`, adicionamos a classe 'hidden', que seta o display para none, a cada todo
- Além disso, precisamos remover a classe `d-flex` pois essa classe usa !important e portanto sobrescreve o display que setamos na classe "hidden"
- Essa abordagem tem um problema: a mudança nas classes não é revertida quando resetamos o input e portanto os items que escondemos não voltam
- Para corrigir esse problema, duplicamos a estrutura anterior e a invertemos:
  - filtramos de modo a obter todos os lis que contém o input
  - adicionamos a classe d-flex
  - removemos a classe hidden
- Uma outra modificação que podemos fazer é fazer com a que busca funcione para letras maiusculas e minusculas
- Fazemos isso encadeando `toLowerCase()` na expressão que `inputValue` recebe e nas callbacks dos filters

```javascript
const inputSearchTodo = document.querySelector('.form-search input')

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
  
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.add('d-flex')
      todo.classList.remove('hidden')
    })
})
```