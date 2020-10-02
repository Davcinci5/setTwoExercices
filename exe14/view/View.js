
const { createCanvas } = require('canvas')
 
class View{
    constructor(){
        this.canvas = createCanvas(600, 600);//document.getElementById('tutorial');
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