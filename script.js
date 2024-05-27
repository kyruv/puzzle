// The non-obfuscated script
(function () {
    const encodedAnswers = {
        1: 'ZEdWdGNHOXlZWEo1SUdGdWMzZGxjZz09' // base64 x2 encoding of 'temporary answer'
    };

    function checkAnswer(puzzleNumber) {
        const userAnswer = document.getElementById(`answer-${puzzleNumber}`).value.toLowerCase().trim();
        const correctAnswer = atob(atob(encodedAnswers[puzzleNumber]));
        const messageElement = document.getElementById(`message-${puzzleNumber}`);

        if (userAnswer === correctAnswer.toLowerCase()) {
            messageElement.textContent = "Correct! You've unlocked the next puzzle.";
            loadNextPuzzle(puzzleNumber + 1);
        } else {
            messageElement.textContent = "Incorrect answer. Please try again.";
        }
    }

    function loadNextPuzzle(puzzleNumber) {
        const puzzleContainer = document.getElementById(`puzzle-${puzzleNumber}`);

        if (puzzleNumber === 2) {
            puzzleContainer.innerHTML = `
                <h2>Second Puzzle</h2>
                <p>Congratulations! You unlocked the second puzzle. Solve this one to proceed.</p>
                <!-- Add content for the second puzzle here -->
                <input type="text" id="answer-2" placeholder="Enter your answer here">
                <button onclick="checkAnswer(2)">Submit</button>
                <p id="message-2" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
        }
        // Additional puzzles can be added similarly.
    }

    document.getElementById('submit-1').addEventListener('click', function () {
        checkAnswer(1);
    });
})();