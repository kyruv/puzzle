// The non-obfuscated script
(function () {
    const encodedAnswers = {
        1: 'TVRrMk56QXpNVGc9', // base64 x2 encoding of '19670318'
        2: 'Wm1Wc1pHbHc=' // 'feldip'
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
                <h4>Expert: Ryan</h4>
                <p>The hills of AKS.</p>
                <input type="text" id="answer-2" placeholder="Enter your answer here">
                <button onclick="checkAnswer(2)">Submit</button>
                <p id="message-2" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
        }
        if (puzzleNumber === 3) {
            puzzleContainer.innerHTML = `
                <h2>Third Puzzle</h2>
                <p>Congratulations! You unlocked the third puzzle. Solve this one to proceed.</p>
                <h4>Expert: Adam</h4>
                <p>TODO</p>
                <input type="text" id="answer-3" placeholder="Enter your answer here">
                <button onclick="checkAnswer(3)">Submit</button>
                <p id="message-3" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
        }
        // Additional puzzles can be added similarly.
    }

    document.getElementById('submit-1').addEventListener('click', function () {
        checkAnswer(1);
    });
})();