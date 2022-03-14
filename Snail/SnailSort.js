function SnailSort(matrix) {
    let mCopy = JSON.parse(JSON.stringify(matrix));
    let ret = [];
    let i = 0;
  
    do {
      if (i === 0) {
        ret.push.apply(ret, mCopy.shift());
      } else if (i === 1) {
        ret.push.apply(ret, mCopy.map(item => item.pop()));
      } else if (i === 2) {
        ret.push.apply(ret, mCopy.pop().reverse());
      } else if (i === 3) {
        ret.push.apply(ret, mCopy.map(item => item.shift()).reverse());
      }
      i++;
      i = i % 4;
    } while (mCopy.length > 0);
  
    return ret;
  };


  let array =[[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]];

  console.log(SnailSort(array));