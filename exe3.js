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
    let counter_openParentheses = 0;
    for(let i=starIndex;i<str.length;i++){
        if(str[i]==='(') counter_openParentheses++;
        if(str[i]===')'){
            if(--counter_openParentheses === 0) return i;
        }
    }
    return -1;
};
let regularExp = /[a-zA-Z0-9]/;
let getCharacteres = (str) => {
    let counter_ocurrences = 0, i = 1;
    while(regularExp.test(str[i])&&i<str.length){
        counter_ocurrences++;
        i++;
    }
    if(str[0]!=='(' || !regularExp.test(str.substr(1,counter_ocurrences)) || findIndex(str,0)===-1 || str[i]!==',' && str[i]!==')') throw new Error(`verify expected '(' or a value `);
    return counter_ocurrences;
};



function createTree(str){
    if(str.length === 0) return null;
    let characteres = getCharacteres(str),
        node = new Node(str.substr(1,characteres)),
        nextParenthesesIndex = characteres+2,
        indexLastParentheses = str[nextParenthesesIndex] === ','? (characteres+1) : findIndex(str,nextParenthesesIndex);
    if(indexLastParentheses !== -1){ 
        let indexSecondNode = indexLastParentheses + 2;
        node.left = createTree(str.substring(nextParenthesesIndex,indexLastParentheses+1));
        if(str[indexSecondNode]!==undefined){
            node.right = createTree(str.substring(indexSecondNode,str.length-1));
        }
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



