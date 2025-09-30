// Step 2: Define quiz data
const quizData = [
  {
    question: "What does HTML stand for?",
    opetions: [
      "Hypertext Markep Language",
      "HighText Markup Language",
      "HyperTabular Markup Language",
      "None of these",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    opetions: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTMLelement by its id?",
    opetions: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.Js which hook is used to perform side effects in a function component?",
    opetions: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTMl tag is used to create an ordred list",
    opetions: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

// Step 2: JavaScript Initialization
const quiz = document.querySelector(".quiz");
const answerElement = document.querySelectorAll(".answer");
const quizQuestion = document.querySelector(".quiz-question");
const opetionOne = document.querySelector("#opetion-1");
const opetionTwo = document.querySelector("#opetion-2");
const opetionThree = document.querySelector("#opetion-3");
const opetionFour = document.querySelector("#opetion-4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Srep 3: Load quiz function
const loadQuiz = () => {
  const { question, opetions } = quizData[currentQuiz];
  quizQuestion.innerText = question;
  opetionOne.innerText = opetions[0];
  opetionTwo.innerText = opetions[1];
  opetionThree.innerText = opetions[2];
  opetionFour.innerText = opetions[3];
};
loadQuiz();

// step 4: Get Selected Answer Function on Button click
const getSelectedOpetion = () => {
  let answerElm = Array.from(answerElement);
  return answerElm.findIndex((currElm) => currElm.checked);
};

const deselectedAnswer = () => {
  answerElement.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOpetionIndex = getSelectedOpetion();
  console.log(selectedOpetionIndex);
  if (selectedOpetionIndex === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
<h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
<p>Congratulation on completing the quiz!</p>
<button class="reload-btn" onclick="location.reload()">Play Again</button>
</div>
    `;
  }
});

localStorage.setItem("highScore", score);
