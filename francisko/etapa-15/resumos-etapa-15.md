
# Aula 01
## Aula 01-01 - Correção dos exercícios da aula anterior

## Aula 01-02 - Correção dos exercícios da aula anterior

## Aula 01-03 - Correção dos exercícios da aula anterior

## Aula 01-04 - Correção dos exercícios da aula anterior

## Aula 01-05 - Correção dos exercícios da aula anterior

## Aula 01-06 - Correção dos exercícios da aula anterior

## Aula 01-07 - Correção dos exercícios da aula anterior

## Aula 01-08 - Correção dos exercícios da aula anterior

## Aula 01-09 - Correção dos exercícios da aula anterior

## Aula 01-10 - Introdução ao Firebase

- Firebase é um banco de dados, que, por sua vez, é um sistema de armazenamento que coleta dados de maneira organizada para serem usados depois
- Podemos salvar todo tipo de dado em um banco de dados
- Persistir os dados no backend (usando um banco de dados) ao invés do localStorage pois no localStorage, como o nome sugere, os dados ficam no aparelho
- Persistir dados no servidor permite o acesso aos dados de qualquer lugar/dispositivo
- Existem dois tipos de banco de dados: SQL e noSQL
  - SQL (structured query language) é uma linguagem usada pra interagir com bancos de dados relacionais
    - Banco de dados relacionais são baseados em esquemas, esses esquemas são tipo tabelas (são estruturados dessa forma)
    - Esses bancos de dados são comuns em PHP e Python, por exemplo
  - Bancos de dados noSQL não usa esquemas (tabelas, linhas, etc), eles usam collections, documents e properties (vai ser explicado depois, relaxa)
  - noSQL é um termo genérico pra representar bancos de dados não relacionais
- Firebase é um serviço de backend que tem o firestore, um banco de dados noSQL que usaremos no treinamento
- Vamos usar um banco de dados noSQL pois eles funcionam tipo objetos em JS, além de serem um pouco mais flexíveis do que bancos SQL
- Quando iniciamos uma aplicação, nem sempre temos claro o que vamos guardar no banco de dados então ter mais flexibilidade (eg um banco noSQL) é uma boa
- Vamos usar o Firebase também pois ele não oferece só o banco de dados, ele oferece uma série de serviços. Inclusive, é por isso que o firebase é chamado de BAAS (backend as a service)
- Ele oferece um tanto de coisa como autenticação e outras paradas de backend
- Algumas coisas importantes sobre o firebase
  - Por ser um BAAS, podemos focar em construir o front-end da aplicação já que usaremos o backend do firebase
  - É um serviço estritamente online
  - É gratuita pra aplicações pequenas e médias
  - A principal vantagem além de usar os serviços de backend do firebase, é a economia de tempo de não ter que pensar em backend
  - Dentre as desvantagens, destacamos uma certa rigidez (dá pra personalizar pero no mucho)
- Um banco de dados noSQL funciona assim
  - O banco tem uma instancia, que é um container pra todas as informações
  - Dentro do container podem haver vários collections
  - Cada collection pode representar um tipo específico de informações (ie um collection de comentários)
  - Cada collection pode conter vários document, cada document representa um record, que é um data point
  - Cada um desses documents tem uma estrutura parecida com um obj js, com vários pares de chave e valor

## Aula 01-11 - Conhecendo o Firestore

- Firebase tem serviços backend tanto pra apps desktop quanto mobile
- Configuramos nossos backends dentro de projetos, que são containers que vão conter o registro das aplicações que serão criadas
- Quando criamos novos projetos, podemos habilitar o google analytics. Se quisermos fazer isso, escolhemos a localidade mais próxima na etapa de configuração
- Na parte de bancos de dados, o firebase oferece duas opções: o firestore e o realtime
  - O realtime é mais antigo e é um banco de dados menos organizado (mais complicado de lidar com os dados quando a aplicação aumenta)
  - o firestore é mais organizado e robusto por isso vamos usá-lo
