const $gameArea = document.getElementById("gameArea");
const $btnStart = document.getElementById("btnStart");

// const element = document.createElement("p");
// element.classList.add("position")
// $gameArea.appendChild(element)

let mousePos = { x: undefined, y: undefined };
let rain = undefined;


// $gameArea.addEventListener("mousemove", (e) => {
//     mousePos = {x: e.clientX, y: e.clientY};
//     element.innerHTML = `position x: ${mousePos.x} y: ${mousePos.y}`;
// })

$gameArea.addEventListener("touchstart", (e) => {
  if (e.target.classList.contains("bubble")) {
    $gameArea.removeChild(e.target);
  }
});

function startGame() {
  setInterval(() => {
    createBubble();
  }, 500);
}

function createBubble(gameWidth, gameHeight) {
  const bubble = document.createElement("div");
  const img = document.createElement("img");
  img.src = "./sprites/waterdrop.png";
  bubble.appendChild(img);
  bubble.classList.add("bubble");
  bubble.style.top = "-50px";
  bubble.style.left = `${Math.floor(Math.random() * ((gameWidth - 100) - 100 + 1) + 70)}px`
  $gameArea.appendChild(bubble);
  let height = -50;

  const bubbleFall = setInterval(() => {
    bubble.style.top = height + "px";
    height += 2;
    if (height > gameHeight) {
      clearInterval(bubbleFall);
    }
  }, 16);
}

$btnStart.addEventListener("click", (e) => {
  $gameArea.style.display = "block";
  $btnStart.style.display = "none";

  const gameAreaSizes = $gameArea.getBoundingClientRect();
  const gameAreaWidth = gameAreaSizes.width;
  const gameAreaHeight = gameAreaSizes.height;
  console.log(gameAreaHeight, gameAreaWidth);

  rain = setInterval(() => {
    createBubble(gameAreaWidth, gameAreaHeight);
  }, 500);
});
