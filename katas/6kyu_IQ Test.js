//https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
  let numberArr = numbers.split(' ');
  numberArr.forEach(parseInt);
  let even = [];
  let odd = [];
  for(number of numberArr){
    number % 2 === 0 ? even.push(number) : odd.push(number);
  }
  return even.length === 1 ? numberArr.indexOf(even[0]) + 1 : numberArr.indexOf(odd[0]) + 1;
}
