function flattenArray_recursive(input){
   const isArray = (element)=>Array.isArray(element);
   const combineAndCreateArray = (arrayToCombine,element) => [...arrayToCombine,element];

   const myReduce = (oldArray,newArray) => oldArray.reduce((array,actualElement)=>{
                        return isArray(actualElement)? myReduce(actualElement,array) :
                                           combineAndCreateArray(array,actualElement);
                        } ,newArray);

    return myReduce(input,[]);
}

function flattenArray_iterative(input,newArray = []){
    let i = 0,
    actual_array = input;
    previous_index = [];
    previous_arrays = [];
    while(i<actual_array.length || previous_arrays.length!==0){ 
        let element =  actual_array[i];
        if(!Array.isArray(element)){
            if(element!==undefined ) newArray.push(element);
            if(i>actual_array.length-1){
                i = previous_index.pop();
                actual_array = previous_arrays.pop();
            }
            i++;
        }else{
            previous_arrays.push(actual_array)
            previous_index.push(i);
            actual_array = element;
            i = 0;
        }
    }
    return newArray;
}



module.exports = {flattenArray_iterative,flattenArray_recursive}
