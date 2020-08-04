//https://www.codewars.com/kata/54d496788776e49e6b00052f

function sumOfDivided(lst) {
  var primeFactors = [];
  var result = {};
  for(let value of lst){
    let n = Math.abs(value);
    var primeNumbers = [];
    for(let i = 2; i < n + 1; i++) if(isPrime(i) && n % i === 0) primeNumbers.push(i);
    primeFactors.push({[value]: primeNumbers});
  }
  for(const array of primeFactors){
    for(const key in array){
      for(let val of array[key]){
        if(result.hasOwnProperty(val)) result[val] += Number(key);
        else Object.assign(result, {[val]: Number(key)});
      }
    }
  }
  return Object.keys(result).map(key =>[Number(key), result[key]]);
}

function isPrime(num) {
    if (num === 0 || num === 1) return false;
    var maxFactorNum = Math.sqrt(num);
    for (var i = 2; i <= maxFactorNum; i++) if (num % i === 0) return false;
    return true;
}
