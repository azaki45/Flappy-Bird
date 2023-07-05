// setting up the canvas environment
const canvas = document.querySelector('canvas');

canvas.width = 500;
canvas.height = 800;

let ctx = canvas.getContext("2d");

// Pillar and player object initialization.
let pillar = new Pillar(1000,0,400);
let player = new Player(100,100,20,5);


let animationId;
// animation call.
const animate = ()=>{
    animationId = requestAnimationFrame(animate);
    ctx.clearRect(0,0,500,800);
    pillar.update();
    player.update();
    let xA = player.x-player.radius;
    let yA = player.y-player.radius;

    if ((xA+2*player.radius>=pillar.x && xA<=pillar.x+pillar.breadth)) {
        if (yA<=pillar.top || yA+2*player.radius>=pillar.top+pillar.gap) {
            cancelAnimationFrame(animationId);
        } 
    }

}
 
animate(); 