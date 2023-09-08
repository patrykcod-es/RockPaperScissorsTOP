console.log("rock paper scissors");

// variables

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const playerPointsUI = document.querySelector(".playerPoints");
const computerPointsUI = document.querySelector(".computerPoints");
const result = document.createElement("p");
const pointsContainer = document.querySelector(".points");

let playerPoints = 0;
let computerPoints = 0;
let playerChoice = "";
let round = 0;

// helping function

function getRandomInt(x) {
  return Math.floor(Math.random() * x);
}
function getComputerChoice() {
  let choice = getRandomInt(3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

function playRound(player, computerSelection) {
  if (
    (player === "rock" && computerSelection === "scissors") ||
    (player === "paper" && computerSelection === "rock") ||
    (player === "scissors" && computerSelection === "paper")
  ) {
    playerPoints += 1;
    result.textContent = `You won ${player} beats ${computerSelection}`;
  } else if (
    (player === "rock" && computerSelection === "paper") ||
    (player === "paper" && computerSelection === "scissors") ||
    (player === "scissors" && computerSelection === "rock")
  ) {
    computerPoints += 1;
    result.textContent = `You lose! ${computerSelection} beats ${player}`;
  } else {
    result.textContent = `You choose ${player} together`;
  }
}
function gameOver() {
  if (round >= 5) {
    buttons.forEach((button) => button.setAttribute("disabled", true));
  }
}

function game(e) {
  pointsContainer.appendChild(result);
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  if (round >= 5) {
    if (playerPoints > computerPoints) {
      gameOver();
      result.textContent = `Well done you won ${playerPoints} to ${computerPoints}`;
    } else if (playerPoints < computerPoints) {
      gameOver();
      result.textContent = `You loose ${computerPoints} to ${playerPoints}`;
    } else {
      gameOver();
      result.textContent = `There is no winner, only loosers .You both got ${playerPoints} points`;
    }
  }
  round += 1;
  playerPointsUI.textContent = playerPoints;
  computerPointsUI.textContent = computerPoints;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => game(e));
});
