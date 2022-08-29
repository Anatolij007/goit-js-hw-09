import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleClick);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function handleClick(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget;

  let firstDelay = Number(delay.value);
  const stepDelay = Number(step.value);
  let amountDelay = Number(amount.value);

  for (let i = 1; i <= amountDelay; i += 1) {
    createPromise(i, firstDelay);
    firstDelay += stepDelay;
  }
}
