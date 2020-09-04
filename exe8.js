//Given an array of natural numbers of length N, find the index of that array that balances the left and right sum.
// If no such position exists, return -1.

let findIndex = array =>{
    if(array.length < 1) return -1;
    let left = 0,right = array.length-1,sumLeft = array[left],sumRight = array[right];
    while(left<right){
        if(sumLeft<sumRight){
            sumLeft+=array[++left];
        }else if(sumLeft>sumRight){
            sumRight+=array[--right];
        }else if(left+1 < right-1 ){
            sumLeft+=array[++left];
            sumRight+=array[--right];
        }else{
            if(left+1 === right-1) sumLeft+=array[++left];
            break;
        }
    }
    return sumRight === sumLeft ? left : -1;
};

module.exports = findIndex;
