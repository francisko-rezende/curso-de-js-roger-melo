const button = document.querySelector('button')
const popupWrapper = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block'
})

popupWrapper.addEventListener('click', event => {
    const clickedElementClass = event.target.classList[0]
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === clickedElementClass)

    if (shouldClosePopup) {
        popupWrapper.style.display = 'none'
    }

})