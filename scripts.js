//variable declaration
let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

//computer selection
const choiceArray = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

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
function playRound(playerChoice) {
    let computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    let result = '';

    if(computerChoice == playerChoice) {
        return `It's a tie! You both chose ${capitalize(playerChoice)}.`;
    }
    else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "rock" && computerChoice == "lizard") ||
        (playerChoice == "lizard" && computerChoice == "spock") ||
        (playerChoice == "spock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "lizard") ||
        (playerChoice == "lizard" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "spock") ||
        (playerChoice == "spock" && computerChoice == "rock")
    ) {
        playerScore += 1;
        result = generateMessage(playerChoice, computerChoice);
        return result + " You win the round :)";

    }
    else {
        computerScore += 1;
        result = generateMessage(computerChoice, playerChoice);
        return result + " You lose the round :(";
    }
}

function generateMessage(winnerChoice, loserChoice) {
    if(winnerChoice == "scissors" && loserChoice == "paper") {
        return "Scissors cut paper.";
    }
    else if(winnerChoice == "paper" && loserChoice == "rock") {
        return "Paper covers rock.";
    }
    else if(winnerChoice == "rock" && loserChoice == "lizard") {
        return "Rock crushes lizard.";
    }
    else if(winnerChoice == "lizard" && loserChoice == "spock") {
        return "Lizard poisons Spock.";
    }
    else if(winnerChoice == "spock" && loserChoice == "scissors") {
        return "Spock smashes scissors.";
    }
    else if(winnerChoice == "scissors" && loserChoice == "lizard") {
        return "Scissors decapitate lizard.";
    }
    else if(winnerChoice == "lizard" && loserChoice == "paper") {
        return "Lizard eats paper.";
    }
    else if(winnerChoice == "paper" && loserChoice == "spock") {
        return "Paper disproves spock.";
    }
    else if(winnerChoice == "spock" && loserChoice == "rock") {
        return "Spock vaporized rock.";
    }
    else {
        return "Rock crushes scissors.";
    }
}

function isGameOver(){
    return computerScore === 5 || playerScore === 5;
}

function restartGame() {
    computerScore = 0;
    playerScore = 0;
    roundNumber = 1;
    roundResult = '';

}

//ui handling functions
function handlePlayerChoice(playerChoice) {
    let roundResult = playRound(playerChoice);
    roundNumber++;
    if(isGameOver()) {
        showWinner(roundResult);
        restartScreen.classList.remove('hidden');
    }
    else {
        updateGameScreen(roundResult)
    }
}

function handleRestart() {
    restartGame();
    updateGameScreen('');
    restartScreen.classList.add('hidden');
}

//ui update functions
function showWinner(roundResult) {
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


function updateGameScreen(roundResult) {
    computerScoreCounter.textContent = computerScore;
    playerScoreCounter.textContent = playerScore;
    roundCounter.textContent = `${roundNumber}`;
    resultBoard.textContent = roundResult;
}

//event listeners
let btnScissors = document.getElementById('btnScissors');
let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let btnLizard = document.getElementById('btnLizard');
let btnSpock = document.getElementById('btnSpock');
let resultBoard = document.getElementById('resultBoard');
let playerScoreCounter = document.getElementById('playerScoreCounter');
let computerScoreCounter = document.getElementById('computerScoreCounter')
let roundCounter = document.getElementById('roundCounter');
let gameScreen = document.getElementById('gameScreen');
let restartScreen = document.getElementById('restartScreen');
let gameResult = document.getElementById('gameResult');
let btnRestart = document.getElementById('restartButton')
let lastRoundResult = document.getElementById('lastRoundResult');
let resultImage = document.querySelector('#resultImage img');


btnScissors.addEventListener('click',() => {handlePlayerChoice('scissors')});
btnRock.addEventListener('click', () => {handlePlayerChoice('rock')});
btnPaper.addEventListener('click', () => {handlePlayerChoice('paper')});
btnLizard.addEventListener('click', () => {handlePlayerChoice('lizard')});
btnSpock.addEventListener('click', () => {handlePlayerChoice('spock')});
btnRestart.addEventListener('click', () => {handleRestart()});
