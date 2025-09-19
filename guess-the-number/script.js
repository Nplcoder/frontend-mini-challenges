(() => {
  const submit = document.querySelector(".submit");
  const startGame = document.querySelector(".startGame");
  const userInput = document.querySelector(".user-input");
  const form = document.querySelector("form");
  const result = document.querySelector(".result");
  const allGuessess = document.querySelector(".allGuesses span");

  let allGuess = [];
  let randomNum = parseInt(Math.floor(Math.random() * 100));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputNumber = parseInt(userInput.value);

    if (randomNum < inputNumber) {
      result.innerText = "Too High! 📈";
    } else if (randomNum > inputNumber) {
      result.innerText = "Too low! 📉";
    } else {
      result.innerText = "You got it! Congrats 🥳";
      startGame.disabled = false;
      submit.disabled = true;
    }

    allGuess.push(inputNumber);

    allGuessess.innerText = allGuess;

    if (allGuess.length === 8) {
      result.innerText = "Game Over! 🤣";
      startGame.disabled = false;
      submit.disabled = true;
    }
  });

  startGame.addEventListener("click", () => {
    result.innerText = "";
    allGuessess.innerText = "";
    userInput.value = "";
    startGame.disabled = true;
    submit.disabled = false;
    //   allGuess.length = 0;
    allGuess = [];
    randomNum = parseInt(Math.floor(Math.random() * 100));
  });
})();
