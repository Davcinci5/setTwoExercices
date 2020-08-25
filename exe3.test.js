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