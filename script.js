let playerScore = 0
let computerScore = 0

const rock = document.querySelector('#rock');
rock.addEventListener("click", () => {
    let playerSelection = "rock";
    let computerSelection = computerChooses();  
    playRound (playerSelection, computerSelection);
    playerAndComputerChose.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}`;
    scoreOutput.textContent = `Player Score: ${playerScore} , Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        playerWins ();
        } else if (computerScore === 5) {
        computerWins ()};
    });

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => {
    let playerSelection = "paper";
    let computerSelection = computerChooses();  
    playRound (playerSelection, computerSelection);
    playerAndComputerChose.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}`;
    scoreOutput.textContent = `Player Score: ${playerScore} , Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        playerWins ();
        } else if (computerScore === 5) {
        computerWins ()};
    });

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => {
    let playerSelection = "scissors";
    let computerSelection = computerChooses();  
    playRound (playerSelection, computerSelection);
    playerAndComputerChose.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}`;
    scoreOutput.textContent = `Player Score: ${playerScore} , Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        playerWins ();
        } else if (computerScore === 5) {
        computerWins ()};
});

const reset = document.querySelector('#reset');
reset.addEventListener("click", () => {
    resetGame()});
    
function computerChooses () {
    let options = ["rock", "paper", "scissors"]; 
    let computerPicks = options[Math.floor(Math.random()*options.length)];
    return (computerPicks);
}

function playRound (playerSelection, computerSelection) {

if (playerSelection === "rock" && computerSelection === "rock") {
    return;
} else if 
    (playerSelection === "paper" && computerSelection === "rock") {
    result = playerScore++;
    return result;
} else if 
    (playerSelection === "scissors" && computerSelection === "rock") {
    result = computerScore++;
    return result;
} else if 
    (playerSelection === "rock" && computerSelection === "paper") {
    result = computerScore++;
    return result;
} else if 
    (playerSelection === "paper" && computerSelection === "paper") {
    return;
} else if 
    (playerSelection === "scissors" && computerSelection === "paper") {
    result = playerScore++;
    return result;
} else if 
    (playerSelection === "rock" && computerSelection === "scissors") {
    result = playerScore++;
    return result;
} else if 
    (playerSelection === "paper" && computerSelection === "scissors") {
    result = computerScore++;
    return result;
} else if
    (playerSelection === "scissors" && computerSelection === "scissors") {
    return;
}};

function playerWins () {
    playerAndComputerChose.textContent = `You have won! You scored ${playerScore} and the Computer scored ${computerScore}`;
    scoreOutput.textContent = 'Player: 0, Computer: 0';
    playerScore = 0;
    computerScore = 0;
}

function computerWins () {
    playerAndComputerChose.textContent = `You have lost! You scored ${playerScore} and the Computer scored ${computerScore}`;
    scoreOutput.textContent = 'Player: 0, Computer: 0';
    playerScore = 0;
    computerScore = 0;
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerAndComputerChose.textContent = 'Alright, pick your starting move!';
    scoreOutput.textContent = 'Alright, pick your starting move!';
}