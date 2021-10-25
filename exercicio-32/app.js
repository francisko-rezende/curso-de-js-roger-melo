/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

// const key = ''


const fetchGif = async (query, key) => {
  const gifData = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=1&q=${query}`)
  return await gifData.json()
}

const createGifImg = url => {
  const gifImg = document.createElement('img')
  gifImg.setAttribute('src', url)
  return gifImg
}

const insertGif = async query => {
  const gif = await fetchGif(query, key)
  const gifUrl = gif.data[0].images['fixed_width_downsampled'].url
  const gifImg = createGifImg(gifUrl)

  output.prepend(gifImg)
}

const searchForm = document.querySelector('form')
const output = document.querySelector('.out')

searchForm.addEventListener('submit', event => {
  event.preventDefault()
  const queryValue = event.target.search.value.trim().toLowerCase()

  insertGif(queryValue)

  event.target.reset()
  event.target.focus()
})