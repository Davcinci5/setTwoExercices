function isSameLevel(tree,number1,number2){
    let message = `The numbers ${number1} and ${number2} are not found in the same level anywhere`;
    let recursive = (arrayNodes) =>{
        if(arrayNodes.length === 0) return;
        let nextNodes = [], found1 = false,found2 = false;
        for (let i = 0; i < arrayNodes.length; i++) {
            const element = arrayNodes[i];
            if(element.value === number1  && !found1){
                found1 = true;
            }else if(element.value === number2){
                found2 = true;
            }

            if(found1 && found2){
                message = `The numbers ${number1} and ${number2} can be found in the same depth level`;
                return;
            }

            if(element.descendents.length > 0) nextNodes.push(...element.descendents);
        }
        recursive(nextNodes);   
    };
    recursive(tree.descendents);
    return message;
}

module.exports = isSameLevel;
//console.log(isSameLevel(tree,9,4));


    
 
    
