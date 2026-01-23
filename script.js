let selected = [];
let index = 0;
let time = 1800;
let numQuestions = 30; // numero di domande scelto dall'utente

const quiz = document.getElementById("quiz");
const timerDiv = document.getElementById("timer");

let exam = [];
let timerInterval;

// Schermata iniziale
function showStartScreen() {
  clearInterval(timerInterval);
  selected = [];
  index = 0;
  time = 1800;
  timerDiv.textContent = "";

  quiz.innerHTML = '';

  // Input per il numero di domande
  const label = document.createElement("label");
  label.textContent = "Quante domande vuoi affrontare? ";
  const input = document.createElement("input");
  input.type = "number";
  input.min = 1;
  input.max = questions.length; // massimo il numero totale di domande disponibili
  input.value = 30;
  label.appendChild(input);
  quiz.appendChild(label);

  quiz.appendChild(document.createElement("br"));

  // Bottone per iniziare
  const startBtn = document.createElement("button");
  startBtn.textContent = "Inizia Esame";
  startBtn.onclick = () => {
    const val = parseInt(input.value);
    if (isNaN(val) || val < 1 || val > questions.length) {
      alert(`Inserisci un numero tra 1 e ${questions.length}`);
      return;
    }
    numQuestions = val;
    startExam();
  };
  quiz.appendChild(startBtn);
}

function startExam() {
  selected = [];
  index = 0;
  time = 1800;

  // Estraggo il numero di domande scelto dall'utente
  exam = [...questions].sort(() => 0.5 - Math.random()).slice(0, numQuestions);

  showQuestion();
  startTimer();
}
