let button = document.querySelector('.model__text-open');
let more = document.querySelector('.more');
let text = document.querySelector('.model__text-body');

function addClass() {
  more.classList.toggle('_active');
  text.classList.toggle('_active')


  if (more.classList.contains('_active')) {
    button.innerHTML = "Скрыть"
  }
  else {
    button.innerHTML = "Читать полностью.."
  }
}
button.addEventListener('click', addClass);


