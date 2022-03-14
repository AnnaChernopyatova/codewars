function DigitalRoot(num){
    let result = 0;
    if (num < 10){
        result = num;
        return(result);
    }
    result = AddingNumbers(num);
    

    for(let i=0; ; i++){
        if(result>10){
            result = AddingNumbers(result);
        } else break;
    }

    return(result);
}

function AddingNumbers(num){

    let result = 0;
    let string = num.toString();
    
    for(let i =0; i< string.length; i++){
        result += parseInt(string[i], 10);
    }
    return result;
}

let num1 = 16;
let num2 = 942;
let num3 = 132189;
let num4 = 493193;


DigitalRoot(num1);
DigitalRoot(num2);
DigitalRoot(num3);
DigitalRoot(num4);
