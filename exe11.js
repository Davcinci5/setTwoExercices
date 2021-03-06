// //Implement shorthand deep object assignment 
// function set(obj, path, value){}
// set(obj, 'path.to.deeply.nested.property', 42);
// // Create any property that does not exist
// //Throw an error if any path property exists but is not an object, function, or array

function isValidInput(value){
    if(typeof(value) === "function" ||Array.isArray(value)|| typeof(value) === "object" &&  value!==null){
        return true;
    }
    return false;
}

function set(obj,path,value){
    let array =  path.split(".");
    for (let i = 0; i < array.length; i++) {
        let property = array[i];
        if(!isValidInput(obj[property])){
            if(obj[property] !== undefined) throw Error('error');
            obj[property] = i === array.length-1? value : {};
        }
        obj=obj[property];
    }
    return;
}

module.exports = set;

function buildPath(acc, key) {
    if (acc[key] === undefined) return acc[key] = {};
    if (acc[key] === null ||
    !(acc[key] instanceof Object) ||
    Object.isFrozen(acc[key]) ||
    Object.isSealed(acc[key])
    ) throw new Error("Illegal property assignment");
    return acc[key];
}
/**
    *
    * @param {Object} obj
    * @param {string} path
    * @param {*} value
    */
function set(obj, path, value) {
    const props = path.split('.');
    const last = props.pop();
    obj = props.reduce(buildPath, obj);
    obj[last] = value;
}
