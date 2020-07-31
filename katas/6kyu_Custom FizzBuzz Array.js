//https://www.codewars.com/kata/5355a811a93a501adf000ab7

let fizzBuzzCustom = function(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = '3', numTwo = '5') {
let fizzBuzz = [];
  for (let i = 1; i < 101; i ++){
   fizzBuzz.push(i % numOne === 0 && i % numTwo === 0 ? stringOne + stringTwo :i % numOne === 0 ? stringOne : i % numTwo === 0 ? stringTwo : i);
  }
  return fizzBuzz;
}
