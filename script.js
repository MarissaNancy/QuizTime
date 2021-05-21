const startButton = document.getElementById('startbttn');
const questioncontainer = document.getElementById('questcon');
const questionelem = document.getElementById('questions')
const answerelem = document.getElementById('answers')
const highscore = document.getElementById('scoreres');
const enterel = document.getElementById('enter')
const responseel = document.getElementById('response')

const timer = document.getElementById('timerset');
let timerseconds = 75;
let userHighscore;

const questions = [
    {
        question: 'What is html?',
            answers: ["a language", "a meal", "a movie", "a place"],
            answerCheck: 'a lanuage',
    },
    {
        question: 'Why use it?',
            answers: ['to make a website', 'who knows'],
            answerCheck:'to make a website',
    },
    {
        question: 'When was the computer first invented?',
            answers: ['1990', '1921', '1936','1800'],
            answerCheck: '1990',
    },
    {
        question: 'Why code?',
            answers: ['because its fun', 'who knows'],
            answerCheck:'because its fun',
    },
    {
        question: 'How many hours should you sleep?',
            answers: ['1990', '1921', '1936','1800'],
            answerCheck: '1990',
    },
]
function nextquestion() {
    showquestion(shuffquest[questionsleft])
}

function showquestion(question){
    questionelem.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('bttn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseanswr)
        answerelem.appendChild(button)
    });
}


function chooseanswr(){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setstatClass(document.body, correct)
    Array.from(answerelem.children).forEach(button =>{
        setstatClass(button,button.dataset.correct)
    })

}

let questionsleft = 0;

function startquiz() {
    document.getElementById("rules").classList.add("hide");
    document.getElementById("questcon").classList.remove("hide");
    //questionsleft = 0
    // timerStart();
    // askquestions();
}

function timerStart() {
    timer = setInterval(() => {
    timerseconds--;
        timer.textContent = "Time: " + timerseconds + " seconds remaining!";
        if (timerseconds === 0 || questionsleft == questions.length) {
          clearInterval(timer);
          setTimeout(displayScore);
        }
      }, 1000);
};
timerStart()

function displayScore () {
    document.getElementById("questcon").classList.add("hidden");
    document.getElementById("response").classList.remove("hidden");
    document.getElementById("scoreres").classList.remove("hidden");
    document.getElementById("sub").classList.remove("hidden");
  
    let userscore = document.createElement("input");
    let scoresub = document.createElement("button");
    highscore.appendChild(userscore);
    enterel.appendChild(scoresub);
    highscoresub.textContent = "enter"
    highscoresub.classList.add("score-submit")

    enterel.textContent = "Your Score: " + timeLeft;
    let userHighscore = JSON.stringify(userscore.textContent);
};
displayScore();

answerelem.addEventListener('click', (event) => {
    if (answer === event.target.textContent) {
        responsel.textContent = "Right on!";
        setTimeout(hideResponse,1000);
    }
    else {
        responseel.textContent = "Oops not correct!";
        timerseconds = timerseconds - 10;
    }
    showResponse();
    askquestions();
    }
);

responseel.addEventListener('click', () => {
    if (typeof Storage !== 'undefined'){
        localStorage.setItem('score',timerseconds);
        localStorage.setItem('user',userHighscore);
    }
});

startButton.addEventListener('click', startquiz)