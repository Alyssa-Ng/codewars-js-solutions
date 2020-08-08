//https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

function numPrimorial(n){
  let result = [];
  let int = 2;
  while(result.length < n){
    if(isPrime(int)) result.push(int);
    int++;
  }
  return result.reduce((a,b) => a * b);
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  var maxFactorNum = Math.sqrt(num);
  for (var i = 2; i <= maxFactorNum; i++) if (num % i === 0) return false;
  return true;
}
