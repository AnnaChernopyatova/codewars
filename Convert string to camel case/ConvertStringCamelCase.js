function StringToCamelCase(string){
    let array = string.split(/[-_]/);

    for(let i = 1; i< array.length; i++){
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
    }
    let completeString = array.join('');

    return(completeString);
}

let string1 = "the-stealth-warrior";
let string2 = "The_Stealth_Warrior";

StringToCamelCase(string1);
StringToCamelCase(string2);
