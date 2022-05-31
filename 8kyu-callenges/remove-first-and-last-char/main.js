// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

<<<<<<< HEAD
// function removeFirstAndLastChar(str){
//     return str.slice(1,-1)
// }

const removeFirstAndLastChar = str => str.slice(1,-1)

console.log(removeFirstAndLastChar('Carl'))
console.log(removeFirstAndLastChar('Pedro'))
console.log(removeFirstAndLastChar('Jaguar'))
console.log(removeFirstAndLastChar('Santa Maria'))
=======
function removeFirstAndLastChar(str){
    return str.slice(1,-1)
}
console.log(removeFirstAndLastChar('Carl')) // Remnoves 'C' and 'l'
console.log(removeFirstAndLastChar('Pedro')) // Removes 'P' and 'o'
console.log(removeFirstAndLastChar('Jaguar')) // Removes 'J' and 'r'
console.log(removeFirstAndLastChar('Santa Maria')) //Removes 'S' and 'a'
>>>>>>> 8cf491e5dca184aa5f75943af94efde408508173
