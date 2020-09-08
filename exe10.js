class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkekList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.last = null;
    }
    add(value){
        if(this.head ===null){ this.head = new Node(value); this.last = this.head;}
        else{
            this.last.next = new Node(value);
            this.last = this.last.next;
        }
        this.length++;
    }
}

let list1 = new LinkekList();
[1,2,2,1].forEach(v=>list1.add(v));


function isPalindrome(list){
    let stack = [];
    while(list !== null){
        stack.push(list.value);
        list =list.next;
    }
    while()

}
console.log(isPalindrome(list1));