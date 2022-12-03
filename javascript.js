let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;
let roundWinner = "";

//const buttons = document.querySelectorAll("img");

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
    roundWinner = "player";
    message.textContent = "You Win! Scissors beats Paper";

    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    roundsLeft--;
    roundWinner = "player";
    message.textContent = "You Win! Paper beats Rock";

    return "You Win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    roundsLeft--;
    roundWinner = "player";
    message.textContent = "You Win! Rock beats Scissors";

    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    roundsLeft--;
    roundWinner = "computer";
    message.textContent = "You Lose! Rock beats Scissors";

    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    roundsLeft--;
    roundWinner = "computer";
    message.textContent = "You Lose! Scissors beats Paper";

    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    roundsLeft--;
    roundWinner = "computer";
    message.textContent = "You Lose! Paper beats Rock";

    return "You Lose! Paper beats Rock";
  } else {
    alert("Something went terribly wrong");
  }
}

// UI

const message = document.querySelector("#message");
const rockBtn = document.getElementById("rock-img");
const paperBtn = document.getElementById("paper-img");
const scissorsBtn = document.getElementById("scissors-img");
const playerScoreBox = document.getElementById("players-score");
const computerScoreBox = document.getElementById("computers-score");

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
/*

function getPlayerChoice() {
  let playerSelected = "";

  scissors.addEventListener("click", () => {
    playerSelected = 'scissors'
  });



  function scissorsFunction() {
    playerSelected = "scissors";
  }

  paper.addEventListener("click", paperFunction);

  function paperFunction() {
    playerSelected = "paper";
  }

  rock.addEventListener("click", rockFunction);

  function rockFunction() {
    playerSelected = "paper";
  }

  if (playerSelected == "scissors") {
    return "scissors";
  } else if (playerSelected == "paper") {
    return "paper";
  } else if (playerSelected == "rock") {
    return "rock";
  } 
}

function getPlayerChoice() {
  let input = prompt('Type "scissors", "paper or "rock"', "");
  if (input.toLowerCase() == "scissors") {
    return "scissors";
  } else if (input.toLowerCase() == "paper") {
    return "paper";
  } else if (input.toLowerCase() == "rock") {
    return "rock";
  } else {
    alert("input a valid selection");
  }
}
*/

//console.log(getComputerChoice());
//console.log(getPlayerChoice());

//const message = document.querySelector("#message");

//const messageContent = document.createElement("h2"); // define a new div element with js called 'content'
//messageContent.classList.add("message-content");

//console.log(playRound(getPlayerChoice(), getComputerChoice()) );

/*
function game(gamesPerRound) {
  roundsLeft = gamesPerRound;

  //buttons.dataset.value

  while (roundsLeft > 0) {
    console.log(
      `Your current score is ${playerScore} out of ${
        gamesPerRound - roundsLeft
      }`
    );

    if (playerScore > gamesPerRound / 2) {
      alert("Woohoo you won the round");
    } else if (computerScore > gamesPerRound / 2) {
      alert("Boo the computer won the round");
    }
  }

  alert("The game has ended");
  roundsLeft = gamesPerRound; //reset roundsLeft
}

game(5);


*/
