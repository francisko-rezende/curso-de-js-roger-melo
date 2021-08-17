/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

// getting DOM references

const form = document.querySelector('form')

const usernameInput = form.username

const inputFeedback = document.createElement('p')

const formFeedback = document.createElement('p')

// creating new HTML elements for feedback

usernameInput.insertAdjacentElement('afterend', inputFeedback)

form.insertAdjacentElement('afterend', formFeedback)

// defining functions

const provideFeedback = (paragraph, className, message) => {
  paragraph.setAttribute('class', className)
  paragraph.textContent = message
}

const isUsernameValid = username => /^[a-zA-Z]{6,}$/.test(username)

const clearUsername = () => usernameInput.value = ''

const provideRealTimeFeedback = () => {
  const usernameValue = usernameInput.value

  if (isUsernameValid(usernameValue)) {
    provideFeedback(inputFeedback, 'username-success-feedback', 'Username válido =)')
    return
  }
  
  provideFeedback(inputFeedback, 'username-help-feedback', 
  'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas')
}

const validateForm = event => {
  event.preventDefault()

  const usernameValue = usernameInput.value

  if (isUsernameValid(usernameValue)) {
    provideFeedback(formFeedback, 'submit-success-feedback', 'Dados enviados =)')
    clearUsername()
    return
  }

  provideFeedback(formFeedback, 'submit-help-feedback', 'Por favor, insira um username válido')
  clearUsername()
}

// adding event listeners

usernameInput.addEventListener('keyup', provideRealTimeFeedback)

form.addEventListener('submit', validateForm)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const newSome = (array, callback) => {

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    const valuePassesTest = callback(value)

    if (valuePassesTest) {
      return true
    }
  }

  return false
}

// console.log(newSome([1, 2, 3], item => item > 2))
// console.log(newSome([1, 3, 5], item => item === 0))

// console.log(newSome([2, 5, 8, 1, 4], x => x > 10));  // false
// console.log(newSome([12, 5, 8, 1, 4], x => x > 10)); // true
