import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDUZGaA0i0Vcih72SdV7wuc3vIoospcZuQ",
  authDomain: "testing-firebase-f5a4a.firebaseapp.com",
  projectId: "testing-firebase-f5a4a",
  storageBucket: "testing-firebase-f5a4a.appspot.com",
  messagingSenderId: "566588038442",
  appId: "1:566588038442:web:c7bbf5ed84fd8437089253",
  measurementId: "G-MD3J8PQWB9",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, "games")

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gameList = document.querySelector('[data-js="games-list"]')
const unsubscribeButton = document.querySelector('[data-js="unsub"]')

const getFormattedDate = createdAt => new Intl
  .DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
  .format(createdAt.toDate())

const renderGamesList = querySnapshot => {
  if (!querySnapshot.metadata.hasPendingWrites) {
    gameList.innerHTML = querySnapshot.docs.reduce((acc, doc) => {
      const [id  ,{ title, developedBy, createdAt }] = [doc.id, doc.data()]
  
      return `${acc}<li data-id="${id}" class="my-4">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        ${createdAt ? `<li>Adicionado no banco em ${getFormattedDate(createdAt)}</li>` : ''}
      </ul>
  
      <button data-remove="${
        id
      }" class="btn btn-danger btn-sm">Remover</button>
    </li>`
    }, "")
  }

}


const to = promise => promise
  .then(result => [null, result])
  .catch(error => [error])

const addGame = async e => {
  e.preventDefault()

  const [error, doc] = await to(addDoc(collection(db, 'games'), {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  }))

  if (error) {
    return console.log(error)
  }

  console.log(`Documento criado com o ID: ${doc.id}`)
  e.target.reset()
  e.target.focus()
}

const deleteGame = async e => {
  const idRemoveButton = e.target.dataset.remove
  
  if (!idRemoveButton) {
    return
  }

  const [error] = await to(deleteDoc(doc(db, "games", idRemoveButton)))

  if (error) {
    return console.log(error)
  }

  console.log('Game removido')
}

const handleSnapshotError = e => console.log(e)

const unsubscribe = onSnapshot(collectionGames, renderGamesList, handleSnapshotError)
formAddGame.addEventListener("submit", addGame)
gameList.addEventListener("click", deleteGame)
unsubscribeButton.addEventListener('click', unsubscribe)