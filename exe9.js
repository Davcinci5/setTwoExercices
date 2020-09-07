

function findStartLoopNode(root){
    let setMemoization = new Set();
    let actualNode = root;
    while(actualNode!==null){
        if(setMemoization.has(actualNode)) break;
        setMemoization.add(actualNode);
        actualNode = actualNode.next;
    }
    return actualNode;
}



module.exports = findStartLoopNode;

