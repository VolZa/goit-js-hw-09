const refs = {
    bodyEl : document.querySelector('body'),
    btnStartEl: document.querySelector('[data-start]'),
    btnStopEl: document.querySelector('[data-stop]'),
}

addEventListener('click', (ev) => {
    console.log(ev.target===refs.btnStartEl);
    refs.bodyEl.style.backgroundColor = '#fa3a00';
})