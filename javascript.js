// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else if (choice === 2) {
        return 'Scissors';
    }
}

// playerSelection and computerSelection, return a string that declares the winner of the round.
function playRound(playerSelection, computerSelection) {
    let cleanPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cleanComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    if ((cleanComputerSelection === 'Rock' && cleanPlayerSelection === 'Scissors') || 
        (cleanComputerSelection === 'Scissors' && cleanPlayerSelection === 'Paper') ||
        (cleanComputerSelection === 'Paper' && cleanPlayerSelection === 'Rock')) {
        return "computer";
    } else if ((cleanPlayerSelection === 'Rock' && cleanComputerSelection === 'Scissors') || 
        (cleanPlayerSelection === 'Scissors' && cleanComputerSelection === 'Paper') ||
        (cleanPlayerSelection === 'Paper' && cleanComputerSelection === 'Rock')) {
        return "player";
    } else {
        return "tie";
    }
}

// play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    let computerWin = 0;
    let playerWin = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Player Selection: Rock, Paper or Scissors?");
        let result = playRound(playerSelection, getComputerChoice());
        if (result === "computer") computerWin += 1;
        else if (result === "player") playerWin += 1;
        console.log(i, result);
    }
    if (computerWin === playerWin) {
        console.log("Tie!");
    } else if (computerWin > playerWin) {
        console.log("Computer Wins!");
    } else if (computerWin < playerWin) {
        console.log("Player Wins!");
    }
}

game();