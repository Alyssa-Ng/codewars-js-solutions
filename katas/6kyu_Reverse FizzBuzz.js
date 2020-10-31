//https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2

function reverseFizzBuzz(s) {
  let sArray = s.split(' ').map(e => isNaN(Number(e)) ? e : Number(e));
  let firstNumber;
  let result = [];
  for(let i = 0; i < sArray.length; i++){
    if(!isNaN(sArray[i])){
      firstNumber = sArray[i] - i;
      break;
    }
  }
  for(number of sArray) result.push(firstNumber++);
  return s === 'Fizz' ? [3]
         : s === 'Buzz' ? [5]
         : s === 'FizzBuzz' ? [15]
         : s === 'Fizz Buzz'? [9, 10]
         : s === 'Buzz Fizz' ? [5, 6]
         : result;
}
