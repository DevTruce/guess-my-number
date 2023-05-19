"use strict";

/////////////////////////////////////////////////////////
//// Initializing game variables
let hiddenNumber = Math.trunc(Math.random() * 20 + 1); // random number between 1 - 20
let score = Number(document.querySelector(".score").textContent); // stored highscore and converted into a number data type
let highScore = 0;

// console.log(hiddenNumber); //// DEBUGGING

/////////////////////////////////////////////////////////
//// Function expressions to keep code clean and reusable
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayGuess = function (guess) {
  document.querySelector(".guess").value = guess;
};
const displayHighScore = function (highScore) {
  document.querySelector(".highscore").textContent = highScore;
};

/////////////////////////////////////////////////////////
//// Game Logic
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //// when there is no player guess
  if (!guess) {
    displayMessage("🛑 No Number!");

    //// when the guess is correct
  } else if (guess === hiddenNumber) {
    displayMessage("🥳 Correct Number!");

    // update highscore
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    // display hidden number when the player wins
    console.log(displayNumber(hiddenNumber));

    // changing background color upon winning
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //// when guess is incorrect
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      displayMessage(guess > hiddenNumber ? "📈 Too High!" : "📉 Too Low!");

      score--;
      displayScore(score);
    } else {
      displayMessage("💥 Game Over! You have lost.");
      displayScore(0);

      // changing background color upon losing
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

/////////////////////////////////////////////////////////
//// RESET GAME
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  hiddenNumber = Math.trunc(Math.random() * 20 + 1);

  displayNumber("?");
  displayScore(score);
  displayMessage("Start guessing...");
  displayGuess("");
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";

  //   console.log(hiddenNumber); //// DEBUGGING
});
