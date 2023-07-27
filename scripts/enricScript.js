
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
const hangmanGame__Game__scoreButton = document.querySelector('.hangmanGame__Game__scoreButton')
const hangmanGame__Game__image = document.querySelector('.hangmanGame__Game__image')
const hangmanImage_1 = document.querySelector('.hangmanImage_1')
const hangmanImage_2 = document.querySelector('.hangmanImage_2')
const hangmanImage_3 = document.querySelector('.hangmanImage_3')
const hangmanImage_4 = document.querySelector('.hangmanImage_4')
const hangmanImage_5 = document.querySelector('.hangmanImage_5')
const hangmanImage_6 = document.querySelector('.hangmanImage_6')
const hangmanImage_7 = document.querySelector('.hangmanImage_7')

/* SCORE PAGE */
const hangmanGame__Score = document.querySelector('.hangmanGame__Score')
const hangmanGame__Score__list = document.querySelector('.hangmanGame__Score__list')
const hangmanGame__Score__closeButton = document.querySelector('.hangmanGame__Score__closeButton') 

/* WIN PAGE */
const hangmanGame__Score__winPage = document.querySelector('.hangmanGame__Score__winPage')
const hangmanGame__Game__winButton = document.querySelector('.hangmanGame__Game__winButton')

/* NAVIGATION */
/** main page **/  
hangmanGame__selectGameButton.addEventListener('click', () => {
    openGame()
})
function openGame() {
    mainPage.style.display = 'none'
    hangmanGame__container.style.display = 'flex'
    hangmanGame__Main.style.display = 'flex'
    // hangmanGame__Game__image.src = new URL(/src/memoryGame/hangman_1)
}

hangmanGame__Main__initPageButton.addEventListener('click', () => {
    goMainPage()
})
function goMainPage() {
    hangmanGame__container.style.display = 'none'
    mainPage.style.display = 'flex'

}


hangmanGame__Main__playButton.addEventListener('click', () => {

    if (validateUser()) {
        playGame()
    }
})
function playGame() {
    
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
      } else if (username.value.trim().includes(' ')) {
        displayError(username, 'Username should not contain spaces.');
        isValid = false;

      } else if (username.value.length < 3 || username.value.length > 20) {
        displayError(username, 'Username should be between 3 and 20 characters.');
        isValid = false;

      } else {
        userName = username.value
        hangmanGame__Game__userNameTitle.innerText = userName
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
  
  // show scores page
  hangmanGame__Game__scoreButton.addEventListener('click', () => {
    hangmanGame__Score.style.display = 'flex'
    addResults()
  })


/* GAME - init */

const hangmanGame__Game__initGameButton = document.querySelector('.hangmanGame__Game__initGameButton')
const wordLettersList = document.getElementById('wordLettersList')
const fruits = ['Apple', 'Banana', 'Apricot', 'Olive', 'Oranges',	'Ramphal', 'Papaya', 'Peach', 'Pomegranate', 'Pineapple', 'Rambutan', 'Raspberries', 'Strawberries','Starfruit',]
const sports = ['Soccer', 'Basketball', 'Tennis', 'Baseball', 'Golf', 'Running', 'Volleyball', 'Badminton', 'Archery', 'Cycling']
const animals = ['Dog',	'Cow',	'Cat', 'Donkey', 'Tiger', 'Lion', 'Leopard', 'Bear', 'Turtle', 'Tortoise', 'Rabbit', 'Porcupine', 'Hare']
const issueList = [fruits, sports, animals]

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
    playerLifes = initialLifes;
}

