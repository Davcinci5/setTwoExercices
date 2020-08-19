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
    const addToObject =  (obj,key,value) => {obj[key] = value; return obj};
    
    const isObject = prop => typeof(prop) === "object" ? !Array.isArray(prop) : false;

    const reduce = (old,prefix,howToCombine,buildingUp) => {
       for (const key in old) {
           let value = old[key], name = `${prefix}_${key}`;
          if (!isObject(value)){
              buildingUp = howToCombine(buildingUp,name,value);
          }else{
               reduce(value,name,howToCombine,buildingUp);
           }
       }
       return buildingUp; 
 };

 return reduce(oldObject,parentName,addToObject,{})
}


//console.log(flatten_declarative(oldObj, "oldObj"));
module.exports = {flatten_imperative,flatten_declarative}
 

