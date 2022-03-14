function AddingBigNumbers (a, b) {
    let result = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      result = c % 10 + result
      c = c > 9
    }
    return result;
  }


AddingNumbers("123", "321");// -> "444"
AddingNumbers("11", "99");//   -> "110"
