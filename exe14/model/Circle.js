let Shape = require('./Shape');

class Circle extends Shape{
    constructor(x, y, radius = 20){
        super(x,y,radius*2,radius*2);
        this.radius = radius;

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
        ctx.beginPath();
        ctx.arc(this.x, this.y + this.radius, this.radius, 0, Math.PI * 2 ); // Outer circle
        ctx.fillStyle = this.color;
        this.color == null ? ctx.stroke() : ctx.fill();
        ctx.closePath();
    }
    pointInCir = (x,y) => {
        if(x < (this.x + this.radius) && x >= (this.x - this.radius) && y >= this.y && y < this.y + (this.radius*2) ){
            return true;
        }
        return false;
    }
    scale = () =>{
        this.scaleHandler() === true ? this.radius+=5 : this.radius-=5;
    }
    translate = (option,canvas) =>{
        switch(option){
        case 'up':
            this.y-=5;break;
        case 'down':
            this.y+=5;break;
        case 'left':
            this.x-=5;break;
        case 'right':
            this.x+=5;break;
        }
        this.detectWalls(canvas);
    }
    
}
module.exports = Circle;