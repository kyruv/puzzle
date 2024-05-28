// The non-obfuscated script
(function () {
    const encodedAnswers = {
        1: 'TVRrMk56QXpNVGc9', // base64 x2 encoding of '19670318'
        2: 'Wm1Wc1pHbHc=', // 'feldip',
        3: 'TWpNNk1UVT0=' //23:15
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
                <p>To Escape this puzzle, you must name the hills of AKS.</p>
                <input type="text" id="answer-2" placeholder="Enter your answer here">
                <button id="submit-2">Submit</button>
                <p id="message-2" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
            document.getElementById('submit-2').addEventListener('click', function () {
                checkAnswer(2);
            });
        }
        if (puzzleNumber === 3) {
            puzzleContainer.innerHTML = `
                <h2>Third Puzzle</h2>
                <p>Congratulations! You unlocked the third puzzle. Solve this one to proceed.</p>
                <h4>Expert: Adam</h4>
                <p>Grab a thesaurus then find the length of this small table production by a tabernacle equine. (separate measurements by :) </p>
                <input type="text" id="answer-3" placeholder="Enter your answer here">
                <button id="submit-3">Submit</button>
                <p id="message-3" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
            document.getElementById('submit-3').addEventListener('click', function () {
                checkAnswer(3);
            });
        }
        if (puzzleNumber === 4) {
            puzzleContainer.innerHTML = `
                <h2>Third Puzzle</h2>
                <p>Congratulations! You unlocked the third puzzle. Solve this one to proceed.</p>
                <h4>Expert: Kyler</h4>
                <p>TODO</p>
                <input type="text" id="answer-4" placeholder="Enter your answer here">
                <button id="submit-4">Submit</button>
                <p id="message-4" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
            document.getElementById('submit-4').addEventListener('click', function () {
                checkAnswer(4);
            });
        }
        // Additional puzzles can be added similarly.
    }

    document.getElementById('submit-1').addEventListener('click', function () {
        checkAnswer(1);
    });
})();