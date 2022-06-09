// Problem:
// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// My Thought Process:
// 1 I am given a number and expecting a number back
// 2 as I want the highest number I should sort the number in a descending way (Name of function here, then parse)
// 3 can only call the sort if I convert the number into an array. But first, I will have to convert the number to a string and only then can I split it.
// 4 from the given examples its reversed so call the reverse method
// 5 and then I want to join it back to a number
// function descendingOrder(n){
//   return (n.toString().split('').sort().reverse().join(''))
// }
// console.log(descendingOrder(9918547))
// console.log(descendingOrder(123456789))
// console.log(descendingOrder(1021))
// console.log(descendingOrder(3354))
// console.log(descendingOrder(9918547))

// function descendingInt(n){
//   return (n.toString().split('').sort().reverse().join(''))
// }
// console.log(descendingInt(1212121))
// console.log(descendingInt(121))
// console.log(descendingInt(15))
// console.log(descendingInt(1021))
// console.log(descendingInt(123456789))
// console.log(descendingInt(3354))

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// function addBinary(a,b){
//   return Number(a + b).toString(2)
// }

// console.log(addBinary(1,2))
// console.log(addBinary(51,12))
// console.log(addBinary(100,0))
// console.log(addBinary(100,200))

// function addBinary(a,b){
//   return (a + b).toString(2)
// }
// console.log(addBinary(1,2) ) //Should be 11
// console.log(addBinary(51,12) ) //Should be 111111
// console.log(addBinary(100,0) ) //Should be 1100100
// console.log(addBinary(100,200))

// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

                // SOLUTION:

// function highThenLow(numbers){
//   const arr = numbers.split(" ").map(Number)
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
// }
// console.log(highThenLow("1 2 3 -4 5"))

// function highAndLow(numbers){
//   const arr = numbers.split(" ").map(Number)
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
// }
// console.log(highAndLow("1 2 3 -4 5"))
// console.log(highAndLow("1 -100 2 -3 4 5"))
    //  OTHER SOLUTION:

// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
// console.log(highAndLow("1 2 3 -4 5"))
// console.log(highAndLow("1 2 -3 4 5"))

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a,x) {
    // return check(a,x)
    return a.includes(x)
        // OR 
    // return a.includes(x) ? true : false;
}
console.log(check('1'))


let numbers = [1, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result)

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// function doubleTheeArr(x){
//   return x.map(n => n * 2)
// }
function doubleTheeArr(x){
  return x.map(n => n * 2)
}

function maps(x){
    return x.map(n => n * 2)
}
console.log(doubleTheeArr([1,2,3]))
console.log(maps([1,2,3]))

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     let vowelsCount = 0;
    
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

//   function getCount(input) {
//     var vowelsCount = 0;
//     var inputLetters = input.split("");
    
//     const vowels = ["a","e","i","o","u"];
    
//     vowels.forEach(function(vowel) {
//       inputLetters.forEach(function(inpLetter) {
//         if (inpLetter === vowel) {
//           vowelsCount++;
//         }
//       });
//     });
    
//     return vowelsCount;
// }
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
function getCount(input) {
  var vowelsCount = 0;
  var inputLetters = input.split("");
  
  const vowels = ["a","e","i","o","u"];
  
  vowels.forEach(function(vowel) {
    inputLetters.forEach(function(inpLetter) {
      if (inpLetter === vowel) {
        vowelsCount++;
      }
    });
  });
  return vowelsCount;
}

console.log(getCount('jesus fernando de la torre ruelas'))
console.log(getCount('luis eduardo de la torre ruelas'))
  
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  var total = 0;
  for(i = 0; i < arr.length;i++){
    if(arr[i] > 0){
      total += arr[i]
//    total = total = arr[i] 
    }
  }
  return total
}
console.log(positiveSum([111,11,23,-11,-100,2,1]))
                // OTHER SOLUTION 
// function positiveSum(arr) {
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }
// console.log(positiveSum([1,-4,7,12]))
// console.log(positiveSum([-5,-10,-3,-20,80]))
// console.log(positiveSum([82,18,50,-52,54,-41,46,30,90,-98,-93,-7,-43,78,-28,74,72,-55,26,10,45,-27,64,62,-16,-21,51,98,53,-12,13,29,23,-27,18,-82,-78,34,83,22,-55,-50,-14,0,-88,-66,-22,61,-41,-44,30,-53,30,-4,-22,-60,-30,-32,30,64,26,66]))

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
  
}

                  // OTHER SOLUTION 

// const binaryArrayToNumber = arr => parseInt(arr.join(''),2);

console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 0]))
console.log(binaryArrayToNumber([0, 1, 0, 1]))
console.log(binaryArrayToNumber([1, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 0]))
console.log(binaryArrayToNumber([0, 1, 1, 0]))
console.log(binaryArrayToNumber([1, 0, 1, 1]))
console.log(binaryArrayToNumber([1, 1, 1, 1]))
// console.log(binaryArrayToNumber([1, 1, 1, 0]))

// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(str){
//   var newStr = "";
//   for(var i=0;i<str.length;i++){
//     if(Number(str[i])>=5){
//       newStr += "1"
//     }
//     else{
//       newStr += "0";
//     }
//   }
//   return newStr;
// }
// console.log(fakeBin([3,5,6]))
// console.log(fakeBin([3,5,6,9,1,2,3,4]))


// function fakeBin(str){
//   var newStr = "";
//   for(var i=0;i<str.length;i++){
//     if(Number(str[i])>=5){
//       newStr += "1"
//     }
//     else{
//       newStr += "0";
//     }
//   }
//   return newStr;
// }
// console.log(fakeBin([1,2,3,4,5,8,9,7,1,3,7,4,8,5,]))

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - 
// from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function centuryFromYear(year) {
//   let centuryCount = 0;
//   while (year > 0){
//     year = year - 100;
//     centuryCount = centuryCount + 1;
//   }
//   return centuryCount;
// }

// console.log(centuryFromYear([1900]))

// function century(year) {
//   return Math.ceil(year/100);
// }
// console.log(centuryFromYear([1901]))

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//   return number % 2 ? "Odd" : "Even"
// }

// function even_or_odd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }

// function even_or_odd(number) {
//   if (number%2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).
// For example;

// // [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

//  SOLUTION USING LOOP:

// function countSheeps(arrayOfSheep) {
//   let counter = 0
//   for(let i = 0; i < arrayOfSheep.length; i++) {
//       if(arrayOfSheep[i]) counter += 1
//   }
//   return counter
// }

// function countSheeps(arrayOfSheep) {
//   let counter = 0
//   arrayOfSheep.forEach(sheep => {
//       if(sheep) counter++
//   })
//   return counter
// }

// SOLUTION 2:
// Let's solve it with Filter.

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(item => item === true).length
// }
// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(Boolean).length
// }
// console.log(countSheeps([true, true,  true, false, true, true, true, true , true, false, true, false, true,
//                         false, false,true, true, true, true, true, false, false, true, true]))

// Solution 3
// Let's solve it with reduce().

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
// }
// console.log(countSheeps([true, true,  true, false, true, true, true, true , true, false, true, false, true,
//   false, false,true, true, true, true, true, false, false, true, true]))
//   console.log(countSheeps([true, true,  true, false, true, true, true, false, true, true, ]))

  // Task:
  // Your task is to write a function which returns the sum of following series upto nth term(parameter).
  // Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
  // Rules:
  // You need to round the answer to 2 decimal places and return it as String.
  // If the given value is 0 then it should return 0.00
  // You will only be given Natural Numbers as arguments.
  
  // Examples:(Input --> Output)
  // 1 --> 1 --> "1.00"
  // 2 --> 1 + 1/4 --> "1.25"
  // 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

  // function SeriesSum(n) {
  //   let result = 0;
  //   let reverage = 1;
  //   for (let i = 0; i < n; i += 1) {
  //     if (i === 0) {
  //       result = 1;
  //     } else {
  //       reverage += 3;
  //       result = result + (1 / reverage);
  //     }
  //   }
  //   return result.toFixed(2);
  // }
  // console.log(SeriesSum([1]))
  // console.log(SeriesSum([1 + 1/4])) 
  // console.log(SeriesSum([1 + 1/4 + 1/7 + 1/10 + 1/13]))

  
// Math = An object that provides basic 
//        mathematics functionality and constants.

//var myNum;

//myNum = Math.round(3.5);
//myNum = Math.floor(3.9);
//myNum = Math.ceil(3.1);
//myNum = Math.pow(3, 3);
//myNum = Math.sqrt(64);
//myNum = Math.abs(-1);
//myNum = Math.min(1, 5, 2, 4, 3);
//myNum = Math.max(1, 5, 2, 4, 3);
//myNum = Math.PI;
//myNum = Math.E;

//console.log(myNum);


// ***********REDUCE***********
// EXAMPLES: Using (acc)accumulator and (c) current count

// const totalMass = character.reduce((acc,c) => acc + c.mass, 0);
// console.log(totalMass)

// const totalHeight = character.reduce((acc,c) => acc + c, 0);
// console.log(totalHeight)

// const characterByEyeColor = character.reduce((acc,c) => {
//   if(acc[c.eye_color]){
//     acc[c.eye_color] = acc[c.eye_color] + 1
//   }else {
//     acc[c.eye_color] = 1;
//   }
//   }, {})



      // Math = Is an object that provides basic mathamatics functionality and constants.

// var myNum;
// // myNum = Math.round(3.5)
// // myNum = Math.floor(3.9)
// // myNum = Math.ceil(2.3)
// // myNum = Math.pow(3,3)
// // myNum = Math.sqrt(64)
// // myNum = Math.abs(-14)
// // myNum = Math.min(1,5,2,4,3)
// // console.log(myNum)
// // myNum = Math.max(1,5,2,4,3)
// console.log(myNum)

// //  CONSTANTS:

// // myNum = Math.PI;
// myNum = Math.E;

// console.log(myNum)


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name){
//   const newArray = name.split(" ")
//   return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
// }
// function abbrevName(name){
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

// console.log(abbrevName('fernando suarez'))

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
// console.log(lovefunc(2,2))
// console.log(lovefunc(2,1))