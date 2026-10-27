const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      "Programming Language",
      "Database",
      "Operating System",
      "Browser",
    ],
    correctAnswer: 0,
  },

  {
    question: "Which keyword declares a variable?",
    answers: ["print", "let", "style", "display"],
    correctAnswer: 1,
  },

  {
    question: "Which method prints output in the console?",
    answers: ["print()", "write()", "console.log()", "display()"],
    correctAnswer: 2,
  },
];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let next = document.querySelector(".next-ques");
let question = document.querySelector("#question");
let answers = document.querySelector(".answers");
let progress = document.querySelector(".progress");
let quizBox = document.querySelector(".quiz-box");
let resultBox = document.querySelector(".result-box");
let restart = document.querySelector(".restart-btn");

function loadQuestion() {
  selectedAnswer = null;

  let currentQuestion = questions[currentQuestionIndex];
  let options = currentQuestion.answers;
  question.textContent = currentQuestion.question;
  progress.textContent = `${currentQuestionIndex + 1}/${questions.length}`;

  //?------------------------- all answer show section ----------------------------
  answers.innerHTML = "";

  options.forEach((answer, idx) => {
    const ansBtn = document.createElement("button");
    ansBtn.classList.add("answerbtn");
    ansBtn.textContent = answer;
    answers.append(ansBtn);
    ansBtn.addEventListener("click", () => selectAnswer(ansBtn, idx));
  });
}
loadQuestion();

function selectAnswer(clickedAnswer, idx) {
  selectedAnswer = idx;
  const allBtn = document.querySelectorAll(".answerbtn");
  allBtn.forEach((btn) => btn.classList.remove("correct"));
  clickedAnswer.classList.add("selected");
  next.style.display = "block";
}
function checkAnswer() {
  let currentQuestion = questions[currentQuestionIndex];
  const allBtn = document.querySelectorAll(".answerbtn");
  allBtn.forEach((btn) => (btn.disabled = true));
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    allBtn[selectedAnswer].classList.add("correct");
  } else {
    allBtn[currentQuestion.correctAnswer].classList.add("correct");
    allBtn[selectedAnswer].classList.add("wrong");
  }
}
function nextQuestion() {
  checkAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      loadQuestion();
    }, 1000);
  } else {
    setTimeout(showResults, 1500);
  }
}
function showResults() {
  let resultMsg = document.querySelector(".result-msg");

  let scoreNo = document.querySelector(".score-number");
  let scorePer = document.querySelector(".score-percentage");
  const percentage = Math.round((score / questions.length) * 100);
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  scoreNo.textContent = `${score}/${questions.length}`;
  scorePer.textContent = `${percentage}%`;
  if (percentage > 80) {
    resultMsg.textContent = "Excellent Work!!!!";
  } else if (percentage > 60) {
    resultMsg.textContent = "Very Nice!!!!";
  } else if (percentage > 40) {
    resultMsg.textContent = "Good Job!!!!";
  } else {
    resultMsg.textContent = "Work Hard!!!!";
  }
}
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectAnswer = null;
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  loadQuestion();
}
next.addEventListener("click", nextQuestion);
restart.addEventListener("click", restartQuiz);