- Firebase tem duas opções de segurança: production mode e test mode
- Com o production mode (o default), algumas regras de segurança são aplicadas
- O test mode permite qualquer um com a referência do banco de dados possa usá-lo
- No próximo passo vamos escolher uma localização próxima dos usuários pois isso diminui a latência (o atraso entre troca de informações)
- Com o banco criado, podemos iniciar novas collections
- Podemos ter quantas collections quisermos desde que elas contenham um só tipo de document
- No test, criamos o collection games
- Lembrando que os documents são estruturas que contém chave e valor
- Na firestore as chaves são chamadas de field e o valor de value
- Podemos usar o auto-id pra geração de ids únicos
- Esses ids podem ser usados pra buscas os documents que criarmos
- A documentação do firebase tá [aqui](https://firebase.google.com/docs?authuser=0), pro treinamento vamos usar principalmente a parte de web

## Aula 01-12 - Conectando o Front-end ao Firebase

- Pra conectar o banco de dados que criamos à nossas aplicações, clicamos na engrenagem, em "Project settings" e, no final da página que vai abrir, escolhemos o(s) tipo(s) de app que quisermos
- Aqui usamos uma app web
- Registramos o app sem selecionar a opção que aparece e depois escolhemos usar um script pq ainda não vimos node e outros terminais
- O código que nos é dado importa features do firebase e dando um objeto de configuração do firebase, que usaremos pra conectar nosso app ao banco de dados
- Esse objeto já é criado com o intuito de ser mantido em público, não há risco de segurança em fazê-lo (apesar do github reclamar)
- A segurança do firebase é tratada nas regras de segurança, veremos mais à respeito mais à frente

## Aula 01-13 - Lendo dados do Firestore

- Pra obter e ler dados do banco de dados, vamos usar a const db que importamos da firestore
- Como o banco pode abrigar múltiplos collections, precisamos especificar qual collection queremos
- As o código pra obtermos todos os documents de um collection é o seguinte

```js
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
})
```

- O primeiro passo é obter a referência do collection "games" usando `collection(db, collectionName/games)`
- Essa função é importada do SDK do firestore `import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"`
- Com a referência para essa collection em mãos, podemos fazer diversas operações como adicionar e remover documents
- No momento queremos obter documents e pra isso usamos `getDocs()`, que também precisa ser importada `import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"`
- Em seguida, usaremos a referência da collection como argumento da getDocs `getDocs(collection(db, 'games'))`
- A *getDocs* é asíncrona e portanto retorna uma promise, nesse exemplo usaremos *then* ao invés de async/await pra praticar
- o then recebe o parâmetro querySnapshot, pois o objeto desencapsulado é uma "fotografia" do estado do bando de dados
- Encadeamos também o catch que recebe *console.log*
- Há duas formas de obter os documents da collection, uma é descrita na documentação e outra o Roger usa no dia-a-dia
- Usando o forEach
  - O objeto retornado (depois de ser desencapsulado, claro) pela *getDocs* possui um método *forEach*, que podemos usar pra acessar os documents
  - Pra acessar os dados, usamos o método `data`, que está contida no prototype de cada doc
    ```js
    getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    querySnapshot.forEach(doc => console.log(doc.data()))
  })
  .catch(console.log)
    ```
  - Os problemas dessa abordagem é que o a função retorna é um objeto, que tecnicamente não tem forEach (pode confundir) 
-  Método do Roger
   -  Cada querySnapshot (o objeto retornado pela getDocs) tem uma prop *docs*, que armazena um array
   -  Os elementos desse array possuem uma função *data()* que, por sua vez, retorna o dado do elemento (que é um document)
   -  Fica assim
    ```js
    getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => console.log(doc.data()))
  })
  .catch(console.log)
    ```
  - Uma vantagem de se usar essa abordagem é que, como `docs` contém um array, podemos usar qualquer método de array. Ou seja, essa abordagem é mais flexível 
- Com os dados dos documents em mãos, vamos inserir os dados no frontend. Pra isso vamos usar o método do roger e usar um reduce
  ```js
  getDocs(collection(db, 'games'))
  .then(querySnapshot => {
  const gamesList = querySnapshot.docs.reduce((acc, doc) => {
    acc += `<li>${doc.data().title}</li>`
    return acc
  }, '')
    
    const ul = document.querySelector('[data-js="games-list"]')
    ul.innerHTML += gamesList
  })
  .catch(console.log)
  ```
- Agora faremos com que só os jogos que vieram do firestore sejam exibidos, além de exibir também os campos *developedBy* e *createdAt* na inner HTML
  - Iniciamos removendo os lis que estavam no html
  - Depois retiramos o addition assignment usado na gamesList.innerHTML pois a gamesList está vazia
  - Depois usamos a marcação que o roger forneceu e preenchemos os campos com as props apropriadas
  - No entanto o field createdAt é uma timeStamp/objeto e queremos só a data de criação mesmo
  - Para obtê-la usaremos o método `toDate()`, que vem nos dateStamps
  - Fica assim
    ```js
    getDocs(collection(db, 'games'))
      .then(querySnapshot => {
        const gamesList = querySnapshot.docs.reduce((acc, doc) => {
          const { title, developedBy, createdAt } = doc.data()

          acc += `<li class="my-4">
            <h5>${title}</h5>

            <ul>
              <li>Desenvolvido por ${developedBy}</li>
              <li>Adicionado no banco em ${createdAt.toDate()}</li>
            </ul>
          </li>`

          return acc
        }, '')

          const ul = document.querySelector('[data-js="games-list"]')
          ul.innerHTML = gamesList
  })
  .catch(console.log)
    ```

# Aula 02

## Aula 02-01 - Correção dos exercícios da última aula
## Aula 02-02 - Correção dos exercícios da última aula
## Aula 02-03 - Correção dos exercícios da última aula
## Aula 02-04 - Correção dos exercícios da última aula
## Aula 02-05 - Correção dos exercícios da última aula
## Aula 02-06 - Correção dos exercícios da última aula
## Aula 02-07 - Introdução a regras de segurança no Firestore

- Lembrando que quando criamos um novo banco de dados no firestore temos duas opções de segurança: production mode e test mode
- Production mode define umas regras que mantém os dados do banco privado
- Essas regras previnem que qualquer pessoa leia e escreva nesse banco de dados
- No test mode, por outro lado, qualquer pessoa com a referência do banco de dados pode acessar e interagir (ler e escrever) com o mesmo
- Bancos criados em test mode só ficam ativos por 30 dias
- Próximo a esse prazo recebemos emails avisando que nosso acesso vai expirar
- Após o acesso expirar, temos que liberar o acesso e fazemos isso modificando as regras do banco de dados
- Podemos acessar as regras indo em FirestoreDatabase e depois em rules
- As regras do app são as seguintes (não são exatamente js mas são parecidas)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents { // instrução que identifica um objeto nobanco
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 1, 30);
    }
  }
}
```

- As regras começam no segundo match 
- `match /{document=**}` dá match em qualquer documento
- `allow read, write: if` faz com que possamos ler e escrever no banco de dados se a condição for cumprida
- Pra liberar o acesso basta remover a condição ou setar a condição pra true
- Podemos testar se as regras que setamos funcionam como esperamos usando o rules playground
- O prazo do test mode é justamente uma data nessas regras, pra liberar o acesso após o tempo de teste expirar é só mudar a regra
- Supunhetemos que queremos desabilitar a leitura dos docs do collection user e habilitar a leitura de todos os outros documents
- Fazemos assim `match /users/{document} { allow read: if false: }`
- Essa regra dá match em todos os documents do collection user e bloqueia a leitura desses documents
- Esse block só funciona se ela estiver no fim das regras, ela pode ser sobrescrita por outras regras
- Por padrão a leitura e escrita de um document é bloqueada. Ou seja, se não tiver regra afetando um document ele não vai poder ser lido nem escrito
- Lembrando que só pode deixar leitura e escrita liberados em desenvolvimento, isso é uma baita vulnerabilidade que não pode rolar quando esse banco for publicado

## Aula 02-08 - Salvando informações no Firestore

- O primeiro passo pra salvar novos items no banco de dados é setar um eventListener no form pra essa finalidade 
- Captamos os valores dos inputs do value
- Importamos a função `addDoc`, da firestore e a usamos pra adicionar as informações captadas no form
  - Essa função recebe a collection em que desejamos inserir o document e um objeto com as propriedades do document
- Ficou assim

```js
addDoc(collectionGames, { 
      title: e.target.title.value,
      developedBy: e.target.developer.value,
      createdAt: serverTimestamp()
    })
    .then(doc => console.log(`Document criado com o ID: ${doc.id}`))
    .catch(console.log)
