const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.status.ok) {
      throw new Error()
    }

    return response.json()
  } catch (error) {
        console.log(error.message)
  }
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()

// try {
//   console.log(oi)
// } catch (error) {
//   if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
//     const oi = 'const oi criada'
//     console.log(oi)
//   }
// }
// console.log('oi')

// const getPokemon = async () => {
//   const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//   const charmander = fetch('https://pokeapi.co/api/v2/pokemon/charmander')
//   const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/squirtle')

//   const results = await Promise.all([bulbasaur, charmander, squirtle])
//   results.forEach(async response => console.log(await response.json()))
// }

// getPokemon()

// const getUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users = await response.json()
//   return users
// }

// const logUsers = async () => {
//   const users = await getUsers()
//    console.log(users)
// }

// logUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json()
//   })
//   .then(users => console.log(users))
//   .catch(error => console.log(error))