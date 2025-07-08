const $gameArea = document.getElementById('gameArea');

// const element = document.createElement("p");
// element.classList.add("position")
// $gameArea.appendChild(element)

let mousePos = {x: undefined, y: undefined};
let rain = undefined




// $gameArea.addEventListener("mousemove", (e) => {
//     mousePos = {x: e.clientX, y: e.clientY};
//     element.innerHTML = `position x: ${mousePos.x} y: ${mousePos.y}`;
// })


$gameArea.addEventListener("click", e => {
    if(e.target.classList.contains("bubble")){
$gameArea.removeChild(e.target)
    }
    
})

function startGame(){
setInterval(() => {
    createBubble()
}, 500)
}

function createBubble(){
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.top = "-50px"
    bubble.style.left = `${Math.floor(Math.random() * 550)}px`
    $gameArea.appendChild(bubble)
    let height = -50;
    
        
             const bubbleFall = setInterval(() => {
                bubble.style.top = height + "px"
            height += 2
            if(height > 405){
                clearInterval(bubbleFall);
            }
            }, 16);

}

document.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        rain = setInterval(() => {
    createBubble()
}, 500)
    }
})









