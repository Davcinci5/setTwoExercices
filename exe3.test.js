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

test("print '(1,(2,(4),(5)),(3))' in infix ",()=>{
    const input = '(1,(2,(4),(5)),(3))';
    let data = printTree(input);
    expect(data).toBe('42513');
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