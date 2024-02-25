let playerScore = 0;
let computerScore = 0;

const firstChoice = document.getElementById("rock")
const secondChoice = document.getElementById("paper")
const thirdChoice = document.getElementById("scissors")

const pResult = document.getElementById("playerResult");
const cpuResult = document.getElementById("computerResult")


function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";

    } else if (computerChoice === 1) {
 
    return "scissors";
 
    } else if (computerChoice === 2) {

    return "paper";

    }


}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {

        playerScore++;

      pResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;

      pResult.style.color = "Blue";

    } else if (playerSelection === computerSelection) {

        pResult.textContent = "It's a tie!";

        pResult.style.color = "black";

    } else {

        computerScore++;

      pResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
      
      pResult.style.color = "Red";

    }
  


    cpuResult.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  
}
  

  firstChoice.addEventListener("click", () => playRound("rock"));
  
  secondChoice.addEventListener("click", () => playRound("paper"));
  
  thirdChoice.addEventListener("click", () => playRound("scissors"));


