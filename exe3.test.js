const printTree = require('./exe3');
test("print '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))' in infix ",()=>{
    const input = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let data = printTree(input);
    expect(data).toBe('DBEAHFICGJ');
});

test("print '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))' in prefix ",()=>{
    const input = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let data = printTree(input,'prefix');
    expect(data).toBe('ABDECFHIGJ');
});

test("print '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))' in postfix ",()=>{
    const input = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
    let data = printTree(input,'postfix');
    expect(data).toBe('DEBHIFJGCA');
});

test("print '(AAA,(2,(4),(5)),(3))' in infix ",()=>{
    const input = '(AAA,(2,(4),(5)),(3))';
    let data = printTree(input);
    expect(data).toBe('425AAA3');
});

test("print '(1,(2,(4),(5)),(3))' in prefix ",()=>{
    const input = '(1,(2,(4),(5)),(3))';
    let data = printTree(input,'prefix');
    expect(data).toBe('12453');
});

test("print '(1,(2,(4),(5)),(3))' in postfix ",()=>{
    const input = '(1,(2,(4),(5)),(3))';
    let data = printTree(input,'postfix');
    expect(data).toBe('45231');
});

test("print '(AAA,(2,(BB),(5)),(CCC))' in infix ",()=>{
    const input = '(AAA,(2,(BB),(5)),(CCC))';
    let data = printTree(input);
    expect(data).toBe('BB25AAACCC');
});

test("print '(AAA,(2,(BB),(5)),(CCC))' in prefix ",()=>{
    const input = '(AAA,(2,(BB),(5)),(CCC))';
    let data = printTree(input,'prefix');
    expect(data).toBe('AAA2BB5CCC');
});

test("print '(AAA,(2,(BB),(5)),(CCC))' in postfix ",()=>{
    const input = '(AAA,(2,(BB),(5)),(CCC))';
    let data = printTree(input,'postfix');
    expect(data).toBe('BB52CCCAAA');
});

test("throw error invalid chain '(,,)())' missing a  '( and value'",()=>{
    const input = '(,,)())';
    try{printTree(input);}catch({message:e}){
        expect(e).toBe("verify expected '(' or a value ");
    } 
});

test("throw error invalid chain '((,,)())' expecting a value",()=>{
    const input = '(,,)())';
    try{printTree(input);}catch({message:e}){
        expect(e).toBe("verify expected '(' or a value ");
    } 
});

test("throw error invalid chain '(A((B))())' expecting a ,",()=>{
    const input = '(A((B))())';
    try{printTree(input);}catch({message:e}){
        expect(e).toBe("verify expected '(' or a value ");
    } 
});
test("throw error invalid chain '(A((B),)())' expecting a value",()=>{
    const input = '(A(B,(5))())';
    try{printTree(input);}catch({message:e}){
        expect(e).toBe("verify expected '(' or a value ");
    } 
});

test("throw error invalid chain '(A,(B,(3),),(5))' expecting a value",()=>{
    const input = '(A,(B,(3),),(5))';
    let data = printTree(input);
    expect(data).toBe("3BA5");
});

