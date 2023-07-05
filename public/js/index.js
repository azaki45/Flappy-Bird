// setting up the canvas environment
const canvas = document.querySelector('canvas');

canvas.width = 500;
canvas.height = 800;

let ctx = canvas.getContext("2d");


let high = document.querySelector('.highscore');

// Pillar and player object initialization.

let pillar = new Pillar({
    x:1000,
    y:0,
    top:400
});

let player1 = new Player({
    x:100,
    y:100,
    radius:20,
    vely:5,
    color:'red'
});

let player2 = new Player({
    x:100,
    y:200,
    radius:20,
    vely:5,
    color:'blue'
});




let animationId;
// animation call.
const animate = ()=>{
    animationId = requestAnimationFrame(animate);
    ctx.clearRect(0,0,500,800);
    

    let xA = player1.x-player1.radius;
    let yA = player1.y-player1.radius;

    // collision detection and stopping of animation
    if ((xA+2*player1.radius>=pillar.x && xA<=pillar.x+pillar.breadth)) {
        if (yA<=pillar.top || yA+2*player1.radius>=pillar.top+pillar.gap) {
            high.textContent = `Player 2 won`;
            cancelAnimationFrame(animationId);
        } 
    }

    let xB = player2.x-player2.radius;
    let yB = player2.y-player2.radius;

    // collision detection and stopping of animation
    if ((xB+2*player2.radius>=pillar.x && xB<=pillar.x+pillar.breadth)) {
        if (yB<=pillar.top || yB+2*player2.radius>=pillar.top+pillar.gap) {
            high.textContent = `Player 1 won`;
            cancelAnimationFrame(animationId);
        } 
    }

    pillar.update();
    player1.update();
    player2.update();

    document.querySelector('.reset').onclick=()=>{
        score=0;
        pillar.x=canvas.width;
        player1.y = 100;
        player2.y = 200;
        animate();
    }

}


animate(); 