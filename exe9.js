function findStartLoopNode(root){
    let turtle = root, hore = root, steps = 0, limit = 2;
    while(hore!==null){
        hore=hore.next; 
        steps++;
        if(hore === turtle)break;
        if(steps === limit){
            steps = 0;
            limit = limit*2;
            turtle = hore;
        }
    }
    if(hore === null) return null;
    turtle = root;
    while(turtle !== hore){
        turtle=turtle.next;
        hore = hore.next;
    }
    return hore;
}


module.exports = findStartLoopNode;

