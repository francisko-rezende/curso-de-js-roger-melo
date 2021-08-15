# Aula 01

## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - Eventos em formulários

- Formulários existem para capturar alguma informação do usuário
- Usamos eventos pra capturar essas informações, principalmente eventos de `submit`
- Eventos do teclado (keyboard events) também são usados em formulários

## Aula 01-03 - O evento submit

- Quando queremos escutar o envio de um formulário, atrelamos o eventListener ao **form**, não no botão 'enviar' pois é o form que está sendo enviado e não o botão. O botão é apenas um elemento dentro do form. O importante é o `submit`, o envio do form
- Agora traçamos o caminho que foi apresentado nos vídeos anteriores: usamos `document.querySelector` para obter a referência do form que então usamos para atrelar um `eventListener` que vai escutar quando o form for enviado: ou quando o botão for pressionado ou quando o input estiver com o foco e o usuário apertar "enter"
- A callback do `eventListener` recebe o parâmetro `event` pois o comportamento padrão do evento `submit` envolve um recarregamento da página. Não queremos que isso role, então usamos `event.preventDefault()`
- Agora que impedimos o refresh da página, quando o form for enviado podemos obter os dados inseridos ali
- Começamos armazenando a referência do `input` que contém a informação que queremos
- Obtemos as informações presentes no `input` na hora do envio através da propriedade `inputName.value`
- Há outras formas de se obter a informação do `input`
  - A propriedade `username` (ou qualquer que seja a id do `input`) da referência do `form` gera a referência do `input`. Daí é só encadear a propriedade `value` e pronto
    - `form.inputID.value`
  - Caso o `input` tenha o atributo `name` ao invés de um ID, acessamos o valor do input da mesma forma descrita para IDs: `form.inputName.value`
  - Uma última forma que é útil para forms no React é usar event.target ao invés de usar o form: `event.target.formID.value`
- Com a informação em mãos, vamos checar se ela é válida

## Aula-01-04 - Expressões regulares

- Podemos usar expressões regulares para testar se a informação submetida em inputs cumpre alguns requisitos (por exemplo, se não quisermos caracteres especiais no nome de usuário), entre outras coisas
- De maneira mais geral, usamos regexes detectar padrões de caracteres em strings
- Após definirmos os parâmetros que queremos checar, construímos a expressão para testar se o username 
- Regexes começam e terminam com `/`
- Uma das formas de detectar uma string de maneira exata iniciamos a regex com ^ e encerramos com $
  - Dessa forma só ocorrerá match se a string e só a string estiver presente
- Para dar match em qualquer letra de a-z usamos um character set
  - character sets são representados com []
  - são listas que dá match com qualquer caracter contido nele
  - [a-z] dá match com qualquer caractere de "a" a 'z', mas só com um caractere de comprimento
  - O character set acima só detecta caracteres minúsculos, podemos incluir letrar maiúsculas também adicionando A-Z no final da string: [a-zA-Z]
- Para dar match em strings com um determinado comprimento, usamos {}, que são chamados de quantificadores
  - {} recebem dois números, o comprimento mínimo e o máximo
  - {6, 10} detecta strings de 6 a 10 caracteres
- Para incluir números na busca basta acrescentar 0-9 no character set: [a-zA-Z0-9]
- O character `.` representa um único caracter coringa que detecta qualquer caracter

## Aula 01-05 - Testando padrões de regex

- Lembrando: regexes são setadas em JS usando /
- Então, para criar uma regex que detecta caracteres minúsculos com no mínimo 6 caracteres de comprimento usamos `/[a-z]{6,}/`
- Regexes vêm com o método `test` que recebe a string que queremos testar como argumento
  - Esse método retorna `true` se der match entre a regex e a string e `false` se não der match
- O método `search` também pode ser usado para verificar se strings dão match em regexes
  - O `search` é um método de string que recebe a regex que queremos testar como argumento
  - Se der match, ele retorna 0. Senão, ele retorna -1
  - Caso a regex não delimite o início/fim da string (usando ^ e $) e role um match, o `search` retorna o índice do ínicio do match
  - O `search` é útil, por exemplo, quando temos um parágrafo e queremos descobrir o índice da match dentro desse parágrafo