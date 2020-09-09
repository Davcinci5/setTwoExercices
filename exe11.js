// //Implement shorthand deep object assignment 
// function set(obj, path, value){}
// set(obj, 'path.to.deeply.nested.property', 42);
// // Create any property that does not exist
// //Throw an error if any path property exists but is not an object, function, or array

function isValidInput(value){
    if(typeof(value) === "function" ||Array.isArray(value)|| typeof(value) === "object"){
        return true;
    }
    return false;
}

function set(obj,path,value){
    let array =  path.split(".");
    for (let i = 0; i < array.length; i++) {
        let property = array[i];
        if(isValidInput(obj[property])){
            obj=obj[property];
        }else if(obj[property] === undefined){
            obj[property] = value;
            return obj;
        }else{
            throw Error('error');
        }
    }
}


module.exports = set;


