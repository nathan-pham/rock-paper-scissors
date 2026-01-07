var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {

    val = Math.random() * 3;
    
    if (val <= 1) {
        return "rock";
    }
    else if (val <= 2 && val > 1) {
        return "paper";
    }
    else if (val <= 3 && val > 2) {
        return "scissors";
    }

}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.")
                computerScore ++;
            }
            else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors.")
                humanScore ++;
            }
            else {
                console.log("Draw!")
            }
        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper.")
                computerScore ++;
            }
            else if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock.")
                humanScore ++;
            }
            else {
                console.log("Draw!")
            }
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors.")
                computerScore ++;
            }
            else if (computerChoice == "paper") {
                console.log("You win! Paper beats Scissors.")
                humanScore ++;
            }
            else {
                console.log("Draw!")
            }
    }

}