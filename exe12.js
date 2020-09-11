let globalFunction = (function(global){
    let root = document.getElementById('results');
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass!== undefined && (el.style.color = pass? 'green' : 'red');
        return el;
    };
    const assert = (pass, message,actualRoot) => actualRoot === undefined ? root.appendChild(result(message,pass)) : actualRoot.appendChild(result(message,pass));
    function test(description, testBlock){
        const parent = root;
        root = assert(undefined, description)
            .appendChild(document.createElement('ul'));
        testBlock(root);
        root = parent;
    }
    global.assert = assert;
    global.test = test;
    return{
        assert,test
    };
})(window);

module.exports = globalFunction;

//first approach 
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


