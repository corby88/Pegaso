let selected = [];
let index = 0;
let time = 1800;

const quiz = document.getElementById("quiz");
const timerDiv = document.getElementById("timer");

let exam = [];
let timerInterval;

// Mostra solo bottone "Inizia Esame"
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
    div.style.padding = "12px 15px";
    div.style.borderRadius = "8px";
    div.style.margin = "10px 0";
    div.style.border = "1px solid #ccc";
    div.style.cursor = "pointer";
    div.style.background = "#f9f9f9";
    div.style.transition = "all 0.3s ease";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = i;

    if (selected[index] === i) {
      input.checked = true;
      div.style.backgroundColor = "#d4edda"; // verde chiaro selezionata
    }

    input.onchange = () => {
      // Deseleziona tutte le altre risposte visivamente
      const allAnswers = document.querySelectorAll(".answer");
      allAnswers.forEach(aDiv => aDiv.style.backgroundColor = "");

      // Evidenzia quella selezionata
      div.style.backgroundColor = "#d4edda";
    };

    div.appendChild(input);
    div.appendChild(document.createTextNode(a.text));
    quiz.appendChild(div);
  });

  // Bottone finale per confermare la risposta
  const nextBtn = document.createElement("button");

  // Se siamo all'ultima domanda, mostra "Termina esame"
  if (index === exam.length - 1) {
    nextBtn.textContent = "Termina Esame";
    nextBtn.onclick = () => finishExam();
  } else {
    nextBtn.textContent = "Prossima domanda";
    nextBtn.onclick = () => {
      const checked = document.querySelector('input[name="answer"]:checked');
      if (!checked) return alert("Seleziona una risposta");

      selected[index] = parseInt(checked.value);
      index++;
      showQuestion();
    };
  }

  nextBtn.style.marginTop = "15px";
  quiz.appendChild(nextBtn);
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
      quiz.innerHTML += `<p><b>${q.text}</b><br>
      ❌ Tua risposta: ${q.answers[selected[i]]?.text || "nessuna"}<br>
      ✅ Corretta: ${q.answers[correct].text}</p>`;
    }
  });

  quiz.innerHTML += `<h3>Punteggio: ${score}/30</h3>`;
  quiz.innerHTML += `<h2>${score >= 18 ? "🎉 ESAME SUPERATO" : "❌ ESAME NON SUPERATO"}</h2>`;

  // Bottone finale per tornare alla schermata iniziale
  const finishBtn = document.createElement("button");
  finishBtn.textContent = "Fine";
  finishBtn.onclick = showStartScreen;
  finishBtn.style.marginTop = "20px";
  quiz.appendChild(finishBtn);
}

// Mostra subito la schermata iniziale
showStartScreen();
