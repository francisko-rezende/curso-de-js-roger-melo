import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  setDoc,
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

const unsubscribe = onSnapshot(collectionGames, querySnapshot => {
  if (!querySnapshot.metadata.hasPendingWrites) {

    const gamesList = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()
  
      acc += `<li data-id="${doc.id}" class="my-4">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        ${createdAt ? `<li>Adicionado no banco em ${createdAt.toDate()}</li>` : ''}
      </ul>
  
      <button data-remove="${
        doc.id
      }" class="btn btn-danger btn-sm">Remover</button>
    </li>`
  
      return acc
    }, "")
    ul.innerHTML = gamesList
  }

})

formAddGame.addEventListener("submit", (e) => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  })
    .then((doc) => console.log(`Document criado com o ID: ${doc.id}`))
    .catch(console.log)
})

ul.addEventListener("click", (e) => {
  const idRemoveButton = e.target.dataset.remove

  if (idRemoveButton) {
    deleteDoc(doc(db, "games", idRemoveButton))
      .then(() => console.log("Game removido"))
      .catch(console.log)
  }
})

unsubscribeButton.addEventListener('click', unsubscribe)