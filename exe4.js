function querySelectorAll(input){//"div.note < input.is-complete[checked]"
    let elements = input.split(" < ");
    if(elements.length > 3) return [];
    let list = [];
    let parents = document.querySelectorAll(elements[0]);
    for (let i = 0; i < parents.length; i++) {
        const element = parents[i];
        if(element.querySelector(elements[1]) !== null) list.push(element);
    }
    return list;
}
//console.log(querySelectorAll("div.select < div.inner"));
module.exports = querySelectorAll;

