
window.addEventListener('keypress' ,(event)=>{
    player1.up();
})

window.addEventListener('click', (event)=>{
    player2.up();
})

window.addEventListener('resize', (event)=>{
    canvas.width=500;
    canvas.height=800;
})