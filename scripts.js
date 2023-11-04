//variable declaration
let computerChoice;
let playerChoice;
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
function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice().toLowerCase();
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

function game() {
    for(let i = 0; i < 5; i++) {
        if(playerScore == 3 || computerScore == 3) {
            break;
        }
        playerChoice = prompt("Select rock, paper, or scissors:");
        console.log(playRound(playerChoice, getComputerChoice()));
    }
    if(playerScore > computerScore) {
        console.log("You won :)")
    }
    else {
        console.log("You lost :(")
    }
    playerScore = 0;
    computerScore = 0;
}


function checkIfPlayerWon(roundResult) {
    return roundResult.contains(`win`);
}



/*
/*     NEW CODE    

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    console.log(button.addEventListener("click", playRound(button.textContent), getComputerChoice));
});
*/

/* HELPER FUNCTIONS */

