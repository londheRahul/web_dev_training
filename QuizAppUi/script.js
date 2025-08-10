var herodata = document.querySelector("#hero-contain");
var startbtn = document.querySelector("#StartQuiz-btn");
var questionpage = document.querySelector(".Question-page");
var Scard = document.querySelector("#score-card");

var minDisplay = document.querySelector("#for-minut h1");
var secDisplay = document.querySelector("#for-sec h1");
var questionNo = document.getElementById("Question-no");

var retakeBtn = document.querySelector("#retake");
var restartBtn = document.querySelector("#restart");

const innerBar = document.getElementById("inner");
let progress; // we'll set in resetQuiz()
var questions = [
  {
    question: "1. What is the capital of France?",
    correct: "Paris",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    question: "2. What is the capital of Germany?",
    correct: "Berlin",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
  },
  {
    question: "3. What is the capital of Spain?",
    correct: "Madrid",
    options: ["Berlin", "Rome", "Madrid", "Paris"],
  },
  {
    question: "4. What is the capital of Italy?",
    correct: "Rome",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
  },
];

let currentIndex;
let timerInterval;
let score;
let totalSeconds;

function startTimer() {
  totalSeconds = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    totalSeconds++;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    minDisplay.innerText = minutes.toString().padStart(2, "0");
    secDisplay.innerText = seconds.toString().padStart(2, "0");
  }, 1000);
}

function showQuestion(index) {
  document.getElementById("question-text").innerText =
    questions[index].question;
  let labels = document.querySelectorAll("#q-options label");
  questions[index].options.forEach((option, i) => {
    labels[i].innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
  });
  questionNo.innerText = `Question ${index + 1} of ${questions.length}`;
}

function changeQuestion() {
  let selected = document.querySelector('input[name="option"]:checked');
  if (selected && selected.value === questions[currentIndex].correct) {
    score++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    progress += 25;
    innerBar.style.width = `${progress}%`;
    showQuestion(currentIndex);
  } else {
    clearInterval(timerInterval);
    questionpage.classList.add("hidden");

    let percentage = Math.round((score / questions.length) * 100);
    let passed = score >= Math.ceil(questions.length / 2);

    document.getElementById("result-name").innerText = "Sarah"; // dynamic if needed
    let resultScore = document.getElementById("result-score");
    resultScore.innerText = `${percentage}%`;
    resultScore.className =
      passed ? "text-4xl font-bold text-green-600" : "text-4xl font-bold text-red-600";

    Scard.classList.remove("hidden");
  }
}

function resetQuiz() {
  herodata.style.display = "none";
  questionpage.classList.remove("hidden");
  Scard.classList.add("hidden");

  currentIndex = 0;
  score = 0;
  progress = 25;
  innerBar.style.width = `${progress}%`;

  showQuestion(currentIndex);
  startTimer();
}

startbtn.addEventListener("click", resetQuiz);
retakeBtn.addEventListener("click", resetQuiz);
restartBtn.addEventListener("click", function () {
  Scard.classList.add("hidden");    
  questionpage.classList.add("hidden"); 
  herodata.style.display = "block"; 
});
document.getElementById("change-btn").addEventListener("click", changeQuestion);
