
let playerScore = 0
let compScore = 0

function computerPlay() {
    const arrOfChoices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random()*3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice 
    }


function playRound (playerSelection, computerSelection) {

    console.log("1", playerSelection, "2", computerSelection)

        if (playerSelection === "rock" && computerSelection === "rock"){
            return "you tied! You both picked rock."
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            return "you tied! You both picked paper."
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "you tied! You both picked scissors."
        }  else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
            return "you win!"

        } else if (playerSelection === "rock" && computerSelection === "paper") {
            compScore++
            return "you looe!"
            
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
            return "you win!"
            
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            compScore++
            return "you lose!"

        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
            return "you win!"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            compScore++
            return "you lose!"
    }
}




function game() {
    for(let i = 0; i < 5; i ++) {
        const playerSelection = prompt("Choose","rock, paper, scissors").toLowerCase()
        const computerSelection = computerPlay()

        playRound (playerSelection, computerSelection)
    }

    if (playerScore > compScore) {
        return "You beat the computer!" 
    } else if (playerScore < compScore) {
        return " You got beat by the computer!"
    } else {
        return "you tied with the computer!"
    }

}

console.log(game())



/* will come back to the code below after trying some new stuff

let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", randomValueFromComputer)
});

const para = document.querySelector("P");

function randomValueFromComputer () {
    const computerChoice = Math.floor(Math.random()*3) +1;
    
    if (computerChoice === 1) {
        para.textContent = "ROCK";
    } else if (computerChoice === 2) {
        para.textContent = "PAPER";
    } else if (computerChoice === 3) {
        para.textContent = "SCISSORS";
    }
}

*/