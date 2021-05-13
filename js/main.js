const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const pageColor = document.querySelector('body');
const pageButton = document.querySelectorAll('body button');
const startBtn = pageButton[0];
const stopBtn = pageButton[1];

let intervalColorChange = null;

startBtn.addEventListener('click', e => {
  intervalColorChange = setInterval(() => {
    pageColor.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  e.target.disabled = 'true';
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalColorChange);
  startBtn.removeAttribute('disabled');
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
