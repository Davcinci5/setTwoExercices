let findStartLoopNode = require('./exe9');

class Node{
    constructor(value){
        this.value = value,
        this.next = null,
    }
}
test('find Node with value 3',()=>{
    let linked = new Node(1),
        node2= new Node(2),
        node3= new Node(2),
        node4= new Node(4),
        node5= new Node(3),
        node6= new Node(6),
        node7= new Node(7),
        node8= new Node(2),
        node9= new Node(1);

    linked.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;
    node9.next = node4;

    let startLoopNode = findStartLoopNode(linked);
    expect(startLoopNode).toEqual(node4);
});

test('return null, there is not loop link, the last element points out null',()=>{
    let linked = new Node(1),
        node2= new Node(2),
        node3= new Node(2),
        node4= new Node(4),
        node5= new Node(3),
        node6= new Node(6),
        node7= new Node(7),
        node8= new Node(2),
        node9= new Node(1);

    linked.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    node7.next = node8;
    node8.next = node9;

    let startLoopNode = findStartLoopNode(linked);
    expect(startLoopNode).toEqual(null);
});

test('list with just one element, pointed to itself',()=>{
    let linked = new Node(1);
    linked.next = linked;

    let startLoopNode = findStartLoopNode(linked);
    expect(startLoopNode).toEqual(linked);
});

test('list with just one element, pointed out to null',()=>{
    let linked = new Node(1);

    let startLoopNode = findStartLoopNode(linked);
    expect(startLoopNode).toEqual(null);
});