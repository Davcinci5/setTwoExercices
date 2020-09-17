(function(global){
    let root = document.getElementById('results');
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass!== undefined && (el.style.color = pass? 'green' : 'red');
        return el;
    };
    let assert = (pass, message) => root.appendChild(result(message,pass));
   
    function test(description, testBlock){
        const parent = root;
        root = assert(undefined, description)
            .appendChild(document.createElement('ul'));

        (function(_root){
            let originalSet =  global.setTimeout,
                assertParent = global.assert;

            function _setTimeout(newCb,time,...args){                
                newCb = newCb.name === 'assert' ? ()=>global.assert(...args) : newCb;
                let customizedCB = () =>{
                    global.assert = (pass, message) => { return _root.appendChild(result(message,pass));};
                    newCb();
                };
                originalSet(customizedCB,time);
            }
            global.setTimeout = _setTimeout;
                            
            global.assert = assertParent;
        })(root);
        testBlock();
        root=parent;
    }
    global.assert = assert;
    global.test = test;
})(window);