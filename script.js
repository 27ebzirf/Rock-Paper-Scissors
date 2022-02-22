let playerScore = 0
let computerScore = 0

for (var i = 1; i <=5; ++i) {
    game(i);
}

// while (playerScore || computerScore < 3){
//     for (var i = 1; i <=5; ++i) {
//         game(i);
// }};

function game(){

function computerPlay () {
    let options = ["rock", "paper", "scissors"]; 
    let computerPicks = options[Math.floor(Math.random()*options.length)];
    return (computerPicks);
}

let playerSelection = prompt("Type either Rock, Paper or Scissors").toLowerCase();

let computerSelection = computerPlay();  

function playRound (playerSelection, computerSelection) {

if (playerSelection === "rock" && computerSelection === "rock") {
        result = ("Draw, Rock bases Rock"), playerScore++, computerScore++, playerSelection;
        return result;
    } else if 
       (playerSelection === "paper" && computerSelection === "rock") {
        result = ("Win, Paper covers Rock"), playerScore++;
        return result;
    } else if 
        (playerSelection === "scissors" && computerSelection === "rock") {
        result = ("Loss, Rock blunts Scissor"), computerScore++;
        return result;
    } else if 
        (playerSelection === "rock" && computerSelection === "paper") {
        result = ("Loss, Paper Covers Rock"), computerScore++;
        return result;
    } else if 
        (playerSelection === "paper" && computerSelection === "paper") {
        result = ("Draw, Papers everywhere!"), computerScore++, playerScore++;
        return result;
    } else if 
        (playerSelection === "scissors" && computerSelection === "paper") {
        result = ("Win, Scissors cuts Paper"), playerScore++;
        return result;
    } else if 
        (playerSelection === "rock" && computerSelection === "scissors") {
        result = ("Win, Rock blunts Scissors"), playerScore++;
        return result;
    } else if 
        (playerSelection === "paper" && computerSelection === "scissors") {
        result = ("Loss, Scissors Cuts Paper"), computerScore++;
        return result;
    } else if 
        (playerSelection === "scissors" && computerSelection === "scissors") {
        result = ("Draw, Snip Snip"), playerScore++, computerScore++;
        return result;
    } else
        return prompt("Not a valid input, try again, Do you understand?").toLowerCase();
    };


console.log(`Player picks ${playerSelection}`);
console.log(`Computer picks ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
console.log(`Player's score = ${playerScore} points`);
console.log(`Computer's score = ${computerScore} points`);
console.log(`/n`)

}

if (playerScore = 3) {
    alert (`You have won with ${playerScore} points to ${computerScore}`);
} else if (computerScore = 3) {
    alert (`You have lost, the computer scored ${computerScore} vs your ${playerScore}`);
} else 
    alert (`Not enough rounds played, you probably mistyped. But it seems the computer has ${computerScore} while you have ${playerScore}`)

