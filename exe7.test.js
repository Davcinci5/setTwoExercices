let findMaxArea = require('./exe7');

test('get largest rentangle of area 0',()=>{
    let matrix = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(0);
});

test('get largest rentangle of area 8',()=>{
    let matrix = [
        [1,0,0,1,1,1],
        [1,0,1,1,0,1],
        [0,1,1,1,1,1],
        [0,0,1,1,1,1]
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(8);
});

test('get largest rentangle of area 12',()=>{
    let matrix = [
        [1,0,0,1,1,1],
        [1,0,1,1,1,1],
        [0,1,1,1,1,1],
        [0,0,1,1,1,1]
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(12);
});

test('get largest rentangle of area 1',()=>{
    let matrix = [
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [0,1,0,1,0,1]
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(1);
});

test('get largest rentangle of area 22',()=>{
    let matrix = [
        [0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0],
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(22);
});

test('get largest rentangle of area 39',()=>{
    let matrix = [
        [0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0],
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(39);
});

test('get largest rentangle of area 39',()=>{
    let matrix = [
        [0,0,0,1,1,1,0,0,0,1,1,1,1,1],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0],
    ];
    let data = findMaxArea(matrix);
    expect(data).toBe(49);
});