import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix.css';
// const flatpickr = require("flatpickr");

const refs = {
    inputTextEl: document.querySelector("#datetime-picker"),
    btnEl: document.querySelector("button[data-start]"),
};

refs.btnEl.disabled = true; //the button is inactive to select the date first

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            refs.btnEl.disabled = true; // деактивація кнопки СТАРТ
        } else { refs.btnEl.disabled = false; }
    },
}

flatpickr(refs.inputTextEl, options);

// function convertDate(date) {
//     const dateObj = new Date(date);
//     const days = Math.floor(date / (1000 * 60 * 60 * 24));
//     const hours = dateObj.getHours();
//     const minutes = dateObj.getMinutes();
//     const seconds = dateObj.getSeconds();

//     return { days, hours, minutes, seconds, time };
// }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

refs.btnEl.addEventListener('click', () => { 
    refs.btnEl.disabled = true;
    let timer = setInterval(() => {
        const timeEnd = new Date(refs.inputTextEl.value);
        let timeCurrent = Date.now();
        console.log(timeEnd);
        console.log(timeCurrent);
        
        
    })
});