//variable declaration
let computerScore = 0;
let playerScore = 0;

//computer selection
const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[~~(Math.random() * choiceArray.length)];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//add function to keep the count updated on the page
//add function to display results
function playRound(playerChoice) {
    let computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    if(computerChoice == playerChoice) {
        return "It's a tie";
    }
    else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        playerScore += 1;
        return `${capitalize(playerChoice)} beats ${computerChoice}. You win the round!`;
    }
    else {
        computerScore += 1;
        return `${capitalize(computerChoice)} beats ${playerChoice}. You lose the round!`
    }
}

function isGameOver(){
    return computerScore === 3 || playerScore === 3;
}

function showWinner() {
    if(computerScore < playerScore) {
        resultBoard.textContent = 'YOU WON THE GAME!!! :)';
    }
    else {
        resultBoard.textContent = 'YOU LOST THE GAME :(';
    }
}

function restartGame() {
    computerScore = 0;
    playerScore = 0;
}

function handlePlayerChoice(playerChoice) {
    if(isGameOver()) {
        showWinner();
        restartGame();
    }
    else {
        let roundResult = playRound(playerChoice);
        resultBoard.textContent = roundResult;
    }
}


/* EVENT LISTENERS */

let btnScissors = document.getElementById('btnScissors');
let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let resultBoard = document.getElementById('resultBoard');

btnScissors.addEventListener('click',() => {handlePlayerChoice('scissors')});
btnRock.addEventListener('click', () => {handlePlayerChoice('rock')});
btnPaper.addEventListener('click', () => {handlePlayerChoice('paper')});