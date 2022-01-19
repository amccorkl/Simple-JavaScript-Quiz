// create variables
// timers
let time = document.querySelectorAll("#time")
let timeLeft = document.querySelectorAll("#timer")
const timeUp = document.querySelectorAll("#time-up")
let totalTime = 60


// start screen
const startScreen = document.querySelectorAll("#start-screen")
const startQuizBtn = document.querySelectorAll("#start-button")

// questions
const questionsScreen = document.querySelectorAll("#questions-screen")
const questions = document.querySelectorAll("#questions")
const ansBtn1 = document.querySelectorAll("#btn1") 
const ansBtn2 = document.querySelectorAll("#btn2") 
const ansBtn3 = document.querySelectorAll("#btn3") 
const ansBtn4 = document.querySelectorAll("#btn4")
 
//answerCheck
const answerCheck = document.querySelectorAll("#answer-check")
let currentQuestion = 0


// summary screen
const summaryScreen = document.querySelectorAll("#final-score")
const initials = document.querySelectorAll("#initials")
const submitBtn = document.querySelectorAll("#submit-button")
const clearScores = document.querySelectorAll("#clear-scores-btn")


// high score screen
// const highScoreCheck = document.getElementsByClassName("score-check")
// let scoreList = document.getElementById("high-scores")
// const goBackBtn = document.getElementById("go-back-btn")
// const clearnBtn = document.getElementById("clear-scores-btn")


// declared variables

let correctAnswer = 0
let questionIndex = 0
let scoreResult;


// questions object declared
let questions = [
    {
        question: "Question 1: Commonly used data types include all but",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Question 2: A property of an object is called a ________",
        answers: ["method", "string", "boolean", "local storage"],
        correctAnswer: "method"
    },
    {
        question: "A useful tool to determine if your code will work and for debugging is",
        answers: ["Index", "css", "Console Log", "JavaScript"],
        correctAnswer: "Console Log"
    },
    {
        question: "What symbol means 'not'? in JavaScript",
        answers: ["%", "#", "!", "*"],
        correctAnswer: "!"
    }
];

// functions

// initialize/start the quiz
// start quiz
function startQuiz () { 
    questionIndex = 0;
    totalTime = 60;
    timeLeft.textContent = totalTime;
    
// timer 
function startTimer() {
    let timeInterval = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;

        if (totalTime <= 0) {
            clearInterval(timeInterval);
            // questions.style.display: none;
            // final score. style.display: block;
            if (questionIndex < questions.length -1) {
                gameOver();
            }
        }
    }, 1000);
}
console.log("questions(questionsArray].questions");


    // call startQuiz to work
    startTimer ();
    questionIndex(questions);
    

// create function to have questions appear and get user answer
function questionOrder (array) {
    if (questionIndex < questions.length) {
        questionsScreen.textContent = questions[array].questions;
        ansBtn1.textContent = questions[array].answers[0];
        ansBtn2.textContent = questions[array].answers[1];
        ansBtn3.textContent = questions[array].answers[2];
        ansBtn4.textContent = questions[array].answers[3];
    }
}

// function to check answers and move to the next one
function correctAnswer (event) {
    event.preventDefault();

    if (questions[questionIndex].answerCheck === event.target.value) {
        answerCheck.textContent = "Correct";
        correctAnswer++;
    } else (questions[questionNum].answerCheck !== event.target.value){
        answerCheck.textContent = "Incorrect";
        totalTime -= 10;
        timeLeft.textContent = totalTime;   
    }

    // move to the next question
    if (questionIndex < questions.length) {
        questionIndex++;
    } else {
        // all questions answered end game
        gameOver();
    }

    // call the questions function against the correct answer 
    questionOrder(questions);
}

// game over function
function gameOver()
    scoreResult.textContent = correctAnswer;


// function to set user info and store in local storage
function getUserInfo (event) {
    event.preventDefault();
    if (initials.value === "") {
        alert ("Enter your initials");
        return;
    }

}


// send user info to Final Score; show in final score button; clear and reset 



// log scores in the view high score


// event listeners 
// start quiz btn
startQuizBtn.addEventListener("click", startQuiz);
ansBtn1.addEventListener("click", answers[0]);
ansBtn2.addEventListener("click", answers[1]);
ansBtn3.addEventListener("click", answers[2]);
ansBtn4.addEventListener("click", answers[3]);

// haven't created the storeScores function for this to work yet
submitBtn.addEventListener("click", function(event) {
    storeScores(event);
});

clearScores.addEventListener("click", function(event) {
//    what do I put here???
});

