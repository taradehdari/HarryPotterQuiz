const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
} 

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer() {

}

const myQuestions = [
        {
            question: "What house at hogwarts does Harry Potter belong to?"
            answers: {
                a: "Ravenclaw"
                b: "Slytherin"
                c: "Gryffindor"
                d: "Hufflepuff"
            },
            correctAnswer: "c"
        },
        {
            question: "What house was Harry Potter originally supposed to belong to?" 
            answers: {
                a: "Ravenclaw"
                b: "Slytherin"
                c: "Gryffindor"
                d: "Hufflepuff"
            },
            correctAnswer: "b"
        },
        {
            question: "What position did Harry Potter play on the quidditch team?"
            answers: {
                a: "Keeper"
                b: "Bludger"
                c: "Chaser"
                d: "Seeker"
            },
            correctAnswer: "d"
        },
        {
            question: "Who is Fluffy?"
            answers: {
                a: "Hagrid's dragon"
                b: "Hermoine's cat"
                c: "A three-headed dog"
                d: "Harry's owl"
            },
            correctAnswer: "c"
        },
        {
            question: "How does Harry Potter get his first snitch?"
            answers: {
                a: "with his brooom"
                b: "in his mouth"
                c: "with his hand"
                d: "with is feet"
            },
            correctAnswer: "b"
        },
        {
            question: "What does the Marauder's Map show?"
            answers: {
                a: "The location of everyone at Hogwarts"
                b: "The room of requirement"
                c: "The password to Dumbledore's office"
                d: "Hidden treasure"
            },
            correctAnswer: "a"
        },
        {
            question: "What is Harry Potter's patronus?"
            answers: {
                a: "a stag"
                b: "a unicorn"
                c: "an owl"
                d: "a rabbit"
            },
            correctAnswer: "a"
        },
        {
            question: "How is Dobby freed from serving the Malfoy's?"
            answers: {
                a: "a spell"
                b: "a potion"
                c: "a pair of pants"
                d: "a sock"
            },
            correctAnswer: "d"
        },
        {
            question: "What makes a person feel better after seeing a Dementor?"
            answers: {
                a: "Treacle puding"
                b: "Chocolate"
                c: "Chicken Soup"
                d: "A nap"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is the Half-Blood Prince?"
            answers: {
                a: "Eileen Prince"
                b: "Lucius Malfor"
                c: "Severus Snape"
                d: "Tom Riddle"
            },
            correctAnswer: "c"
        },
        {
            question: "What does Dudmbledore's will give to ron?"
            answers: {
                a: "The Tales of Beedle the Bard"
                b: "A portrait"
                c: "A mirror fragment"
                d: "A deluminator"
            },
            correctAnswer: "d"
        },
        {
            question: "Why does snape protect Harry?"
            answers: {
                a: "He was in love with Lily"
                b: "He is Harry's father"
                c: "Dumbledore orders him to"
                d: "James was his best friend"
            },
            correctAnswer: "a"
        },
        {
            question: "What does Felix Felices do?"
            answers: {
                a: "Poisons you"
                b: "Gives good luck"
                c: "Makes you fall in love"
                d: "Brings someone back from the dead"
            },
            correctAnswer: "b"
        },
        {
            question: "how did Hermoine take extra lessons her third year?"
            answers: {
                a: "Weekend classes"
                b: "She made a clone"
                c: "The pensieve"
                d: "The time-turner"
            },
            correctAnswer: "d"
        },
        {
            question: "What does the Mirror of Erised do?"
            answers: {
                a: "shows your heart's desires"
                b: "tells the future"
                c: "makes you appear beautiful to others"
                d: "gives you warts"
            },
            correctAnswer: "a"
        },
        {
            question: "How are Hogwarts students placed in their houses?"
            answers: {
                a: "The sorting hat"
                b: "They are placed in the same house as their parents"
                c: "They are assigned by Professor Dumbledore"
                d: "They draw their names from a hat"
            },
            correctAnswer: "a"
        },
        {
            question: "What magical talent does Harry Potter share with Voldemort?"
            answers: {
                a: "He's a parselmouth"
                b: "He's an auror"
                c: "He uses the cruciatus curse"
                d: "He's an animagus"
            },
            correctAnswer: "a"
        },
        {
            question: "What powers do the dementors have?"
            answers: {
                a: "they make people do whatever they want"
                b: "they make people go crazy"
                c: "they drain people of all their happiness"
                d: "they cause people to harm one another"
            },
            correctAnswer: "c"
        },
        {
            question: "Who kills professor dumbledore?"
            answers: {
                a: "Bellatrix Lestrange"
                b: "Severus Snape"
                c: "Draco Malfoy"
                d: "Fenrir Greyback"
            },
            correctAnswer: "b"
        },
        {
            question: "How does Fawkes the Phoenix save Harry Potter?"
            answers: {
                a: "His spit"
                b: "He flies away to get help"
                c: "His tears"
                d: "He squawks until help arrives"
            },
            correctAnswer: "c"
        },
        {
            question: "Which is not a method of transportation for Wizards?"
            answers: {
                a: "floo powder"
                b: "apparition"
                c: "aparecium"
                d: "a portkey"
            },
            correctAnswer: "c"
        },
        {
            question: "what does professor mcgonagal teach?"
            answers: {
                a: "Transfiguration"
                b: "Herbology"
                c: "Potion"
                d: "History of Magic"
            },
            correctAnswer: "a"
        }, 
        {
            question: "Who had the same Patronous as Severus Snape? "
            answers: {
                a: "Harry Potter"
                b: "James Potter"
                c: "Professor Dumbledor"
                d: "Lily Potter"
            },
            correctAnswer: "d"
        }, 
    ];

