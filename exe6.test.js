let isSameLevel = require('./exe6');

class Node{
    constructor(value){
        this.value = value,
        this.descendents = [];
    }
}

/*// Visual Representation
       0 
    / /|\ \
  / /  | \  \
 /  |  |  \  \
1   2  3   5  7
   / |  \    /
  1  5   0   3
    /|\     / \
   3 5 9   3   0
     |        / \
     6       9   4
///*/
let tree = new Node(0),   
    nineLevel4 = new Node(9),
    fourLevel4 = new Node(4),
    zeroLevel3 = new Node(0);

zeroLevel3.descendents.push(...[nineLevel4,fourLevel4]);

let sixLevel4 = new Node(6),
    fiveLevel3 = new Node(5);

fiveLevel3.descendents.push(sixLevel4);

let threeLevel3 = new Node(3),
    nineLevel3 = new Node(9),
    threeSecondLevel3 = new Node(3);

let threeLevel2 = new Node(3);
threeLevel2.descendents.push(...[threeLevel3,zeroLevel3]);

let fiveLevel2 = new Node(5);
fiveLevel2.descendents.push(...[threeSecondLevel3,fiveLevel3,nineLevel3]);

let oneLevel2 = new Node(1),
    ceroLevel2 = new Node(0);

let twoLevel1 = new Node(2);
twoLevel1.descendents.push(...[oneLevel2,fiveLevel2]);

let threeLevel1 = new Node(3);
threeLevel1.descendents.push(ceroLevel2);

let sevenLevel1 = new Node(7);
sevenLevel1.descendents.push(...[threeLevel2]);

let oneLevel1 = new Node(1),
    fiveLevel1 = new Node(5);

tree.descendents.push(...[oneLevel1,twoLevel1,threeLevel1,fiveLevel1,sevenLevel1]);

test('fails in find the numbers 1,1 at the same level',()=>{
    let data = isSameLevel(tree,1,1);
    expect(data).toBe('The numbers 1 and 1 are not found in the same level anywhere');
});

test('success in find the numbers 3,3 at the same deep level',()=>{
    let data = isSameLevel(tree,3,3);
    expect(data).toBe('The numbers 3 and 3 can be found in the same depth level');
});

test('fails in find the numbers 2,0 at the same level',()=>{
    let data = isSameLevel(tree,2,0);
    expect(data).toBe('The numbers 2 and 0 are not found in the same level anywhere');
});

test('success in find the numbers 9,6 at the same deep level',()=>{
    let data = isSameLevel(tree,9,6);
    expect(data).toBe('The numbers 9 and 6 can be found in the same depth level');
});

test('fails in find the numbers 12,13 both are not in the tree',()=>{
    let data = isSameLevel(tree,12,13);
    expect(data).toBe('The numbers 12 and 13 are not found in the same level anywhere');
});

test('fails in find the numbers 20,0 since 20 is not in the tree but 0 is in it',()=>{
    let data = isSameLevel(tree,20,0);
    expect(data).toBe('The numbers 20 and 0 are not found in the same level anywhere');
});

test('success in find the numbers 1,7 both at the same deep level',()=>{
    let data = isSameLevel(tree,1,7);
    expect(data).toBe('The numbers 1 and 7 can be found in the same depth level');
});