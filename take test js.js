const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'What is 20 % 5?',
        answers: [
            { text: '0', correct: true },
            { text: '20', correct: false }
        ]
    },
    {
        question: 'Who is the father of C language?',
        answers: [
            { text: 'Steve Jobs', correct: false },
            { text: 'Dennis Ritchie', correct: true },
            { text: 'James Gosling', correct: false },
            { text: 'None of these', correct: false }
        ]
    },
    {
        question: 'Which of the following is not a valid C variable name?',
        answers: [
            { text: 'int number;', correct: false },
            { text: 'float rate;', correct: true },
            { text: 'int variable_count;', correct: false },
            { text: 'int $main;', correct: false }
        ]
    },
    {
        question: 'All keywords in C are in ____________',
        answers: [
            { text: 'd) None of the mentioned', correct: false },
            { text: 'c) CamelCase letters', correct: true }
        ]
    }
]

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    // Create the GIF container
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');

    // Create the GIF image element
    const gifImage = document.createElement('img');
    gifImage.src = correct ? 'correct answer.gif' : 'wrong answer.gif';
    gifImage.alt = correct ? 'Correct GIF' : 'Incorrect GIF';

    // Append the GIF image to the container
    gifContainer.appendChild(gifImage);

    // Append the GIF container to the body
    document.body.appendChild(gifContainer);

    // Remove the GIF container after the animation ends
    setTimeout(() => {
        gifContainer.remove();
    }, 3000);

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}