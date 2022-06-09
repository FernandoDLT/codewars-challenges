//  C.A.R. Cause / Action / Result

// E.U. ?

// PREP

// 1 to num, 3 fizz, 5 buzz, 3 & 5 fizzBuzz
// P: Perameters   num, whole, +
// R: Return - console.log 
// E: Examples
// P: Pseudo Code

// function fizzBuzz(num) {
//     // loop
//     //conditionals %3, %5, % 3 & 5 
// }
// fizzBuzz(5) // 1,2,fizz,4,buzz
// fizzBuzz(3) // 1,2,fizz
// fizzBuzz(15) //1,2,fizz,4,buzz,7,8,fizz,buzz,1,fizz,13,14,fizzBuzz

// The Bank 32 questions, learn and answer the questions. Anki this
// hit and know it well for the job

// function fizzBuzz(num){
//     if(i)
// }
// console.log(fizzBuzz(5))

function* fizzBuzz(n) {
    let i = 0;
    while (i++ < n) {
      yield (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i;
    }
  }
  
  [...fizzBuzz(15)].forEach(v => console.log(v));
  [...fizzBuzz(3)].forEach(v => console.log(v));
  [...fizzBuzz(5)].forEach(v => console.log(v));
