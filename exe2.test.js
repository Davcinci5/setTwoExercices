const {flattenArray_iterative,flattenArray_recursive} = require('./exe2');

test("flatten array iterative 0 nested array ",()=>{
    const input = [1,2,3,4,5,6,7,8,9,10];
    let data = flattenArray_iterative(input);
    expect(data).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test(' flatten array recursive 0 nested array',()=>{
    const input = [1,2,3,4,5,6,7,8,9,10];
    let data = flattenArray_recursive(input);
    expect(data).toEqual([1,2,3,4,5,6,7,8,9,10]);
});
test(' flatten array iterative 4 nested array ',()=>{
    const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
    let data = flattenArray_iterative(input);
    expect(data).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test(' flatten array recursive 4 nested array',()=>{
    const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
    let data = flattenArray_recursive(input);
    expect(data).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test(' flatten array recursive 5 nested array',()=>{
    const input = [1,2,3,[4,5,[6,[[7,[8],9],10]],11],[12,13]];
    let data = flattenArray_recursive(input);
    expect(data).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13]);
});

test(' flatten array recursive 5 nested array',()=>{
    const input = [1,2,3,[4,5,[6,[[7,[8],9],10]],11],[12,13]];
    let data = flattenArray_iterative(input);
    expect(data).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13]);
});