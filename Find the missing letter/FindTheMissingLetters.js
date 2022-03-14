function FindPlaceInAlphabet(array) {
    var string = array.join("");
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
        return String.fromCharCode(string.charCodeAt(i) + 1);
      }
    }
  }

let array1 = ["a","b","c","d","f"];
let array2 = ["O","Q","R","S"];

FindPlaceInAlphabet(array1);

FindPlaceInAlphabet(array2);
