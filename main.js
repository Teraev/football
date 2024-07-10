const body = document.querySelector('.pole');
const ball = document.querySelector('.ball');
const vorota_left = document.querySelector('.goal-left');
const vorota_prav = document.querySelector('.goal-right');
const right_socer = document.querySelector('#rigth');
const left_socer = document.querySelector('#left');
const ronaldo = document.getElementById('ronaldo');
const messi = document.getElementById('messi');

let right = 0;
let left = 0;

ball.ondragstart = () => {
  console.log("started");
};

ball.ondragend = (e) => {
  e.preventDefault();

  const x = e.clientX;
  const y = e.clientY;

  ball.style.top = y + "px";
  ball.style.left = x + "px";

  const bodyRect = body.getBoundingClientRect();

  if (y < bodyRect.top || y > bodyRect.bottom) {
    alert("Офсайд!");
    ball.style.top = '50%';
    ball.style.left = '50%';
  }

  if (x < bodyRect.left || x > bodyRect.right) {
    alert("Угловой!");
    ball.style.top = '50%';
    ball.style.left = '50%';
  }

  const vorotaLeftRect = vorota_left.getBoundingClientRect();
  const vorotaRightRect = vorota_prav.getBoundingClientRect();

  if (x < vorotaLeftRect.left) {
    alert("Гол в левые ворота!");
    ball.style.top = '50%';
    ball.style.left = '50%';
    right++;
    right_socer.innerHTML = right;
    messi.play();
  }

  if (x > vorotaRightRect.right) {
      alert("Гол в правые ворота!");
      ball.style.top = '50%';
      ball.style.left = '50%';
      left++;
      left_socer.innerHTML = left;
      ronaldo.play();
  }

};

body.ondragover = (e) => {
  e.preventDefault();
};