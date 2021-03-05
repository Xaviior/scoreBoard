
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

// Button Disabled
function disable() {
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
}

// DroppDownMeny
let winnerScore = parseInt(option.value);
option.addEventListener('change', function () {
    winnerScore = parseInt(option.value);
    reset();
})

// button player one function
playerOneBtn.addEventListener('click', function () {
    if (!isGameOver) {
        playerOneScoreUpdated += 1;
    } if (playerOneScoreUpdated === winnerScore) {
        isGameOver = true;
        playerOneScore.style.color = 'Green';
        playerTwoScore.style.color = 'Red';
        disable()
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
        disable()
    }
    playerTwoScore.textContent = playerTwoScoreUpdated;
})

// reset button function
resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    playerOneScoreUpdated = 0;
    playerTwoScoreUpdated = 0;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;
    playerOneScore.style.color = 'Black';
    playerTwoScore.style.color = 'Black';
}