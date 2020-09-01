function traverseSymetricTree(node){
    let recursive = (left,right)=>{
        if(left === null && right === null)return true;
        if(left?.value === undefined || right?.value === undefined|| left.value !== right.value) return false;
        return recursive(left.left,right.right) && recursive(left.right,right.left);
    };
    return recursive(node.left,node.right);
}


//console.log(traverseSymetricTree(tree));
module.exports = traverseSymetricTree;
