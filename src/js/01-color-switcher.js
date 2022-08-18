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

// refs.start.disabled = false;
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
