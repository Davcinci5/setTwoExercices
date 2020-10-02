let Triangle =require('./Triangle');
let Circle =require('./Circle');
let Rectangle =require('./Rectangle');

class Model{
    constructor(){
        this.arreCircles = [];
        this.arreTriangles = [];
        this.arreRectangles = [];
        this.spaceAvailable = [];
        this.spaceBetweenShapes = 30;
        this.nextPosition = {x:25,y:25};
        this.create  = true;
        this.currentObj = {};
    }
    getArreShapes = () =>{
        return {
            arreCircles:this.arreCircles,
            arreRectangles:this.arreRectangles,
            arreTriangles: this.arreTriangles
        };
    }
    deleteObj= ()=>{
    
        this.spaceAvailable.push({
            x:this.currentObj.x,
            y:this.currentObj.y
        });
        if(!this.create) this.create = true;
        
        let deleteFrom =(currentObj,arreObjs) =>{
            return arreObjs.filter( obj => obj!== currentObj);
        };
    
        switch(this.currentObj.constructor.name){
        case 'Circle':
            this.arreCircles = deleteFrom(this.currentObj,this.arreCircles);
            break;
        case 'Triangle':
            this.arreTriangles = deleteFrom(this.currentObj,this.arreTriangles);
            break;
        case 'Rectangle':
            this.arreRectangles = deleteFrom(this.currentObj,this.arreRectangles);
            break;
        }
    }

    createShape = (shape,canvas) =>{
        if(this.create){
            let newShape;
            let{x,y} = this.spaceAvailable.length > 0 ? this.spaceAvailable.pop() : this.nextPosition;
            switch(shape){
            case 'circle':
                newShape = new Circle(x,y);
                this.arreCircles.push(newShape);
                break;
            case 'triangle':
                newShape = new Triangle(x,y);
                this.arreTriangles.push(newShape);
                break;
            case 'rectangle':
                newShape = new Rectangle(x,y);
                this.arreRectangles.push(newShape);
                break;
            }

            if(this.nextPosition.x === x && this.nextPosition.y === y){
                this.nextPosition.x +=newShape.width + this.spaceBetweenShapes;
                if(this.nextPosition.x + newShape.width > canvas.width){
                    this.nextPosition.x = 25;
                    this.nextPosition.y += newShape.height + this.spaceBetweenShapes;
                    if(this.nextPosition.y + newShape.height > canvas.height)this.create = false;
                } 
            }else{
                if(!this.create && this.spaceAvailable.length === 0) this.create = false;
            }
        }
    }
    rectCollision = ({x,y}) => {
        this.arreCircles.forEach( circle =>{
            if(circle.pointInCir(x,y)){
                this.currentObj.color = null;
                this.currentObj = circle;
                this.currentObj.color = "#000";
            }
        });
    
        this.arreTriangles.forEach(triangle => {
            if(triangle.pointInTriangle(x,y)){
                this.currentObj.color = null;
                this.currentObj = triangle;
                this.currentObj.color = "#000";
            }
        });
    
        this.arreRectangles.forEach(rectangle => {
            if(rectangle.pointInRect(x,y)){
                this.currentObj.color = null;
                this.currentObj = rectangle;
                this.currentObj.color = "#000";
            }
        });
    }
    keyDown = (e,canvas) => {
        if (e.key === 'ArrowRight' || e.key === 'Right') {
            this.currentObj.translate('right',canvas);
        } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
            this.currentObj.translate('left',canvas);
        } else if (e.key === 'ArrowUp' || e.key === 'Up') {
            this.currentObj.translate('up',canvas);
        } else if (e.key === 'ArrowDown' || e.key === 'Down') {
            this.currentObj.translate('down',canvas);
        }else if (e.key === 'r' ||e.key === 'R' ) {
            this.currentObj.rotate+=45;
        }else if (e.key === 'd' ||e.key === 'D' ) {
            this.deleteObj();
        }else if (e.key === 's' ||e.key === 'S' ) {
            this.currentObj.scale();
        }
    }
    mouseDown = (mousePosition) =>{
        this.rectCollision(mousePosition);
    }

    
}

module.exports = Model;