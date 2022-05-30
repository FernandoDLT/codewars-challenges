// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeFirstAndLastChar(str){
    return str.slice(1,-1)
}
console.log(removeFirstAndLastChar('Carl')) // Remnoves 'C' and 'l'
console.log(removeFirstAndLastChar('Pedro')) // Removes 'P' and 'o'
console.log(removeFirstAndLastChar('Jaguar')) // Removes 'J' and 'r'
console.log(removeFirstAndLastChar('Santa Maria')) //Removes 'S' amnd 'a'
