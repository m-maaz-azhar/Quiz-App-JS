let name = sessionStorage.getItem('name');
document.getElementById('greetings').innerText += name;

window.onload = () => {
    show(0);
}
let questions = [
    {
        id: 0,
        question: "What is the full form of HTML",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Test Make up Language",
            "Hyper Text Markup Language",
            "Hyper Text Made up Language",
            "None of these"
        ]
    },
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of AI",
        answer: "Artificial Intelligence",
        options: [
            "Adobe Illustrator",
            "Available Intern",
            "Artificial Intelligence",
            "Available In"
        ]
    },
    {
        id: 4,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    }
];

let questionCount = 0;
let quizScore = 0;

function next() {
    let userAns = document.querySelector('li.option.active').innerHTML;
    if (userAns == questions[questionCount].answer) {
        quizScore += 10;
        sessionStorage.setItem('score', quizScore);
    }
    if (questionCount == questions.length - 1) {

        location.href = "result.html";
        return;
    }
    questionCount++;
    show(questionCount);
}

function show(count) {
    let question = document.getElementById('questions');
    question.innerHTML = `
    <h2>${questions[count].question} </h2>
    <ul class="optionGroup">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
    `
    toggleActive()
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = () => {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains('active')) {
                    option[j].classList.remove('active');
                }
            }
            option[i].classList.add('active');
        }
    }
}