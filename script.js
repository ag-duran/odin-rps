let playerScore = 0;
let computerScore = 0;

const resultsParagraph = document.querySelector("#results-announcement");

function computerPlay() {
  let cpuChoice = null;
  let choices = ["rock", "paper", "scissors"];

  cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  return cpuChoice;
}

function playRound(playerSelection, computerSelection) {
  let displayMessage = "";
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection == "rock") {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nIt's a tie!`;
      } else if (computerSelection == "scissors") {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nYou win! Rock beats scissors`;
        updateScores("player");
      } else {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nYou lose! Paper beats rock`;
        updateScores("cpu");
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nYou win! Paper beats rock`;
        updateScores("player");
      } else if (computerSelection == "scissors") {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nYou lose! Scissors beat Paper`;
        updateScores("cpu");
      } else {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nIt's a tie!`;
      }
      break;
    case "scissors":
      if (computerSelection == "rock") {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nYou lose! Rock beats scissors`;
        updateScores("cpu");
      } else if (computerSelection == "scissors")
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nIt's a tie!`;
      else {
        displayMessage = `The player chooses ${playerSelection}.
        \nThe computer plays ${computerSelection}.
        \nYou win! Scissors beat Paper`;
        updateScores("player");
      }
      break;
  }

  return displayMessage;
}

function game(playerSelection) {
  resultsParagraph.style.color = "aliceblue";
  /*resultsParagraph.style.borderColor = "red";
  resultsParagraph.style.borderStyle = "solid";
  resultsParagraph.style.borderWidth = "5px";*/

  resultsParagraph.textContent = playRound(playerSelection, computerPlay());
  //resultsContainer.appendChild(resultsParagraph);
}

function updateScores(winner) {
  const p_score = document.querySelector("#player-score");
  const c_score = document.querySelector("#computer-score");

  switch (winner) {
    case "player":
      playerScore++;
      p_score.textContent = playerScore;
      break;
    case "cpu":
      computerScore++;
      c_score.textContent = computerScore;
      break;
  }

  if (playerScore >= 5)
    resultsParagraph.textContent = "You win! Congratulations!";
  else if (computerScore >= 5)
    resultsParagraph.textContent = "You lose! Better luck next time!";
}

const playerButtons = document.querySelectorAll("button");
playerButtons.forEach((element) => {
  element.addEventListener("click", () => {
    let buttonValue = "";
    switch (element.id) {
      case "rock-button":
        buttonValue = "rock";
        break;
      case "paper-button":
        buttonValue = "paper";
        break;
      case "scissors-button":
        buttonValue = "scissors";
        break;
    }
    if (playerScore >= 5 || computerScore >= 5) return;
    else {
      game(buttonValue);
      updateScores();
    }
  });
});
