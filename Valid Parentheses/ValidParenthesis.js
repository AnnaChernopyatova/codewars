function ValidationParenthesis(string){
    let stringArray = string.split('');
    if(stringArray.length % 2 !== 0){
        return false;
    }

    let count = 0;

    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] === '(') count++;
        if(stringArray[i] === ')') count--;
        if(count < 0) return false;
    }

    return count === 0;
}


console.log(ValidationParenthesis("()"));
console.log(ValidationParenthesis(")(()))"));
console.log(ValidationParenthesis("("));
console.log(ValidationParenthesis("(())((()())())"));