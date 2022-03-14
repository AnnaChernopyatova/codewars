function FindDifference(stringOne,stringTwo){
    let count1 = Array(26).fill(0);
    let count2 = Array(26).fill(0); 
    
    let i = 0;
    while (i < stringOne.length || i < stringTwo.length){
        if(i < stringOne.length) count1[stringOne[i].charCodeAt()-97] += 1;
        if(i < stringTwo.length) count2[stringTwo[i].charCodeAt()-97] += 1;
        i += 1
        }
    let result = 0
    for (let i = 0; i<26;i++){
        result += Math.abs(count1[i] - count2[i]) 
    }
    return result 
}


console.log(FindDifference("",""));
console.log(FindDifference("a",""));
console.log(FindDifference("", "a"));
console.log(FindDifference("ab","a"));
console.log(FindDifference("ab","cd"));
console.log(FindDifference("aab","a"));
console.log(FindDifference("a","aab"));
console.log(FindDifference("codewars","hackerrank"));