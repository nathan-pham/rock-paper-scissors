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

console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

console.log(getHumanChoice());