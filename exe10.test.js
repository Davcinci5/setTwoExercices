let isPalindrome = require('./exe10');
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
        if(this.head ===null){
            this.head = new Node(value);
            this.last = this.head;}
        else{
            this.last.next = new Node(value);
            this.last = this.last.next;
        }
        this.length++;
    }
}



test('input an empty list, result false',()=>{
    let list1 = new LinkekList();
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(false);
});

test('input a list with only one value, result true',()=>{
    let list1 = new LinkekList();
    [1].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(true);
});
test('input a list with two numeric values, result true',()=>{
    let list1 = new LinkekList();
    [1,1].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(true);
});
test('input a list with two different numeric values, result false',()=>{
    let list1 = new LinkekList();
    [1,2].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(false);
});

test('input a list of 9 number values, result true, is palindrome',()=>{
    let list1 = new LinkekList();
    [1,2,3,4,5,4,3,2,1].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(true);
});

test('input a list of 8 number values, result false, is not  palindrome',()=>{
    let list1 = new LinkekList();
    [1,2,3,4,5,3,2,1].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(false);
});

test('input a list of 6 char values, result true, is  palindrome',()=>{
    let list1 = new LinkekList();
    ['a','b','c','c','b','a'].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(true);
});

test('input a list of 10 char values, result fakse, is not palindrome',()=>{
    let list1 = new LinkekList();
    ['a','b','c','d','e','e','d','c','c','a'].forEach(v=>list1.add(v));
    let palindrome = isPalindrome(list1);
    expect(palindrome).toBe(false);
});