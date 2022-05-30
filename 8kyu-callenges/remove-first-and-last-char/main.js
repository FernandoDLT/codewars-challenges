// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeFirstAndLastChar(str){
//     return str.slice(1,-1)
// }
const removeFirstAndLastChar = str => str.slice(1,-1)

console.log(removeFirstAndLastChar('Carl'))
console.log(removeFirstAndLastChar('Pedro'))
console.log(removeFirstAndLastChar('Jaguar'))
console.log(removeFirstAndLastChar('Santa Maria'))