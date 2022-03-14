function PigLatin (phrase){
    let arrayPhrase = phrase.split(' ');
    let reg = /[.?,!:;]/

    for(let i = 0; i < arrayPhrase.length; i++){
        let word = arrayPhrase[i];
        if(word.search(reg) === -1){
            let newWord = word.slice(1) + word[0] + 'ay';
            arrayPhrase[i] = newWord;
        }
    }

    phrase = arrayPhrase.join(' ');

    console.log(phrase);
}


PigLatin('Pig latin is cool');
PigLatin('Hello world !');