function isPalindrome(list){
    if(list.head === null) return false;
    let hare = list.head,
        turtle = list.head,
        stack = [];
    while(hare && hare.next){
        hare = hare.next.next;
        stack.push(turtle.value);
        turtle = turtle.next;
    }
    while(turtle){
        let value = stack.pop();
        if(value !== turtle.value) {
            if(value !==turtle.next?.value) return false;
        }
        turtle = turtle.next;
    }
    return true;

}

module.exports = isPalindrome;
