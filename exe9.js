

function findStartLoopNode(root){
    let actualNode = root;
    while(actualNode!==null && !actualNode.visited){
        actualNode.visited = true;
        actualNode = actualNode.next;
    }
    return actualNode;
}



module.exports = findStartLoopNode;

