let playerScore = 0;
let computerScore = 0;
let roundsLeft;

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

//console.log(getComputerChoice());
//console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "paper") {
    return "Paper vs Paper... Try Again!";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    return "Rock vs Rock... Try Again!";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "Scissors vs Scissors... Try Again!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    roundsLeft--;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    roundsLeft--;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    roundsLeft--;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    roundsLeft--;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    roundsLeft--;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    roundsLeft--;
    return "You Lose! Paper beats Rock";
  } else {
    alert("Something went terribly wrong");
  }
}

//console.log(playRound(getPlayerChoice(), getComputerChoice()) );

function game(gamesPerRound) {
  roundsLeft = gamesPerRound;

  while (roundsLeft > 0) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
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
