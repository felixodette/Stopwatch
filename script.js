const classText = document.querySelector('[data-btn-class-text]');
const idText = document.querySelector('[data-btn-id-text]');
const id2Text = document.querySelector('[data-btn-id2-text]');

classText.addEventListener('click', () => {
  document.querySelector('.class').textContent = "I'm the querySelector for class works.";
});

idText.addEventListener('click', () => {
  document.querySelector('#id_query').textContent = "I'm the querySelector for id works";
});

id2Text.addEventListener('click', () => {
  document.getElementById('id').textContent = "The getElementById works";
});

const addHello = document.querySelector('[data-btn-add-hello]');
const textHello = document.querySelector('[data-hello-text]');

addHello.addEventListener('click', () => {
  textHello.textContent = textHello.textContent + " Hello";
});

let s = 0;
let counter;
let startInterval = document.querySelector('[data-btn-interval]');
let seconds = document.querySelector('[data-interval]');

startInterval.addEventListener('click', () => {
  if (!counter) {
    counter = setInterval(runSeconds, 1000);
  }
  function runSeconds() {
    seconds.textContent = s + 1;
    s++;
  }
});