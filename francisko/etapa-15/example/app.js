
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDUZGaA0i0Vcih72SdV7wuc3vIoospcZuQ",
  authDomain: "testing-firebase-f5a4a.firebaseapp.com",
  projectId: "testing-firebase-f5a4a",
  storageBucket: "testing-firebase-f5a4a.appspot.com",
  messagingSenderId: "566588038442",
  appId: "1:566588038442:web:c7bbf5ed84fd8437089253",
  measurementId: "G-MD3J8PQWB9"
}


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
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