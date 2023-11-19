//variable declaration
let computerScore = 0;
let computerChoice = '';
let playerScore = 0;
let playerChoice = '';
let roundNumber = 1;
let roundResult = ''



//computer selection
const choiceArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function getComputerChoice() {
    return choiceArray[~~(Math.random() * choiceArray.length)];
}

//helper functions
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function replaceText(str, toReplace, replacement) {
    return str.replace(toReplace, replacement);
}

//game functions
function playRound(playerSelection) {
    computerChoice = getComputerChoice();
    playerChoice = playerSelection;
    roundNumber++;

    if(computerChoice == playerChoice) {
        roundResult = `It's a tie! You both chose ${capitalize(playerChoice)}.`;
    }
    else if (
        (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'rock' && computerChoice == 'lizard') ||
        (playerChoice == 'lizard' && computerChoice == 'spock') ||
        (playerChoice == 'spock' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'lizard') ||
        (playerChoice == 'lizard' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'spock') ||
        (playerChoice == 'spock' && computerChoice == 'rock')
    ) {
        playerScore += 1;
        roundResult = generateMessage(playerChoice, computerChoice) + ' You win the round :)';
    }
    else {
        computerScore += 1;
        roundResult = generateMessage(computerChoice, playerChoice) + ' You lose the round :(';
    }
}

function generateMessage(winnerChoice, loserChoice) {
    if(winnerChoice == 'scissors' && loserChoice == 'paper') {
        return 'Scissors cut paper.';
    }
    else if(winnerChoice == 'paper' && loserChoice == 'rock') {
        return 'Paper covers rock.';
    }
    else if(winnerChoice == 'rock' && loserChoice == 'lizard') {
        return 'Rock crushes lizard.';
    }
    else if(winnerChoice == 'lizard' && loserChoice == 'spock') {
        return 'Lizard poisons Spock.';
    }
    else if(winnerChoice == "spock" && loserChoice == "scissors") {
        return 'Spock smashes scissors.';
    }
    else if(winnerChoice == 'scissors' && loserChoice == 'lizard') {
        return 'Scissors decapitate lizard.';
    }
    else if(winnerChoice == 'lizard' && loserChoice == 'paper') {
        return 'Lizard eats paper.';
    }
    else if(winnerChoice == 'paper' && loserChoice == 'spock') {
        return 'Paper disproves spock.';
    }
    else if(winnerChoice == 'spock' && loserChoice == 'rock') {
        return 'Spock vaporized rock.';
    }
    else {
        return 'Rock crushes scissors.';
    }
}

function isGameOver(){
    return computerScore === 5 || playerScore === 5;
}

function restartGame() {
    computerScore = 0;
    computerChoice = '';
    playerScore = 0;
    playerChoice = '';
    roundNumber = 1;
    roundResult = '';
}

//ui handling functions
function handlePlayerChoice(playerSelection) {
    playRound(playerSelection);
    if(isGameOver()) {
        showWinner();
        restartScreen.classList.remove('hidden');
    }
    else {
        updateGameScreen()
    }
}

function handleRestart() {
    restartGame();
    updateGameScreen('');
    restartScreen.classList.add('hidden');
}

//ui update functions
function showWinner() {
    if(computerScore < playerScore) {
        gameResult.textContent = 'YOU WIN THE GAME!';
        resultImage.setAttribute('src', './sheldons/sheldon-loses.gif');
        lastRoundResult.textContent = replaceText(roundResult, ' You win the round :)', ' You are the superior human.');
    }
    else {
        gameResult.textContent = 'YOU LOSE THE GAME!';
        lastRoundResult.textContent = replaceText(roundResult, ' You lose the round :(', ' Sheldon is master of all things.');
        resultImage.setAttribute('src', './sheldons/sheldon-wins.gif');
    }
}

function updateGameScreen() {
    computerScoreCounter.textContent = computerScore;
    playerScoreCounter.textContent = playerScore;
    roundCounter.textContent = `${roundNumber}`;
    resultBoard.textContent = roundResult;
}

//button functions
function resetButtons() {
    if(playerChoice != '' && computerChoice != ''){
        let btnPlayer = document.getElementById('btn'+capitalize(playerChoice));
        let btnComputer = document.getElementById('btn'+capitalize(computerChoice));
        if(playerChoice == computerChoice) {
        btnPlayer.classList.remove('btnComputerPlayerSelection');
        }
        else {
            btnPlayer.classList.remove('btnPlayerSelection');
            btnComputer.classList.remove('btnComputerSelection');
        }
    }
}

function updateButtons() {
    let btnPlayer = document.getElementById('btn'+capitalize(playerChoice));
    let btnComputer = document.getElementById('btn'+capitalize(computerChoice));
    if(playerChoice == computerChoice) {
       btnPlayer.classList.add('btnComputerPlayerSelection');
    }
    else {
        btnPlayer.classList.add('btnPlayerSelection');
        btnComputer.classList.add('btnComputerSelection');
    }
}


//event listeners

let resultBoard = document.getElementById('resultBoard');
let playerScoreCounter = document.getElementById('playerScoreCounter');
let computerScoreCounter = document.getElementById('computerScoreCounter')
let roundCounter = document.getElementById('roundCounter');
let gameScreen = document.getElementById('gameScreen');
let restartScreen = document.getElementById('restartScreen');
let gameResult = document.getElementById('gameResult');
let lastRoundResult = document.getElementById('lastRoundResult');
let resultImage = document.querySelector('#resultImage img');

let btnBoard = document.querySelector('.btnBoard');
btnBoard.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'btnRock':
            resetButtons();
            handlePlayerChoice('rock');
            updateButtons();
            break;
        case 'btnPaper':
            resetButtons();
            handlePlayerChoice('paper');
            updateButtons();
            break;
        case 'btnScissors':
            resetButtons();
            handlePlayerChoice('scissors');
            updateButtons();
            break;
        case 'btnLizard':
            resetButtons();
            handlePlayerChoice('lizard');
            updateButtons();
            break;
        case 'btnSpock':
            resetButtons();
            handlePlayerChoice('spock');
            updateButtons();
            break;
    }
});

let btnRestart = document.querySelector('.restartScreen button');
btnRestart.addEventListener('click', () => {handleRestart()});

