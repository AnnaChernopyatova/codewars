function MergeArrays(arrayOne, arrayTwo){
    let arrayThree =[];

        for(let i = 0; ; i++){

            if(i !== arrayOne.length && i !== arrayTwo.length){
            arrayThree.push(arrayOne[i]);
            arrayThree.push(arrayTwo[i]);
            } else if (i === arrayOne.length){
                arrayTwo.splice(0, i+1);
                arrayThree = arrayThree.concat(arrayTwo);
                break;
            } else if (i === arrayTwo.length){
                arrayOne.splice(0, i+1);
                arrayThree = arrayThree.concat(arrayOne);
                break;
            }
        }

        console.log(arrayThree);

}


MergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]);// becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

MergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']);