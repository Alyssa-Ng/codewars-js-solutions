//https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  let stringToNum = numbers.split(' ').map(e => parseInt(e)).sort((a,b) => a - b);
  return `${stringToNum[stringToNum.length -1]} ${stringToNum[0]}`;
}
