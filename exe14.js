(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Model = require('./exe14/model/Model'),
    Controller = require('./exe14/controller/Controller'),
    View = require('./exe14/view/View'),
    app;

    

app = new Controller(new Model(),new View());
app.start();


},{"./exe14/controller/Controller":2,"./exe14/model/Model":4,"./exe14/view/View":8}],2:[function(require,module,exports){
class Controller {
    constructor(model, view) {
        this.model = model,
        this.view = view;

        this.view.bindCreateShape(this.handleCreateShappe);
        this.view.bindDeleteShape(this.handleDelete);
        this.view.bindScaleShape(this.handleScale);
        this.view.bindTranslateShape(this.handleTranlate);
        this.view.bindRotateShape(this.handleRotate);
        this.view.bindKeyDown(this.handleKeydown);
        this.view.bindMouseDown(this.handleMouseDown);
    }
    handleCreateShappe = (shape, canvas) =>{
        this.model.createShape(shape,canvas);
    }
    handleDelete = () =>{
        this.model.deleteObj();
    }
    handleScale = () =>{
        this.model.currentObj.scale();
    }
    handleRotate = ()=>{
        this.model.currentObj.rotate+=45;
    }
    handleTranlate = (translateValue,canvas) =>{
        this.model.currentObj.translate(translateValue,canvas);
    }
    handleKeydown = (event) =>{
        this.model.keyDown(event,this.view.canvas);
    }
    handleMouseDown = (mousePosition)=>{
        this.model.rectCollision(mousePosition);
    }
    start =()=>{
        this.view.clear();
        this.view.drawShapes(this.model.getArreShapes());
        requestAnimationFrame(this.start);
    } 
}
module.exports = Controller;
},{}],3:[function(require,module,exports){
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
},{"./Shape":6}],4:[function(require,module,exports){
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
},{"./Circle":3,"./Rectangle":5,"./Triangle":7}],5:[function(require,module,exports){
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
},{"./Shape":6}],6:[function(require,module,exports){
class Shape {
    constructor(x , y , width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    detectWalls = (canvas) =>{
        // Left wall
        if (this.x  < 0) {
            this.x += 5;
        }
        
        // Right Wall
        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
        
        // Top wall
        if (this.y < 0) {
            this.y = 0;
        }
        
        // Bottom Wall
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
        }
    }
}
module.exports = Shape; 
},{}],7:[function(require,module,exports){
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
},{"./Shape":6}],8:[function(require,module,exports){
class View{
    constructor(){
        this.canvas = document.getElementById('tutorial');
        this.ctx = this.canvas.getContext('2d');

        this.shapeMakerForm = document.getElementById('shapeMaker');
        this.valueSelect = document.querySelector('#shapes');
        this.translate = document.querySelector('#translateVal');
        this.buttonScale = document.querySelector('#scale');
        this.buttonTranslate = document.querySelector('#translate');
        this.buttonRotate = document.querySelector('#rotate');
        this.buttonDelete = document.querySelector('#delete');
    }
    getShape = () =>{
        return this.valueSelect.value;
    }
    clear = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    getMousePos =(evt) => {
        let pos = this.canvas.getBoundingClientRect(); // abs. size of element  
        return {
            x: (evt.clientX - pos.left),   // scale mouse coordinates after they have
            y: (evt.clientY - pos.top)     // been adjusted to be relative to element
        };
    }

    drawShapes = ({arreCircles,arreTriangles,arreRectangles}) =>{
        arreCircles.forEach((circle)=>{
            circle.draw(this.ctx);
        });
    
        arreTriangles.forEach((triangle) => {
            triangle.draw(this.ctx);
        });
    
        arreRectangles.forEach((rectangle)=>{
            rectangle.draw(this.ctx);
        });
    }
    bindCreateShape = (handler) =>{
        this.shapeMakerForm.addEventListener('click', e =>{
            e.preventDefault();
            let shape = this.getShape(),
                canvas = this.canvas;
            handler(shape,canvas);
        });
    }
    bindDeleteShape = (handler) =>{
        this.buttonDelete.addEventListener('click',e => {
            handler();
        });
    }
    bindScaleShape = (handler)=>{
        this.buttonScale.addEventListener('click',e => {
            handler();
        });
    }
    bindTranslateShape = (handler) => {
        this.buttonTranslate.addEventListener('click',e => {
            let value = this.translate.value;
            handler(value,this.canvas);
        });
    }
    bindRotateShape = (handler) => {
        this.buttonRotate.addEventListener('click',e => {
            handler();
        });
    }
    bindKeyDown = (handler)=>{
        document.addEventListener('keydown', e => handler(e));
    }
    bindMouseDown = (handler)=>{
        this.canvas.addEventListener('mousedown', event =>{
            let mousePosition = this.getMousePos(event);
            handler(mousePosition);
        });
    }
}
module.exports = View;
},{}]},{},[1]);
