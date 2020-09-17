//https://www.codewars.com/kata/59f38b033640ce9fc700015b

function total(arr){
  let result = 0;
  for(let i = 0; i < arr.length; i++) if(isPrime(i)) result += arr[i];
  return result;
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  var maxFactorNum = Math.sqrt(num);
  for (var i = 2; i <= maxFactorNum; i++) if (num % i === 0) return false;
  return true;
}
