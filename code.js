console.log("rock paper scissors");

const choices = ["rock", "paper", "scissors"];
<<<<<<< Updated upstream
=======
const buttons = document.querySelectorAll("button");
const playerPointsUI = document.querySelector(".playerPoints");
const computerPointsUI = document.querySelector(".computerPoints");
const result = document.createElement("p");
const pointsContainer = document.querySelector(".points");

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    console.log(`You won ${player} beats ${computerSelection}`);
=======
    result.textContent = `You won ${player} beats ${computerSelection}`;
>>>>>>> Stashed changes
  } else if (
    (player === "rock" && computerSelection === "paper") ||
    (player === "paper" && computerSelection === "scissors") ||
    (player === "scissors" && computerSelection === "rock")
  ) {
    computerPoints += 1;
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
  }
}
function repeatString(string, times) {
  let repeatedtext = "";
  for (let i = 0; i < times; i++) {
    repeatedtext += string;
  }
  console.log(repeatedtext);
}
repeatString("hey", 3);
function reverseString(string) {
  let arr = string.split("");
  let revArr = arr.reverse();
  let revStr = revArr.join("");

  console.log(revStr);
}
reverseString("jebacpis");

function sumAll(start, finish) {
  let sum = 0;
  for (let i = start; i <= finish; i++) {
    sum += i;
    console.log(sum);
  }
}
sumAll(1, 4);

function lapYears(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    console.log("false");
    return false;
  } else if (year % 4 === 0 || year % 400 === 0) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
lapYears(2000);

function convertCelcToFaren(temp) {
  let faren = temp * 1.8 + 32;
  let shortFaren = Number.parseFloat(faren).toFixed(1);
  console.log(shortFaren);
}
convertCelcToFaren(37.6);
function convertFarenToCelc(temp) {
  let celc = (temp - 32) * (5 / 9);
  let shortCelc = Number.parseFloat(celc).toFixed(1);
  console.log(shortCelc);
}
convertFarenToCelc(100);

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector("#container");
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red";
paragraph.setAttribute("style", "color: red");
container.appendChild(paragraph);

const header = document.createElement("h3");
header.textContent = `I'm blue H3`;
header.setAttribute("style", "color: blue");
container.appendChild(header);

const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; backgroundColor: pink");
container.appendChild(div);

const mainHeader = document.createElement("h1");
mainHeader.textContent = `I'm in a div`;

div.appendChild(mainHeader);

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO";
div.appendChild(divParagraph);

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
