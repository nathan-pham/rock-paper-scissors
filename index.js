const readline = require("readline")

const options = ["paper", "rock", "scissors"]

const prompt = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      rl.close()
      resolve(answer)
    })
  })
}

const game = async (start) => {
  if(start) {
    console.log("Welcome to a match of rock, paper, scissors.")
  }

  const choice = (await prompt("What's your play? ")).toLowerCase()
  const computer = options[Math.floor(Math.random() * options.length)]

  if(!options.includes(choice)) {
    console.log("Invalid choice!")
    game()
  }

  console.log("You chose", choice)
  console.log("Computer chose", computer)

  if(choice == computer) {
    return console.log("Tie!")
  }

  const i = options.findIndex(v => v == choice)
  const lose = options[(i + 1) % options.length]
  
  console.log(
    computer == lose
    ? "You Win!"
    : "Better luck next time."
  )
}


game(true)
""