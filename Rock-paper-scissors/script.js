const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const handIcon = document.querySelector(".user.hand-icon");
const computerHandIcon = document.querySelector(".computer.hand-icon");
const result = document.querySelector(".result");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const steps = document.querySelectorAll(".step");

// Start button enables game
const startBtn = document.querySelector(".start-btn");

rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;

let gameStarted = false;
// let round = 0;
// const totalRounds = 10;

rockIcon = "🪨";
paperIcon = "🖐️";
scissorsIcon = "✌️";
userFistIcon = "🤜";
computerFistIcon = "🤛";

randomChoice = [rockIcon, paperIcon, scissorsIcon];



startBtn.addEventListener("click", () => {
  if (!gameStarted) {
    // start game
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    startBtn.innerText = "Restart";
    gameStarted = true;

    round = 0;
    totalRounds = 10;
    
    steps.forEach((step) => step.classList.remove("active"));
  } else {
    // Restart game: reset scores and result
    round = 0;
    
    userScore.innerText = 0;
    computerScore.innerText = 0;
    handIcon.innerText = userFistIcon;
    computerHandIcon.innerText = computerFistIcon;
    result.innerText = "";
    steps.forEach((step) => step.classList.remove("active"));
  }
});

// Game button clicks
rockBtn.addEventListener("click", () => {
  calculateResult(rockIcon, scissorsIcon);
});

paperBtn.addEventListener("click", () => {
  calculateResult(paperIcon, rockIcon);
});

scissorsBtn.addEventListener("click", () => {
  calculateResult(scissorsIcon, paperIcon);
});

// Highlight current round
function highlightRound(round) {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === round - 1);
  });
}

// Game Logic
function calculateResult(userSelection, winningIcon) {
  if (round >= totalRounds) return;

  round++;
  highlightRound(round);

  handIcon.innerText = userFistIcon;
  computerHandIcon.innerText = computerFistIcon;

  handIcon.classList.add("shakeUserHands");
  computerHandIcon.classList.add("shakeComputerHands");

  setTimeout(() => {
    handIcon.classList.remove("shakeUserHands");
    computerHandIcon.classList.remove("shakeComputerHands");
    handIcon.innerText = userSelection;

    const computerChoice = Math.floor(Math.random() * 3);
    computerHandIcon.innerText = randomChoice[computerChoice];
    // console.log(computerChoice)
    if (userSelection === randomChoice[computerChoice]) {
      result.innerText = "Draw ";
    } else if (randomChoice[computerChoice] == winningIcon) {
      result.innerText = "You Won 🥳";
      userScore.innerText = +userScore.innerText + 1;
    } else {
      result.innerText = "You Lose 😔";
      computerScore.innerText = +computerScore.innerText + 1;
    }
  }, 1500);


  if(round === totalRounds){
    rockBtn.disabled =true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    const user = +userScore.innerText;
    const computer = +computerScore.innerText;

    if (user > computer) {
        alert("You Won the Game 🥳");
    } else if (user < computer) {
        alert("You Lost the Game 😔");
    } else {
        alert("Game Draw!");
    }
}
}

// End Result



