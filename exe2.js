
const isArray = (element)=>Array.isArray(element);
const combineAndCreateArray = (arrayToCombine,element) => [...arrayToCombine,element];

function flattenArray_recursive(input){
    const reduce = (oldArray,newArray) => oldArray.reduce((array,actualElement)=>{
        return isArray(actualElement)? reduce(actualElement,array) :
            combineAndCreateArray(array,actualElement);
    } ,newArray);

    return reduce(input,[]);
}

function flattenArray_iterative(input,newArray = []){
    let i = 0,
        actual_array = input,
        previous_indexandArray = [];

    while(i<actual_array.length || previous_indexandArray.length!==0){ 
        let element =  actual_array[i];
        if(!Array.isArray(element)){
            if(element!==undefined ) newArray.push(element);
            if(i>actual_array.length-1){
                let previous = previous_indexandArray.pop();
                i = previous.index;
                actual_array = previous.array;
            }
            i++;
        }else{
            previous_indexandArray.push({index:i,array:actual_array});
            actual_array = element;
            i = 0;
        }
    }
    return newArray;
}



module.exports = {flattenArray_iterative,flattenArray_recursive};
