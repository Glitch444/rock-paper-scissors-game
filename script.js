
let displayResult = document.getElementById("displayResult")
let displayComputerChoice = document.getElementById("displayComputerChoice")
let displayPlayerChoice = document.getElementById("displayPlayerChoice")

let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")



// begin game on click
const playerButtons = document.querySelectorAll("#rock, #paper, #scissors")
playerButtons.forEach(playerButtons => playerButtons.addEventListener("click", play))

function play (e) {
    const playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    addPara(playerChoice, computerChoice); 

    getWinner(playerChoice, computerChoice);
}

// display player and computer choices
function addPara (playerChoice, computerChoice) {
   
   const playerPara = document.createElement("p");
   const playerNode = document.createTextNode ("You chose: " + playerChoice);
   playerPara.appendChild(playerNode);
   const playerElement = document.getElementById("displayPlayerChoice");
   playerElement.appendChild(playerPara);

   const computerPara = document.createElement("p");
   const ComputerNode = document.createTextNode ("Computer chose: " + computerChoice);
   computerPara.appendChild(ComputerNode);
   const computerElement = document.getElementById("displayComputerChoice");
   computerElement.appendChild(computerPara)
 };


// Get computer's choice
function getComputerChoice() {
    const arrOfChoices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random()*3)
    let computerChoice = arrOfChoices[randomNum]
    return computerChoice
}

// Get game winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        displayResult.textContent = "you tied! You both picked rock."
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        displayResult.textContent = "you tied! You both picked paper."
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        displayResult.textContent = "you tied! You both picked scissors."

    }  else if (playerChoice === "rock" && computerChoice === "scissors") {
        displayResult.textContent = "you win!"
        playerScore.textContent += "🐵"

    } else if (playerChoice === "rock" && computerChoice === "paper") {
        displayResult.textContent = "you loose!"
        computerScore.textContent += "🤖"
            
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        displayResult.textContent = "you win!"
        playerScore.textContent += "🐵"
            
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        displayResult.textContent = "you lose!"
        computerScore.textContent += "🤖"
    
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        displayResult.textContent = "you win!"
        playerScore.textContent += "🐵"

    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        displayResult.textContent = "you lose!"
        computerScore.textContent += "🤖"
    }
}


// create function that counts score and first one to get to 5 wins game
// stop game after winner declared
// button for restarting game  


/*

function game() {
    for(let i = 0; i < 5; i++) {
                
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

*/