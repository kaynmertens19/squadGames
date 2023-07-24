
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
const hangmanGame__Game__Container = document.querySelector('hangmanGame__Game__Container')
const hangmanGame__Game__chooseLeterContainer = document.querySelector('.hangmanGame__Game__chooseLeterContainer')

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

      } else if (username.value.length < 3 || username.value.length > 20) {
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
    resetGame()
    selectWord()
    addWord()
    playerLifesTitle.innerText = 'lifes: '+playerLifes
    hangmanGame__Game__introLetterButton.disabled = false

}
function resetGame() {
    clearWord()
    validLetters = 0;
    selectedLetter;
   
    attemps = [];
    playerLifes = 5;
}

function selectWord() {
    const index = Math.floor(Math.random() * playingWords.length);
    const selectedWord = playingWords[index].toUpperCase()
    const stringArray = selectedWord.split('')
    wordArray = stringArray

    hangmanGame__Game__chooseLeterContainer.style.display = 'flex'
}

function addWord() {
   
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
let attemps = [];
let playerLifes = 5;

const hangmanGame__Game__introLetterButton = document.querySelector('.hangmanGame__Game__introLetterButton')
const input__selectedLetter = document.getElementById('letter')
const letterAttempsTitle =  document.querySelector('.letterAttempsTitle')
const playerLifesTitle = document.querySelector('.playerLifesTitle')

hangmanGame__Game__introLetterButton.addEventListener('click', () => {



    if (isChoosenLetterValid() ) {
        if (isLetterMatch()) {
            console.log("your letter is in word")
            doMatch()
        } else {
            looselife()
            console.log("your letter isn't in word - loose life")
        }
       
        console.log("is valid letter")
        return true
    } else {
      
        // list letter selected - try again - loose life
        console.log("invalid letter")
        return false
    }


  
    input__selectedLetter.value = ''
})

function isLetterMatch() {

    for(let letter of wordArray) {

        if (letter === input__selectedLetter.value) {
            return true
        }
    }

    console.log(selectedLetter)

}

function isChoosenLetterValid() {
    let isValid = true;

    if (input__selectedLetter.value.trim() === '') {
        displayError(input__selectedLetter, 'one uppercase letter is required.');
        isValid = false;
        selectedLetter = input__selectedLetter.value     
    } else if (!isValidLetter(input__selectedLetter.value.trim())) {
        displayError(input__selectedLetter, 'Choose one uppercase letter please.');
        isValid = false;
        selectedLetter = input__selectedLetter.value
    } else if (isSecondAttempt(selectedLetter = input__selectedLetter.value
        )) {
        looselife()
        displayError(input__selectedLetter, 'you already tried this letter. - loose life');
        selectedLetter = input__selectedLetter.value
        isValid = false;
    } else {
        hideError(input__selectedLetter);
        selectedLetter = input__selectedLetter.value
        scoreTry()
    }

    return isValid;
}

function isValidLetter(selectedLetter) {
    const passwordRegex = /^[A-Z]+$/;
    return passwordRegex.test(selectedLetter);
}

function isSecondAttempt(letter) {
    for (let attemp of attemps) {
        if (letter === attemp) {
            return true
        }
        console.log(letter +' is in attmps')
    }  
    return false
}


function scoreTry() {
    attemps.push(input__selectedLetter.value)
//     letterAtempsTitle.innerText = letterAtempsTitle.innerText+' - '+input__selectedLetter.value
    letterAttempsTitle.innerText = 'Attemps: ' +attemps
    console.log(letterAttempsTitle.innerText)
   
}

var validLetters = 0;
function doMatch() {
    var liItems = wordLettersList.getElementsByTagName('li');

    for(let i = 0; i < liItems.length; i++) {
        if (selectedLetter === liItems[i].innerText) {
            console.log(liItems[i] + 'the word contains your letter')
            liItems[i].classList.remove('noneLetter')  
            liItems[i].classList.add('validLetter')
            validLetters += 1
            console.log('valid letters = ' + validLetters)
            console.log(liItems.length)
        }
    }

    isGameEnd(liItems.length)
}

function looselife() {
    if (playerLifes >1) {
        playerLifes -= 1
        playerLifesTitle.innerText = 'lifes: '+playerLifes
    } else if  (playerLifes === 1) {
        playerLifesTitle.innerText = 'You are death'
        hangmanGame__Game__introLetterButton.disabled = true
    }

}





function isGameEnd(length) {
    if (validLetters === length) {
        hangmanGame__Game.style.backgroundColor = 'green'
        console.log('WIN!!')
    }
}

