function Permutations(string){
    let wordArray = [];
    if(string.length === 1) return [string];


    for (let i = 0; i < string.length; i++){
        let char = string[i]
 
        if (string.indexOf(char) != i) continue;

        let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

        for (let permutation of Permutations(remainder)){
            wordArray.push(char + permutation)
        }
    }
    return wordArray;

}