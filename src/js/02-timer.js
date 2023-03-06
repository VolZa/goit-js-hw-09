import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputTextEl: document.querySelector("#datetime-picker"),
    btnEl: document.querySelector("button[data-start]"),
    daysEl: document.querySelector("span[data-days]"),
    hoursEl: document.querySelector("span[data-hours]"),
    minutesEl: document.querySelector("span[data-minutes]"),
    secondsEl: document.querySelector("span[data-seconds]"),
};

refs.btnEl.disabled = true; //the button is inactive to select the date first

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            refs.btnEl.disabled = true; // деактивація кнопки СТАРТ
        } else { refs.btnEl.disabled = false; }
    },
}

flatpickr(refs.inputTextEl, options);

//функція конвертує мілісекунди в дні, години, хвилини, секунди
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

//функція використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

refs.btnEl.addEventListener('click', () => { 
    refs.btnEl.disabled = true;
    let timer = setInterval(() => {
        const timeEnd = new Date(refs.inputTextEl.value).getTime();
        let timeCurrent = Date.now();
        let timeDown = timeEnd - timeCurrent;
        if (timeDown >= 0) {  
            let objTime = convertMs(timeDown);
            refs.daysEl.textContent = addLeadingZero(objTime.days);
            refs.hoursEl.textContent = addLeadingZero(objTime.hours);
            refs.minutesEl.textContent = addLeadingZero(objTime.minutes);
            refs.secondsEl.textContent = addLeadingZero(objTime.seconds);
        } else {
            clearInterval(timer);
            Notiflix.Notify.success('Time is over');
        }
    })
});