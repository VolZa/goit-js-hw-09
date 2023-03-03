const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');

btnStopEl.disabled = true;

let setIntervalColor = null;

const getRandomColor = function() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const showRandomColors = function() {
  document.body.style.backgroundColor = getRandomColor();
}

addEventListener('click', (ev) => {
    if (ev.target === btnStartEl) {
        btnStartEl.disabled = true;
        btnStopEl.disabled = false;
        setIntervalColor = setInterval(() => { showRandomColors() }, 1000);
    } else if (ev.target === btnStopEl) {
        btnStartEl.disabled = false;
        btnStopEl.disabled = true;
        clearInterval(setIntervalColor);
    }
})