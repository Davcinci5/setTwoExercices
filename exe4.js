function querySelectorAll(input){//"div.note < input.is-complete[checked]"
    let elements = input.split(" ");
    if(elements.length > 3) return [];
    return document.querySelectorAll(`${elements[0]} > ${elements[2]}`);
}

module.exports = querySelectorAll;

