const $gameArea = document.getElementById('gameArea');
console.log(gameArea);

const element = document.createElement("p");
element.classList.add("position")
$gameArea.appendChild(element)

let mousePos = {x: undefined, y: undefined};




$gameArea.addEventListener("mousemove", (e) => {
    mousePos = {x: e.clientX, y: e.clientY};
    element.innerHTML = `position x: ${mousePos.x} y: ${mousePos.y}`;
})

function createBubble(posX, posY){
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.top = `${posY}px`
    bubble.style.left = `${posX}px`
    return bubble;
}

$gameArea.addEventListener("click", (e) => {
    var rect = element.getBoundingClientRect();
    $gameArea.appendChild(createBubble(mousePos.x - rect.left - 15, mousePos.y - rect.top - 15))
    console.log()
})