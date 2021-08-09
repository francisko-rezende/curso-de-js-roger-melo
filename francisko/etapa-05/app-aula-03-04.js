const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target

        clickedElement.remove()
    })
})

const button = document.querySelector('button')



button.addEventListener('click', () => {
    const newLi = document.createElement('li')
    
    newLi.textContent = 'Novo item criado de um jeito novo'

    ul.prepend(newLi)
})