let userScore = 0;
let computerScore = 0;

// randomly returns either rock paper or scissors
function computerPlay() {
	let computerDecision = Math.floor(Math.random() * 3);
	let selections = ["rock", "paper", "scissors"];
	return selections[computerDecision];
}

function playRound(playerSelection, computerSelection) {
	let winnerAnnouncement;
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		winnerAnnouncement = 'You win! Rock crushes Scissors';
		userScore++;
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		winnerAnnouncement = 'You lose! Paper covers Rock';
		computerScore++;
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		winnerAnnouncement = 'Its a tie! you both picked Rock';
		userScore++;
		computerScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		winnerAnnouncement = 'You win! Paper covers Rock';
		userScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		winnerAnnouncement = 'You lose! Scissors cuts Paper';
		computerScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		winnerAnnouncement = 'Its a tie! you both picked Rock';
		userScore++;
		computerScore++;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		winnerAnnouncement = 'You win! Scissors cuts Paper';
		userScore++;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		winnerAnnouncement = 'You lose! Rock crushes Scissors';
		computerScore++;
	} else if (
		playerSelection === 'scissors' && computerSelection === 'scissors') {
		winnerAnnouncement = 'Its a tie! you both picked Scissors';
		userScore++;
		computerScore++;
	} else {
		winnerAnnouncement = 'Error';
	}
	return winnerAnnouncement;
}

function game() {
	let playerSelection, computerSelection, result;
	for (let i = 0; i <= 5; i++) {
		playerSelection = prompt("Choose Rock, Paper, or Scissors.");
		if (playerSelection === "") {
			console.log("Breaking...");
			break;
		}
		computerSelection = computerPlay();
		result = playRound(playerSelection, computerSelection);
		console.log(`Round ${i}: ${result}`);
	}
	if (userScore > computerScore) {
		console.log('you won :)');
	} else if (userScore < computerScore) {
		console.log('you lost :(');
	} else {
		console.log('you tied :/');
	}
}

game();