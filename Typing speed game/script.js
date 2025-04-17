const words = [
  "hello", "javascript", "challenge", "keyboard", "speed",
  "developer", "browser", "typing", "coding", "power"
];
let currentWord = "";
let time = 10;
let score = 0;
let timer;

const wordDisplay = document.getElementById("word-display");
const inputBox = document.getElementById("input-box");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function showWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordDisplay.textContent = currentWord;
  wordDisplay.classList.remove("fadeIn");
  void wordDisplay.offsetWidth; 
  wordDisplay.classList.add("fadeIn");
}

function updateTime() {
  time--;
  timeDisplay.textContent = time;
  if (time === 0) {
    clearInterval(timer);
    endGame();
  }
}

function checkInput() {
  const typed = inputBox.value.trim();
  if (typed.toLowerCase() === currentWord.toLowerCase()) {
    score++;
    scoreDisplay.textContent = score;
    time += 2;
    inputBox.value = "";
    showWord();
  }
}

function startGame() {
  score = 0;
  time = 10;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  inputBox.disabled = false;
  restartBtn.style.display = "none";
  showWord();
  inputBox.value = "";
  inputBox.focus();
  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function endGame() {
  wordDisplay.textContent = "⏳ Game Over!";
  inputBox.disabled = true;
  restartBtn.style.display = "inline-block";
}

inputBox.addEventListener("input", checkInput);
restartBtn.addEventListener("click", startGame);

window.onload = startGame;