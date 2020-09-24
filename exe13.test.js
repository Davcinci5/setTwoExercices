require('@testing-library/jest-dom/extend-expect');
const createClickEvent = require('./exe13');
let clickEvent = require('./exe13');

test("verifying the number of triangles in the sierpinsky fractal",()=>{
    document.body.innerHTML = `
    <button id="event">Fractilize</button>
    <br><br>
        <div class="father" style="font-size: 150px; max-height:660px;" >
            <div class="triangle-top"></div>
        </div> 
    `;

    let button = document.getElementById('event'),elements;
    clickEvent(button);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(3);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(9);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(27);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(81);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(243);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(729);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(2187);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(6561);
    button.click();
    elements =  document.querySelectorAll('.triangle-top');
    expect(elements.length).toBe(2187);

});