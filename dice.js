function selectPlayer(id) {
  var playerCount = Number(id);

  if (playerCount === 1) {
    document.querySelector(".player-2").classList.toggle("hidden");
    document.querySelector(".player-3").classList.toggle("hidden");
  } else if (playerCount === 2) {
    document.querySelector(".player-3").classList.toggle("hidden");
  }

  document.querySelector(".player-board").classList.toggle("hidden");
  document.querySelector(".dice-board").classList.toggle("hidden");
}

function roll() {
  var playersHidden = document.querySelectorAll(".player.hidden");
  var dice = [];

  // roll dice based on not hidden player
  if (playersHidden.length === 2) {
    dice.push(diceRandom());
  } else if (playersHidden.length === 1) {
    dice.push(diceRandom());
    dice.push(diceRandom());
  } else {
    dice.push(diceRandom());
    dice.push(diceRandom());
    dice.push(diceRandom());
  }

  // change the dice on element
  for (var i = 0; i < dice.length; i++) {
    document.querySelector(".img" + (i + 1)).setAttribute("src", "./images/dice" + dice[i] + ".png");
  }

  // check the winner
  const index = dice.indexOf(Math.max(...dice));
  document.querySelector(".dice-board h1 span").textContent = " - Player " + (index + 1) + " Wins!";
}

function diceRandom() {
  return Math.floor(Math.random() * 6) + 1;
}
