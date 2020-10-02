require('@testing-library/jest-dom/extend-expect');
//require('jest-canvas-mock');
let Model = require('./exe14/model/Model');
let View = require('./exe14/view/View');
let Controller = require('./exe14/controller/Controller');

test('verifying App',() =>{
    document.body.innerHTML = `
    <div class="buttons">
    <form action="/">
        <label for="shape">Choose a shape:</label>
        <select name="shape" id="shapes">
          <option selected value="triangle">triangle</option>
          <option value="circle">circle</option>
          <option value="rectangle">rectangle</option>
        </select>
        <input id="shapeMaker"type="submit" value="create">
      </form>
      <button id="scale">Scale </button>
        <button id="rotate"> Rotate </button>
        <button id="delete"> Delete</button>
        <br/>
        <button id="translate"> Translate</button>
        <select name="translate" id="translateVal">
          <option selected value="up">up</option>
          <option value="down">down</option>
          <option value="right">right</option>
          <option value="left">left</option>
        </select>
</div>
    `;

    let model = new Model();
    let view = new View();
    let controller = new Controller(model, view);
    controller.start();

    //Creating Shapes
    //view.valueSelect.value = 'triangle';
    for (let i = 0; i < 15; i++) {
        view.shapeMakerForm.click();
    }
    expect(model.arreTriangles.length).toBe(15);

    view.valueSelect.value = 'circle';
    for (let i = 0; i < 10; i++) {
        view.shapeMakerForm.click();
    }
    expect(model.arreCircles.length).toBe(10);

    view.valueSelect.value = 'rectangle';
    for (let i = 0; i < 10; i++) {
        view.shapeMakerForm.click();
    }
    expect(model.arreRectangles.length).toBe(10);

    let currentWidth , currentHeight, currentPosition;
    for (let i = 0; i < 8; i++) {
        model.currentObj = model.arreTriangles[i];
        //Scale
        currentWidth = model.currentObj.width,
        currentHeight = model.currentObj.height;
        view.buttonScale.click();
        currentWidth+=5;
        currentHeight+=5;
        expect(model.currentObj.width).toBe(currentWidth);
        expect(model.currentObj.height).toBe(currentHeight);

        //ROTE 
        //45 degrees
        view.buttonRotate.click();
        expect(model.currentObj.rotate).toBe(45);
        //90 degrees
        view.buttonRotate.click();
        expect(model.currentObj.rotate).toBe(90);

        //Translate
        currentPosition = {
            x:model.currentObj.x,
            y: model.currentObj.y
        }; 
        //up
        view.translate.value = "up";
        view.buttonTranslate.click();
        expect(model.currentObj.y).toBe(currentPosition.y-=5);

        // //down
        view.translate.value = "down";
        view.buttonTranslate.click();
        expect(model.currentObj.y).toBe(currentPosition.y+=5);
        
        //right
        view.translate.value = "right";
        view.buttonTranslate.click();
        expect(model.currentObj.x).toBe(currentPosition.x+=5);

        //left
        view.translate.value = "left";
        view.buttonTranslate.click();
        expect(model.currentObj.x).toBe(currentPosition.x-=5);
        //Deleting 
        view.buttonDelete.click();
    }
    expect(model.arreTriangles.length).toBe(7);

    for (let i = 0; i < 5; i++) {
        model.currentObj = model.arreRectangles[i];
        //Scale
        currentWidth = model.currentObj.width,
        currentHeight = model.currentObj.height;
        view.buttonScale.click();
        currentWidth+=10;
        currentHeight+=10;
        expect(model.currentObj.width).toBe(currentWidth);
        expect(model.currentObj.height).toBe(currentHeight);

        //ROTE 
        //45 degrees
        view.buttonRotate.click();
        expect(model.currentObj.rotate).toBe(45);
        //90 degrees
        view.buttonRotate.click();
        expect(model.currentObj.rotate).toBe(90);

        //Translate
        currentPosition = {
            x:model.currentObj.x,
            y: model.currentObj.y
        }; 
        //up
        view.translate.value = "up";
        view.buttonTranslate.click();
        expect(model.currentObj.y).toBe(currentPosition.y-=5);

        // //down
        view.translate.value = "down";
        view.buttonTranslate.click();
        expect(model.currentObj.y).toBe(currentPosition.y+=5);
        
        //right
        view.translate.value = "right";
        view.buttonTranslate.click();
        expect(model.currentObj.x).toBe(currentPosition.x+=5);

        //left
        view.translate.value = "left";
        view.buttonTranslate.click();
        expect(model.currentObj.x).toBe(currentPosition.x-=5);
        //Deleting 
        view.buttonDelete.click();
    }
    expect(model.arreRectangles.length).toBe(5);

    let currentRadious;
    for (let i = 0; i < 5; i++) {
        model.currentObj = model.arreCircles[i];
        //Scale
        currentRadious = model.currentObj.radius,
        view.buttonScale.click();
        currentRadious+=5;
        expect(model.currentObj.radius).toBe(currentRadious);


        //Translate
        currentPosition = {
            x:model.currentObj.x,
            y: model.currentObj.y
        }; 
        //up
        view.translate.value = "up";
        view.buttonTranslate.click();
        expect(model.currentObj.y).toBe(currentPosition.y-=5);

        // //down
        view.translate.value = "down";
        view.buttonTranslate.click();
        expect(model.currentObj.y).toBe(currentPosition.y+=5);
        
        //right
        view.translate.value = "right";
        view.buttonTranslate.click();
        expect(model.currentObj.x).toBe(currentPosition.x+=5);

        //left
        view.translate.value = "left";
        view.buttonTranslate.click();
        expect(model.currentObj.x).toBe(currentPosition.x-=5);
        //Deleting 
        view.buttonDelete.click();
    }
    expect(model.arreRectangles.length).toBe(5);



});