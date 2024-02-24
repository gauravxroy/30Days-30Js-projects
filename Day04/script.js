/// Array of Question Objects where each object contains a question and an array of possible answers with correctness flags.
const Questions = [
  {
    Question: "How many minutes are in a full week?",
    Answers: [
      { text: "1230", correct: false },
      { text: "490", correct: false },
      { text: "10080", correct: true },
      { text: "10923", correct: false },
    ],
  },

  {
    Question: "What country drinks the most coffee per capita?",
    Answers: [
      { text: "Finland", correct: true },
      { text: "Usa", correct: false },
      { text: "Switzerland", correct: false },
      { text: "nepal", correct: false },
    ],
  },

  {
    Question: "Which state is also known as the “Fruit Bowl” of India?",
    Answers: [
      { text: "Jammu & Kashmir", correct: false },
      { text: "Himachal Pradesh", correct: true },
      { text: "Bihar", correct: false },
      { text: "Assam", correct: false },
    ],
  },
  {
    Question: "Who was the first to discover India?",
    Answers: [
      { text: "Christopher Columbus", correct: false },
      { text: "Vasco da Gama", correct: true },
      { text: "Amerigo Vespucci", correct: false },
      { text: "Marco Polo", correct: false },
    ],
  },
  {
    Question: "Who is known as the “Iron Man” of India?",
    Answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: true },
      { text: "Mohandas Gandhi", correct: false },
    ],
  },
  {
    Question: "What is the Capital of India?",
    Answers: [
      { text: "Mumbai", correct: false },
      { text: "Kolkata", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Chennai", correct: false },
    ],
  },
  {
    Question: "Which state is also known as the “fruit bowl” of India?",
    Answers: [
      { text: "Kerala", correct: false },
      { text: "Karnataka", correct: false },
      { text: "Himachal Pradesh", correct: true },
      { text: "Punjab", correct: false },
    ],
  },
  {
    Question: "Which is the national sport of India?",
    Answers: [
      { text: "Cricket", correct: false },
      { text: "Hockey", correct: true },
      { text: "Football", correct: false },
      { text: "Kabaddi", correct: false },
    ],
  },
  {
    Question: "Which state is also known as the “land of rising sun”?",
    Answers: [
      { text: "Manipur", correct: false },
      { text: "Nagaland", correct: false },
      { text: "Arunachal Pradesh", correct: true },
      { text: "Mizoram", correct: false },
    ],
  },
  {
    Question: "Where is the Taj Mahal located?",
    Answers: [
      { text: "Jaipur", correct: false },
      { text: "Delhi", correct: false },
      { text: "Mumbai", correct: false },
      { text: "Agra", correct: true },
    ],
  },
  {
    Question: "Which Indian state has the smallest coastline?",
    Answers: [
      { text: "Kerala", correct: false },
      { text: "Maharashtra", correct: false },
      { text: "Goa", correct: true },
      { text: "Karnataka", correct: false },
    ],
  },
  {
    Question: "What is the national heritage animal of India?",
    Answers: [
      { text: "Lion", correct: false },
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: true },
      { text: "Leopard", correct: false },
    ],
  },
  {
    Question: "In which state is the International Kite Festival celebrated?",
    Answers: [
      { text: "Rajasthan", correct: false },
      { text: "Maharashtra", correct: false },
      { text: "Gujarat", correct: true },
      { text: "Punjab", correct: false },
    ],
  },
  {
    Question: "Which state in India has the highest population?",
    Answers: [
      { text: "Maharashtra", correct: false },
      { text: "Bihar", correct: false },
      { text: "Uttar Pradesh", correct: true },
      { text: "West Bengal", correct: false },
    ],
  },
  {
    Question: "Name the national bird of India.",
    Answers: [
      { text: "Parrot", correct: false },
      { text: "Peacock", correct: true },
      { text: "Eagle", correct: false },
      { text: "Owl", correct: false },
    ],
  },
  {
    Question: "How many states are there in India?",
    Answers: [
      { text: "26 states and 8 Union territories", correct: false },
      { text: "29 states and 7 Union territories", correct: false },
      { text: "28 states and 8 Union territories", correct: true },
      { text: "27 states and 9 Union territories", correct: false },
    ],
  },
];

const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const nextQuestion = document.querySelector("#next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextQuestion.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.Question;
  currentQuestion.Answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answers.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextQuestion.style.display = "none";
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("inCorrect");
  }

  Array.from(answers.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextQuestion.style.display = "block";
}

function showScore() {
  resetState();
  question.innerHTML = `You Scored ${score} out of ${Questions.length}`;
  next.innerHTML = "Play Again";
  next.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < Questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextQuestion.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentQuestionIndex < Questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});
startQuiz();
