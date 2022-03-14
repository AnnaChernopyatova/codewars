function SumOfPairs(ints, s){
    let seen = {}
    for (let i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
        seen[ints[i]] = true
    }
}


console.log(SumOfPairs([1, 4, 8, 7, 3, 15], 8));
console.log(SumOfPairs([1, -2, 3, 0, -6, 1], -6));
console.log(SumOfPairs([20, -13, 40], -7));
console.log(SumOfPairs([1, 2, 3, 4, 1, 0], 2));
console.log(SumOfPairs([10, 5, 2, 3, 7, 5], 10));
console.log(SumOfPairs([4, -2, 3, 3, 4], 8));
console.log(SumOfPairs([0, 2, 0], 0));
console.log(SumOfPairs([5, 9, 13, -3], 10));
