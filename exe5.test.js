let traverseSymetricTree = require('./exe5');

class Node{
    constructor(value){
        this.value = value,
        this.left = null,
        this.right =null;
    }
}

test("print a tree with just one node",()=>{
    let tree = new Node(1);
    let result = traverseSymetricTree(tree);
    expect(result).toBe(true);
});

test("print a tree with three nodes and equal value",()=>{
    let tree = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(2);
    let result = traverseSymetricTree(tree);
    expect(result).toBe(true);
});

test("print a tree with three nodes and different value",()=>{
    let tree = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(3);
    let result = traverseSymetricTree(tree);
    expect(result).toBe(false);
});

test("print a tree with three nodes and equal value",()=>{
    let tree = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(2);
    let result = traverseSymetricTree(tree);
    expect(result).toBe(true);
});

test("print a tree with four nodes and equal value, but not symetric",()=>{
    let tree = new Node(1);

    tree.left = new Node(2);
    tree.right = new Node(2);

    tree.left.left = new Node(3);
    let result = traverseSymetricTree(tree);
    expect(result).toBe(false);
});

test("print a tree with four nodes and equal value,symetric",()=>{
    let tree = new Node(1);

    tree.left = new Node(2);
    tree.right = new Node(2);

    tree.left.left = new Node(3);
    tree.right.right =  new Node(3);
    let result = traverseSymetricTree(tree);
    expect(result).toBe(true);
});



test("tree with 4 levels, symmetric and equal value",()=>{
    let tree = new Node(1);

    tree.left = new Node(2);
    tree.right = new Node(2);

    tree.left.left = new Node(3);
    tree.right.right =  new Node(3);

    tree.left.right = new Node(4);
    tree.right.left =  new Node(4);

    tree.left.left.left = new Node(5);
    tree.right.right.right =  new Node(5);

    tree.left.left.right = new Node(6);
    tree.right.right.left =  new Node(6);

    tree.left.left.right = new Node(6);
    tree.right.right.left =  new Node(6);

    tree.left.right.right = new Node(7);
    tree.right.left.left = new Node(7);


    let result = traverseSymetricTree(tree);
    expect(result).toBe(true);
});

test("tree with 4 levels, symmetric but different value",()=>{
    let tree = new Node(1);

    tree.left = new Node(2);
    tree.right = new Node(2);

    tree.left.left = new Node(3);
    tree.right.right =  new Node(3);

    tree.left.right = new Node(4);
    tree.right.left =  new Node(4);

    tree.left.left.left = new Node(5);
    tree.right.right.right =  new Node(5);

    tree.left.left.right = new Node(6);
    tree.right.right.left =  new Node(6);

    tree.left.left.right = new Node(7);
    tree.right.right.left =  new Node(7);

    tree.left.right.right = new Node(9);
    tree.right.left.left = new Node(8);


    let result = traverseSymetricTree(tree);
    expect(result).toBe(false);
});