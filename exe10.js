function isPalindrome(list){
    if(list.head === null) return false;
    let length = list.length, half = Math.ceil(length/2), stack = [], counter = 1;
    list =list.head;
    while(list !== null){
        if(counter<half){
            stack.push(list.value);
        }else if(counter === half){
            if(length%2 !== 1)stack.push(list.value);
        }else{
            if(stack.pop()!==list.value) return false;
        }
        list =list.next;
        counter++;
    }
    return true;

}
module.exports = isPalindrome;
// console.log(isPalindrome(list1));