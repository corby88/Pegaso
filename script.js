let selected = [];
let index = 0;
let time = 1800;

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
  const startBtn = document.createElement("button");
  startBtn.textContent = "Inizia Esame";
  startBtn.onclick = startExam;
  quiz.appendChild(startBtn);
}

function startExam() {
  selected = [];
  index = 0;
  time = 1800;

  exam = [...questions].sort(() => 0.5 - Math.random()).slice(0, 30);
  showQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerDiv.textContent = "";
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
    const div = document.createElement("div");
    div.className = "answer";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = i;

    if (selected[index] === i) {
      input.checked = true;
      div.style.backgroundColor = "#d4edda";
    }

    input.onchange = () => {
      const allAnswers = document.querySelectorAll(".answer");
      allAnswers.forEach(aDiv => aDiv.style.backgroundColor = "#f9f9f9");

      selected[index] = i;
      div.style.backgroundColor = "#d4edda";
    };

    div.appendChild(input);
    div.appendChild(document.createTextNode(a.text));
    quiz.appendChild(div);
  });

  // Contenitore bottoni
  const btnBox = document.createElement("div");

  // Bottone PRECEDENTE
  if (index > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "⬅ Domanda precedente";
    prevBtn.onclick = () => {
      index--;
      showQuestion();
    };
    btnBox.appendChild(prevBtn);
  }

  // Bottone PROSSIMA / TERMINA
  const nextBtn = document.createElement("button");

  if (index === exam.length - 1) {
    nextBtn.textContent = "Termina Esame";
    nextBtn.classList.add("terminate");
    nextBtn.onclick = finishExam;
  } else {
    nextBtn.textContent = "Prossima domanda";
    nextBtn.onclick = () => {
      if (selected[index] === undefined) {
        alert("Seleziona una risposta");
        return;
      }
      index++;
      showQuestion();
    };
  }

  btnBox.appendChild(nextBtn);
  quiz.appendChild(btnBox);
}

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

  quiz.innerHTML += `<h3>Punteggio: ${score}/30</h3>`;
  quiz.innerHTML += `<h2>${score >= 18 ? "🎉 ESAME SUPERATO" : "❌ ESAME NON SUPERATO"}</h2>`;

  const finishBtn = document.createElement("button");
  finishBtn.textContent = "Fine";
  finishBtn.classList.add("terminate");
  finishBtn.onclick = showStartScreen;
  quiz.appendChild(finishBtn);
}

// Avvio
showStartScreen();
