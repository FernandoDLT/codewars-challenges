// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr){
    var total = 0;
    for(i = 0; i < arr.length;i++){
      if(arr[i] > 0){
        total += arr[i]
      }
    }
    return total
  }
  console.log(positiveSum([1,4,-7,12])) // Result should be 17
  
// Shorhand Solution;

  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
 function positiveSum(arr){
    var total = 0;
    for(i = 0; i < arr.length;i++){
      if(arr[i] > 0){
        total += arr[i];
      }
    }
    return total
  }
 console.log(positiveSum([1,-4,7,12])) // Result should be 20

  
