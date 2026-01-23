let selected = [];
let index = 0;
let time = 1800;
let numQuestions = 30;

const quiz = document.getElementById("quiz");
const timerDiv = document.getElementById("timer");

let exam = [];
let timerInterval;

// ===========================
// Schermata iniziale
// ===========================
function showStartScreen() {
  clearInterval(timerInterval);
  selected = [];
  index = 0;
  time = 1800;
  timerDiv.textContent = "";

  quiz.innerHTML = '';

  // Container input numero di domande
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = `Quante domande vuoi? (Massimo ${questions.length}): `;
  div.appendChild(label);

  const input = document.createElement("input");
  input.type = "number";
  input.min = 1;
  input.max = questions.length;
  input.value = 30;
  div.appendChild(input);

  quiz.appendChild(div);

  // Bottone per iniziare l'esame
  const startBtn = document.createElement("button");
  startBtn.textContent = "Inizia Esame";
  startBtn.style.marginTop = "10px";
  quiz.appendChild(document.createElement("br"));
  quiz.appendChild(startBtn);

  // Evento del bottone
  startBtn.addEventListener("click", () => {
    const val = parseInt(input.value);
    if (isNaN(val) || val < 1 || val > questions.length) {
      alert(`Inserisci un numero valido tra 1 e ${questions.length}`);
      return;
    }
    numQuestions = val;
    startExam();
  });
}

// ===========================
// Avvio dell’esame
// ===========================
function startExam() {
  selected = [];
  index = 0;
  time = 1800;

  // Estrazione casuale del numero di domande
  exam = [...questions].sort(() => 0.5 - Math.random()).slice(0, numQuestions);

  showQuestion();
  startTimer();
}

// ===========================
// Timer
// ===========================
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

// ===========================
// Mostra domanda
// ===========================
function showQuestion() {
  const q = exam[index];
  quiz.innerHTML = `<h3>${index + 1}. ${q.text}</h3>`;

  q.answers.forEach((a, i) => {
    const div = document.createElement("div");
    div.className = "answer";
    div.style.padding = "5px";
    div.style.marginBottom = "5px";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#f9f9f9";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = `q${index}_a${i}`;
    input.value = i;

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.textContent = a.text;
    label.style.cursor = "pointer";
    label.style.marginLeft = "8px";

    if (selected[index] === i) {
      input.checked = true;
      div.style.backgroundColor = "#d4edda";
    }

    input.onchange = () => {
      const allAnswers = document.querySelectorAll(".answer");
      allAnswers.forEach(aDiv => aDiv.style.backgroundColor = "#f9f9f9");

      selected[index] = i;
      div.style.backgroundColor = "#d4edda";

      // Aggiorna i bottoni quando l’utente seleziona l’ultima domanda
      showQuestionButtons();
    };

    div.appendChild(input);
    div.appendChild(label);
    quiz.appendChild(div);
  });

  showQuestionButtons();
}

// ===========================
// Mostra i bottoni sotto la domanda
// ===========================
function showQuestionButtons() {
  const btnBox = document.createElement("div");
  btnBox.style.marginTop = "10px";
  btnBox.style.textAlign = "center"; // centra i bottoni

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

  // Controllo se tutte le domande sono state risposte
  const allAnswered = selected.filter(s => s === undefined).length === 0;

  // Bottone PROSSIMA o TERMINA
  const nextBtn = document.createElement("button");
  nextBtn.style.marginLeft = "5px";

  if (index === exam.length - 1 && allAnswered) {
    nextBtn.textContent = "Termina Esame";
    nextBtn.classList.add("terminate");
    nextBtn.onclick = finishExam;
  } else {
    nextBtn.textContent = "Prossima domanda";
    nextBtn.onclick = () => {
      if (selected[index] === undefined) {
        alert("Devi selezionare una risposta prima di continuare!");
        return;
      }
      index++;
      showQuestion();
    };
  }

  btnBox.appendChild(nextBtn);
  quiz.appendChild(btnBox);
}

// ===========================
// Fine esame
// ===========================
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

  const passMark = Math.ceil(numQuestions * 0.6);
  quiz.innerHTML += `<h2>${score >= passMark ? "🎉 ESAME SUPERATO" : "❌ ESAME NON SUPERATO"}</h2>`;

  const finishBtn = document.createElement("button");
  finishBtn.textContent = "Fine";
  finishBtn.classList.add("terminate");
  finishBtn.onclick = showStartScreen;
  quiz.appendChild(finishBtn);
}

// ===========================
// Avvio
// ===========================
showStartScreen();