function selectWord() {
    const issueIndex = Math.floor(Math.random() * issueList.length);
    const selectedIssue = issueList[issueIndex]

    const wordIndex = Math.floor(Math.random() * selectedIssue.length);
    const selectedWord = selectedIssue[wordIndex].toUpperCase()
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
const initialLifes = 6
let playerLifes = initialLifes;

const hangmanGame__Game__introLetterButton = document.querySelector('.hangmanGame__Game__introLetterButton')
const input__selectedLetter = document.getElementById('letter')
const letterAttempsTitle =  document.querySelector('.letterAttempsTitle')
const playerLifesTitle = document.querySelector('.playerLifesTitle')

hangmanGame__Game__introLetterButton.addEventListener('click', () => {

    if (isChoosenLetterValid() ) {
        if (isLetterMatch()) {
            doMatch()
            input__selectedLetter.value = ''
        } else {
            looselife()
            input__selectedLetter.value = ''
        }
       
        input__selectedLetter.value = ''
        return true
    } else {
      
        // list letter selected - try again - loose life
        input__selectedLetter.value = ''
        return false
    }

})

function isLetterMatch() {

    for(let letter of wordArray) {

        if (letter === input__selectedLetter.value) {
            return true
        }
    }

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
    }  
    return false
}


function scoreTry() {
    attemps.push(input__selectedLetter.value)

    letterAttempsTitle.innerText = 'Attemps: ' +attemps
   
}

var validLetters = 0;
function doMatch() {
    var liItems = wordLettersList.getElementsByTagName('li');

    for(let i = 0; i < liItems.length; i++) {
        if (selectedLetter === liItems[i].innerText) {
            liItems[i].classList.remove('noneLetter')  
            liItems[i].classList.add('validLetter')
            validLetters += 1
        }
    }

    isGameEnd(liItems.length)
}

function looselife() {
    if (playerLifes >1) {
        playerLifes -= 1
        playerLifesTitle.innerText = 'lifes: '+playerLifes
    } else if  (playerLifes === 0) {
        playerLifesTitle.innerText = 'You are death'
        hangmanGame__Game__introLetterButton.disabled = true
    }
    changeHangmanImage(playerLifes)

}
function changeHangmanImage(lifes) {
    if (lifes === 6) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_1.png"

    } else if (lifes === 5) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_2.png"

    } else if (lifes === 4) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_3.png"

    } else if (lifes === 3) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_4.png"

    } else if (lifes === 2) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_5.png"

    } else if (lifes === 1) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_6.png"

    } else if (lifes === 0) {
        hangmanGame__Game__image.src = "./srcs/memoryGame/hagman_7.png"

    }
}



function isGameEnd(length) {
    if (validLetters === length) {
        hangmanGame__Game.style.backgroundColor = 'green'
        hangmanGame__Score__winPage.style.display = 'flex'
        hangmanGame__Game__introLetterButton.disabled = true
    }
}


/* GAME - SCORES */
hangmanGame__Score__closeButton.addEventListener('click', () => {
    hangmanGame__Score.style.display = 'none'
})


hangmanGame__Game__winButton.addEventListener('click', () => {
    hangmanGame__Score__winPage.style.display = 'none'
    safeUserScore(userName, playerLifes)
})

/* DATA USERS-RESULTS */

function getAndPArseLSinfo(key) {
    const objectsLS = localStorage.getItem(key)

    const parseInfoLS = JSON.parse(objectsLS)

    return parseInfoLS
}


function addResults() {
    hangmanGame__Score__list.replaceChildren()

 let scores = getAndPArseLSinfo('scores') 

    if (scores !== null) {
        for(let score of scores) {
            const scoreNode = document.createElement("li");
            const scoreTextnode = document.createTextNode(JSON.stringify(score.userName+": "+score.lifes));
            scoreNode.appendChild(scoreTextnode);
            hangmanGame__Score__list.appendChild(scoreNode);
           
        }
    }
}

function safeUserScore(userName, playerLifes) {
    let userScore = {
        "userName": userName,
        "lifes": playerLifes
    }


    let scores = getAndPArseLSinfo('scores') 
    
    if (scores !== null) {
        scores.push(userScore)
      console.log('push: ' + scores)
      localStorage.setItem("scores", JSON.stringify(scores))

    } else {
        let newArray = [userScore]
        localStorage.setItem("scores", JSON.stringify(newArray))
        console.log('save: ' + scores)
    }

    console.log(userScore)
}