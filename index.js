const inputEl = document.getElementById('secondsInput');
const startButtonEl = document.getElementById('startButton');
const timerEl = document.getElementById('timer');

const createTimerAnimator = () => {
  let intervalId;
  
  return (seconds) => {
    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        return;
      }
      const formattedTime = formatTime(remainingSeconds);
      timerEl.textContent = formattedTime;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

startButtonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
