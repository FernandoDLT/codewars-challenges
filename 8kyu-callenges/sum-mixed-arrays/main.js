// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.
// Must use Reduce to get sum
function sumMix(x){
    return x.reduce((x, y) => Number(x) + Number(y), 0);
  }
   console.log(sumMix([9, 3, '7', '3']))
   console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
   console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
   console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
   console.log(sumMix(['3', 6, 136, 0, '5',28, 5, '6', 12,'0']))
   console.log(sumMix(['3', 6, 6, 0, '5', 8, -50, '16', 12,'3']))

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }
  console.log(sumMix([9, 3, '7', '3']))
  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
  console.log(sumMix(['3', 6, 136, 0, '5',28, 5, '6', 12,'0']))
  console.log(sumMix(['3', 6, 6, 0, '5', 8, -50, '16', 12,'3']))

