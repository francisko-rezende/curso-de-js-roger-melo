# Aula 01

## Aula 01-01 -  Correção dos exercícios da aula 02 da etapa 12

## Aula 01-02 -  Correção dos exercícios da aula 02 da etapa 12

## Aula 01-03 - Introdução ao localStorage

- O localStorage é um recurso que podemos usar para persistir/salvar os dados de nossas aplicações após o app ser fechado
- O browser possui uma API chamada [Web Storage API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) que nos permite salvar dados no browser do usuário através de pares de chave e valor
- O localStorage é o mecanismo interno dessa API para salvar dados
- Além do localStorage podemos salvar os dados usando um banco de dados, por exemplo
- A API tem, inclusive, uma outra ferramenta chamada sessionStorage que persiste os dados só enquanto durar a sessão (até a aba da aplicação ou a janela ser fechada)
- A localStorage persiste os dados além desse ponto
- Atualmente existem dois mecanismos relativamente fáceis de se trabalhar pra persistir dados
- a Web Storage API, que é útil para persistir dados simples como strings, qual a cor usar no fundo da tela, etc
- O outro mecanismo é o IndexedDB API, que é usado para armazenar grandes volumes de dados complexos (como vídeos)
- Também existe a Cache API, que é usada para armazenar dados para o funcionamento offline de aplicações
- Vamos focar na Web Storage API por hora
- Apesar do armazenamento do browser ser dinâmico é prudente ter uma noção de espaço disponível. Dá pra contar com uns 10mb pro local e uns 5mb pro sesseionStorage
- Web Storage API é vulnerável a ataques XSS, cookies podem ser uma alternativa mais segura nesse sentido
- Mas deixa isso quieto por agora, vamo aprender antes e depois vc vê essa parada de segurança
- localStorage é uma boa pra prototipagem mas lembre-se, ele não substitui banco de dados
- Banco de dados permite persistir dados no servidor e portanto acessíveis em qualquer dispositivo
- Lembrando que os dois métodos não são excludentes
- Uma aplicação interessante é salvar a resposta de requests no localStorage e usar esses dados até a hora de atualizar essas informações

## Aula 01-04 - Armazenando e obtendo dados

- O que é a localStorage?
- `localStorage` retorna um objeto e esse objeto funciona como uma interface pra trabalharmos com a localStorage da web storage api
- Ele proporciona a ligação entro o código e a api
- Como `localStorage` retorna um objeto diretão, ela é uma propriedade do `window`
- Ou seja, não precisamos referenciar `window` para acessar suas propriedades
- Através da propriedade localStorage, temos acesso aos métodos e propriedades da prop `proto`
- Lá temos métodos pra setar, obter, remover items, entre outras coisas
- A localStorage precisa receber valores em formato de string, ou seja, pra passar outros tipos de dados precisamos passá-los pra strings
- Esse processo se chama *serialização*
- *Para armazenar um item* no localStorage, usamos `localStorage.setItem(key, value)`
- Prestenção: se passarmos um número pro localStorage, esse número é convertido pra string
- *Para obter* algum valor armazenar algum valor salvo no localStorage, usamos `localStorage.getItem(key)`, isso retorna o valor associado a essa key
- Os dados armazenados no localStorage são deletados se o usuário limpar o cache
- Pra mudar o valor de uma chave também usamos o `setItem`, basta usar a key já existente no argumento `key`

## Aula 01-05 - Removendo dados

- Podemos remover os items da localStorage um a um ou todos de uma vez
- *Para remover um item só*, usamos `localStorage.removeItem(key)`
- *Para remover todos os items* de uma talagada só, usamos `localStorage.clear()`

## Aula-01-06 - Stringficando e parseando dados

- Agora vamos armazenar dados mais complexos na local storage desde que esses valores sejam convertidos em string
- Quando esse valor for obtido da localStorage ele virá em formato de array também
- Esse troca-troca é conhecido como serialização
- Para ver qualé dessa parada vamos serializar o array

```javascript
const myArray = [
  {a: 1, b: 2},
  {c: 3, d: 4},
  {e: 5, f: 6}
]
```
- O primeiro passo é converter o array em string, faremos isso usando um objeto global embutido na linguagem, o famoso `JSON`
- Usamos o método `JSON.stringfy(array/obj)`
- Trocando em miúdos, `JSON.stringfy` recebe um objeto como argumento e retorna um JSON
- Podemos inserir essa string JSON na localStorage usando `localStorage.setItem(stringJSON)`
- Pra reconverter essa string JSON para array (ou sejE, parsear), usamos `JSON.parse(stringJSON)`
