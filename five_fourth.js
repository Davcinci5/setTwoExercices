class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.visited = false;
    }
}

function findNodeAtBeggining(root){
    if(!root.visited){
        root.visited = true;
        return findNodeAtBeggining(root.next);
    }else{
        return root;
    }
}

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

console.log(findNodeAtBeggining(linked));