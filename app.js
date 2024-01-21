let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
    const drawGame = () =>{
        console.log("Game was draw");
        msg.innerText = "Game was Draw. play again";
        
    };
    const showWinner = (userWin,userChoice,compChoice) => {
        if(userWin){
            console.log("You win");
            msg.innerText = "You win";
            //userScore++;
            //userScorePara.innerText = userScore;
           msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        }else{
            console.log("You lose");
            msg.innerText = "You lose";
        }
    };
    const playGame = (userChoice) => {
        console.log("user choice = ",userChoice);
        //const compChoice = genCompChoice();
        const compChoice = genCompChoice();
        console.log("comp choice = ", compChoice);
        if(userChoice === compChoice){
        drawGame();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "paper" ? false:true;
            }else if(userChoice==="paper"){
                userWin = compChoice === "scissor" ? false : true;
            }else{
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
    };
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
        });
      });
