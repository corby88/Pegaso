let selected = [];
let index = 0;
let time = 1800;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const timerDiv = document.getElementById("timer");

let exam = [];
let timerInterval;

function startExam() {
  selected = [];
  index = 0;
  time = 1800;
  nextBtn.style.display = "inline-block";

  exam = [...questions].sort(() => 0.5 - Math.random()).slice(0, 30);
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval); // evita timer multipli
  timerInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
      finishExam();
    }
    time--;
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    timerDiv.textContent = `${min}:${sec}`;
  }, 1000);
}

function showQuestion() {
  const q = exam[index];
  quiz.innerHTML = `<h3>${index + 1}. ${q.text}</h3>`;

  q.answers.forEach((a, i) => {
    quiz.innerHTML += `
      <div class="answer">
        <input type="radio" name="answer" value="${i}">
        ${a.text}
      </div>`;
  });
}

nextBtn.onclick = () => {
  const checked = document.querySelector('input[name="answer"]:checked');
  if (!checked) return alert("Seleziona una risposta");

  selected[index] = parseInt(checked.value);
  index++;

  if (index < exam.length) showQuestion();
  else finishExam();
};

function finishExam() {
  clearInterval(timerInterval);
  let score = 0;
  quiz.innerHTML = "<h2>Risultato</h2>";

  exam.forEach((q, i) => {
    const correct = q.answers.findIndex(a => a.correct);
    if (selected[i] === correct) score++;
    else {
      quiz.innerHTML += `<p><b>${q.text}</b><br>
      ❌ Tua risposta: ${q.answers[selected[i]]?.text || "nessuna"}<br>
      ✅ Corretta: ${q.answers[correct].text}</p>`;
    }
  });

  quiz.innerHTML += `<h3>Punteggio: ${score}/30</h3>`;
  quiz.innerHTML += `<h2>${score >= 18 ? "🎉 ESAME SUPERATO" : "❌ ESAME NON SUPERATO"}</h2>`;

  nextBtn.style.display = "none";

  // Aggiungi bottone per ricominciare
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Ricomincia Esame";
  restartBtn.onclick = startExam;
  quiz.appendChild(restartBtn);
}

startExam();
