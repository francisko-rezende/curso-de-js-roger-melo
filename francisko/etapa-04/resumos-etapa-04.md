# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - O que são objetos

- Objetos são uma grande parte de JS e aprender a usá-los é essencial
- Objetos têm propriedades(que são como características) e métodos (que são como ações)
- Eles possibilitam a criação de estruturas de dados que representam certos elementos do nosso código ou das nossas aplicações web
- Usaremos tanto objetos que vem de fábrica no JS quanto nossos próprios objetos

# Aula 01-03 - Criando um objeto literal

- Criamos objetos literais assim:

```javascript
let user = {
    name: 'jobson', // atribuimos a propriedade name a string jobson
    age: 31,
    city: 'Joinville',
    blogPosts: ['torta de chocolate', 'salada cesar']
}
```
- Colocar cada propriedade em uma linha ajuda na legibilidade do código
- Acessamos o valor das propriedades usando `.`: `user.name`
- Para mudar valores fazemos o seguinte: `user.age = 32` (ou na própria definição do objeto)
- Também podemos usar a notação de colchetes: `user['name']`.
  - Nesse caso o que vai dentro dos colchetes precisa ser ou uma string ou uma variavel que contem uma string
- Também podemos modificar propriedades usando os colchetes `user['name'] = 'Carla'`
- Uma das vantagens de se usar os colchetes é justamente a possibilidade de usar variáveis na  hora de selecionar propriedades, o que não é possível de se fazer usando o `.`

## Aula 01-04 - Adicionando métodos

- Adicionamos métodos a objetos assim

```javascript
let user = {
    name: 'Jobson', // atribuímos a propriedade name a string Jobson
    age: 31,
    city: 'Joinville',
    blogPosts: ['torta de chocolate', 'salada cesar']
    login: function () {  // assim
        console.log('Usuário logado')
    }
}
```
- Para invocar um método basta usar a notação de ponto com o nome do método e parenteses: `user.login()`
- Funções criadas dentro de um objeto sao métodos e funções criadas fora de um objeto sao funções