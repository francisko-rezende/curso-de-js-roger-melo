
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