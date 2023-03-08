import Notiflix from 'notiflix';

const refsPromise = {
  formEl: document.querySelector('.form'),
  inputDelayEl: document.querySelector('input[name="delay"]'),
  inputStepEl: document.querySelector('input[name="step"]'),
  inputAmountEl: document.querySelector('input[name="amount"]'),
  buttonEl: document.querySelector('button[type="submit"]'),
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

refsPromise.buttonEl.addEventListener('click', (e) => {
  e.preventDefault();

  const delay = Number(refsPromise.inputDelayEl.value);
  const step = Number(refsPromise.inputStepEl.value);
  const amount = Number(refsPromise.inputAmountEl.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + step * (i-1))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });  
  }
  refsPromise.formEl.reset();
});