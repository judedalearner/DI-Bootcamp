function playTheGame() {
    let play = confirm("Do you want to play the game?");
    
    if (!play) {
        alert("No problem, Goodbye!");
        return;
    }

    let guessedNumber;
    while (true) {
        guessedNumber = prompt("Enter a number between 0 and 10:");
        if (guessedNumber === null) return; // Exit if user cancels
        guessedNumber = Number(guessedNumber);

        if (isNaN(guessedNumber)) {
            alert("Sorry, not a number. Try again.");
        } else if (guessedNumber < 0 || guessedNumber > 10) {
            alert("Sorry, it's not a valid number. Try again.");
        } else {
            break; // Valid number, exit loop
        }
    }

    let computerNumber = Math.floor(Math.random() * 11); // Generates a number between 0-10
    compareNumbers(guessedNumber, computerNumber);
}

function compareNumbers(guessedNumber, computerNumber) {
    let attempts = 1;
    
    while (attempts <= 3) {
        if (guessedNumber === computerNumber) {
            alert("WINNER!");
            return;
        } else if (guessedNumber > computerNumber) {
            alert("Your number is bigger than the computer’s, guess again.");
        } else {
            alert("Your number is smaller than the computer’s, guess again.");
        }

        if (attempts === 3) {
            alert("Out of chances! The correct number was " + computerNumber);
            return;
        }

        guessedNumber = prompt("Try again (Attempt " + (attempts + 1) + "/3):");
        if (guessedNumber === null) return; // Exit if user cancels
        guessedNumber = Number(guessedNumber);

        if (isNaN(guessedNumber) || guessedNumber < 0 || guessedNumber > 10) {
            alert("Invalid input. Game Over.");
            return;
        }

        attempts++;
    }
}

