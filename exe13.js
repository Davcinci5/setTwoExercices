

    

function getParents(input){
    let elements = input.split(" < ");
    if(elements.length > 3) return [];
    let list = [];
    let parents = document.querySelectorAll(elements[0]);
    for (let i = 0; i < parents.length; i++) {
        const element = parents[i];
        let l2 = element.querySelector(elements[1]).parentNode;
        if(element ===l2) list.push(element);
    }
    return list;
}


function createClickEvent(button){
    let div = document.createElement('div'),
        boolIncrease = true, counterI = 0,
        div2 = document.createElement('div');
    div.innerHTML ='<div class="triangle-top"></div><div class="triangle-top"></div><div class="triangle-top"></div>';
    div.className ="father";
    
    div2.className = "triangle-top";
    button.addEventListener('click', e =>{
        let divsTriangle = boolIncrease ? document.querySelectorAll(".father > .triangle-top") : getParents(".father < .triangle-top");
        for (const node of divsTriangle) {
            let parentDiv = node.parentNode;
            let currentDiv = boolIncrease ? div.cloneNode(true) : div2.cloneNode(true);
            parentDiv.replaceChild(currentDiv, node);
        }
        if(boolIncrease){
            if(counterI++ >=7) boolIncrease = false;
        }else{
            if(counterI-- <= 1) boolIncrease = true;
        }
    });
}
// let button = document.getElementById('event');
// createClickEvent(button);
module.exports =createClickEvent;