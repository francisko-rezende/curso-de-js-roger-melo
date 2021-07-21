# Aula 01-04 Adicionando o JavaScript a uma pagina web

- Como adicionar JS a uma página web?
  - Primeira pergunta a se fazer é, na verdade, "onde"
  - Podemos adicionar JS em qualquer lugar da `<head>` ou da `<body>`
  - Uma forma de adicionar js é através da tag `<scrip>`, o código vai dentro dessa tag
  - Adicionar JS na `head` pode gerar problemas de carregamento, melhor adicionar JS no como a última tag do `<body>`;
  - Apesar de adicionar JS no próprio HTML ser possível, é melhor guardar o JS em seu próprio arquivo principalmente quando o código for extenso;
  - Nesse caso, fazemos o link desse arquivo assim: `<script src="path-to-js/app.js"></script>`;
  
# Aula 01-05 O console do browser

- O roger usa o google chrome por causa das suas features (eg dev tools)
- Podemos usar o browser pra executar JS;
- JS executa o código de maneira sequencial, de cima pra baixo;
- `console.log()` é uma função que imprime os argumentos passados no console;

# Aula 01-06 Constantes, variáveis e comentários

- Variáveis armazenam valores (eg nomes, emails, números...);
- Declarando com `let`
  - A declaração é feita assim: 

```js 
let age = 31
```
  - `=` é o operador de atribuição em JS e é usado para associar valores a variáveis;
  - a forma de se ler a declaração acima é "age recebe 31";
  - JS permite passar variáveis como argumentos de funções, então o seguinte comando
  ```js
  let name = 'John';
  console.log(name);
  ```
  - Imprime "John" no console;
  - Como o nome sugere, variáveis podem variar. No caso da `let` isso significa que podemos mudar o valor atribuído (fazer uma reatribuição) a variáveis declaradas usando `let`;
- Declarando com `const`
  - Usada pra declarar variáveis ~~que não variam~~ cujo valor não pode ser atualizado/não aceitam reatribuição;
  - Atribuição é feita da mesma maneira que atribuições usando `let`:
  ```js
  const pi = 3.14;
  ```
- Essas maneiras de criar variáveis são mais recentes, antes delas variáveis eram criadas usando `var`;
- `var`, assim como `let`, aceita reatribuição
- Regras para nomear variáveis:
  - O nome deve ser constituído por uma única palavra/não deve conter espaços. Caso o nome tenha mais de uma palavra, usar camelCase para facilitar a leitura;
  - Nomes podem conter letras, números, underscores e cifrão e não podem começar com números;
  - [Algumas palavras](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) são reservadas para outras finalidades dentro da linguagem e não podem ser usadas para nomear variáveis;
  - De maneira geral é uma boa idéia/prática dar nomes significativos às suas variáveis. Esses nomes devem ser auto-explicativos;
- Suporte do seu código nos navegadores
  - Features mais modernos como `const`e `let`podem não funcionar em navegadores antigos;
  - Mas não tem revolta, não. Vamos aprender maneiras de fazer o nosso código funcionar em todos os browsers (inclusive os antigos);
- Comentários
  - Não são interpretados pelo navegador e podem ser criados assim
  
  // Comentário de uma linha

  /*
  Comentário
  de muitas
  linhas
  */
