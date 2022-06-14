function computerPlay() {
  let cpuChoice = null;
  let choices = ["Rock", "Paper", "Scissors"];

  cpuChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`The computer chooses ${cpuChoice}`);
  return cpuChoice;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please, write down your selection");
    console.log(
      "The player chooses " +
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1).toLowerCase()
    );
    console.log(playRound(playerSelection, computerPlay()));
  }
}

game();
