var buttons = document.querySelectorAll("button");
var playerImage = document.querySelector("#player .holder img");
var aiImage = document.querySelector("#ai .holder img");
var winner = document.querySelector("h3 span");

var weapons = [
  {
    name: "Lizard",
    weakness: [2, 3],
  },
  {
    name: "Paper",
    weakness: [0, 3],
  },
  {
    name: "Rock",
    weakness: [1, 4],
  },
  {
    name: "Scissors",
    weakness: [2, 4],
  },
  {
    name: "Spock",
    weakness: [0, 1],
  },
];

function startRound(event) {
  const player = event.target.attributes["0"].value;
  const ai = generateAI();
  updateImages(player, ai);
  winner.innerHTML = selectWinner(player, ai);
}

function generateAI() {
  return Math.floor(Math.random() * weapons.length);
}

function updateImages(playerChoice, aiChoice) {
  playerImage.src = `icons/${playerChoice}.png`;
  aiImage.src = `icons/${aiChoice}.png`;
}

function selectWinner(player, ai) {
  if (player == ai) {
    winner.style.color = "white";
    return "Draw";
  } else if (weapons[player].weakness.includes(ai)) {
    winner.style.color = "rgb(204, 48, 48)";
    return "A.I.";
  } else {
    winner.style.color = "rgb(130, 178, 214)";
    return "Player";
  }
}

buttons.forEach(function addListener(button) {
  button.addEventListener("click", startRound);
});
