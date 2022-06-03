// CONVERT A STRINT TO A NUMBER

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
// Description:

// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Example:
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

         //******** BEST PRACTICE*********

var stringToNumber = function(str){
    // return parseInt(str);
 return Number(str);   // Using Number
}
console.log(stringToNumber('1111111111111111122'))
console.log(stringToNumber('605'))
console.log(stringToNumber('1405'))
console.log(stringToNumber('-7'))



// A - using parseInt()
myString = '129'
console.log(parseInt('1234'))
console.log(parseInt('605'))
console.log(parseInt('1405'))
console.log(parseInt('-7'))

// B using parseInt()
a = 12.22
console.log(parseInt(a)) //Expected result: 12

// Using Number()

console.log(Number('10'))
console.log(Number('12.5'))
console.log(Number('10.33'))

// Using Math.floor()

str = '1222'
console.log(Math.floor(str)) // Returns 1222
a = 12.22
console.log(Math.floor(a)) // Expected result: 12

// Using var

