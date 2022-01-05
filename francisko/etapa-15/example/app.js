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
const ul = document.querySelector('[data-js="games-list"]')
const unsubscribeButton = document.querySelector('[data-js="unsub"]')

const formatDateTime = dateTime => {
  const options = { dateStyle: 'short', timeStyle: 'short' }
  
  return new Intl.DateTimeFormat('pt-br', options).format(dateTime)
}

const generateLi = ({ id }, title, developedBy, createdAt) => 
  `<li data-id="${id}" class="my-4">
  <h5>${title}</h5>

  <ul>
    <li>Desenvolvido por ${developedBy}</li>
    ${createdAt ? `<li>Adicionado no banco em ${formatDateTime(createdAt.toDate())}</li>` : ''}
  </ul>

  <button data-remove="${
    id
  }" class="btn btn-danger btn-sm">Remover</button>
  </li>`

const generateGameList = (acc, doc) => {
  const { title, developedBy, createdAt } = doc.data()

  acc += generateLi(doc, title, developedBy, createdAt) 
  return acc
}

const renderGameList = querySnapshot => {
  const isDoneWriting = !querySnapshot.metadata.hasPendingWrites

  if (isDoneWriting) {
    ul.innerHTML = querySnapshot.docs.reduce(generateGameList, '')
  }

}

const addGameToDatabase = async e => {
  e.preventDefault()

  try {
    const { id } = await addDoc(collectionGames, {
      title: e.target.title.value,
      developedBy: e.target.developer.value,
      createdAt: serverTimestamp(),
    })

    console.log(`Documento criado com o ID ${id}`)
  } catch (err) {
    console.log(err.message)
  }
}

const removeGameFromDatabase = e => {
  const idRemoveButton = e.target.dataset.remove

  if (idRemoveButton) {
    try {
      deleteDoc(doc(db, "games", idRemoveButton))
      console.log('Game removido')
    } catch (err) {
      console.log(err.message)
    }
  }
}

const unsubscribe = onSnapshot(collectionGames, renderGameList)

formAddGame.addEventListener("submit", addGameToDatabase)
ul.addEventListener("click", removeGameFromDatabase)
unsubscribeButton.addEventListener('click', unsubscribe)