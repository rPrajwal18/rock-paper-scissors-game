
const choices = ['rock', 'paper', 'scissors'];

const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const endResult = document.getElementById("endResult");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playerChoice(playerchoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    
    if(playerchoice === computerChoice){
        result = "Its a TIE";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN" : "You LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN" : "You LOSE";
                break;   
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN" : "You LOSE";
                break; 
        }
            
        playerResult.textContent = `Player: ${playerchoice}`;
        computerResult.textContent = `Computer: ${computerChoice}`;
        endResult.textContent = result;

        endResult.classList.remove("greenText", "redText");

        switch(result){
            case "You WIN":
                endResult.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            case "You LOSE":
                endResult.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
        }
    }
}
