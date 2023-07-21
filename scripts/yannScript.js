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

const tenClick__button = document.querySelector('.tenClickGame__button');
tenClick__button.addEventListener('click', () => {
juego1.style.display = 'block';
initialFrame.style.display = 'grid';
mainPage.style.display = 'none';
});

const playingButton = document.getElementById('playingButton');
playingButton.addEventListener('click', () => {
initialFrame.style.display = 'none';
startGame.style.display = 'grid';
});
const startingButton = document.getElementById('startingButton');
startingButton.addEventListener('click', () => {
startGame.style.display = 'none';
game.style.display = 'grid';
    setTimeout(function() {
    game.style.display = 'none';
    replay.style.display = 'grid'; 
    }, 10000);
});
const gameButton = document.getElementById('gameButton');
gameButton.addEventListener('click', () => {
});

const backHomeButton = document.getElementById('backHomeButton');
backHomeButton.addEventListener('click', () => {
replay.style.display = 'none'; 
initialFrame.style.display = 'grid';
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
level.style.display = 'none';
hard.style.display = 'grid';
});
const gameButtonHard = document.getElementById('gameButtonHard');
gameButtonHard.addEventListener('click', () => {
    setTimeout(function() {
    hard.style.display = 'none';
    replay.style.display = 'grid'; 
    }, 10000);
    //set random
});
