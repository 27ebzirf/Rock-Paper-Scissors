let playerScore = 0
let computerScore = 0

let displayScore = function displayScore () {
    const results = document.querySelector('#results');
    const resultsContent = document.createElement('div');
    resultsContent.setAttribute('id', 'resultsContent');
    resultsContent.textContent = `Player Score: ${playerScore} , Computer Score: ${computerScore}`;
    results.appendChild(resultsContent);
}

const rock = document.querySelector('#rock');
rock.addEventListener("click", () => {
    computerChooses ();
    let playerSelection = "rock";
    let computerSelection = computerChooses();  
    playRound (playerSelection, computerSelection);
    console.log(`Player picks rock`);
    console.log(`Computer picks ${computerSelection}`);
    console.log(`Player's score = ${playerScore} points`);
    console.log(`Computer's score = ${computerScore} points`);
    displayScore();
});

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => {
    computerChooses ();
    let playerSelection = "paper";
    let computerSelection = computerChooses();  
    playRound (playerSelection, computerSelection);
    console.log(`Player picks paper`);
    console.log(`Computer picks ${computerSelection}`);
    console.log(`Player's score = ${playerScore} points`);
    console.log(`Computer's score = ${computerScore} points`);
    displayScore();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => {
    computerChooses ();
    let playerSelection = "scissors";
    let computerSelection = computerChooses();  
    playRound (playerSelection, computerSelection);
    console.log(`Player picks scissors`);
    console.log(`Computer picks ${computerSelection}`);
    console.log(`Player's score = ${playerScore} points`);
    console.log(`Computer's score = ${computerScore} points`);
    displayScore();    
});
    
function computerChooses () {
    let options = ["rock", "paper", "scissors"]; 
    let computerPicks = options[Math.floor(Math.random()*options.length)];
    return (computerPicks);
}

function playRound (playerSelection, computerSelection) {

if (playerSelection === "rock" && computerSelection === "rock") {
    result = playerScore++, computerScore++;
    return result;
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
    result = computerScore++, playerScore++;
    return result;
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
    result = playerScore++, computerScore++;
    return result;
}

};



// const results = document.querySelector('#results');
// const resultsContent = document.createElement('div');
// resultsContent.setAttribute('id', 'results');
// resultsContent.textContent = `Player Score: ${playerScore} , Computer Score: ${computerScore}`;
// results.appendChild(resultsContent);










