function isPalindrome(list){
    if(list.head === null) return false;
    let stack = [],
        node =list.head;
    while(node !== null){
        stack.push(node.value);
        node =node.next;
    }
    let length = stack.length, half = length%2 !== 1 ? Math.ceil(length/2) : Math.floor(length/2), counter = 1;
    list = list.head;
    while(counter<=half){
        if(stack.pop()!==list.value) return false; 
        list =list.next;
        counter++;
    }
    return true;
}
module.exports = isPalindrome;
