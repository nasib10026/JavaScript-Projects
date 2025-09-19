'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initialScore = 20;
let highScore = 0;

document.querySelector('.score').textContent = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //faka rakhle
    if (!guess) {
        document.querySelector('.message').textContent = '🟥➖🟥 No number!';
    }
    //when the player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (initialScore > highScore) {
            highScore = initialScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        if (initialScore > 1) {
            guess > secretNumber ? document.querySelector('.message').textContent = '📈 Too high' : document.querySelector('.message').textContent = '📉 Too low';
            initialScore -= 1;
            document.querySelector('.score').textContent = initialScore;
        } 
        else {
           document.querySelector('.message').textContent = 'You have lost the game';
           document.querySelector('.score').textContent = '';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    initialScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = initialScore;
})