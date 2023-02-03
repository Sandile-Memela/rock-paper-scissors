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

// keep score.
let computerWin = 0;
let playerWin = 0;

// play a round game that keeps score and reports a winner or loser at the end.
function game(playerSelection) {
    if (computerWin === 5 || playerWin === 5) {
        playerWin = 0;
        computerWin = 0;
        const h3Computer = document.querySelector('#computer');
        h3Computer.textContent = "Computer: 0";
        const h3Player = document.querySelector('#player');
        h3Player.textContent = "Player: 0";
        const h3Result = document.querySelector('#result');
        h3Result.textContent = "";      
    }
    let result = playRound(playerSelection, getComputerChoice());
    if (result === "computer") {
        computerWin += 1;
        const h3Computer = document.querySelector('#computer');
        h3Computer.textContent = `Computer: ${computerWin}`;
    } else if (result === "player") {
        playerWin += 1;
        const h3Player = document.querySelector('#player');
        h3Player.textContent = `Player: ${playerWin}`;       
    } else if (result === "tie") {
        alert("Tie!");
    }    
    if (computerWin === 5 || playerWin === 5) {
        if (computerWin === playerWin) {
            const h3Result = document.querySelector('#result');
            h3Result.textContent = "Tie!";
        } else if (computerWin > playerWin) {
            const h3Result = document.querySelector('#result');
            h3Result.textContent = "Computer Wins!";        
        } else if (computerWin < playerWin) {
            const h3Result = document.querySelector('#result');
            h3Result.textContent = "Player Wins!";        
        }
    }

}

// add event listeners to buttons.
const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () => { game('rock') });
const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => { game('paper') });
const btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => { game('scissors') });