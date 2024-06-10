// The non-obfuscated script
(function () {
    const encodedAnswers = {
        1: ['TVRrMk56QXpNVGc9'], // base64 x2 encoding of '19670318'
        2: ['Wm1Wc1pHbHc='], // 'feldip'
        3: ['TWpNNk1UVT0=', 'TWpNNk1UWT0='], // '23:15' '23:16'
        4: ['YzJocGJXSmhjMmhw'], // 'shimbashi'
    };

    function checkAnswer(puzzleNumber) {
        const userAnswer = document.getElementById(`answer-${puzzleNumber}`).value.toLowerCase().trim();
        const possibleAnswers = encodedAnswers[puzzleNumber].map(encoded => atob(atob(encoded)).toLowerCase());
        const messageElement = document.getElementById(`message-${puzzleNumber}`);

        if (possibleAnswers.includes(userAnswer)) {
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
                <h2>Fourth Puzzle</h2>
                <h4>Expert: Luebbers</h4>
                <p>Replace REDACTED.</p>
                <input type="text" id="answer-4" placeholder="Enter your answer here">
                <button id="submit-4">Submit</button>
                <p id="message-4" class="message"></p>
            `;
            puzzleContainer.classList.remove('hidden');
            document.getElementById('submit-4').addEventListener('click', function () {
                checkAnswer(4);
            });

            // Create the audio element dynamically with controls
            const audioElement = document.createElement('audio')
            audioElement.src = 'fourth_clue.mp3';
            audioElement.type = 'audio/mpeg';
            audioElement.controls = true; // Adds play, pause, and scrub controls

            // Create a p element and wrap the audio element
            const audioWrapper = document.createElement('p');
            audioWrapper.appendChild(audioElement);

            // Insert the audio element before the submit button
            const answerLocation = document.getElementById('answer-4');
            puzzleContainer.insertBefore(audioWrapper, answerLocation);
        }
        // Additional puzzles can be added similarly.
    }

    document.getElementById('submit-1').addEventListener('click', function () {
        checkAnswer(1);
    });
})();