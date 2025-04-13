const quotes = [
  "Practice makes a man perfect.",
  "JavaScript is fun to learn.",
  "Typing fast is a useful skill.",
  "Stay focused and keep learning."
];

let quote = "";
let timer = 60;
let interval;
let mistakes = 0;
let isStarted = false;

const quoteDisplay = document.getElementById("quote");
const input = document.getElementById("input");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");
const message = document.getElementById("message");

// Load a new quote
function loadQuote() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.innerHTML = "";
  quote.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteDisplay.appendChild(span);
  });
}
loadQuote();

function startTimer() {
  interval = setInterval(() => {
    timer--;
    timerDisplay.innerText = timer;
    if (timer === 0) {
      clearInterval(interval);
      input.disabled = true;
      calculateWPM();
      message.innerText = "Time's up! Check your score.";
    }
  }, 1000);
}
input.addEventListener("input", () => {
  if (!isStarted) {
    startTimer();
    isStarted = true;
  }

  if (input.value.length > quote.length) {
    input.value = input.value.slice(0, quote.length);
  }

  const quoteSpans = quoteDisplay.querySelectorAll("span");
  const typed = input.value.split("");

  mistakes = 0;

  quoteSpans.forEach((charSpan, index) => {
    if (typed[index] == null) {
      charSpan.classList.remove("correct", "incorrect");
    } else if (typed[index] === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
    } else {
      charSpan.classList.add("incorrect");
      charSpan.classList.remove("correct");
      mistakes++;
    }
  });
});

function calculateWPM() {
  const quoteSpans = quoteDisplay.querySelectorAll("span");
  let correctChars = 0;

  quoteSpans.forEach(span => {
    if (span.classList.contains("correct")) {
      correctChars++;
    }
  });

  const wordsTyped = correctChars / 5; 
  const timeTaken = (60 - timer) / 60;
  const wpm = Math.round(wordsTyped / timeTaken) || 0;
  const accuracy = Math.round((correctChars / quote.length) * 100);

  wpmDisplay.innerText = wpm;
  accuracyDisplay.innerText = accuracy;
}
restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  timer = 60;
  timerDisplay.innerText = timer;
  isStarted = false;
  mistakes = 0;
  input.value = "";
  input.disabled = false;
  wpmDisplay.innerText = 0;
  accuracyDisplay.innerText = 0;
  message.innerText = "";
  loadQuote();
});
