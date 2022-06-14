function computerPlay() {
  let cpuChoice = null;
  let choices = ["Rock", "Paper", "Scissors"];

  cpuChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(cpuChoice);
}