```
- A `addDoc` retorna uma promise com o status da tentativa de adição, por isso encadeamos as funções then e catch pra podermos simular o tratamento dos eventuais resultados

## Aula 02-09 - Deletando informações no Firestore

- Pra remover os items, vamos identificar o botão de remoção clicado e a se eles tiverem a mesma id removemos a li
- REVER!!!


## Aula 02-10 - Modificando informações no Firestore

- Pro modificar documents começamos obtendo a referência do document que queremos modificar `doc(db, 'games', ERKBtLz89yUlTjZuP5Uv)` (nesse exemplo pegamos o id de maneira manual, os argumentos são a ref do banco de dados, a collection em que o document se encontra e a id do document)
- A expressão acima resulta na referência do document que queremos modificar
- Vamos usar a função da firestore `updateDoc()`, então temos que importá-la
  - Essa função é usada pra atualizar um ou mais campos de um document
- Então atribuímos a referência pra uma const `const theLastOfUsRef = doc(db, 'games', id)`
- Depois invocamos a updateDoc, que recebe a referência do document que queremos atualizar e um objeto contendo a(s) prop(s)/fields que queremos atualizar
- Essa função retornar uma promise, podemos então encadear then/catch conforme fizemos anteriormente para tratar eventuais erros
- Podemos inserir quantas props quisermos durante a invocação de `updateDoc`, basta adicioná-las no objeto do segundo argumento
- Se usarmos o id de um doc que não existe, nada acontece no banco de dados e só o catch é executado
- Se inserirmos um field que não existe no document, esse field será criado
- Também podemos atualizar um document usando `setDoc()`
- setDoc pode ser usada pra criar ou sobrescrever um document
  - se o id que passarmos pra função não existir, ela cria um novo document com esse id
  - se o id existir, o document com esse id será atualizado
- Então pra adicionar um novo document fazemos assim
  ```js
  const re3 = doc(db, 'games', 're')

  setDoc(re3, {
    title: 'Resident Evil 3',
    developedBy: 'Capcom'
  })
    .then(() => console.log('Document atualizado'))
    .catch(console.log)
  ```
- Só pra frisar, `setDoc` vai reescrever o document caso passemos uma referência que já existe. Isso quer dizer que se passarmos um objeto com um field só como se quiséssemos atualizar esse field nós criaríamos um document só com aquele field
- Pra contornar esse problema, podemos passar um terceiro argumento que recebe um objeto `{ merge: true }` 
- Então, usamos `updatedDoc` quando queremos atualizar os fields de um document existente sem deletar os outros fields, só precisa lembrar que se o doc não existir vai dar ruim
- Com a `setDoc` podemos atualizar ou criar um document então se quisermos atualizar um doc que não temos certeza que existe podemos usar essa função com a opção merge. Se o doc existir, já teremos. Segue um exemplo
  ```js
  const re3 = doc(db, 'games', 'fhjkhg')

  setDoc(re3, { developedBy: 'Atari'}, { merge: true })
    .then(() => console.log('Documento atualizado'))
    .catch(console.log())
  ```

## Aula 02-11 - Listeners em tempo real

- A firebase é um banco com atualização em tempo real
- Ou seja, com que quando ocorra uma atualização no banco a aplicação seja atualizada (sem precisar recarregar a página)
- Esse deve ser o default pra usar a firestore
- Começamos mudando a forma de obter os dados, não usaremos `getDocs()` pois essa função obtém os dados uma vez só (lembre-se, snapshot)
- Também removemos o import da função
- Agora, vamos setar um realTimeListener
- Pra isso, usamos a função da firestore `onSnapshot`, que recebe a collection em que estamos interessados como primeiro argumento e uma função com o argumento querySnapshot como segundo argumento

```js
onSnapshot(collectionGames, querySnapshot => {
  console.log(querySnapshot.docs)
})
```
- `querySnapshot` tem uma prop docs (que não aparece no firefox...) que contém os documents
- Além disso, a função de callback da `onSnapshot` é invocada sempre que rola uma mudança no banco de dados
- Inclusive a callback é invocada duas vezes quando adicionamos um jogo novo, vamos resolver isso depois usando `serverTimestamp()`
- De qualquer forma, já que o callback é invocado sempre que rola modificação, podemos usar essa callback pra atualizar as informações exibidas na interface
- Vamos usar o mesmo código que escrevemos anteriormente, na getDocs

```js
querySnapshot => {
  const gamesList = querySnapshot.docs.reduce((acc, doc) => {
    const { title, developedBy } = doc.data()

    acc += `<li data-id="${doc.id}" class="my-4">
    <h5>${title}</h5>
    
    <ul>
      <li>Desenvolvido por ${developedBy}</li>
    </ul>

    <button data-remove="${
      doc.id
    }" class="btn btn-danger btn-sm">Remover</button>
  </li>`

    return acc
  }, "")

  ul.innerHTML = gamesList
}
```
- Essa modificação faz com ocorra um erro no console quando tentamos removes um jogo da lista, "game is null"
- Esse erro rola no then da deleteDoc e isso rola porque deletar um jogo conta como uma operação de escrita no banco de dados
- Sempre que uma operação de escrita é executada no código, os listeners do firestore são notificados com as novas informações e são invocados *imediatamente* antes mesmo que essas informações sejam enviadas pro backend
  - Essa feature se chama **compensação de latência**
- Em outras palavras, quando rola uma operação de escrita (ie adicionar um novo game, deletar um game, etc), a invocação da função responsável pela operação é executada só que antes da execução do callback to then da função de escrita ser executado, o callback do onSnapshot é executado.
- Então, quando deletamos o jogo, a lista é atualizada e essa atualização já é passada pro callback de onSnapshot (que é invocado) antes mesmo de ir pro banco (o jogo removido não entra na marcação). Só então o then do deleteDoc é executado e, como o jogo que removemos não está mais no html, a referência que usamos no callback recebe null, gerando o erro
- Pra contornar isso, removemos a manipulação de DOM dentro da callback do deleteDoc
- Agora vamos focar no problema causado pelo serverTimestamp (invocar essa função faz com o callback do onSnapshot seja executada uma vez extra ao final da execução)
- Isso rola porque a criação da data no servidor faz com que a informação de data seja criada uns milisegundos após o fluxo normal. Como essa operação é de escrita, ela dispara o callback de onSnapshot mais uma vez
- Pra solucionar isso vamos usar querySnapshot (do callback de onSnapshot), especificamente *querySnapshot.metadata.hasPendingWrites*
- Essa prop indica se há alguma atualização que já está disponível na onSnapshot que ainda não foi pro banco. No nosso exemplo, como a data ainda vai ser escrita no banco essa prop armazena true
- Quando a data é criada o callback de onSnaptshot é executada de novo pois rolou uma escrita mas não há mais escrita pendente, pois a data já foi pro banco
- Então usamos *querySnapshot.metadata.hasPendingWrites* como condição em um bloco de if: se o negativo dessa prop rolar, executamos a manipulação do DOM
- O roger também faz uma rederização condicional da data pq tem uns casos que não têm o createdAt. Ele usa um ternário que faz com que caso createdAt exista a info de data seja renderizada. Caso contrário uma string vazia é "renderizada"
- Por último, podemos desatrelar o real time listener usando o retorno do onSnapshot, que retorna a referências de uma função
- Pra realizar essa interrupção, armazenamos essa referência em uma const unsubscribe e vamos usá-la no listener de eventos de um botão que acabamos de acrescentar (em suma, pra interromper a atualização contínua é só executar a função que o onSnapshot retorna)