let findIndex =  require('./exe8');

test("return index six since 30 = 30 ",()=>{
    let array = [1,2,3,4,9,9,2,7,10,13];
    let result = findIndex(array);
    expect(result).toBe(6);
});

test("return index three since 7 = 7 ",()=>{
    let array = [1,2,3,1,3,1,2,1];
    let result = findIndex(array);
    expect(result).toBe(3);
});

test("return index nine since 59 = 59 ",()=>{
    let array = [6,5,5,7,8,2,2,1,10,10,20,20,10,6];
    let result = findIndex(array);
    expect(result).toBe(9);
});

test("return -1 array not balanced ",()=>{
    let array = [6,5,5,7,8,2,2,1,10,10,20,20,10,7];
    let result = findIndex(array);
    expect(result).toBe(-1);
});

test("return -1 array not balanced ",()=>{
    let array = [1,6,5,5,7,8,2,2,1,2,1,2,5,1,10,10,20,20,10,7];
    let result = findIndex(array);
    expect(result).toBe(-1);
});
test("return index one since 56 = 56 ",()=>{
    let array = [6,50,6,5,5,7,8,2,2,1,10,10];
    let result = findIndex(array);
    expect(result).toBe(1);
});

test("return -1 array length five and unbalanced ",()=>{
    let array = [1,2,8,2,1];
    let result = findIndex(array);
    expect(result).toBe(-1);
});
