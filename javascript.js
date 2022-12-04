let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;

const message = document.querySelector("#message");
const rockBtn = document.getElementById("rock-img");
const paperBtn = document.getElementById("paper-img");
const scissorsBtn = document.getElementById("scissors-img");
const playerScoreBox = document.getElementById("players-score");
const computerScoreBox = document.getElementById("computers-score");

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3 + 1); // generates a random number between 1 and 3

  if (randomNum == 1) {
    return "scissors";
  } else if (randomNum == 2) {
    return "paper";
  } else if (randomNum == 3) {
    return "rock";
  } else {
    alert("something went wrong");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "paper") {
    message.textContent = "Paper vs Paper... Try Again!";

    return "Paper vs Paper... Try Again!";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    message.textContent = "Rock vs Rock... Try Again!";

    return "Rock vs Rock... Try Again!";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    message.textContent = "Scissors vs Scissors... Try Again!";

    return "Scissors vs Scissors... Try Again!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    roundsLeft--;
    message.textContent = "You Win! Scissors beats Paper";

    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    roundsLeft--;
    message.textContent = "You Win! Paper beats Rock";

    return "You Win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    roundsLeft--;
    message.textContent = "You Win! Rock beats Scissors";

    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    roundsLeft--;
    message.textContent = "You Lose! Rock beats Scissors";

    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    roundsLeft--;
    message.textContent = "You Lose! Scissors beats Paper";

    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    roundsLeft--;
    message.textContent = "You Lose! Paper beats Rock";

    return "You Lose! Paper beats Rock";
  } else {
    alert("Something went terribly wrong");
  }
}

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerSelection) {
  playRound(playerSelection, getComputerChoice());

  playerScoreBox.textContent = String(playerScore);
  computerScoreBox.textContent = String(computerScore);

  if (playerScore > 2) {
    message.textContent = "Woohoo you won the game!";
    message.style.color = "lightgreen";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore > 2) {
    message.textContent = "Boo the computer won the game";
    message.style.color = "red";
    playerScore = 0;
    computerScore = 0;
  } else {
    message.style.color = "white";
  }
}
