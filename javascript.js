// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
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

// playerSelection and computerSelection, return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    let cleanPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cleanComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    if ((cleanComputerSelection === 'Rock' && cleanPlayerSelection === 'Scissors') || 
        (cleanComputerSelection === 'Scissors' && cleanPlayerSelection === 'Paper') ||
        (cleanComputerSelection === 'Paper' && cleanPlayerSelection === 'Rock')) {
        return `You Lose! ${cleanComputerSelection} beats ${cleanPlayerSelection}.`;
    } else if ((cleanPlayerSelection === 'Rock' && cleanComputerSelection === 'Scissors') || 
                (cleanPlayerSelection === 'Scissors' && cleanComputerSelection === 'Paper') ||
                (cleanPlayerSelection === 'Paper' && cleanComputerSelection === 'Rock')) {
        return `You Win! ${cleanPlayerSelection} beats ${cleanComputerSelection}.`;
    } else {
        return `Tie! ${cleanPlayerSelection} ties ${cleanComputerSelection}.`;
    }
}

for (let i = 1; i <= 30; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(i, playRound(playerSelection, computerSelection));
}