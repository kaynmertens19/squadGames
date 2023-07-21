
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
    console.log('hangman game selected')
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

    if (validateUser()) {
        console.log("is valid user")
        playGame()
    } else {
        console.log("invalid user")
    }

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

/* user input validate */
// let isValidUser = validateUser()
function validateUser() {
    const username = document.getElementById('username');
    let isValid = true;

    if (username.value.trim() === '') {
        displayError(username, 'Username is required.');
        isValid = false;
        console.log("no user name")
      } else if (username.value.trim().includes(' ')) {
        displayError(username, 'Username should not contain spaces.');
        isValid = false;
        console.log(" Username should not contain spaces.")

      } else if (username.value.length < 5 || username.value.length > 20) {
        displayError(username, 'Username should be between 5 and 20 characters.');
        isValid = false;
        console.log(" Username should be between 5 and 20 characters.")

      } else {
        hideError(username);
      }

      return isValid;
}
// Función para mostrar el mensaje de error
function displayError(element, errorMessage) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
  }
// Función para ocultar el mensaje de error
function hideError(element) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
  



/* PLAY */

const hangmanGame__Game__initGameButton = document.querySelector('.hangmanGame__Game__initGameButton')
const wordLettersList = document.getElementById('wordLettersList')
const playingWords = ['Apple', 'Banana', 'Apricot', 'Olive', 'Oranges',	'Ramphal', 'Papaya', 'Peach', 'Pomegranate', 'Pineapple', 'Rambutan', 'Raspberries', 'Strawberries','Starfruit',]
let wordArray = ['h','e', 'l', 'l', 'o'] 


hangmanGame__Game__initGameButton.addEventListener('click', () => {
    startGame()
})

function selectWord() {
    const index = Math.floor(Math.random() * playingWords.length);
    const selectedWord = playingWords[index]
    const stringArray = selectedWord.split('')
    wordArray = stringArray
}

function addWord() {
    clearWord()
    console.log(wordArray)
    const wordLength = wordArray.length
    for(let i = 0; i<wordLength; i++){
        const letterNode = document.createElement("li");
        const letterTextnode = document.createTextNode(wordArray[i]);
        letterNode.appendChild(letterTextnode);
        wordLettersList.appendChild(letterNode);
    }
}

function clearWord() {
    while (wordLettersList.hasChildNodes()) {
        wordLettersList.removeChild(wordLettersList.firstChild);
      }
}

function startGame() {
    selectWord()
    addWord()
}

