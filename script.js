const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById ('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let countRightAnswers = 0;
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function endTimer() {   
    document.getElementById("time").innerHTML = "Time's up!";
}

startButton.onclick = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    countRightAnswers = 0;
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
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    document.getElementById('right-answers').innerHTML = countRightAnswers;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if(shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    };
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
    }
    document.getElementById('right-answers').innerHTML = countRightAnswers;
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

const questions = [
        {
            question: 'What house at Hogwarts does Harry Potter belong to?',
            answers: [
                { text: 'Ravenclaw', correct: false },
                { text: 'Slytherin', correct: false },
                { text: 'Gryffindor', correct: true },
                { text: 'Hufflepuff', correct: false }
            ]
        },
        {
            question: 'What house was Harry Potter originally supposed to belong to?', 
            answers: [
                { text: 'Ravenclaw', correct: false }, 
                { text: 'Slytherin', correct: true }, 
                { text: 'Gryffindor', correct: false }, 
                { text: 'Hufflepuff', correct: false } 
            ]
        },
        {
            question: 'What position did Harry Potter play on the quidditch team?',
            answers: [
                { text: 'Keeper', correct: false },
                { text: 'Bludger', correct: false }, 
                { text: 'Chaser', correct: false },
                { text: 'Seeker', correct: true }
            ]
        },
        {
            question: 'Who is Fluffy?',
            answers: [
                { text: 'Hagrids dragon', correct: false },
                { text: 'Hermoines cat', correct: false },
                { text: 'A three-headed dog', correct: true },
                { text: 'Harrys owl', correct: false }
            ]
        },
        {
            question: 'How does Harry Potter get his first snitch?',
            answers: [
                { text: 'with his broom', correct: false },
                { text: 'in his mouth', correct: true },
                { text: 'with his hand', correct: false },
                { text: 'with his feet', correct: false }
             ]
        },
        {
            question: 'What does the Marauders Map show?',
            answers: [
                { text: 'The location of everyone at Hogwarts', correct: true },
                { text: 'The room of requirement', correct: false },
                { text: 'The password to Dumbledores office', correct: false },
                { text: 'Hidden treasure', correct: false }
            ]
        },
        {
            question: 'What is Harry Potters patronus?',
            answers: [
                { text: 'a stag', correct: true },
                { text: 'a unicorn', correct: false },
                { text: 'an owl', correct: false },
                { text: 'a rabbit', correct: false }
             ]
        },
        {
            question: 'How is Dobby freed from serving the Malfoys?',
            answers: [
                { text: 'a spell', correct: false },
                { text: 'a potion', correct: false },
                { text: 'a pair of pants', correct: false },
                { text: 'a sock', correct: true }
            ]
        },
        {
            question: 'What makes a person feel better after seeing a Dementor?',
            answers: [
                { text: 'Treacle pudding', correct: false },
                { text: 'Chocolate', correct: true },
                { text: 'Chicken Soup', correct: false },
                { text: 'A nap', correct: false },
            ]
        },
        {
            question: 'Who is the Half-Blood Prince?',
            answers: [
                { text: 'Eileen Prince', correct: false },
                { text: 'Lucius Malfoy', correct: false },
                { text: 'Severus Snape', correct: true },
                { text: 'Tom Riddle', correct: false }
            ]
        },
        {
            question: 'What does Dudmbledore`s will give to ron?',
            answers: [
                { text: 'The Tales of Beedle the Bard', correct: false },
                { text: 'A portrait', correct: false },
                { text: 'A mirror fragment', correct: false },
                { text: 'A deluminator', correct: true }
            ]
        },
        {
            question: 'Why does Snape protect Harry?',
            answers: [
                { text: 'He was in love with Lily', correct: true },
                { text: 'He is Harrys father', correct: false },
                { text: 'Dumbledore orders him to', correct: false },
                { text: 'James was his best friend', correct: false }
            ]
        },
        {
            question: 'What does Felix Felices do?',
            answers: [
                { text: 'Poisons you', correct: false },
                { text: 'Gives good luck', correct: true },
                { text: 'Makes you fall in love', correct: false },
                { text: 'Brings someone back from the dead', correct: false }
            ]
        },
        {
            question: 'How did Hermoine take extra lessons her third year?',
            answers: [
                { text: 'Weekend classes', correct: false },
                { text: 'She made a clone', correct: false },
                { text: 'The pensieve', correct: false },
                { text: 'The time-turner', correct: true }
            ]
        },
        {
            question: 'What does the Mirror of Erised do?',
            answers: [
                { text: 'shows your hearts desires', correct: true},
                { text: 'tells the future', correct: false},
                { text: 'makes you appear beautiful to others', correct: false },
                { text: 'gives you warts', correct: false }
            ]
        },
        {
            question: 'How are Hogwarts students placed in their houses?',
            answers: [
                { text: 'The sorting hat', correct: true },
                { text: 'They are placed in the same house as their parents', correct: false },
                { text: 'They are assigned by Professor Dumbledore', correct: false },
                { text: 'They draw their names from a hat', correct: false }
            ]
        },
        {
            question: 'What magical talent does Harry Potter share with Voldemort?',
            answers: [
                { text: 'Hes a parselmouth', correct: true },
                { text: 'He is an auror', correct: false },
                { text: 'He uses the cruciatus curse', correct: false },
                { text: 'He is an animagus', correct: false } 
            ]
        },
        {
            question: 'What powers do the dementors have?',
            answers: [
                { text: 'they make people do whatever they want', correct: false },
                { text: 'they make people go crazy', correct: false },
                { text: 'they drain people of all their happiness', correct: true },
                { text: 'they cause people to harm one another', correct: false }
            ]
        },
        {
            question: 'Who kills Professor Dumbledore?',
            answers: [
                {text: 'Bellatrix Lestrange', correct: false},
                {text: 'Severus Snape', correct: true},
                {text: 'Draco Malfoy', correct: false},
                {text: 'Fenrir Greyback', correct: false}
            ]
        },
        {
            question: 'How does Fawkes the Phoenix save Harry Potter?',
            answers: [
                { text: 'His spit', correct: false },
                { text: 'He flies away to get help', correct: false },
                { text: 'His tears', correct: true },
                { text: 'He squawks until help arrives', correct: false }
            ]
        },
        {
            question: 'Which is not a method of transportation for Wizards?',
            answers: [
                { text: 'floo powder', correct: false },
                { text: 'apparition', correct: false },
                { text: 'aparecium', correct: true },
                { text: 'a portkey', correct: false }
            ]
        },
        {
            question: 'What does Professor McGonagall teach?',
            answers: [
                { text: 'Transfiguration', correct: true },
                { text: 'Herbology', correct: false },
                { text: 'Potion', correct: false },
                { text: 'History of Magic', correct: false }
            ]
        }, 
        {
            question: 'Who had the same Patronous as Severus Snape?',
            answers: [
                { text: 'Harry Potter', correct: false },
                { text: 'James Potter', correct: false },
                { text: 'Professor Dumbeldor', correct: false },
                { text: 'Lily Potter', correct: true }
            ]
        }, 
    ]