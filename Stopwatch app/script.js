let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    display.textContent = 
        (minutes < 10 ? "0" : "") + minutes + "." +
        (seconds < 10 ? "0" : "") + seconds + "." +
        (milliseconds < 10 ? "0" : "") + milliseconds;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
