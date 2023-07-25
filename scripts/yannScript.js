const initialFrame = document.getElementById('frame1A');
const startGame = document.getElementById('frame1B');
const game = document.getElementById('frame1C');
const replay = document.getElementById('frame1D');
const level = document.getElementById('frame1E');
const hard = document.getElementById('frame1F');
const mainPage = document.getElementById('mainPage');
const juego1 = document.getElementById('juego1');
const juego2 = document.getElementById('juego2');
const juego3 = document.getElementById('juego3');
const juego4 = document.getElementById('juego4');
juego1.style.display = 'none';
juego2.style.display = 'none';
juego3.style.display = 'none';
juego4.style.display = 'none';
initialFrame.style.display = 'none';
// mainPage.style.display = 'none';
startGame.style.display = 'none';
game.style.display = 'none';
replay.style.display = 'none'; 
level.style.display = 'none';
hard.style.display = 'none';
let clickButtonResult = 0;
let clickButtonResultHard = 0;
const name1statusEasy = document.getElementById('name1statusEasy');
const name1statusHard = document.getElementById('name1statusHard');
const name1 = document.getElementById('name1');
const name2statusEasy = document.getElementById('name2statusEasy');
const name2statusHard = document.getElementById('name2statusHard');
const name2 = document.getElementById('name2');
const name3statusEasy = document.getElementById('name3statusEasy');
const name3statusHard = document.getElementById('name3statusHard');
const name3 = document.getElementById('name3');
const name4statusEasy = document.getElementById('name4statusEasy');
const name4statusHard = document.getElementById('name4statusHard');
const name4 = document.getElementById('name4');
name1.textContent ='Selecting user...';


const currentPlayer = {
    name: '',
    scoreEasy: '',
    scoreHard: ''
}
const Player2 = {
    name: '',
    scoreEasy: '',
    scoreHard: ''
}
const Player3 = {
    name: '',
    scoreEasy: '',
    scoreHard: ''
}
const Player4 = {
    name: '',
    scoreEasy: '',
    scoreHard: ''
}

const tenClick__button = document.querySelector('.tenClickGame__button');
tenClick__button.addEventListener('click', () => {
juego1.style.display = 'block';
initialFrame.style.display = 'grid';
mainPage.style.display = 'none';
});

const playingButton = document.getElementById('playingButton');
playingButton.addEventListener('click', () => {
    if (validateUsername() === true){
    initialFrame.style.display = 'none';
    startGame.style.display = 'grid';
    }
    currentPlayer.name = userName.value
    name1.textContent = currentPlayer.name;
    
});
const startingButton = document.getElementById('startingButton');
startingButton.addEventListener('click', () => {
startGame.style.display = 'none';
game.style.display = 'grid';
    setTimeout(function() {
    game.style.display = 'none';
    replay.style.display = 'grid'; 
    name1statusEasy.textContent = clickButtonResult;
    currentPlayer.scoreEasy = clickButtonResult;
    document.getElementById('totalClicks').textContent = clickButtonResult;
    }, 10000);
    clickButtonResult = 0;
    
});
const gameButton = document.getElementById('gameButton');
gameButton.addEventListener('click', () => {
    clickButtonResult++;
});
const backHomeButton = document.getElementById('backHomeButton');
backHomeButton.addEventListener('click', () => {
replay.style.display = 'none'; 
initialFrame.style.display = 'grid';

document.getElementById('name2').textContent = currentPlayer.name;
document.getElementById('name2statusEasy').textContent = currentPlayer.scoreEasy;
document.getElementById('name2statusHard').textContent = currentPlayer.scoreHard;
name1.textContent = 'Selecting user...';
name1statusEasy.textContent = '';
name1statusHard.textContent = '';
userName.value = ' ';
console.log(currentPlayer);




});
const playAgainButton = document.getElementById('playAgainButton');
playAgainButton.addEventListener('click', () => {
replay.style.display = 'none'; 
level.style.display = 'grid';
});
const sameLevelButton = document.getElementById('sameLevelButton');
sameLevelButton.addEventListener('click', () => {
    name1statusEasy.textContent = "Playing Easy again";
level.style.display = 'none';
startGame.style.display = 'grid';
});
const harderLevelButton = document.getElementById('harderLevelButton');
harderLevelButton.addEventListener('click', () => {
    name1statusHard.textContent = "Playing Hard now";
    level.style.display = 'none';
    hard.style.display = 'grid';
    setTimeout(function() {
    hard.style.display = 'none';
    replay.style.display = 'grid';
    name1statusHard.textContent = clickButtonResultHard;
    document.getElementById('totalClicks').textContent = clickButtonResultHard;
    clickButtonResultHard = 0;
    }, 10000);
   
    
});
const gameButtonHard = document.getElementById('gameButtonHard');
gameButtonHard.addEventListener('click', () => {
    clickButtonResultHard++;
    motion();
});
const userName = document.getElementById('username');
function validateUsername(){
    
    if (userName.value.length >= 4) {
        userName.style.border = '2px solid black';
        name1statusEasy.textContent = "Playing now";
        return true;
      } else {
        userName.style.border = '2px solid red';
        return false;
      }
}

function motion(){
    const randomX = Math.random() * 50;
    const randomY = Math.random() * 50;
    gameButtonHard.style.marginTop = randomY + "%";
    gameButtonHard.style.marginRigh = randomX + "%";
    gameButtonHard.style.marginLeft = randomX + "%";
    gameButtonHard.style.marginBottom = randomY + "%";
}



    


