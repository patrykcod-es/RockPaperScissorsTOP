console.log("rock paper scissors");

const choices = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;
function getRandomInt(x) {
  return Math.floor(Math.random() * x);
}
function getComputerChoice() {
  let choice = getRandomInt(3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

  if (
    (player === "rock" && computerSelection === "scissors") ||
    (player === "paper" && computerSelection === "rock") ||
    (player === "scissors" && computerSelection === "paper")
  ) {
    playerPoints += 1;
    console.log(`You won ${player} beats ${computerSelection}`);
  } else if (
    (player === "rock" && computerSelection === "paper") ||
    (player === "paper" && computerSelection === "scissors") ||
    (player === "scissors" && computerSelection === "rock")
  ) {
    computerPoints += 1;
    console.log(`You lose! ${computerSelection} beats ${player}`);
  } else {
    console.log(`You choose ${player} together`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, paper or scissor?");
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  }
  if (playerPoints > computerPoints) {
    console.log(`Well done you won ${playerPoints} to ${computerPoints}`);
  } else if (playerPoints < computerPoints) {
    console.log(`You loose ${computerPoints} to ${playerPoints}`);
  } else {
    console.log(
      `There is no winner, only loosers .You both got ${playerPoints} points`
    );
  }
}
game();
