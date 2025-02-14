let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");
let lapBtn = document.getElementById("lapBtn");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let millisecondsDisplay = document.getElementById("milliseconds");
let lapsContainer = document.getElementById("laps");

let timer;
let isRunning = false;
let time = 0; // Time in milliseconds
let lapTimes = [];

// Event listeners
startStopBtn.addEventListener("click", toggleStartStop);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);

/**
 * Starts or stops the stopwatch.
 */
function toggleStartStop() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(updateTime, 10); // Update every 10ms
    startStopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
}

/**
 * Updates the time and displays it on the stopwatch.
 */
function updateTime() {
  time++;

  // Calculate time components
  let milliseconds = time % 100; // Last two digits represent milliseconds
  let seconds = Math.floor((time / 100) % 60); // Every 100 increments = 1 second
  let minutes = Math.floor(time / 6000); // Every 6000 increments = 1 minute

  // Update the display
  millisecondsDisplay.textContent = formatTime(milliseconds);
  secondsDisplay.textContent = formatTime(seconds);
  minutesDisplay.textContent = formatTime(minutes);
}

/**
 * Formats a number as a two-digit string (e.g., "01", "09", etc.).
 * @param {number} value - The number to format.
 * @returns {string} The formatted number.
 */
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

/**
 * Resets the stopwatch to 00:00:00 and clears laps.
 */
function resetStopwatch() {
  clearInterval(timer);
  time = 0;
  isRunning = false;
  startStopBtn.textContent = "Start";

  // Reset the time display
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  millisecondsDisplay.textContent = "00";

  // Clear laps
  lapTimes = [];
  lapsContainer.innerHTML = '<h2 class="laps-title">Laps</h2>';
}

/**
 * Records the current time as a lap and displays it in the lap list.
 */
function recordLap() {
  if (isRunning) {
    let lapTime =
      formatTime(Math.floor(time / 6000)) + // Minutes
      ":" +
      formatTime(Math.floor((time / 100) % 60)) + // Seconds
      ":" +
      formatTime(time % 100); // Milliseconds

    lapTimes.push(lapTime);
    displayLaps();
  }
}

/**
 * Displays the list of recorded laps.
 */
function displayLaps() {
  lapsContainer.innerHTML =
    '<h2 class="laps-title">Laps</h2>' +
    lapTimes
      .map((lap, index) => `<div class="lap">Lap ${index + 1}: ${lap}</div>`)
      .join("");
}
