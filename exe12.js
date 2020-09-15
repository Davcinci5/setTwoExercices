(function(global){
    let root = document.getElementById('results');

    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass!== undefined && (el.style.color = pass? 'green' : 'red');
        return el;
    };
    let assert = (pass, message) => { return root.appendChild(result(message,pass));};
    const test = (description, testBlock) =>{
        const parent = root;
        root = assert(undefined, description)
            .appendChild(document.createElement('ul')); 
        const wrapperLocalVariables = (root,cb) => {
            let assert = (pass, message) => { return root.appendChild(result(message,pass));};
            cb = cb.toString();
            cb = cb.slice(cb.indexOf("{") + 1, cb.lastIndexOf("}"));
            return () =>{
                eval(cb);
            };
        };
        let wrapper = wrapperLocalVariables(root,testBlock);
        wrapper();
        root = parent;
    };
    global.assert = assert;
    global.test = test;
})(window);



// let assert1 = (bool,text) =>{
//     console.log(bool);
// };

// function one() {
//     assert1(true, "Inside TestBlock B");
//     setTimeout(assert1, 500, true, "test delayed B");
// };

// function two(string_cb){
//     let assert1 = (bool,text) =>{
//         console.log(text);
//     };
//     return ()=>{
//         var body = string_cb.slice(string_cb.indexOf("{") + 1, string_cb.lastIndexOf("}"));
//         console.log(body);
//         eval(body);
//     };
// }

// let three = two(one.toString());
// three();