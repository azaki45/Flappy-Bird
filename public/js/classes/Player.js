class Player{

    constructor({x,y,radius,vely,color})
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vely = vely;
        this.gravity = 0.8;               ;
        this.lift = -15;
        this.color = color;
    }

    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(){
        // onkeydown = (key) =>{ 
        //     this.vely += this.lift;   
        // }
        this.vely += this.gravity;
        this.vely *= 0.9;
        this.y+=this.vely;

        this.draw();
    }

    up()
    {
        this.vely += this.lift;
    }
}