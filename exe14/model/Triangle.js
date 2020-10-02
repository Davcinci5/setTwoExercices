let Shape = require('./Shape'); 

class Triangle extends Shape{
    constructor(x,y,dx = 20,dy = 40){
        super(x,y,dx*2,dy);
        this.dx = dx,
        this.dy = dy;
        this.rotate = 0;
        this.scaleHandler = (_=>{
            let increase = true,
                counterI = 0;
            return () =>{
                if(increase){
                    if(counterI++ >2) increase = false;
                }else{
                    if(--counterI === 1) increase = true;
                }
                return increase;
            };
        })();
    }
    draw = (ctx) => {
        let w = this.width;
        let h = this.height * (Math.sqrt(3)/2);        
        ctx.save();
        ctx.translate(this.x + (this.width/2), this.y+(this.height/2));
        ctx.rotate(this.rotate*Math.PI/180);
        ctx.beginPath();
        ctx.moveTo(0, -h / 2);
        ctx.lineTo(w / 2, h / 2);
        ctx.lineTo(-w / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.fillStyle = this.color;
        this.color == null ? ctx.stroke() : ctx.fill();
        ctx.closePath();
        ctx.restore();

    }
    pointInTriangle = (x,y) =>{
        if(x < (this.x-this.dx) || x > this.x+(this.dx*2) || y < this.y || y > this.y+this.dy){
            return false;
        }
        return true;
    }
    scale = () =>{
        if(this.scaleHandler()){
            this.width+=5;
            this.height+=5;
        }else{
            this.width-=5;
            this.height-=5;
        }
    }
    translate = (option,canvas) =>{
        switch(option){
        case 'up':
            this.y-=5;
            this.dy-=5;
            break;
        case 'down':
            this.y+=5;
            this.dy+=5;
            break;
        case 'left':
            this.x-=5;
            break;
        case 'right':
            this.x+=5;
            break;
        }
        this.detectWalls(canvas);
    }
}

module.exports = Triangle;