//https://www.codewars.com/kata/5a908da30025e995880000e3

let solve = (a, b) => primeString(a + b).substring(a, a + b);

function primeString(numOfElems) {
  let s = '';
  let i = 1;
  while (s.length < numOfElems) 
    s += isPrime(++i) ? i : '';
  return s;
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  var maxFactorNum = Math.sqrt(num);
  for (var i = 2; i <= maxFactorNum; i++) if (num % i === 0) return false;
  return true;
}
