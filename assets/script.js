

var wrapper = document.querySelector("#wrapper");
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var scores = document.querySelector("scores");

var score = 0;
var questIndex = 0;

var secondsLeft = 51;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement('ul');


//question objects for quiz
var questlist = [

    {
        question: 'What colors of fur can Huskies have?',
        choice: ['Black and White', 'Gray', 'Red and White', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        question: 'How often do most huskies shed?',
        choice: ['Once a year', 'Twice a year', 'Not at all', 'All year'],
        correctAnswer: 'Twice a year',
    },
    {
        question: 'What is the difference between Alaskan and Siberian huskies?',
        choice: ['Ear shape', 'Size and weight', 'Fur length', 'All of the above'],
        correctAnswer: 'Size and weight',
    },
    {
        question: 'Traits huskies are known for?',
        choice: ['Howling', 'Shedding', 'Being escape artists', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        question: 'What types of food do huskies like?',
        choice: ['Salmon', 'Chicken', 'Pumpkin', 'All of the above'],
        correctAnswer: 'All of the above',
    },
];

document.getElementById("scores").addEventListener("click", function () {
    window.location.replace("HighScores.html");
});

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = 'Time: ' + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = 'Out of time!';
            }
        }, 1000);
    }
    render(questIndex);

});

function render(questIndex) {
    questionsDiv.innerHTML = '';
    ulCreate.innerHTML = '';


    for (var i = 0; i < questlist.length; i++) {

        var userQuestion = questlist[questIndex].question;
        var userChoices = questlist[questIndex].choice;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'createDiv');

        if (element.textContent == questlist[questIndex].correctAnswer) {
            score++;
            createDiv.textContent = ('Correct!');

        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = ('Incorrect!');

        }
    }

    questIndex++;
    if (questIndex >= questlist.length) {
        finished();

        createDiv.textContent = 'Quiz complete! ' + 'You chose ' + score + ' correct!';
    } else {
        render(questIndex);
    }
    questionsDiv.appendChild(createDiv);
}



function finished() {
    questionsDiv.innerHTML = '';
    currentTime.innerHTML = '';

    var createH1 = document.createElement('h1');
    createH1.setAttribute('id', 'createH1');
    createH1.textContent = 'Finished!';

    questionsDiv.appendChild(createH1);

    var createP = document.createElement('p');
    createP.setAttribute('id', 'createP')

    questionsDiv.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your score: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

  
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

   
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            
            window.location.replace("HighScores.html");
    
        }
    });

    
}
