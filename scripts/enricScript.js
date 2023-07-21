
/* MAIN */

const mainPage = document.getElementById('mainPage')
const hangmanGame__selectGameButton = document.querySelector('.hangmanGame__selectGameButton')
mainPage.style.backgroundColor = 'lightblue'


/* MAIN GAME */
const hangmanGame__container = document.querySelector('.hangmanGame__container')
const hangmanGame__Main = document.querySelector('.hangmanGame__Main')
const hangmanGame__Main__initPageButton = document.querySelector('.hangmanGame__Main__initPageButton')
const hangmanGame__Main__playButton = document.querySelector('.hangmanGame__Main__playButton')

/* GAME PAGE */
const hangmanGame__gameContainer = document.querySelector('.hangmanGame__gameContainer')
const hangmanGame__Game__backButton = document.querySelector('.hangmanGame__Game__backButton')
const hangmanGame__Game__initPageButton = document.querySelector('.hangmanGame__Game__initPageButton')



/** main page **/  
hangmanGame__selectGameButton.addEventListener('click', () => {
    openGame()
})
function openGame() {
    mainPage.style.display = 'none'
    hangmanGame__container.style.display = 'Block'
    hangmanGame__Main.style.display = 'Block'
    hangmanGame__selectGameButton.style.backgroundColor = 'red'
}

hangmanGame__Main__initPageButton.addEventListener('click', () => {
    goMainPage()
})
function goMainPage() {
    hangmanGame__container.style.display = 'none'
    mainPage.style.display = 'block'

    hangmanGame__selectGameButton.style.backgroundColor = 'green'
}


hangmanGame__Main__playButton.addEventListener('click', () => {
    playGame()
})
function playGame() {
    hangmanGame__Main__playButton.style.backgroundColor = 'green'
    hangmanGame__gameContainer.style.display = 'block'
    hangmanGame__Main.style.display = 'none'
}


/** game page **/  

hangmanGame__Game__backButton.addEventListener('click', () => {
    closeGame()
})
function closeGame() {
    hangmanGame__gameContainer.style.display = 'none'
    hangmanGame__Main.style.display = 'block'
}

hangmanGame__Game__initPageButton.addEventListener('click', () => {
    closeGame()
    goMainPage()
})