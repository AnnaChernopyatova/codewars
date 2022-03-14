function DeepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e)?DeepCount(e):0),a.length);
}

console.log(DeepCount([]));
console.log(DeepCount([1, 2, 3]));
console.log(DeepCount(["x", "y", ["z"]]));
console.log(DeepCount([1, 2, [3, 4, [5]]]));
console.log(DeepCount([[[[[[[[[]]]]]]]]]));
