'use strict';


//query

const playButton = document.querySelector('.js-button');
const divResult = document.querySelector('.js-result');
const restartButton = document.querySelector('.js-restartButton');
let playerCounter = document.querySelector('.js-playerCounter');
let pcCounter = document.querySelector('.js-pcCounter');
let rock = document.querySelector('.js-rock');
let paper = document.querySelector('.js-paper');
let scissors = document.querySelector('.js-scissors');
let finalComment = document.querySelector('.js-resultComment');
let disabled = document.querySelector('.js-disabled');

var select = document.getElementById('game');
let selectedOption = select.options[select.selectedIndex].value;
console.log(selectedOption);


//funciones

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

function movePc() {
    
    let selectRock = rock.value;
    let selectPaper = paper.value;
    let selectScissors = scissors.value;
    
    let randomNumber = getRandomNumber(9);
    console.log(randomNumber);

    let selectedOption = select.options[select.selectedIndex].value;
    console.log(selectedOption);

    if (randomNumber <= 3 && selectedOption === selectPaper) {
        divResult.classList.add('greenWin');
        divResult.classList.remove('blueTie');
        divResult.classList.remove('redLoose');
        divResult.innerHTML = '¡Has ganado!';
        playerCounter.innerHTML = ((playerCounter.innerHTML*1) + 1);
    }
    else if (randomNumber <= 3 && selectedOption === selectRock){
        divResult.classList.add('blueTie');
        divResult.classList.remove('greenWin');
        divResult.classList.remove('redLoose');
        divResult.innerHTML = '¡Empate!';  
    }
    else if(randomNumber <= 3 && selectedOption === selectScissors){
        divResult.classList.add('redLoose');
        divResult.classList.remove('greenWin');
        divResult.classList.remove('blueTie');
        divResult.innerHTML = '¡Has perdido!';
        pcCounter.innerHTML = ((pcCounter.innerHTML*1) + 1);
    }
    
    else if (randomNumber > 3 &&  randomNumber <=6 && selectedOption === selectPaper) {
        divResult.classList.add('redLoose');
        divResult.classList.remove('greenWin');
        divResult.classList.remove('blueTie');
        divResult.innerHTML = '¡Has perdido!';
        pcCounter.innerHTML = ((pcCounter.innerHTML*1) + 1);
    }
    else if (randomNumber > 3 && randomNumber <=6 && selectedOption === selectRock){
        divResult.classList.add('greenWin');
        divResult.classList.remove('blueTie');
        divResult.classList.remove('redLoose');
        divResult.innerHTML = '¡Has ganado!';
        playerCounter.innerHTML = ((playerCounter.innerHTML*1)+ 1); 
    }
    else if (randomNumber > 3 && randomNumber <=6 && selectedOption === selectScissors){
        divResult.classList.add('blueTie');
        divResult.classList.remove('greenWin');
        divResult.classList.remove('redLoose');
        divResult.innerHTML = '¡Empate!';  
    }

    else if (randomNumber >= 7 && selectedOption === selectPaper) {
        divResult.classList.add('blueTie');
        divResult.classList.remove('greenWin');
        divResult.classList.remove('redLoose');
        divResult.innerHTML = '¡Empate!';
    }
    else if (randomNumber >= 7 && selectedOption === selectRock){
        divResult.classList.add('redLoose');
        divResult.classList.remove('greenWin');
        divResult.classList.remove('blueTie');
        divResult.innerHTML = '¡Has perdido!';
        pcCounter.innerHTML = ((pcCounter.innerHTML*1) + 1); 
    }
    else if (randomNumber >= 7 && selectedOption === selectScissors) {
        divResult.classList.add('greenWin');
        divResult.classList.remove('blueTie');
        divResult.classList.remove('redLoose');
        divResult.innerHTML = '¡Has ganado!';
        playerCounter.innerHTML = ((playerCounter.innerHTML*1) + 1);
    }
    else{
        divResult.innerHTML = 'Selecciona una jugada';
    }
  
    if ((playerCounter.innerHTML*1) + (pcCounter.innerHTML*1) === 10){
        finishGame();
    }
    
}
    

function handleClickPlay(event) {
    event.preventDefault();
    movePc();
}

function finishGame(){
    divResult.innerHTML = '¡La partida ha terminado!'
    divResult.classList.add('pinkFinish');
    playButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    
    if ((playerCounter.innerHTML*1) > (pcCounter.innerHTML*1)){
        finalComment.innerHTML = '¡Has ganado la partida!';
    }
    else if ((playerCounter.innerHTML*1) < (pcCounter.innerHTML*1)){
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


//eventos

playButton.addEventListener('click', handleClickPlay);
restartButton.addEventListener('click', handleClickReset);





