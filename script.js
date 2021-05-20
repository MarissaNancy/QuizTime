const startButton = document.getElementById('startbttn');
const questioncontainer = document.getElementById('questcon');
const questionelem = document.getElementById('questions')
const answerelem = document.getElementById('answrbttns')

let shuffquest, questionsleft

startButton.addEventListener('click' , startquiz)
//first lets try to start the game
function startquiz() {
    console.log('started')
    startButton.classList.add('hide')
    shuffquest = questions.sort(() => Math.random() - .5)
    questionsleft = 0
    questioncontainer.classList.remove('hide')
    nextquestion()
}

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



//makequestions
const questions = [
    {
        question: 'What is a local variable?',
        answers: [
            {text:'this',correct: true },
            {text: 'this', correct: false},
        ]
    }
]