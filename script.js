const numInput = document.querySelector(".number-input");
const message = document.querySelector(".message");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const startGameBtn = document.querySelector(".start-game-btn");
const allGuesses = document.querySelector(".all-guesses");

function a() {
  let allGuessesArray = [];
  let randomNumber = Math.round(Math.random() * 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let numValue = parseInt(numInput.value);

    if (isNaN(numValue)) {
      message.innerText = "Please enter a valid number.";
      return;
    }

    if (numValue < randomNumber) {
      message.innerText = "Too low!";
    } else if (numValue > randomNumber) {
      message.innerText = "Too high!";
    } else {
      message.innerText = "You got it! Congrats";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    allGuessesArray.push(numValue);
    allGuesses.innerText = "Your guesses: " + allGuessesArray.join(", ");
    form.reset();
  });
  startGameBtn.addEventListener("click", () => {
    message.innerText = "";
    allGuesses.innerText = "";
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    form.reset();
    randomNumber = Math.round(Math.random() * 100);
    allGuessesArray.length = 0;
  });
}

a();
