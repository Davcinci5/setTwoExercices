class Stack{
    constructor(){
        this.stack = [];
    }
    add(element){
        this.stack.push(element);
    }
    peekFirst(){
        return this.stack.length === 0 ? null:this.stack[this.stack.length-1];
    }
    getElement(){
        return this.stack.pop();
    }
    isEmpty(){
        return this.stack.length === 0;
    }
}
    

function getAreaFromHistogram(array){
    let stack = new Stack(), maxArea = 0, currentArea, i;
    let getArea = ()=>{
        let top = stack.getElement();
        currentArea = stack.isEmpty() ? (array[top] * i) : (array[top] * (i - stack.peekFirst() - 1)); 
        if(currentArea > maxArea){
            maxArea = currentArea;
        }
    }; 
    for (i = 0; i < array.length;) {
        if(stack.isEmpty() || array[stack.peekFirst()] <= array[i]){
            stack.add(i++);
        }else{
            getArea();
        }
    }
    while(!stack.isEmpty()){
        getArea();
    }
    return maxArea;
}



function findMaxArea(array){
    let histogram = [],maxArea = 0,currentArea;
    for (let column = 0; column < array.length; column++) {
        for (let row = 0; row < array[column].length; row++) {
            let value = array[column][row];
            if(column === 0){
                histogram.push(value);
            }else{
                histogram[row] = value === 0 ? 0 : (histogram[row] + 1); 
            }
        }
        currentArea = getAreaFromHistogram(histogram);
        if(currentArea>maxArea) maxArea = currentArea;
    }
    return maxArea;
}
module.exports = findMaxArea;
