
// buttons
const playerOneBtn = document.querySelector('.player-one-button');
const playerTwoBtn = document.querySelector('.player-two-button');
const resetBtn = document.querySelector('.reset-button');
const option = document.querySelector('#value')

// Scoreboard holders
const playerOneScore = document.querySelector('.player-one');
const playerTwoScore = document.querySelector('.player-two');

// scoreboard updates
let playerOneScoreUpdated = 0;
let playerTwoScoreUpdated = 0;

// er spillet ferdig eller i gang?
let isGameOver = false;

// DroppDownMeny
let winnerScore = parseInt(option.value);
option.addEventListener('change', function () {
    winnerScore = parseInt(option.value);
    console.log(winnerScore)
})

// button player one function

playerOneBtn.addEventListener('click', function () {
    if (!isGameOver) {
        playerOneScoreUpdated += 1;
    } if (playerOneScoreUpdated === winnerScore) {
        isGameOver = true;
        playerOneScore.style.color = 'Green';
        playerTwoScore.style.color = 'Red';
        playerOneBtn.style.opacity = '0.5';
        playerTwoBtn.style.opacity = '0.5';
    }
    playerOneScore.textContent = playerOneScoreUpdated;
});

// button player two function
playerTwoBtn.addEventListener('click', function () {
    if (!isGameOver) {
        playerTwoScoreUpdated += 1;
    } if (playerTwoScoreUpdated === winnerScore) {
        isGameOver = true;
        playerOneScore.style.color = 'Red';
        playerTwoScore.style.color = 'Green';
        playerOneBtn.style.opacity = '0.5';
        playerTwoBtn.style.opacity = '0.5';
    }
    playerTwoScore.textContent = playerTwoScoreUpdated;
})

// reset button function
resetBtn.addEventListener('click', function () {
    window.location.reload();
})