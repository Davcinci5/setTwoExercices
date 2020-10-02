let Shape = require('./Shape');

class Rectangle extends Shape{
    constructor( x , y , width = 50, height = 40){
        super(x,y,width,height);
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

    draw = (ctx) =>{
        ctx.save();
        ctx.beginPath();
        ctx.translate( this.x+this.width/2, this.y+this.height/2 );
        ctx.rotate(this.rotate * Math.PI / 180);
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fillStyle = this.color;
        this.color == null ? ctx.stroke() : ctx.fill();
        ctx.restore();
    }
    pointInRect = (x,y) => {
        if(x < this.x || x > this.x + this.width || y < this.y || y > this.y + this.height){
            return false;
        }
        return true;
    } 

    scale = () => {
        if(this.scaleHandler()){
            this.height+=10;
            this.width+=10;
        }else{
            this.height-=10;
            this.width-=10;
        }
    }

    translate = (option,canvas) => {
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

module.exports = Rectangle;