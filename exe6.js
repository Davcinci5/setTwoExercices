function isSameLevel(tree,number1,number2){
    let recursive = (arrayNodes) =>{
        if(arrayNodes.length === 0) return false;
        let nextNodes = [], found1 = false,found2 = false;
        for (let i = 0; i < arrayNodes.length; i++) {
            const element = arrayNodes[i];
            if(element.value === number1  && !found1){
                found1 = true;
            }else if(element.value === number2){
                found2 = true;
            }
            if(found1 && found2){
                return true;
            }
            if(element.descendents.length > 0) nextNodes.push(...element.descendents);
        }
        return recursive(nextNodes);   
    };
    let isFound = recursive(tree.descendents);
    return isFound;
}

module.exports = isSameLevel;
//console.log(isSameLevel(tree,9,4));


    
 
    
