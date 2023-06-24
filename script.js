// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// DOM elements
const display = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// Format time in HH:MM:SS format
function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
}

// Start the stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
}

// Stop the stopwatch
function stop() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

// Reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

// Event listeners
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
