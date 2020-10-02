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
        //this.view.bindMouseDown(this.handleMouseDown);
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