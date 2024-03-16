let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Draw. Play again";
  msg.style.backgroundColor = " #081b31";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userPara.innerHTML = userScore;
    msg.innerText = `You Win!! Your choice ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPara.innerHTML = compScore;
    msg.innerText = `You Loose!! ${compChoice} beats your choice ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = generateCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
