//Implement the flatten function that will produce the expected output. 
//Create solutions with an imperative and a functional style approach



 //imperative approach
 function flatten_imperative(oldObject, parentName, newObject = {}){
   for (const key in oldObject) {
       if (typeof(oldObject[key]) !== "object" || Array.isArray(oldObject[key])) {
           const value = oldObject[key];
           newObject[`${parentName}_${key}`] = value;
       }else{
        flatten_imperative(oldObject[key],`${parentName}_${key}`,newObject);
       }
    } 
    return newObject;
 }

//declarative approach
function flatten_declarative(oldObject, parentName){
    const CombineAndCreateObject =  (objToCombine,key,value) => {
        let newObj = {...objToCombine};
        newObj[key] = value;
        return newObj;
    };
    const isObject = prop => typeof(prop) === "object" ? !Array.isArray(prop) : false;

    const reduce = (old,prefix,newObj) => {
        return Object.entries(old).reduce((obj,[key,value])=>{
            let property = `${prefix}_${key}`,newObject;
            if (!isObject(value)){
                newObject = CombineAndCreateObject(obj,property,value);
              }else{
                   return reduce(value,property,obj);
               }
               return newObject;
          } ,newObj)
       
 };

 return reduce(oldObject,parentName,{})
}


//console.log("salio ",flatten_declarative(oldObj, "oldObj"));
module.exports = {flatten_imperative,flatten_declarative}
 

