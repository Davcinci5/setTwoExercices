function traverseSymetricTree(node){
    let recursive = (left,right)=>{
        if(left === null && right === null)return true;
        try{
            if(left.value !== right.value) return false;
        }catch(e){
            return false;
        }
        return recursive(left.left,right.right) && recursive(left.right,right.left);
    };
    return recursive(node.left,node.right);
}


module.exports = traverseSymetricTree;
