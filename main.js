const gameArea = document.getElementById('gameArea');
const target = document.getElementById('target');
const scoreBoard = document.getElementById('scoreBoard');

let score = 0;

function moveTarget() {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxX = gameAreaRect.width - target.offsetWidth;
  const maxY = gameAreaRect.height - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

target.addEventListener('contextmenu', (event) => {
  event.preventDefault(); 
  score++; 
  scoreBoard.innerText = `Score: ${score}`;
  moveTarget(); 
});

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'd') { 
    event.preventDefault()
      score = 0; 
      scoreBoard.innerText = `Score: ${score}`; 
  }
});
// Initial target position
moveTarget();
