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
const player = {
    name: ''
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
    player.name = userName.value

    document.getElementById('name1').textContent = player.name;
    
});
const startingButton = document.getElementById('startingButton');
startingButton.addEventListener('click', () => {
startGame.style.display = 'none';
game.style.display = 'grid';
    setTimeout(function() {
    game.style.display = 'none';
    replay.style.display = 'grid'; 
    
    document.getElementById('name1statusEasy').textContent = `Top Easy: ${clickButtonResult}`;
    document.getElementById('totalClicks').textContent = clickButtonResult;
    
    }, 10000);
    clickButtonResult = 0;
    
});
const gameButton = document.getElementById('gameButton');
gameButton.addEventListener('click', () => {
    clickButtonResult++;
    // document.getElementById('name1Status').value = clickButtonResult;
   
});
const backHomeButton = document.getElementById('backHomeButton');
backHomeButton.addEventListener('click', () => {
replay.style.display = 'none'; 
initialFrame.style.display = 'grid';
document.getElementById('name2').textContent = document.getElementById('name1').textContent = player.name;
document.getElementById('name2statusEasy').textContent = document.getElementById('name1statusEasy').textContent;
document.getElementById('name2statusHard').textContent = document.getElementById('name1statusHard').textContent;
document.getElementById('name1').textContent = player.name = '';
document.getElementById('name1statusEasy').textContent = '';
document.getElementById('name1statusHard').textContent = '';
userName.value = ' ';





});
const playAgainButton = document.getElementById('playAgainButton');
playAgainButton.addEventListener('click', () => {
replay.style.display = 'none'; 
level.style.display = 'grid';
});
const sameLevelButton = document.getElementById('sameLevelButton');
sameLevelButton.addEventListener('click', () => {
level.style.display = 'none';
startGame.style.display = 'grid';
});
const harderLevelButton = document.getElementById('harderLevelButton');
harderLevelButton.addEventListener('click', () => {
    document.getElementById('name1statusHard').textContent = "Playing hard now";
level.style.display = 'none';
hard.style.display = 'grid';
setTimeout(function() {
    hard.style.display = 'none';
    replay.style.display = 'grid'; 
    document.getElementById('name1statusHard').textContent = `Top Hard: ${clickButtonResultHard}`;
    document.getElementById('totalClicks').textContent = clickButtonResultHard;
    clickButtonResultHard = 0;
    }, 10000);
    
    
});
const gameButtonHard = document.getElementById('gameButtonHard');
gameButtonHard.addEventListener('click', () => {
    clickButtonResultHard++;
    
});
const userName = document.getElementById('username');
function validateUsername(){
    
    if (userName.value.length >= 4) {
        userName.style.border = '2px solid black';
        document.getElementById('name1statusEasy').textContent = "Playing now";
        return true;
      } else {
        userName.style.border = '2px solid red';
        return false;
      }
}
