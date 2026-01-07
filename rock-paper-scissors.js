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

function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        switch (humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    console.log("You lose! Paper beats Rock.")
                    computerScore ++;
                    break;
                }
                else if (computerChoice == "scissors") {
                    console.log("You win! Rock beats Scissors.")
                    humanScore ++;
                    break;
                }
                else {
                    console.log("Draw!")
                    break;
                }
            case "paper":
                if (computerChoice == "scissors") {
                    console.log("You lose! Scissors beats Paper.")
                    computerScore ++;
                    break;
                }
                else if (computerChoice == "rock") {
                    console.log("You win! Paper beats Rock.")
                    humanScore ++;
                    break;
                }
                else {
                    console.log("Draw!")
                    break;
                }
            case "scissors":
                if (computerChoice == "rock") {
                    console.log("You lose! Rock beats Scissors.")
                    computerScore ++;
                    break;
                }
                else if (computerChoice == "paper") {
                    console.log("You win! Paper beats Scissors.")
                    humanScore ++;
                    break;
                }
                else {
                    console.log("Draw!")
                    break;
                }
        }
    }

    var humanScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; i ++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

}

playGame();