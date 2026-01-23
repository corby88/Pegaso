let selected = [];
let index = 0;
let time = 1800;
let numQuestions = 30;

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

  // Label e input per numero di domande
  const label = document.createElement("label");
  label.textContent = `Quante domande vuoi affrontare? (1-${questions.length}) `;
  const input = document.createElement("input");
  input.type = "number";
  input.min = 1;
  input.max = questions.length;
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
      alert(`Inserisci un numero valido tra 1 e ${questions.length}`);
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

  // Estrazione casuale del numero di domande scelto
  exam = [...questions].sort(() => 0.5 - Math.random()).slice(0, numQuestions);

  showQuestion();
  startTimer();
}

// Alla fine dell'esame, modifica il punteggio in base al numero di domande
function finishExam() {
  clearInterval(timerInterval);
  timerDiv.textContent = "";

  let score = 0;
  quiz.innerHTML = "<h2>Risultato</h2>";

  exam.forEach((q, i) => {
    const correct = q.answers.findIndex(a => a.correct);
    if (selected[i] === correct) score++;
    else {
      quiz.innerHTML += `
        <p>
          <b>${q.text}</b><br>
          ❌ Tua risposta: ${q.answers[selected[i]]?.text || "nessuna"}<br>
          ✅ Corretta: ${q.answers[correct].text}
        </p>`;
    }
  });

  quiz.innerHTML += `<h3>Punteggio: ${score}/${numQuestions}</h3>`;

  const passMark = Math.ceil(numQuestions * 0.6); // superato se ≥60%
  quiz.innerHTML += `<h2>${score >= passMark ? "🎉 ESAME SUPERATO" : "❌ ESAME NON SUPERATO"}</h2>`;

  const finishBtn = document.createElement("button");
  finishBtn.textContent = "Fine";
  finishBtn.classList.add("terminate");
  finishBtn.onclick = showStartScreen;
  quiz.appendChild(finishBtn);
}

// Avvio
showStartScreen();
