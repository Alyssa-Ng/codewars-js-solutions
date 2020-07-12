//https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  let valueArr=  value.toString().split('');
  valueArr.forEach(parseInt);
  let result = 0;
  for(val of valueArr){
  result += Math.pow(val, valueArr.length);
  }
  return result === value ? true : false;
}
