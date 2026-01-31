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
                    computerScore ++;
                    displayResult("You lose! Paper beats Rock.", results)
                    break;
                }
                else if (computerChoice == "scissors") {
                    humanScore ++;
                    displayResult("You win! Rock beats Scissors.", results)
                    break;
                }
                else {
                    displayResult("Draw!", results)
                    break;
                }
            case "paper":
                if (computerChoice == "scissors") {
                    computerScore ++;
                    displayResult("You lose! Scissors beats Paper.", results)
                    break;
                }
                else if (computerChoice == "rock") {
                    humanScore ++;
                    displayResult("You win! Paper beats Rock.", results)
                    break;
                }
                else {
                    displayResult("Draw!", results)
                    break;
                }
            case "scissors":
                if (computerChoice == "rock") {
                    computerScore ++;
                    displayResult("You lose! Rock beats Scissors.", results)
                    break;
                }
                else if (computerChoice == "paper") {
                    humanScore ++;
                    displayResult("You win! Paper beats Scissors.", results)
                    break;
                }
                else {
                    displayResult("Draw!", results)
                    break;
                }
        }
    }

function playGame() {

    /*for (let i = 0; i < 5; i ++) {
        playRound(getHumanChoice(), getComputerChoice())
    }*/

}

function displayResult(outcome, target) {
    target.textContent = outcome;

    humanScoreDiv.textContent = "Human: " + humanScore;
    computerScoreDiv.textContent = "Computer: " + computerScore;
    results.appendChild(humanScoreDiv);
    results.appendChild(computerScoreDiv);    

    if (humanScore == 5) {
        const winner = document.createElement("div");
        winner.textContent = "You are the winner!"
        target.appendChild(winner);        
    }
    else if (computerScore == 5) {
        const winner = document.createElement("div");
        winner.textContent = "The computer is the winner!"
        target.appendChild(winner);
    }
}

var humanScore = 0;
var computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#score");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

const humanScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");
