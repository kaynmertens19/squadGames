
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
const username = document.getElementById('username');
const hangmanGame__Game__userNameTitle = document.querySelector('.hangmanGame__Game__userNameTitle')
let userName;
function validateUser() {
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
        displayError(username, 'Username should be between 3 and 20 characters.');
        isValid = false;
        console.log(" Username should be between 3 and 20 characters.")

      } else {
        userName = username.value
        hangmanGame__Game__userNameTitle.innerText = userName
        console.log(userName)
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
  



/* GAME - init */

const hangmanGame__Game__initGameButton = document.querySelector('.hangmanGame__Game__initGameButton')
const wordLettersList = document.getElementById('wordLettersList')
const playingWords = ['Apple', 'Banana', 'Apricot', 'Olive', 'Oranges',	'Ramphal', 'Papaya', 'Peach', 'Pomegranate', 'Pineapple', 'Rambutan', 'Raspberries', 'Strawberries','Starfruit',]
let wordArray;


hangmanGame__Game__initGameButton.addEventListener('click', () => {
    startGame()
})
function startGame() {
    selectWord()
    addWord()
}

function selectWord() {
    const index = Math.floor(Math.random() * playingWords.length);
    const selectedWord = playingWords[index].toUpperCase()
    const stringArray = selectedWord.split('')
    wordArray = stringArray
}

function addWord() {
    clearWord()
    console.log(wordArray)
    const wordLength = wordArray.length
    for(let i = 0; i<wordLength; i++){
        const letterNode = document.createElement("li");
        letterNode.classList.add('noneLetter')
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



/* GAME - play */

let selectedLetter;
const hangmanGame__Game__introLetterButton = document.querySelector('.hangmanGame__Game__introLetterButton')
const input__selectedLetter = document.getElementById('letter')

hangmanGame__Game__introLetterButton.addEventListener('click', () => {

    if (chooseLetter() ) {
        console.log("is valid letter")
        validateLetter()
    } else {
        console.log("invalid letter")
    }

    console.log(selectedLetter)

})

function chooseLetter() {
    let isValid = true;

    if (input__selectedLetter.value.trim() === '') {
        displayError(input__selectedLetter, 'one uppercase letter is required.');
        isValid = false;
        selectedLetter = input__selectedLetter.value     
    } else if (!isValidLetter(input__selectedLetter.value.trim())) {
        displayError(input__selectedLetter, 'Choose one uppercase letter please.');
        isValid = false;
        selectedLetter = input__selectedLetter.value
    } else {
        hideError(input__selectedLetter);
        hangmanGame__Game__introLetterButton.style.backgroundColor = 'green'
        selectedLetter = input__selectedLetter.value
    }

    return isValid;
}

function isValidLetter(selectedLetter) {
    const passwordRegex = /^[A-Z]+$/;
    return passwordRegex.test(selectedLetter);
  }


function validateLetter() {
    // for li in wordLettersList check if letter.innertext === selected letter

    console.log('word letters list' + wordLettersList)

   
    var liItems = wordLettersList.getElementsByTagName('li')
    for(let i = 0; i < liItems.length; i++) {
        console.log(liItems[i].innerText + '<=')
    }

     
   


}