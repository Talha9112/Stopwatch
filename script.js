let timer;
let elapsedTime = 0;
let running = false;
let startTime;

const display = document.getElementById("display"); 
const startStopBtn = document.getElementById("startstopbtn"); 
const resetBtn = document.getElementById("resetbtn"); 

function toggleStartStop() {
    if (running) {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = "Stop";
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    startStopBtn.textContent = "Start";
    updateDisplay();
}

function updateDisplay() {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

startStopBtn.addEventListener("click", toggleStartStop);
resetBtn.addEventListener("click", reset);
