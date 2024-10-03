let timerInterval;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time');
const lapsContainer = document.getElementById('laps');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            elapsedTime += 1000;
            timeDisplay.textContent = formatTime(elapsedTime);
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    lapsContainer.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    const lapTime = document.createElement('div');
    lapTime.textContent = `Lap: ${formatTime(elapsedTime)}`;
    lapsContainer.appendChild(lapTime);
});
