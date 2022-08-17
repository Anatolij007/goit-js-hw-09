// Напиши скрипт, який після натискання кнопки «Start»,
// раз на секунду змінює колір фону < body > на випадкове значення,
//     використовуючи інлайн стиль.
//     Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', startBtnClick);
refs.stop.addEventListener('click', stopBtnClick);

let intervalId = null;

refs.stop.disabled = true;

function startBtnClick() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function stopBtnClick() {
  clearInterval(intervalId);
  refs.start.disabled = false;
  refs.stop.disaled = true;
}
