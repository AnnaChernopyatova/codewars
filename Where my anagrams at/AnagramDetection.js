function AnagramDetection(word, array){

    let wordArray = word.split('');
    wordArray.sort();
    let wordSorted = wordArray.join('');

    let finalArray = [];

    for(let i = 0; i<array.length; i++){
        let arrayWord = array[i].split('');
        arrayWord.sort();
        if(wordSorted === arrayWord.join('')){
            finalArray.push(array[i])
        }
    }

    return(finalArray);


}


    AnagramDetection('abba', ['aabb', 'abcd', 'bbaa', 'dada']) //=> ['aabb', 'bbaa']

    AnagramDetection('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])// => ['carer', 'racer']

    AnagramDetection('laser', ['lazing', 'lazy',  'lacer'])// => []