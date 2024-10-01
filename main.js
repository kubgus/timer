const DURATION = Number.parseInt(prompt("Timer seconds:", "300"));

const timeElement = document.getElementById('time');
const lineElement = document.getElementById('line');

let running = false;
let currentTime = DURATION;

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.abs(seconds % 60);
    const formattedMinutes = minutes < 0 ? `-${minutes + 1}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`
}

setInterval(() => {
    if (running) {
        currentTime--;
    }
}, 1000);

const startStopTimer = () => {
    currentTime = DURATION;
    running = !running;
};

document.addEventListener('keyup', (event) => { 
    if (event.key === 'x' || event.key === ' ') {
        startStopTimer();
    }
});
document.addEventListener('click', () => {
    startStopTimer();
});

function update() {
    timeElement.textContent = formatTime(currentTime);
    lineElement.style.width = `${(currentTime / DURATION) * 100}%`;

    if (currentTime <= 10) {
        timeElement.style.color = 'red';
        lineElement.style.backgroundColor = 'red';
    }
    else if (currentTime < DURATION / 6) {
        timeElement.style.color = 'white';
        lineElement.style.backgroundColor = 'yellow';
    }
    else {
        timeElement.style.color = 'white';
        lineElement.style.backgroundColor = 'green';
    }

    requestAnimationFrame(update);
}
update();
