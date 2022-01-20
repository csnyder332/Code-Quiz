
var startBtn = document.querySelector('#start');
var timerEl = document.querySelector('#timeleft');
var highScores = document.querySelector('#scores');
var submitBtn = document.querySelector('#submit');
var quizquestions = document.querySelector('#questions');
var qchoices = document.querySelector('#choices');
var qanswer = document.querySelector('#answer');
var pname = document.querySelector('#playername');
var score = document.querySelector('#final-score');


//question objects for quiz
var questlist = [

    q1 = {
        question: 'What colors of fur can Huskies have?',
        choice: ['Black and White', 'Gray', 'Red and White', 'All of the above'],
        correctAnswer: 'All of the above', 
    },
    q2 = {
        question: 'How often do most huskies shed?',
        choice: ['Once a year', 'Twice a year', 'Not at all', 'All year'],
        correctAnswer: 'Twice a year', 
    },
    q3 = {
        question: 'What is the difference between Alaskan and Siberian huskies?',
        choice: ['Ear shape', 'Size and weight', 'Fur length', 'All of the above'],
        correctAnswer: 'Size and weight', 
    },
    q4 = {
        question: 'Traits huskies are known for?',
        choice: ['Howling', 'Shedding', 'Being escape artists', 'All of the above'],
        correctAnswer: 'All of the above', 
    },
    q5 = {
        question: 'What types of food do huskies like?',
        choice: ['Salmon', 'Chicken', 'Pumpkin', 'All of the above'],
        correctAnswer: 'All of the above', 
    },
];

function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
}

quizquestions.removeAttribute("class");
qchoices.removeAttribute("class");



startBtn.onclick = startQuiz;