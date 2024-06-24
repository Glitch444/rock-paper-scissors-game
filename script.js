const playerButtons = document.querySelectorAll("#rock, #paper, #scissors");
const displayPlayerChoice = document.getElementById("display-player-choice");
const displayComputerChoice = document.getElementById("display-computer-choice");
const displayResult = document.getElementById("display-result");

const displayPlayerScore = document.getElementById("display-player-score");
const displayComputerScore = document.getElementById("display-computer-score");

let playerScore = 0;
let computerScore = 0;
let playerChoice = null;

// get player's choice
playerButtons.forEach(function (button) {
    button.addEventListener("click", function() {
        playerChoice = button.id;
        playGame(playerChoice);
    });
});



// game
function playGame (playerChoice) {    
    const computerChoice = getComputerChoice();

    displayPlayerChoice.textContent = `🐵 YOU: ${playerChoice}`;
    displayComputerChoice.textContent = `💻 COMPUTER: ${computerChoice}`;

    if (playerChoice === computerChoice) {

        displayResult.textContent = "IT'S A TIE!"; 
    } 
    
    else if (
        (playerChoice === "rock" && computerChoice === "scissors")||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        displayResult.textContent = "YOU WIN!";
        playerScore += 1;
        displayPlayerScore.textContent = playerScore;
       
    } else {
        displayResult.textContent = "YOU LOSE!";
        computerScore += 1;
        displayComputerScore.textContent = computerScore;
    }

    let result = displayResult.textContent
    displayResult.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            displayResult.classList.add("greenText");
            break;
        case "YOU LOSE!":
            displayResult.classList.add("redText")
            break;

    }

}

// get computer's choice
function getComputerChoice() {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    let computerChoice = arrOfChoices[randomNum];
    return computerChoice;
}




// let delayInMilliseconds = 600

// function winningMessage () {
//     setTimeout(function(){
//     if (ps === 3) {
//         alert("YOU WON THE GAME! Refresh page to have another go!")
//     } else if (cs === 3) {
//         alert ("YOU LOST THE GAME! Refresh page to have another go!")
//     }
// }, delayInMilliseconds);

// }