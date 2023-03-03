const refs = {
    bodyEl : document.querySelector('body'),
    btnStartEl: document.querySelector('[data-start]'),
    btnStopEl: document.querySelector('[data-stop]'),
}

refs.btnStopEl.disabled = true;

let setIntervalColor = null;

const getRandomColor = function() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const showRandomColors = function() {
  refs.bodyEl.style.backgroundColor = getRandomColor();
}


addEventListener('click', (ev) => {
    if (ev.target === refs.btnStartEl) {
        console.log('start');
        refs.btnStartEl.disabled = true;
        refs.btnStopEl.disabled = false;
        setIntervalColor = setInterval(() => { showRandomColors() }, 1000);
    } else if (ev.target === refs.btnStopEl) {
        console.log('stop');
        refs.btnStartEl.disabled = false;
        refs.btnStopEl.disabled = true;
        clearInterval(setIntervalColor);
    }
})