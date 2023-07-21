
const mainPage = document.getElementById('mainPage')

const hangmanGame__selectGameButton = document.querySelector('.hangmanGame__selectGameButton')
const hangmanGame__container = document.querySelector('.hangmanGame__container')
const hangmanGame__Main__backButton = document.querySelector('.hangmanGame__Main__backButton')
const hangmanGame__Main__playButton = document.querySelector('.hangmanGame__Main__playButton')

/** open game **/  
hangmanGame__selectGameButton.addEventListener('click', () => {
    openGame()
})

function openGame() {
    mainPage.style.display = 'none'
    hangmanGame__container.style.display = 'Block'
    hangmanGame__selectGameButton.style.backgroundColor = 'red'
}

hangmanGame__Main__backButton.addEventListener('click', () => {
    goMainPage()
})
function goMainPage() {
    mainPage.style.display = 'block'

    hangmanGame__container.style.display = 'none'
    hangmanGame__selectGameButton.style.backgroundColor = 'green'
}

hangmanGame__Main__playButton.addEventListener('click', () => {
    playGame()
})
function playGame() {
    hangmanGame__Main__playButton.style.backgroundColor = 'green'
}

mainPage.style.backgroundColor = 'lightblue'