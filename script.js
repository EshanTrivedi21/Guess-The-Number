'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let scoreValue = 20;
let highscoreValue = 0; 

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function scoreChanger() {
    scoreValue --;
    document.querySelector(".score").textContent = scoreValue;
}

document.querySelector(".check").addEventListener
(
    "click", function() {
        const guess = Number(document.querySelector(".guess").value);
        
        if (guess === secretNumber) {
            displayMessage("CORRECT ~ YOU WON!")
            document.querySelector(".number").textContent = secretNumber;
            document.querySelector(".number").style.backgroundColor = "#72d70c"

            if (scoreValue > highscoreValue) {
                highscoreValue = scoreValue
                document.querySelector('.highscore').textContent = highscoreValue;
            }

        } else if (guess !== secretNumber) {
            document.querySelector(".number").style.backgroundColor = "#e31111"

            if (scoreValue > 1) {
                displayMessage(guess > secretNumber ? "HIGH ~ KEEP TRYING" : "LOW ~ KEEP TRYING");
                scoreChanger() 
            } else {
                document.querySelector(".score").textContent = 0;
                displayMessage("YOU LOOSE!")
            }

        }
    }
)

document.querySelector(".again").addEventListener
(
    "click", function() {
        secretNumber = Math.trunc(Math.random()*20) + 1;
        scoreValue = 20;
        document.querySelector(".number").style.backgroundColor = "rgb(215, 175, 75)"

        displayMessage("START GUESSING...");
        document.querySelector(".number").textContent = "?";
        document.querySelector(".score").textContent = scoreValue;
        document.querySelector('.guess').value = '';

    }
)