class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right =null;
    }
}

class Tree 
{ 
    constructor() 
    { 
        
        this.root = null; 
    }
    infix(root = this.root) 
    { 
        let chain = "";
        let recursion = (node) =>{
            if(node !== null) 
            { 
                recursion(node.left); 
                chain+=node.value;
                recursion(node.right);
            } 
        };
        recursion(root);
        return chain;

    }  
    prefix(root = this.root) 
    { 
        let chain = "";
        let recursion = (node) =>{
            if(node !== null) 
            { 
                chain+=node.value;
                recursion(node.left); 
                recursion(node.right); 
            } 
        };
        recursion(root);
        return chain;
    }
    postfix(root = this.root) 
    {
        let chain = "";
        let recursion = (node) =>{
            if(node !== null) 
            { 
                recursion(node.left); 
                recursion(node.right); 
                chain+=node.value; 
            } 
        };
        recursion(root);
        return chain; 
    } 
} 

let findIndex = (str,starIndex) =>{
    let counter_ocurrences = 0;
    for(let i=starIndex;i<str.length;i++){
        if(str[i]==='(') counter_ocurrences++;
        if(str[i]===')'){
            if(--counter_ocurrences === 0) return i;
        }
    }
    return -1;
};



function createTree(str){
    if(str.length === 0) return null;
    let node = new Node(str[1]);
    let indexFirstNode = str[3] === ',' ? 2 : findIndex(str,3);
    if(indexFirstNode !== -1){ 
        let indexSecondNode = indexFirstNode + 2;
        node.left = createTree(str.substring(3,indexFirstNode+1));
        node.right = createTree(str.substring(indexSecondNode,str.length-1));
    }
    return node;
}

function printTree(tree, order = 'infix') {
    let _tree = new Tree();
    _tree.root = createTree(tree);
    switch(order){
    case 'prefix':
        return _tree.prefix();
    case 'postfix':
        return _tree.postfix();
    default:
        return _tree.infix();
    }
}
 
module.exports = printTree;
