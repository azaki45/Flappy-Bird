class Pillar{

    constructor({x,y,top}){
        this.x = x; // x coordinate of the pillar
        this.y = y; // starting y coordinate of the pillar = 0;
        this.top = top; // ending of the first piece of the pillar
        this.breadth = 50;
        this.gap = 120;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y, this.breadth,this.top);
        ctx.beginPath();
        ctx.fillRect(this.x,this.top+this.gap, this.breadth,800); //lower half below the gap.
    }

    update(){
        if(this.x>=0) // scrolling animation for the pillar
            this.x-=3;

        if(this.x<=0) // resetting the pillar and randomising its gap position.
        {
            this.x = canvas.width;
            this.top = Math.floor(Math.random()*650);
        }

        
        this.draw();
    }
}