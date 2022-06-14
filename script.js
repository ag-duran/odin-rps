function computerPlay() {
  let cpuChoice = null;
  let choices = ["Rock", "Paper", "Scissors"];

  cpuChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`The computer chooses ${cpuChoice}`);
  return cpuChoice;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "Rock") return "It's a tie!";
      else if (computerSelection == "Scissors")
        return "You win! Rock beats Scissors";
      else return "You lose! Paper beats Rock";
      break;
    case "paper":
      if (computerSelection == "Rock") return "You win! Paper beats Rock";
      else if (computerSelection == "Scissors")
        return "You lose! Scissors beat Paper";
      else console.log("It's a tie!");
      break;
    case "scissors":
      if (computerSelection == "Rock")
        console.log("You lose! Rock beats Scissors");
      else if (computerSelection == "Scissors") console.log("It's a tie!");
      else console.log("You win! Scissors beat Paper");
      break;
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(`The player chooses ${playerSelection}`);
console.log(playRound(playerSelection, computerSelection));
