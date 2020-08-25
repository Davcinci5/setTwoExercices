function largestMatrix(arr) {
    if(arr.length < 0 || arr.length > 500) return new Error('verify array size');
    let arrayCopy = [],
        max = 0;
    for(let column = 0;column < arr.length;column++){
        arrayCopy.push([]);
        for(let row = 0; row < arr[column].length; row++){
            if(column === 0 || row === 0){
                arrayCopy[column][row] = arr[column][row];
            }else{
                if(arr[column][row] === 1){
                    let min = Math.min(arrayCopy[column-1][row],arrayCopy[column][row-1],arrayCopy[column-1][row-1])+1;
                    arrayCopy[column][row] = min;
                    if(arrayCopy[column][row] > max) max = arrayCopy[column][row];
                }else{
                    arrayCopy[column].push(0);
                }
            }
        }
    }
    return max;
}