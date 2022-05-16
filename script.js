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
