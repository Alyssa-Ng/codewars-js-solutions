//https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(num1, num2) {
  let result = [];
  let numbers = [num1, num2].sort((a,b) => a - b).map(e => e.toString());
  numbers = numbers.map(e => e.padStart(numbers[1].length, '0'));
  for(let i = 0; i < numbers[1].length; i++) result.push(Number(numbers[0][i]) + Number(numbers[1][i]));
  return Number(result.join(''));
}
