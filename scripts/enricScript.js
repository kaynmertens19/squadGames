
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
const hangmanGame__Game = document.querySelector('.hangmanGame__Game')
const hangmanGame__Game__backButton = document.querySelector('.hangmanGame__Game__backButton')
const hangmanGame__Game__initPageButton = document.querySelector('.hangmanGame__Game__initPageButton')


/* NAVIGATION */
/** main page **/  
hangmanGame__selectGameButton.addEventListener('click', () => {
    openGame()
    console.log('hangman game selecte')
})
function openGame() {
    mainPage.style.display = 'none'
    hangmanGame__container.style.display = 'flex'
    hangmanGame__Main.style.display = 'flex'
    hangmanGame__selectGameButton.style.backgroundColor = 'red'
}

hangmanGame__Main__initPageButton.addEventListener('click', () => {
    goMainPage()
})
function goMainPage() {
    hangmanGame__container.style.display = 'none'
    mainPage.style.display = 'flex'

    hangmanGame__selectGameButton.style.backgroundColor = 'green'
}


hangmanGame__Main__playButton.addEventListener('click', () => {
    playGame()
})
function playGame() {
    hangmanGame__Main__playButton.style.backgroundColor = 'green'
    hangmanGame__Game.style.display = 'flex'
    hangmanGame__Main.style.display = 'none'
}


/** game page **/  

hangmanGame__Game__backButton.addEventListener('click', () => {
    closeGame()
})
function closeGame() {
    hangmanGame__Game.style.display = 'none'
    hangmanGame__Main.style.display = 'flex'
}

hangmanGame__Game__initPageButton.addEventListener('click', () => {
    closeGame()
    goMainPage()
})



/* PLAY */

const wordLettersList = document.getElementById('wordLettersList')

const wordArray = ['h','e', 'l', 'l', 'o'] 


function addWord() {
    for(let i = 0; i<0; i++){
        const letterNode = document.createElement("li");
        const letterTextnode = document.createTextNode(wordArray[i]);
        letterNode.appendChild(letterTextnode);
        
        wordLettersList.appendChild(letterNode);
        console.log(wordArray[i])
    }
}

addWord()