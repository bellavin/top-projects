const startEl = document.querySelector(".start-button");
const stopEl = document.querySelector(".stop-button");
const resetEl = document.querySelector(".reset-button");
const timerEl = document.querySelector(".timer");

const inititalTime = 10;
let interval;
let timeLeft = inititalTime;

const updateTimer = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let mm = minutes < 10 ? "0" + minutes : minutes;
  let ss = seconds < 10 ? "0" + seconds : seconds;

  timerEl.innerHTML = `${mm}:${ss}`;
};

const startTimer = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = inititalTime;
      updateTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = inititalTime;
  updateTimer();
};

updateTimer();
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
