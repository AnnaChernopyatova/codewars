function ProductFib(prod, fibs){
    if(fibs === undefined) fibs = [0,1];
    let check = checkProd(fibs, prod);

    if(check === 'match'){
        return [fibs[fibs.length - 2], fibs[fibs.length - 1], true];
    } else if (check === 'over'){
        return [fibs[fibs.length - 2], fibs[fibs.length - 1], false];
    } else{
        fibs = addFib(fibs);
        return ProductFib(prod, fibs);
    }
}

function checkProd(fibs, prod){
    let fib1 = fibs[fibs.length - 2];
    let fib2 = fibs[fibs.length - 1];
    let trueProd = fib1 * fib2;

    if(trueProd === prod){
        return 'match';
    } else if (trueProd > prod){
        return 'over';
    }
    return 'less';
}

function addFib(fibs){
    let num1 = fibs[fibs.length -2];
    let num2 = fibs[fibs.length -1];

    fibs.push(num1+num2);
    return fibs;
}

console.log( ProductFib(4895));
console.log( ProductFib(5895));
console.log( ProductFib(74049690));
console.log( ProductFib(84049690));
console.log( ProductFib(193864606));
console.log( ProductFib(447577));
console.log( ProductFib(602070));