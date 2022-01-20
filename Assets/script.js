// create variables
// timers
let time = document.getElementById("time")
let timeLeft = document.getElementById("timer")
const timeUp = document.getElementById("time-up")
let totalTime = 60

// start screen
const startScreen = document.getElementById("start-screen")
const startQuizBtn = document.getElementById("start-button")


// questions
const questionsScreen = document.getElementById("questions-screen")
const questionsEl = document.getElementById("questions")

 
//answerCheck
const answerCheck = document.getElementById("answer-check")
let currentQuestion = 0


// summary screen
const summaryScreen = document.getElementById("final-score")
const initials = document.getElementById("initials")
const submitBtn = document.getElementById("submit-button")
const clearScores = document.getElementById("clear-scores-btn")


// high score screen
// const highScoreCheck = document.getElementsByClassName("score-check")
// let scoreList = document.getElementById("high-scores")
// const goBackBtn = document.getElementById("go-back-btn")
// const clearnBtn = document.getElementById("clear-scores-btn")


// declared variables

let correctAnswer = 0
let questionIndex = 0
let scoreResult = 0


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
        question: "Question 3: A useful tool to determine if your code will work and for debugging is",
        answers: ["Index", "css", "Console Log", "JavaScript"],
        correctAnswer: "Console Log"
    },
    {
        question: "Question 4: What symbol means 'not'? in JavaScript",
        answers: ["%", "#", "!", "*"],
        correctAnswer: "!"
    }
];

// functions

// // initialize/start the quiz
// // start quiz
function startQuiz () { 
    questionIndex = 0;
    totalTime = 60;
    timeLeft.textContent = totalTime;
    startScreen.setAttribute("class", "hide");
    questionsScreen.removeAttribute("class");
    callQuestion();

}
startQuizBtn.addEventListener("click", startQuiz);

function callQuestion(){
    // console.log(questionIndex);
    questionsEl.textContent = questions[questionIndex].question;
    var answerOptions = document.querySelector(".answer-options");
    answerOptions.innerHTML = "";
    questions[questionIndex].answers.forEach(function (answer){
        var button = document.createElement("button");
        button.textContent = answer;
        button.setAttribute("data-answer", answer);
        button.onclick = checkAnswer;
        
    answerOptions.appendChild(button);
    
    })
}
function checkAnswer (event) {
    var userAnswer = event.target.getAttribute("data-answer");
    // console.log(userAnswer);
    if (userAnswer !== questions[questionIndex].correctAnswer){
       wrongLogic();
    } else {
        console.log("correct");
        correctLogic();
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        console.log("end game");
    } else {
        callQuestion();
    }
    

}
function wrongLogic() {
    //need current time
    console.log(time)
    // remove 10 secs from time
    //check timer value for less than 0
}
function correctLogic() {
    console.log(scoreResult);
}
 // // timer 
// function startTimer() {
//     let timeInterval = setInterval(function() {
//         totalTime--;
//         timeLeft.textContent = totalTime;

//         if (totalTime <= 0) {
//             clearInterval(timeInterval);
//             // questions.style.display: none;
//             // final score. style.display: block;
//             if (questionIndex < questions.length -1) {
//                 gameOver();
//             }
//         }
//     }, 1000);
// }
// console.log("questions(questionsArray].questions");


//     // call startQuiz to work
//     startTimer ();
//     questionIndex(questions);
    

// // create function to have questions appear and get user answer
// function questionOrder (array) {
//     if (questionIndex < questions.length) {
//         questionsScreen.textContent = questions[array].questions;
//         ansBtn1.textContent = questions[array].answers[0];
//         ansBtn2.textContent = questions[array].answers[1];
//         ansBtn3.textContent = questions[array].answers[2];
//         ansBtn4.textContent = questions[array].answers[3];
//     }
// }

// // function to check answers and move to the next one
// function correctAnswer (event) {
//     event.preventDefault();

//     if (questions[questionIndex].answerCheck === event.target.value) {
//         answerCheck.textContent = "Correct";
//         correctAnswer++;
//     } else (questions[questionNum].answerCheck !== event.target.value){
//         answerCheck.textContent = "Incorrect";
//         totalTime -= 10;
//         timeLeft.textContent = totalTime;   
//     }

//     // move to the next question
//     if (questionIndex < questions.length) {
//         questionIndex++;
//     } else {
//         // all questions answered end game
//         gameOver();
//     }

//     // call the questions function against the correct answer 
//     questionOrder(questions);
// }

// // game over function
// function gameOver()
//     scoreResult.textContent = correctAnswer;


// // function to set user info and store in local storage
// function getUserInfo (event) {
//     event.preventDefault();
//     if (initials.value === "") {
//         alert ("Enter your initials");
//         return;
//     }

// }


// // send user info to Final Score; show in final score button; clear and reset 



// // log scores in the view high score


// // event listeners 
// // start quiz btn then buttons for answers
// 
// ansBtn1.addEventListener("click", answers[0]);
// ansBtn2.addEventListener("click", answers[1]);
// ansBtn3.addEventListener("click", answers[2]);
// ansBtn4.addEventListener("click", answers[3]);

// // haven't created the storeScores function for this to work yet
// submitBtn.addEventListener("click", function(event) {
//     storeScores(event);
// });

// // clearScores.addEventListener("click", function(event) {   clearScores(event); 
// // });
