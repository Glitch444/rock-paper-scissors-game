let displayResult = document.getElementById("displayResult");
let displayComputerChoice = document.getElementById("displayComputerChoice");
let displayPlayerChoice = document.getElementById("displayPlayerChoice");

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let ps = 0;
let cs = 0;


// begin game on click
const playerButtons = document.querySelectorAll("#rock, #paper, #scissors");
playerButtons.forEach( (b) => b.addEventListener("click", play));

function play (e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

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
   computerElement.appendChild(computerPara);
 };


// Get computer's choice
function getComputerChoice() {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    let computerChoice = arrOfChoices[randomNum];
    return computerChoice;
}

// Get game winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        displayResult.textContent = "It's a tie!"
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        displayResult.textContent = "It's a tie!"
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        displayResult.textContent = "It's a tie!"


    }  else if (playerChoice === "rock" && computerChoice === "scissors") {
        displayResult.textContent = "You won this round!";
        ps += 1;
        playerScore.textContent += "🐵";
       
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        displayResult.textContent = "You lost this round!"
        cs += 1;
        computerScore.textContent += "🤖";
            
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        displayResult.textContent = "You won this round!"
        ps += 1;
        playerScore.textContent += "🐵";
        

    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        displayResult.textContent = "You lost this round!"
        cs += 1;
        computerScore.textContent += "🤖";
    
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        displayResult.textContent = "You won this round!"
        ps += 1;
        playerScore.textContent += "🐵";
        
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        displayResult.textContent = "You lost this round!"
        cs += 1;
        computerScore.textContent += "🤖";
    }

    winningMessage ()
}



let delayInMilliseconds = 600

function winningMessage () {
    setTimeout(function(){
    if (ps === 3) {
        alert("YOU WON THE GAME! Refresh page to have another go!")
    } else if (cs === 3) {
        alert ("YOU LOST THE GAME! Refresh page to have another go!")
    }
}, delayInMilliseconds);

}