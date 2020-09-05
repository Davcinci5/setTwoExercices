

function findStartLoopNode(root){
    if(root?.visited !==undefined && !root.visited){
        root.visited = true;
        return findStartLoopNode(root.next);
    }else{
        return root;
    }
}



module.exports = findStartLoopNode;