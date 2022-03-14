function checkDuplication(word){
    let chars=[...word.toLowerCase()];
    let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
    let duplicateSet = new Set(duplicateList); 
    let uniqueDuplicateList = [...duplicateSet];
    let resultString = "";
    for (let i=0, n=chars.length; i < n; ++i ) {
      if(uniqueDuplicateList.includes(chars[i])) {
        resultString += ")";
      } else {
        resultString += "(";
      }
    }
    return resultString;
}

let string1 = "din";
let string2 = "recede";
let string3 = "Success";
let string4 = "(( @";

checkDuplication(string1);
checkDuplication(string2);
checkDuplication(string3);
checkDuplication(string4);
