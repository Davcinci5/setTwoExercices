
require('@testing-library/jest-dom/extend-expect');


test("test async",done =>{
    document.body.innerHTML = `
    <ul id="results"></ul>  
    `;
    let{assert,test} = require('./exe12');
    let ul = document.getElementById('results');

    assert(true, "Outside and before the test block");
    expect(ul.children.length).toBe(1);
 
    test("TestBlock A", function (actual) {
        let blockA = document.getElementById('results').children[1].children[0].children;
        jest.setTimeout(20000);
        assert(true, "Inside TestBlock A");
        setTimeout(()=>{assert(true,"test delayed A",actual),
        //expects
        expect(blockA.length).toBe(2);
        expect(blockA[0]).toHaveStyle('color: green');
        expect(blockA[1]).toHaveStyle('color: green');
        expect(blockA[1]).toHaveTextContent(/^test delayed A$/);
        done();

        }, 1000);
    });

    assert(true, "Outside and after the TestBlock A");
    expect(ul.children.length).toBe(3);

    test("TestBlock B", function (actual) {
        let blockB = document.getElementById('results').children[3].children[0].children;
        assert(true, "Inside TestBlock B");
        setTimeout(()=>{
            assert(true, "test delayed B",actual),
            //expects
            expect(blockB.length).toBe(2);
            expect(blockB[0]).toHaveStyle('color: green');
            expect(blockB[1]).toHaveStyle('color: green');
            expect(blockB[1]).toHaveTextContent(/^test delayed B$/);
        }, 500);
    });
    expect(ul.children.length).toBe(4);

    assert(true, "Outside and after TestBlock B");
    expect(ul.children.length).toBe(5);

});








// //first approach 
// assert(true, "Outside and before the test block");
 
// test("TestBlock A", function (actual) {
//     assert(true, "Inside TestBlock A");
//     setTimeout(()=>assert(true,"test delayed A",actual), 1000);
// });
// assert(true, "Outside and after the TestBlock A");
// test("TestBlock B", function (actual) {
//     assert(true, "Inside TestBlock B");
//     setTimeout(assert, 500, true, "test delayed B",actual);
// });
// assert(true, "Outside and after TestBlock B");