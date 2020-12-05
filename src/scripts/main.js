import CircleType from 'circletype';

/* arc Text */

new CircleType(document.getElementById('sticker-text'))
  .dir(-1)
  .radius(100);

/* canvas arc in sticker */

const c = document.getElementById('sticker__arc');
const ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = '#fff';
ctx.scale(1.8, 1.9);
ctx.arc(100, 0, 55, 0.1 * Math.PI, 1.5 * Math.PI);
ctx.stroke();

/* Radio on step-content displaying */

function showStepContent() {
  for (let i = 1; i <= 4; i++) {
    const radioBtn = document.getElementById(`step-${i}`);
    const content = document.getElementById(`step-${i}-text`);

    if (radioBtn.checked) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
    radioBtn.addEventListener('click', showStepContent);
  }
}

showStepContent();

/* Hamburger Menu */

const headerWrapper = document.querySelector('.header__wrapper');
const btn = headerWrapper.querySelector('.nav-tgl');

btn.addEventListener('click', evt => {
  headerWrapper.classList.toggle('active');
});
