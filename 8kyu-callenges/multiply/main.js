
// CODEWARS MAY 17-18

                    // Insructions:     

// create a function that Reverses the string passed in.

// Solution:
function reversesStr(str){
    return str.split('').reverse().join('');
}
console.log(reversesStr('The world is yours, chico.'))
console.log(reversesStr('  .ocihc ,sruoy si dlroW ehT '))


             //  Insructions:
// Create a funtion that answers the question "Are you playing banjo?:"
// If your name starts w/letter "R" of lowercase "r", you are playing banjo!
// The funtion takes in a name as its only arguement and returns one of the following strings:
// name + "play banjo"   or   namer + "does not play banjio"

// Solution:

// function areYouPlayingBanjo(name){
//     if(name[0].toLowerCase() === 'r'){
//         console.log(name + ' is playing banjo!')
//     }else{
//         console.log(name + ' is not playing the banjo!!!')
//     }
// }

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
areYouPlayingBanjo('Fernando')
areYouPlayingBanjo('Carl')
areYouPlayingBanjo('Raymond')
areYouPlayingBanjo('Randy')
areYouPlayingBanjo('Rudy')


//   function findSmallestInt(args) {
//     return Math.min(...args)
// }


            // Instructions
// Given an arry of integers, your solution nshould find the smallest integer.
// Ex: [34,15,83,2] soultion will return 2
// Ex: [34,-345,-1,100] solution will return -345

            // Solution:
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let smallest = args[0];
      
//         args.forEach(num => {
//             if (num < smallest) {
//                 smallest = num;
//             }
//         });
//         return smallest;
//     }
// }
            // Solution #2 using Math():
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//     return Math.min(...args)
//     }
// }

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeFirstAndLastChar(str){
//     return str.slice(1,-1)
// }
// console.log(removeFirstAndLastChar('Camcorder'))

// // Write a function which converts the input string to uppercase.

// function strToUpperCase(str){
//     return str.toUpperCase()
// }
// console.log(strToUpperCase('wedding night'))



                // Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num){
//     return (num *(num+1)) / 2;
// }
// console.log(summation(10))
// console.log(summation(3))

// // Example #2, other way of doing it

// var sumation = function(num){
//     return num *(num+1) / 2
// }
// console.log(sumation(10))
// console.log(sumation(3))

// const rps = (p1,p2) => {
//     if(p1 === p2){
//         console.log('Draw!')
//     }
//     else if(p1 === 'rock' && p2 === 'scissors'){
//         console.log('Player 1 WINS!')
//     }else if(p1 === 'paper' && p2 === 'rock'){
//         console.log('P1 WINS!')
//     }else if(p1 === 'scissors' && p2 === 'paper'){
//         console.log('P1 WINS!!!')
//     }else{
//         console.log('P2 WINS!!!')
//     }
// }
// rps('paper', 'rock') // Player 1 won!
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// const rps = (p1, p2) => {
//     if(p1 === p2) {
//       alert('Draw!');
//     }
//     else if(p1 === 'rock' && p2 === 'scissors'){
//       alert('Player 1 won!')
//     }else if(p1 === 'paper' && p2 === 'rock'){
//       alert('Player 1 won!')
//     }else if(p1 === 'scissors' && p2 === 'paper'){
//       alert('Player 1 won!')
//     }else{
//       alert('Player 2 won!')
//     }
//   }
//   rps('scissors','paper') // Player 1 won!
//   rps('scissors','rock') // Player 2 won!
//   rps('paper','paper') // Draw!

// const rps = (p1, p2) => {
//     if(p1 === 'rock' && p2 === 'scissors') {
//       console.log('Player 1 won!')
//     }else if (p1 === 'paper' && p2 === 'rock') {
//       console.log('Player 1 won!')
//     }else if (p1 === 'scissors' && p2 === 'paper') {
//       console.log('Player 1 won!')
//     }else if(p1 === p2) {
//         console.log ('Draw!')
//     }else {
//       console.log('Player 2 won!')
//     }
// }
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!



            // Fin Maximum and Minimum Values of a list

// Your task is to make two functions (max and min, or maximum and minimum, etc.,
// depending on the language) that receive a list of integers as input and return,
// respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

var min = function(list){
    list.sort((a, b) => (a - b))
    return list[0]
}

var max = function(list){
    list.sort((a, b) => (b - a))
    return list[0]
}
console.log(min([4,6,2,1,9,63,-14,566]))
console.log(max([4,6,2,1,9,63,-134,566]))
console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,166]))


// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}
console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) 

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, 
// otherwise it is a rectangle.

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, 
// otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  let area = l * w;
  let perimeter = (l + w) * 2;
  
  return l === w ? area : perimeter;
}
console.log(areaOrPerimeter(3,1))

// const areaOrPerimeter = (l, w) => l === w ? l * w : (l + w) * 2;

// const areaOrPerimeter = function(l , w) {
//     if(l ==w ){
//     console.log(l*w);
//     }
//     else{
//         console.log(l*2+w*2)
//     }
//   }


    // MAY 19
  
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

                //  Solution

function numberToString(num){
    return num.toString()
}
console.log(numberToString(123))
console.log(numberToString(999))
// Examples:
// 123 --> "123"
// 999 --> "999"



// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

            // SOLUTION 1

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}

             // SOLUTION 2
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}



// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
    return friends.filter(n => n.length === 4);
}

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]