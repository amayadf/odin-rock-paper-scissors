//variable declaration
let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

//computer selection
const choiceArray = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function getComputerChoice() {
    return choiceArray[~~(Math.random() * choiceArray.length)];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//add function to display results
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
        return result + " You win the round!";

    }
    else {
        computerScore += 1;
        result = generateMessage(computerChoice, playerChoice);
        return result + " You lose the round!";
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
    roundNumber = 1;

}

function handlePlayerChoice(playerChoice) {
    if(isGameOver()) {
        showWinner();
        restartGame();
    }
    else {
        let roundResult = playRound(playerChoice);
        resultBoard.textContent = roundResult;
        roundNumber++;
    }
    updateScores();
    updateRound();
}

function updateScores() {
    computerScoreCounter.textContent = computerScore;
    playerScoreCounter.textContent = playerScore;
}

function updateRound() {
    roundCounter.textContent = `ROUND #${roundNumber}`;
}


/* EVENT LISTENERS */

let btnScissors = document.getElementById('btnScissors');
let btnRock = document.getElementById('btnRock');
let btnPaper = document.getElementById('btnPaper');
let btnLizard = document.getElementById('btnLizard');
let btnSpock = document.getElementById('btnSpock');
let resultBoard = document.getElementById('resultBoard');
let playerScoreCounter = document.getElementById('playerScoreCounter');
let computerScoreCounter = document.getElementById('computerScoreCounter')
let roundCounter = document.getElementById('roundCounter');


btnScissors.addEventListener('click',() => {handlePlayerChoice('scissors')});
btnRock.addEventListener('click', () => {handlePlayerChoice('rock')});
btnPaper.addEventListener('click', () => {handlePlayerChoice('paper')});
btnLizard.addEventListener('click', () => {handlePlayerChoice('lizard')});
btnSpock.addEventListener('click', () => {handlePlayerChoice('spock')});
