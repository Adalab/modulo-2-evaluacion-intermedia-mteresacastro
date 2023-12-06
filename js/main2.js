'use strict';

const select = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-button');
let playerCounter = document.querySelector('.js-playerCounter');
let pcCounter = document.querySelector('.js-pcCounter');
let finalComment = document.querySelector('.js-resultComment');
let disabled = document.querySelector('.js-disabled');
const playButton = document.querySelector('.js-button');
const divResult = document.querySelector('.js-result');
const restartButton = document.querySelector('.js-restartButton');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

function gamePC() {
    const randomNumbers = getRandomNumber (9);
    let valuePc = '';
    if (randomNumbers <= 3) {
        valuePc = 'rock'
    } else if (randomNumbers > 3 && randomNumbers < 7){
        valuePc = 'scissors'
    }else {
        valuePc = 'paper'
    }return valuePc;
};

function youWin(){
    divResult.classList.add('greenWin');
    divResult.classList.remove('blueTie');
    divResult.classList.remove('redLoose');
    divResult.innerHTML = '¡Has ganado!';
    playerCounter.innerHTML = parseInt(playerCounter.innerHTML) + 1;
};

function gameUser(){
    const valueUser = select.value;
    const pcValue = gamePC();

    switch (true) {
        case valueUser === "disabled":
            divResult.innerHTML = 'Selecciona una jugada';
        break;
        case pcValue === valueUser: 
            divResult.classList.add('blueTie');
            divResult.classList.remove('greenWin');
            divResult.classList.remove('redLoose');
            divResult.innerHTML = '¡Empate!';  
        break;
        case pcValue === 'paper' && valueUser === 'scissors': 
            youWin();
        break;
        case pcValue === 'scissors' && valueUser === 'rock':
            youWin();
        break;
        case pcValue === 'rock' && valueUser === 'paper':
            youWin();
        break;
        default:        
            divResult.classList.add('redLoose');
            divResult.classList.remove('greenWin');
            divResult.classList.remove('blueTie');
            divResult.innerHTML = '¡Has perdido!';
            pcCounter.innerHTML = parseInt(pcCounter.innerHTML) + 1;
    }

    if (parseInt(playerCounter.innerHTML) + parseInt(pcCounter.innerHTML) === 10){
        finishGame();
    }
};

function finishGame(){
    divResult.innerHTML = '¡La partida ha terminado!'
    divResult.classList.add('pinkFinish');
    playButton.classList.add('hidden');
    restartButton.classList.remove('hidden');

    if (playerCounter.innerHTML > pcCounter.innerHTML){
        finalComment.innerHTML = '¡Has ganado la partida!';
    }
    else if (playerCounter.innerHTML < pcCounter.innerHTML){
        finalComment.innerHTML = '¡Has perdido la partida!';
    }
    else {
        finalComment.innerHTML = '¡El resutado ha sido un empate!';
    }
}

function handleClickReset(event){
    event.preventDefault();
    playerCounter.innerHTML = 0;
    pcCounter.innerHTML = 0;
    divResult.innerHTML = 'Selecciona una jugada';
    divResult.classList.remove('pinkFinish');
    divResult.classList.remove('greenWin');
    divResult.classList.remove('blueTie');
    divResult.classList.remove('redLoose');
    playButton.classList.remove('hidden');
    restartButton.classList.add('hidden');
    finalComment.innerHTML = '';
    disabled.checked = true; 
}

function handleClickPlay(event) {
    event.preventDefault();
    gameUser();
}
playButton.addEventListener('click', handleClickPlay);
restartButton.addEventListener('click', handleClickReset);