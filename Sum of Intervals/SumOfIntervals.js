function SumIntervals(intervals) {
    let list = [];
    intervals.forEach(([a, b]) => {
      list.length = Math.max(list.length, b);
      for (let i = a; i < b; i++) {
        list[i] = 1;
      }
    });
    return list.reduce((a, b) => a + b, 0);
  }


var test1 = [[1,5],[1,5]];
var test2 = [[1,4],[7, 10],[3, 5]];
console.log(SumIntervals(test1));
console.log(SumIntervals(test2));
