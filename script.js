const start = document.getElementById("start");
const beginButton = document.getElementById("start-button");

const quiz = document.getElementById("quiz");

let question = document.getElementById("question");

let answer1 = document.getElementById("1");

let answer2 = document.getElementById("2");

let answer3 = document.getElementById("3");

let answer4 = document.getElementById("4");

const rightWrong = document.getElementById("rightWrong");

const timer = document.getElementById("timer");

const scoreDiv = document.getElementById("scoreContainer");

let score = 0;


beginButton.addEventListener("click", playGame);


let quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",

        answer1: "1. Strings",
        answer2: "2. Booleans",
        answer3: "3. Alerts",
        answer4: "4. Numerals",
        correct: "3"

    },
    {
        question: "An array, in Javascript, can be used to store:",

        answer1: "1. Numbers and strings",
        answer2: "2. Other arrays",
        answer3: "3. Booleans",
        answer4: "4. All of the above",
        correct: "4"

    },
    {
        question: "The condition of an if/else statement is enclosed in:",

        answer1: "1. Parentheses",
        answer2: "2. Quotes",
        answer3: "3. Curly brackets",
        answer4: "4. Square brackets",
        correct: "1"

    },
    {
        question: "String values must be enclosed in:",

        answer1: "1. Commas",
        answer2: "2. Square brackets",
        answer3: "3. Quotes",
        answer4: "4. Curly brackets",
        correct: "3"

    },
    {
        question: "A useful tool in development and debugging, for printing content to the debugger, is:",

        answer1: "1. JavaScript",
        answer2: "2. Terminal/bash",
        answer3: "3. For loops",
        answer4: "4. Console log",
        correct: "4"

    },

]

const finalQuestionIndex = quizQuestions.length - 1;
let currentQuestionIndex = 0;

//hides start display,displays questions and answers, starts timer
function playGame() {
    start.style.display = "none";
    quiz.style.display = "block";
    fetchQuestion();
    gameTimer();
}
//fetch questions and answers from quizQuestions
function fetchQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    answer1.innerHTML = "<p>" + q.answer1 + "</p>";
    answer2.innerHTML = "<p>" + q.answer2 + "</p>";
    answer3.innerHTML = "<p>" + q.answer3 + "</p>";
    answer4.innerHTML = "<p>" + q.answer4 + "</p>";

}

//check if answer is correct and keeps score
function checkAnswer(answer) {
    if (quizQuestions[currentQuestionIndex].correct==answer) {
        rightWrong = "Correct!"
        score++;
    } else {
        rightWrong = "Wrong!"
    }


    if (currentQuestionIndex < finalQuestionIndex) {
        currentQuestionIndex++;
        fetchQuestion;
    } else {
        allDone();
    }
}

function gameTimer() {
    let secondsLeft = 60;
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        if (secondsLeft >= 0) {
            timer.textContent = "Time: " + secondsLeft;
            secondsLeft--;
        } else {
            allDone();
        }

    }, 1000);
}

//Completes game by clearing timer, displaying the score, and recording players initials and score
function allDone() {
    clearInterval(timerInterval);
    gameOver.textContent = "Game over!";
    scoreDiv.style.display = "block";
    scoreDiv = score;


}